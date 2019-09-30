<!-- myapp/src/components/SearchForn.vue-->
<template>
  <v-container>

    <v-row align="center">
      <v-col cols="12" md="3">
        <station-input :value="$store.state.currentSearch.startStation" route-end="start" placeholder="Start:" />
      </v-col>
      <v-col cols="12" md="3">
        <station-input v-model="$store.state.currentSearch.destinationStation" route-end="destination" placeholder="Ziel:" />
      </v-col>
      <v-col cols="12" md="2">
        <date-input v-model="$store.state.currentSearch.date" placeholder="Datum:" />
      </v-col>
      <v-col cols="12" md="2">
        <time-input v-model="$store.state.currentSearch.time" placeholder="Abfahrtszeit:" />
      </v-col>
      <v-col cols="12" md="2">
        <v-btn @click="$store.commit('increment');">Suche starten</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import stationInput from "../components/StationInput";
import dateInput from "../components/DateInput";
import timeInput from "../components/TimeInput";

export default {
  name: "search-form",
  components: {
    stationInput,
    dateInput,
    timeInput
  },
  data() {
    return {
      searchParams: {
        startStation: null,
        destionationStation: null,
        selectedDate: new Date(),
        time: "12:00"
      },
      valid: true,
      query: "",
      items: []
    };
  },
  computed: {
    complete: function() {
      return (
        this.searchParams.startStation &&
        this.searchParams.destionationStation &&
        this.searchParams.selectedDate &&
        this.searchParams.time
      );
    }
  },
  sockets: {},
  methods: {
    startRouteSearch: function() {
      this.$socket.emit("startSearch", this.searchParams);
      this.close();
    }
  }
};
</script>
<style>
</style>
