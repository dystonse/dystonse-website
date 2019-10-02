<!-- myapp/src/components/SearchDialog.vue-->
<template>
  <v-dialog v-model="searchDialogVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$store.commit('hideSearchDialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Route suchen</v-toolbar-title>
        <div class="flex-grow-1"></div>
      </v-toolbar>
      <search-form/>
    </v-card>
  </v-dialog>
</template>

<script>
import SearchForm from "../components/SearchForm";
import { mapState } from "vuex";

export default {
  name: "search-dialog",
  components: {
    SearchForm,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      searchDialogVisible: state => state.searchDialogVisible,
    }),
  },
};
</script>
<style>
</style>
