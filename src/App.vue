<template>
  <v-app id="dystonse">
    <v-navigation-drawer v-model="drawer" clipped color="light-green lighten-4" width="350" app>
      <Navigation />
    </v-navigation-drawer>

    <v-app-bar color="primary" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$router.currentRoute.name }}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <template v-if="this.$router.currentRoute.name == 'Routensuche'">
        <SearchForm v-if="$vuetify.breakpoint.mdAndUp" />
        <v-btn v-if="$vuetify.breakpoint.smAndDown" @click="$store.commit('showSearchDialog')">Route suchen…</v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <station-popup/>

    <v-bottom-sheet persistent :value="logVisible" inset>
      <v-sheet class="text-center">
        <v-toolbar dark color="secondary">
          <v-toolbar-title>Log-Ausgabe</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-btn icon dark @click="$store.commit('hideLog')">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-list dense style="height: 30vh; overflow-y: scroll;">
            <v-list-item v-for="(item, index) in logs" :key="index">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>

    <v-bottom-sheet persistent :value="graphVisible">
      <v-sheet class="text-center">
        <v-toolbar dark color="secondary">
          <v-toolbar-title>Wahrscheinlichkeits-Graph</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-btn icon dark @click="$store.commit('hideGraph')">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <graph/>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>

    <v-footer color="primary" app>
      <span class="white--text">Dystonse ÖPNV-Routensuche - </span>
      <a href="https://github.com/lenaschimmel/dystonse-website" class="white--text mx-1">Fork me on GitHub</a>
      <span class="white--text"> - </span>
      <router-link to="/imprint" class="white--text mx-1">Impressum</router-link>
      <div class="flex-grow-1 text-center">
        <v-btn rounded small color="secondary" dark @click="$store.commit('showLog')" class="mx-4">
          Log-Ausgabe
          <v-icon dark class="mx-2">expand_less</v-icon>
        </v-btn>
        <v-btn rounded small color="secondary" dark @click="$store.commit('showGraph')">
          Graph
          <v-icon dark class="mx-2">expand_less</v-icon>
        </v-btn>
      </div>
      <span class="white--text" v-if="this.$store.state.serverConnected">Server-Status: verbunden</span>
      <span class="error--text" v-if="!this.$store.state.serverConnected">Server-Status: getrennt</span>
    </v-footer>
    <search-dialog v-if="$vuetify.breakpoint.smAndDown" />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import StationPopup from "./components/StationPopup";
import SearchDialog from "./components/SearchDialog";
import SearchForm from "./components/SearchForm";
import Graph from "./components/Graph";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    SearchDialog,
    SearchForm,
    Graph,
    StationPopup,
  },
  data: () => ({
    drawer: null,
    dialog: false
  }),
  computed: {
    ...mapState({
      logs: state => state.currentSearch.logs,
      logVisible: state => state.logVisible,
      graphVisible: state => state.graphVisible,
    })
  },
  sockets: {
    connect() {
      this.$store.commit("setConnectionState", true);
    },
    disconnect() {
      this.$store.commit("setConnectionState", false);
    }
  }
};
</script>
<style lang="scss">
/**
  * Styles for HTML elements
  */

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  font-size: 0.6em;
}

h1 {
  margin-top: 24px;
  margin-bottom: 24px;
}

h2 {
  margin-top: 24px;
  margin-bottom: 24px;
}

h3 {
  margin-top: 24px;
  margin-bottom: 24px;
}

h4 {
  margin-top: 24px;
  margin-bottom: 16px;
}

h5 {
  margin-top: 24px;
  margin-bottom: 16px;
}

h6 {
  margin-top: 24px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 16px;
}
</style>
