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
              {{station.name}}
            </v-chip>

          </template>

          <station-popup :station="station" />
        </v-menu>
      </div>

    </MglMarker>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
    </v-snackbar>
    <!-- <v-btn @click="printStuff();">Debug</v-btn> -->
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { mapState } from "vuex";
import stations from "vbb-stations";
import StationPopup from "../components/StationPopup";
// import util from "util";
import { MglMap, MglNavigationControl, MglMarker } from "vue-mapbox";

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
        stops: [
          [6, 0],
          [8, 2],
          [11, 3],
          [13, 5],
          [15, 16]
        ]
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
        stops: [
          [6, 0],
          [9, 4],
          [12, 8],
          [15, 12],
          [17, 25]
        ]
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
        stops: [
          [10, 0],
          [12, 10],
          [15, 18],
          [17, 22]
        ]
      },
      "text-anchor": "bottom",
      "text-justify": "center",
      "text-offset": [0, -1]
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
  // Add an empty source. This will be replaces each time something changes.
  map.addSource("routingMapSource", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] }
  });

  /*
  var geoJsonRoutingBackgroundLayer = {
    id: "routingBackground",
    type: "background",
    paint: {
      "background-color": "#FFFFFF",
      "background-opacity": 0.5
    }
  };
  */

  var geoJsonRoutingLineLayer = {
    id: "routingLines",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-width": {
        base: 1,
        stops: [
          [8, 0],
          [10, 4],
          [12, 7],
          [17, 20]
        ]
      },
      "line-color": [
        "match",
        ["get", "role"],
        "route",
        "#5555DD",
        "#000000" // other
      ],
      "line-opacity": 0.5
    },
    source: "routingMapSource"
  };

  var geoJsonRoutingCircleLayer = {
    id: "routingCircles",
    type: "circle",
    paint: {
      "circle-radius": {
        base: 1.75,
        stops: [
          [6, 0],
          [8, 4],
          [11, 5],
          [13, 7],
          [15, 18]
        ]
      },
      "circle-stroke-width": {
        base: 1,
        stops: [
          [6, 0],
          [9, 2],
          [12, 3],
          [15, 5],
          [17, 7]
        ]
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
        "#666666",
        "closed",
        "#000000",
        "active",
        "#FFFFFF",
        "change",
        "#FFFF00",
        "through",
        "#0000FF",
        /* other */ "#000"
      ],
      "circle-stroke-opacity": [
        "match",
        ["get", "role"],
        "start",
        1,
        "destination",
        1,
        "open",
        1,
        "closed",
        1,
        "active",
        1,
        "change",
        1,
        "through",
        1,
        /* other */ 0
      ]
    },
    source: "routingMapSource"
  };

  // TODO add dynamically
  // map.addLayer(geoJsonRoutingBackgroundLayer);
  map.addLayer(geoJsonRoutingLineLayer);
  map.addLayer(geoJsonRoutingCircleLayer);
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
        stops: [
          [8, 0],
          [10, 2],
          [12, 5],
          [17, 18]
        ]
      }
    },
    source: {
      type: "geojson",
      data: data
    }
  };

  var geoJsonLayer = JSON.parse(JSON.stringify(geoJsonOutlineLayer));
  geoJsonLayer.paint["line-color"] = ["get", "bgColor"];

  geoJsonLayer.paint["line-width"].stops = [
    [8, 0],
    [10, 1],
    [12, 3],
    [17, 10]
  ];
  geoJsonLayer.id = name + "-lines";

  map.addLayer(geoJsonOutlineLayer);
  map.addLayer(geoJsonLayer);
}

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglMarker,
    StationPopup
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
      cardVisible: false,
      buttonColor: "#FF0000",
      photoUrl: null,
      station: {},
      snackbarText: "",
      snackbar: false
    };
  },
  // We use computed data as a workaround to watch for changes in nested state
  computed: {
    ...mapState({
      startStation: state => state.currentSearch.startStation,
      destinationStation: state => state.currentSearch.destinationStation,
      stationRoles: state => state.currentSearch.stationRoles,
      lines: state => state.currentSearch.lines
    }),
    additionalRouteFeatures: function() {
      var ret = [];
      for (var entry of this.stationRoles) {
        var f = this.createStationFeature(entry.station, entry.role);
        if (f) {
          ret.push(f);
        } else {
          // console.log("Unknown station id " + entry.station.name);
        }
      }
      for (var line of this.lines) {
        ret.push({
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: line.points
          },
          properties: {
            role: line.role
          }
        });
      }
      return ret;
    }
  },
  watch: {
    startStation: function(station) {
      this.rebuildRoutingLayer();
    },
    destinationStation: function(station) {
      this.rebuildRoutingLayer();
    },
    additionalRouteFeatures: function() {
      this.rebuildRoutingLayer();
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    this.mapInstance = null; // important: don't store the map instance inside reactive data/state, it will break
  },
  methods: {
    showSnackbar: function(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    mapLoaded: function({ map, component }) {
      let that = this;

      that.mapCanvas = map.getCanvasContainer();

      addLines(map, "suburban");
      addLines(map, "subway");
      addStations(map);
      addRoutingLayer(map);

      this.mapInstance = map;
      this.rebuildRoutingLayer();

      const productColors = {
        S: "#00AB62",
        U: "#0076CB",
        SU: "#00CAC9"
      };

      map.on("mouseenter", "stations", function(e) {
        if (e.features.length === 1 && !that.cardVisible) {
          var feature = e.features[0];
          that.coordinates = feature.geometry.coordinates.slice();
          that.station = stations(feature.properties.id)[0];
          that.buttonColor = productColors[feature.properties.products];
        }
      });

      map.on("mouseleave", "stations", function(e) {
        that.coordinates = [0, 0];
      });

      map.on("click", "stations", function(e) {
        if (e.features.length === 1 && !that.cardVisible) {
          var feature = e.features[0];
          that.coordinates = feature.geometry.coordinates.slice();
          that.station = stations(feature.properties.id)[0];
          that.buttonColor = productColors[feature.properties.products];
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
      features = features.concat(this.additionalRouteFeatures);

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
    },
    printStuff: function() {
      /*
      console.log(this.additionalRouteFeatures);
      console.log(this.$store.state.currentSearch.lines);
      console.log(this.$store.state.currentSearch.stationRoles);
      for (var entry of this.$store.state.currentSearch.stationRoles) {
        console.log(entry.role + " at " + entry.station.name);
      }
      */
    }
  }
};
</script>
