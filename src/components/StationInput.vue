<template>
  <v-autocomplete hide-details solo background-color="#FFFFFF66" :search-input="stationName" @update:search-input="handleInput" @input="handleSelection" :items="items" item-text="name" item-value="id" :placeholder="placeholder" required ref="ac">
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <!--<v-img :src="require('../assets/vbb-logos/subway.svg')" contain height="24" width="24"></v-img>
                <v-img :src="require('../assets/vbb-logos/suburban.svg')" contain height="24" width="24"></v-img>-->
        <v-list-item-content>
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>

</template>

<script>
import allStations from "vbb-stations";
import autocomplete from "vbb-stations-autocomplete";
import { mapState } from "vuex";

export default {
  name: "station-input",
  data() {
    return {
      query: null,
      items: []
    };
  },
  props: ["value", "placeholder", "routeEnd"],
  computed: {
    ...mapState({
      startStationName: state => state.currentSearch.startStation.name,
      destinationStationName: state =>
        state.currentSearch.destinationStation.name
    }),
    stationName: function() {
      return this.routeEnd === "start"
        ? this.startStationName
        : this.destinationStationName;
    }
  },
  methods: {
    handleInput: async function(val) {
      if (this.query === val) return;
      this.query = val;
      if (val) {
        this.items = await this.stationSearch(val);
      }
    },
    handleSelection: function(val) {
      if (this.routeEnd === "start") {
        this.$store.dispatch("setStartStation", val);
      } else {
        this.$store.dispatch("setDestinationStation", val);
      }
    },
    stationSearch: function(input) {
      if (input.length < 1) {
        return [];
      }

      const results = autocomplete(input, 3, true, true);
      const choices = [];

      for (let result of results) {
        const station = allStations(result.id)[0];
        if (!station) continue;

        choices.push({ id: station.id, name: station.name });
      }

      return Promise.resolve(choices);
    }
  }
};
</script>
<style>
</style>
