<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="zoom" ref="theMap" @load="mapLoaded">
    <MglNavigationControl position="top-right" />
    <MglGeolocateControl position="top-right" />
    <MglMarker :coordinates="coordinates">
      <v-chip slot="marker" color="secondary">
        <v-avatar left color="secondary">
          <v-img :src="require('../assets/vbb-logos/suburban.svg')" contain height="24" width="24" />
        </v-avatar>
        S7
      </v-chip>
    </MglMarker>
    <!-- <MglGeojsonLayer
      :sourceId="geoJsonSource.id"
      :source="geoJsonSource"
      layerId="myLayer"
      :layer="geoJsonLayer"
    /> -->
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker
} from "vue-mapbox";

// Geojson from http://sharemap.org/ilisad/Berlin_U-bahn_future_development#!webgl contains unbuilt tracks

function addStations(map) {
  var data = require("../assets/geo/stations.json");

  /* var image = require('../assets/vbb-logos/suburban.svg');
  map.addImage('cat', image);

  var geoJsonStationLayer = {
    id: "stations",
    type: "symbol",
    layout: {
      "text-field": "name",
      "text-optional": true,
      "icon-image": "station-u"
    },
    paint: {},
    source: {
      type: "geojson",
      data: data
    }
  }; */

  var geoJsonStationLayer = {
    id: "stations",
    type: "circle",
    paint: {
      // make circles larger as the user zooms from z12 to z22
      "circle-radius": {
        base: 1.75,
        stops: [[6, 0], [8, 2], [11, 3], [13, 5], [17, 22]]
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
      "circle-stroke-width": {
        base: 1,
        stops: [[6, 0], [9, 1], [12, 1.5], [15, 2], [17, 5]]
      },
      "circle-stroke-color": "#FFF",
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
      "text-radial-offset": 1,
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
      ],
    },
    source: {
      type: "geojson",
      data: data
    }
  };

  map.addLayer(geoJsonStationLayer);
  map.addLayer(geoJsonStationNamesLayer);
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
        stops: [[8, 0], [10, 2], [12, 5], [17, 18]],
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

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibGVuYXNjaGltbWVsIiwiYSI6ImNqbjdtZnd4dTBhcjQzcHBrc2Vucmw4cG4ifQ.dm7yxrVNP03xCVX41V7l4A", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/lenaschimmel/ck14d55y11s9x1cmu21z1ss1m", // your map style
      center: [13.405, 52.52],
      coordinates: [13.4035, 52.524],
      zoom: 11
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods: {
    mapLoaded: function({ map, component }) {
      addLines(map, "suburban");
      addLines(map, "subway");
      addStations(map);
    }
  }
};
</script>
