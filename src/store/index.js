import Vue from 'vue';
import Vuex from "vuex";
import stations from 'vbb-stations';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0,
    serverConnected: false,
    currentSearch: {
      state: "new",
      startStation: {},
      destinationStation: {},
      date: new Date("2019-09-26T13:15:34.045Z"),
      time: "12:00",
      logs: ["Log-Ausgaben erscheinen hier, sobald die Suche gestartet wurde."],
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setStartStation(state, stationId) {
      state.currentSearch.startStation = stations(stationId)[0];
    },
    setDestinationStation(state, stationId) {
      state.currentSearch.destinationStation = stations(stationId)[0];
    },
    setSearchState(state, searchState) {
      state.currentSearch.state = searchState;
    },
    setConnectionState(state, connectionState) {
      state.serverConnected = connectionState;
    },
    SOCKET_message(state, message) {
      state.currentSearch.logs.push(message);
    }
  },
  actions: {
    setStartStation(context, stationId) {
      context.commit("setStartStation", stationId);
    },
    setDestinationStation(context, stationId) {
      context.commit("setDestinationStation", stationId);
    },
    startSearch(context) {
      if (!context.state.currentSearch.startStation.id) { return; }
      if (!context.state.currentSearch.destinationStation.id) { return; }

      context.commit("setSearchState", "running");
      this._vm.$socket.emit("startSearch", context.state.currentSearch);
    },
  }
})
