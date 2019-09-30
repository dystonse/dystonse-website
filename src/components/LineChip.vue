<template>
  <v-chip small :color="color" text-color="#FFFFFF">
    <v-avatar left color="#FFFFFF66">
      <v-img :src="image" contain height="24" width="24" class="flex-grow-0"/>
    </v-avatar>
    {{line}}
  </v-chip>
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
  name: "line-chip",
  data() {
    return {};
  },
  props: ["line", "color", "product"],
  computed: {
    image: function() {
      return imgs[this.product];
    }
  }
};
</script>
<style>
</style>
