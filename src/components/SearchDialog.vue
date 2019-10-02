<!-- myapp/src/components/SearchDialog.vue-->
<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Route suchen</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn disabled dark text @click="dialog = false">Suche starten</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <search-form/>
    </v-card>
  </v-dialog>
</template>

<script>
import SearchForm from "../components/SearchForm";

export default {
  name: "search-dialog",
  components: {
    SearchForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style>
</style>
