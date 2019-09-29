<template>
  <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
        :nudge-right="20"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :placeholder="placeholder"
            solo background-color="#FFFFFF66"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" :first-day-of-week="1" locale="de-de" color="secondary">
          <v-btn text color="primary" @click="menu = false">Abbrechen</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
</template>

<script>
export default {
  name: "date-input",
  data() {
    return {
      menu: false,
      date: new Date().toISOString().substr(0, 10),
    };
  },
  props: ["value", "placeholder"],
  methods: {
  }
};
</script>
<style>
</style>
