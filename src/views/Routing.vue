<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="zoom" ref="theMap" @load="mapLoaded">
    <MglNavigationControl position="top-right" />
    <MglMarker :coordinates="coordinates" :offset="[-16,0]" anchor="left">
      <div class="text-center" slot="marker">
        <v-menu v-model="cardVisible" top>
          <template v-slot:activator="{ on }">
            <v-chip pill color="white" class="elevation-5">
              <v-avatar left>
                <v-btn :color="buttonColor" fab x-small v-on="on">
                  <v-icon color="white">menu</v-icon>
                </v-btn>
              </v-avatar>
              {{stationName}}
            </v-chip>

          </template>

          <v-card max-width="344">
            <v-img class="white--text" height="130px" :src="photoUrl" v-if="photoUrl != null" gradient="to top, rgba(0, 0, 0, 0.6) 20px, transparent 60px">
              <v-card-title class="align-end fill-height">{{stationName}}</v-card-title>
            </v-img>
            <v-card-title class="align-end fill-height" v-if="photoUrl == null">{{stationName}}</v-card-title>
            <v-card-text>
              <div>
                <product-image product="suburban" />
                <product-image product="subway" />
                <product-image product="regional" />
                <product-image product="express" />
                <product-image product="bus" />
                <product-image product="tram" />
                <div class="flex-grow-1"></div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="setStart">
                Als Start
              </v-btn>
              <v-btn color="primary" @click="setDestination">
                Als Ziel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>

    </MglMarker>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

    </v-snackbar>
    <v-bottom-sheet v-model="logSheetVisible" inset>
      <template v-slot:activator="{ on }">
        <v-btn color="orange" dark v-on="on">Log anzeigen
        </v-btn>
      </template>
      <v-sheet class="text-center" height="400px">
        <v-list style="max-height: 400px" dense class="overflow-y-auto">
          <v-subheader>LOG-AUSGABE</v-subheader>
          <v-list-item v-for="(item, index) in logs" :key="index">
            {{ item }}
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </MglMap>
</template>

<script>
import stationPhotos from "vbb-station-photos";
import stations from "vbb-stations";
import Mapbox from "mapbox-gl";
import ProductImage from "../components/ProductImage";
import { mapState } from "vuex";
// import util from "util";
import { MglMap, MglNavigationControl, MglMarker } from "vue-mapbox";

var additionalRouteFeatures = [];

// Geojson from http://sharemap.org/ilisad/Berlin_U-bahn_future_development#!webgl contains unbuilt tracks

function addStations(map) {
  var data = require("../assets/geo/stations.json");
  var geoJsonStationLayer = {
    id: "stations",
    type: "circle",
    paint: {
      // make circles larger as the user zooms from z12 to z22
      "circle-radius": {
        base: 1.75,
        stops: [[6, 0], [8, 2], [11, 3], [13, 5], [15, 16]]
      },
      // color circles by ethnicity, using a match expression
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      "circle-color": [
        "match",
        ["get", "products"],
        "S",
        "#00AB62",
        "U",
        "#0076CB",
        "SU",
        "#00CAC9",
        /* other */ "#FFF"
      ],
      /* [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        20,
        10
      ], */

      "circle-stroke-width": {
        base: 1,
        stops: [[6, 0], [9, 4], [12, 8], [15, 12], [17, 25]]
      },
      "circle-stroke-color": "transparent"
    },
    source: {
      type: "geojson",
      data: data
    }
  };

  var geoJsonStationNamesLayer = {
    id: "stations-text",
    type: "symbol",
    layout: {
      "text-field": ["get", "name"],
      "text-size": {
        base: 1,
        stops: [[10, 0], [12, 10], [15, 18], [17, 22]]
      },
      "text-anchor": "bottom",
      "text-justify": "center",
      "text-offset": [0, -1],
    },
    paint: {
      "text-halo-color": "#FFF",
      "text-halo-width": 3,
      "text-halo-blur": 2,
      "text-color": [
        "match",
        ["get", "products"],
        "S",
        "#007241",
        "U",
        "#005089",
        "SU",
        "#008988",
        /* other */ "#000"
      ]
    },
    source: {
      type: "geojson",
      data: data
    }
  };

  map.addLayer(geoJsonStationLayer);
  map.addLayer(geoJsonStationNamesLayer);
}

function addRoutingLayer(map) {
  var geoJsonRoutingLayer = {
    id: "routing",
    type: "circle",
    paint: {
      "circle-radius": {
        base: 1.75,
        stops: [[6, 0], [8, 4], [11, 5], [13, 7], [15, 18]]
      },
      "circle-stroke-width": {
        base: 1,
        stops: [[6, 0], [9, 1], [12, 2], [15, 3], [17, 4]]
      },
      "circle-color": "transparent",
      "circle-stroke-color": [
        "match",
        ["get", "role"],
        "start",
        "#FF0000",
        "destination",
        "#00FF00",
        "open",
        "#0000FF",
        "closed",
        "#000000",
        "active",
        "#FFFFFF",
        "change",
        "#FFFF00",
        "through",
        "#AAAA00",
        /* other */ "#000"
      ]
    },
    source: "routingMapSource"
  };

  // Add an empty source. This will be replaces each time something changes.
  map.addSource("routingMapSource", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  });

  map.addLayer(geoJsonRoutingLayer);
}

function addLines(map, name) {
  var data = require("../assets/geo/" + name + "-lines.json");

  var geoJsonOutlineLayer = {
    id: name + "-outlines",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": name === "suburban" ? "#000000" : "#FFFFFF",
      "line-width": {
        base: 1,
        stops: [[8, 0], [10, 2], [12, 5], [17, 18]]
      }
    },
    source: {
      type: "geojson",
      data: data
    }
  };

  var geoJsonLayer = JSON.parse(JSON.stringify(geoJsonOutlineLayer));
  geoJsonLayer.paint["line-color"] = ["get", "bgColor"];

  geoJsonLayer.paint["line-width"].stops = [[8, 0], [10, 1], [12, 3], [17, 10]];
  geoJsonLayer.id = name + "-lines";

  map.addLayer(geoJsonOutlineLayer);
  map.addLayer(geoJsonLayer);
}

function getPhotoFor(id) {
  var station = stationPhotos.small[id];
  if (station) {
    var photos = station[Object.keys(station)[0]];
    return photos["entrance"];
  }
  return null;
}

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglMarker,
    ProductImage
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibGVuYXNjaGltbWVsIiwiYSI6ImNqbjdtZnd4dTBhcjQzcHBrc2Vucmw4cG4ifQ.dm7yxrVNP03xCVX41V7l4A", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/lenaschimmel/ck14d55y11s9x1cmu21z1ss1m", // your map style
      center: [13.405, 52.52],
      coordinates: [0, 0],
      zoom: 11,
      hoveredStateId: null,
      mapCanvas: null,
      stationName: "",
      cardVisible: false,
      buttonColor: "#FF0000",
      photoUrl: null,
      station: {},
      snackbarText: "",
      snackbar: false,
      logSheetVisible: false
    };
  },
  // We use computed data as a workaround to watch for changes in nested state
  computed: {
    ...mapState({
      startStation: state => state.currentSearch.startStation,
      destinationStation: state => state.currentSearch.destinationStation,
      logs: state => state.currentSearch.logs
    })
  },
  watch: {
    startStation: function(station) {
      this.rebuildRoutingLayer();
    },
    destinationStation: function(station) {
      this.rebuildRoutingLayer();
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    this.mapInstance = null; // important: don't store the map instance inside reactive data/state, it will break
  },
  sockets: {
    setrole: function(payload) {
      var station = stations(payload.stationid)[0];
      var f = this.createStationFeature(station, payload.role);
      // console.log("set role " + payload.role + " for " + station.name);
      if (f) {
        additionalRouteFeatures.push(f);
        this.rebuildRoutingLayer();
      }
    }
  },
  methods: {
    showSnackbar: function(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    setStart: function() {
      this.$store.dispatch("setStartStation", this.station.id);
    },
    setDestination: function() {
      this.$store.dispatch("setDestinationStation", this.station.id);
    },
    mapLoaded: function({ map, component }) {
      let that = this;

      that.mapCanvas = map.getCanvasContainer();

      addLines(map, "suburban");
      addLines(map, "subway");
      addStations(map);
      addRoutingLayer(map);

      const productColors = {
        S: "#00AB62",
        U: "#0076CB",
        SU: "#00CAC9"
      };

      map.on("mouseenter", "stations", function(e) {
        if (e.features.length === 1 && !that.cardVisible) {
          var feature = e.features[0];
          that.coordinates = feature.geometry.coordinates.slice();
          that.stationName = feature.properties.name;
          that.station = {
            id: feature.properties.id,
            name: feature.properties.name
          };
          that.buttonColor = productColors[feature.properties.products];
          that.photoUrl = getPhotoFor(feature.properties.id);
        }
      });

      map.on("mouseleave", "stations", function(e) {
        that.coordinates = [0, 0];
      });

      map.on("click", "stations", function(e) {
        if (e.features.length === 1 && !that.cardVisible) {
          var feature = e.features[0];
          that.coordinates = feature.geometry.coordinates.slice();
          that.stationName = feature.properties.name;
          that.station = {
            id: feature.properties.id,
            name: feature.properties.name
          };
          that.buttonColor = productColors[feature.properties.products];
          that.photoUrl = getPhotoFor(feature.properties.id);
          // that.cardVisible = true;
        }
      });

      this.mapInstance = map;
    },
    rebuildRoutingLayer: function() {
      var features = [];

      var f1 = this.createStationFeature(
        this.$store.state.currentSearch.startStation,
        "start"
      );
      var f2 = this.createStationFeature(
        this.$store.state.currentSearch.destinationStation,
        "destination"
      );
      if (f1) {
        features.push(f1);
      }
      if (f2) {
        features.push(f2);
      }
      features = features.concat(additionalRouteFeatures);
      this.mapInstance
        .getSource("routingMapSource")
        .setData({ type: "FeatureCollection", features: features });
    },
    createStationFeature: function(station, role) {
      if (station == null || station.location == null) {
        return null;
      }
      return {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [station.location.longitude, station.location.latitude]
        },
        properties: {
          name: station.name,
          id: station.id,
          products: station.product,
          role: role
        }
      };
    }
  }
};
</script>
