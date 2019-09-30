import Vue from 'vue';
import Vuex from "vuex";
import stations from 'vbb-stations';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    count: 0,
    currentSearch: {
      startStation: {},
      destinationStation: {},
      date: {},
      time: {},
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
  },
  actions: {
    setStartStation(context, stationId) {
      context.commit("setStartStation", stationId);
    },
    setDestinationStation(context, stationId) {
      context.commit("setDestinationStation", stationId);
    },
  }
})
