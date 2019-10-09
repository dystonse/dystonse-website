<template>
  <v-card>
    <v-img class="white--text" height="130px" max-width="500" :src="photoUrl" v-if="photoUrl != null" gradient="to top, rgba(0, 0, 0, 0.6) 20px, transparent 60px">
      <v-card-title class="align-end fill-height">{{station.name}}</v-card-title>
    </v-img>
    <v-card-title class="align-end fill-height" v-if="photoUrl == null">{{station.name}}</v-card-title>
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
      <station-graph :station="station">

      </station-graph>
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
</template>
<script>
import stationPhotos from "vbb-station-photos";
import ProductImage from "../components/ProductImage";
import StationGraph from "../components/StationGraph";

export default {
  components: {
    ProductImage,
    StationGraph
  },
  data: function() {
    return {};
  },
  props: [
    "station"
  ],
  computed: {
    photoUrl: function() {
      var stationPhotoObject = stationPhotos.small[this.station.id];
      if (stationPhotoObject) {
        var photos = stationPhotoObject[Object.keys(stationPhotoObject)[0]];
        return photos["entrance"];
      }
      return null;
    },
  },
  methods: {
    setStart: function() {
      this.$store.dispatch("setStartStation", this.station.id);
    },
    setDestination: function() {
      this.$store.dispatch("setDestinationStation", this.station.id);
    },
  }
};
</script>
<style scoped>
</style>
