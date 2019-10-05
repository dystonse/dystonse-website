<template>
  <v-autocomplete 
    :value="value.id"
    :items="items"
    item-text="name"
    item-value="id"
    :placeholder="placeholder"
    @input="handleSelection"
    @update:search-input="handleInput"
     hide-details solo background-color="#FFFFFF66">
     <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Tippe einen Statiosnamen
          </v-list-item-title>
        </v-list-item>
      </template>
  </v-autocomplete>

</template>

<script>
import allStations from "vbb-stations";
import autocomplete from "vbb-stations-autocomplete";

export default {
  // From the POV of the v-autocomplete, items are objects, but the value / model is always just an id. The id will only be used/kept/shown if it is present within the items.
  name: "station-input",
  data() {
    return {
      loadedItems: [],
    };
  },
  props: ["value", "placeholder"],
  computed: {
    items: function() {
      if (this.loadedItems.filter(v => v.id === this.value).length > 0) {
        return this.loadedItems;
      }

      if (!this.value || !this.value.id) {
        return this.loadedItems;
      }

      var defaultItem = {
        id: this.value.id,
        name: this.value.name,
      }
      return this.loadedItems.concat([defaultItem]);
    },
  },
  methods: {
    handleInput: async function(val) {
      if (this.query === val) return;
      this.query = val;
      if (val) {
        this.loadedItems = await this.stationSearch(val);
      }
    },
    handleSelection: function(val) {
      this.$emit("input", val);
    },
    stationSearch: function(input) {
      if (input.length < 1) {
        return [];
      }

      const results = autocomplete(input, 3, true, true);
      const choices = [];

      for (let result of results) {
        const station = allStations(result.id)[0];
        if (!station) continue;

        choices.push({ id: station.id, name: station.name });
      }

      return Promise.resolve(choices);
    }
  }
};
</script>
<style>
</style>
