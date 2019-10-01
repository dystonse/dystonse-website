<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="col-sm-12 col-md-8">
            <h1>Die langjährige Vorgeschichte von Dystonse</h1>

            <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item>
                <span slot="opposite">2017</span>
                <v-card class="elevation-2">
                  <v-card-title class="headline">Masterarbeit?</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <span slot="opposite">2019</span>
                <v-card class="elevation-2">
                  <v-card-title class="headline">Neustart</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Explain"
};
</script>
<style lang="scss">
</style>
