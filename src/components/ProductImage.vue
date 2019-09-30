<template>
  <v-img :src="image" class="d-inline-flex mx-1" contain height="24" width="24" />
</template>
<script>
const imgs = {
  suburban: require("../assets/vbb-logos/suburban.svg"),
  subway: require("../assets/vbb-logos/subway.svg"),
  bus: require("../assets/vbb-logos/bus.svg"),
  regional: require("../assets/vbb-logos/regional.svg"),
  express: require("../assets/vbb-logos/express.svg"),
  tram: require("../assets/vbb-logos/tram.svg")
};

export default {
  name: "product-image",
  data() {
    return {};
  },
  props: ["product"],
  computed: {
    image: function() {
      return imgs[this.product];
    }
  }
};
</script>
<style>
</style>
