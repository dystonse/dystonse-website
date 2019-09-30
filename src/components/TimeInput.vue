<template>
  <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
        :nudge-right="20"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            hide-details
            v-model="time"
            :placeholder="placeholder"
            solo background-color="#FFFFFF66"
            prepend-icon="access_time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker v-model="time" format="24hr" locale="de-de" color="secondary" @input="handleInput">
        </v-time-picker>
      </v-menu>
</template>

<script>
export default {
  name: "time-input",
  data () {
    return {
      menu: false,
      time: null,
    };
  },
  props: ["value", "placeholder"],
  methods: {
    handleInput: function (val) {
      if (val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>
<style>
</style>
