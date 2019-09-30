<template>
  <v-app id="dystonse">
    <v-navigation-drawer v-model="drawer" clipped color="light-green lighten-4" width="350" app>
      <Navigation />
    </v-navigation-drawer>

    <v-app-bar color="primary" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.$router.currentRoute.name }}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <template v-if="this.$router.currentRoute.name == 'Routing'">
        <SearchForm v-if="$vuetify.breakpoint.mdAndUp" />
        <v-btn v-if="$vuetify.breakpoint.smAndDown">Route suchen…</v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">Dystonse ÖPNV-Routensuche - </span>
      <a href="https://github.com/" class="white--text mx-1">Fork me on GitHub</a>
      <div class="flex-grow-1"></div>
      <span class="white--text" v-if="this.$store.state.serverConnected">Server-Status: verbunden</span>
      <span class="error--text" v-if="!this.$store.state.serverConnected">Server-Status: getrennt</span>
    </v-footer>
    <search-dialog v-if="$vuetify.breakpoint.smAndDown"/>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import SearchDialog from "./components/SearchDialog";
import SearchForm from "./components/SearchForm";

export default {
  name: "App",
  components: {
    Navigation,
    SearchDialog,
    SearchForm,
  },
  data: () => ({
    drawer: null,
    dialog: false,
  }),
  sockets: {
    connect() {
      this.$store.commit("setConnectionState", true);
    },
    disconnect() {
      this.$store.commit("setConnectionState", false);
    },
  },
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
