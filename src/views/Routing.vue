<template>
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="zoom">
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
  }
};
</script>
