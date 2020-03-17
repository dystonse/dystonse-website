<!-- myapp/src/components/SearchForn.vue-->
<template>
  <v-container>

    <v-row align="center">
      <v-col cols="12" md="3">
        <station-input v-model="startStation" placeholder="Start:" />
      </v-col>
      <v-col cols="12" md="3">
        <station-input v-model="destinationStation" placeholder="Ziel:" />
      </v-col>
      <v-col cols="12" md="2">
        <date-input v-model="$store.state.currentSearch.date" placeholder="Datum:" />
      </v-col>
      <v-col cols="12" md="2">
        <time-input v-model="$store.state.currentSearch.time" placeholder="Abfahrtszeit:" />
      </v-col>
      <v-col cols="12" md="2" class="text-end">
        <v-btn @click="$store.dispatch('startSearch'); $store.commit('hideSearchDialog');" color="secondary">Suche starten</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import stationInput from "../components/StationInput";
import dateInput from "../components/DateInput";
import timeInput from "../components/TimeInput";
import { mapState } from "vuex";

export default {
  name: "search-form",
  components: {
    stationInput,
    dateInput,
    timeInput
  },
  data() {
    return {};
  },
  computed: {
    complete: function() {
      return (
        this.currentSearch.startStation &&
        this.currentSearch.destionationStation &&
        this.currentSearch.date &&
        this.currentSearch.time
      );
    },
    ...mapState({
      currentSearch: state => state.currentSearch
    }),
    startStation: {
      get() {
        return this.currentSearch.startStation;
      },
      set(stationId) {
        this.$store.commit("setStartStation", stationId);
      }
    },
    destinationStation: {
      get() {
        return this.currentSearch.destinationStation;
      },
      set(stationId) {
        this.$store.commit("setDestinationStation", stationId);
      }
    }
  },
  methods: {}
};
</script>
<style>
</style>
