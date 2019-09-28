<template>
  <v-app id="dystonse">
    <v-navigation-drawer v-model="drawer" clipped color="light-green lighten-4" width="350" app>
      <Navigation />
    </v-navigation-drawer>

    <v-app-bar color="primary" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dystonse</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
  data: () => ({
    drawer: null,
  })
};
</script>
<style lang="scss">
  /**
  * Styles for HTML elements
  */

  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {
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
