<!-- myapp/src/components/SearchDialog.vue-->
<template>
  <v-container>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <station-input v-model="searchParams.startStation" placeholder="Start:"/>
        </v-col>
        <v-col cols="12" md="6">
          <station-input v-model="searchParams.destionationStation" placeholder="Ziel:"/>
        </v-col>
        <v-col cols="12" md="6">
          <date-input v-model="searchParams.selectedDate" placeholder="Datum:"/>
        </v-col>
         <v-col cols="12" md="6">
          <time-input v-model="searchParams.time" placeholder="Abfahrtszeit:"/>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import stationInput from "../components/StationInput";
import dateInput from "../components/DateInput";
import timeInput from "../components/TimeInput";

export default {
  name: "search-dialog",
  components: {
    stationInput,
    dateInput,
    timeInput,
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
