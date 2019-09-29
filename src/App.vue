<template>
  <v-app id="dystonse">
    <v-navigation-drawer v-model="drawer" clipped color="light-green lighten-4" width="350" app>
      <Navigation />
    </v-navigation-drawer>

    <v-app-bar color="primary" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-layout>
        <v-row align="center">
          <v-column>
            <v-img :src="require('./assets/logo-sw.png')" contain height="48" width="128"></v-img>
          </v-column>
          <v-column>
            <v-toolbar-title>{{ this.$router.currentRoute.name }}</v-toolbar-title>
          </v-column>
        </v-row>
      </v-layout>
      <div class="flex-grow-1"></div>

      <v-dialog v-if="this.$router.currentRoute.name == 'Routing'" v-model="dialog" max-width="600px" color="primary">
        <template v-slot:activator="{ on }">
          <v-btn color="black" outlined v-on="on">
            Route suchen…
          </v-btn>
        </template>

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Routen-Optionen</v-toolbar-title>

          </v-toolbar>

          <v-card-text>
            <SearchDialog />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" text @click="dialog = false">
              Abbrechen
            </v-btn>
            <v-btn color="success" text @click="dialog = false">
              Suchen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--
      <template v-if="this.$router.currentRoute.name == 'Routing'" #extension>
        <SearchDialog />
      </template>-->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import SearchDialog from "./components/SearchDialog";

export default {
  name: "App",
  components: {
    Navigation,
    SearchDialog
  },
  data: () => ({
    drawer: null,
    dialog: false
  })
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
