<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="col-sm-12 col-md-8">
            <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            <h1>Huch!</h1>
            <h2>…die Dystonse-Website ist noch nicht ganz fertig :/</h2>

            <p>Wir hatten nicht damit gerechnet, dass heute schon jemand hier vorbei schaut. Aktuell funktioniert noch nicht alles. Aber schauen Sie sich ruhig schon einmal um.</p>

            <p>Was allerdings schon funktionieren sollte</p>

            <ul>
              <li>Die Karte unter <router-link to="/route">"Routensuche"</router-link> kann gezoomt, gescrollt und gedreht werden</li>
              <li>Die Stationen könen angeklickt werden, um sie als Start oder Ziel auszuwählen</li>
              <li>Stationen können in der Routensuche auch über die Eingabefelder am oberen Rand ausgewählt werden</li>
              <li>Im Bereich <router-link to="/details/roadmap">"Zukünftige Features"</router-link> sind bereits detaillierte Pläne zu finden</li>
            </ul>

            <h2>Aber geht die Suche denn jetzt, oder nicht?</h2>
            <p>Jein!</p>

            <p>Hier auf dieser Website geht sie noch nicht. Auf meiner Maschine funktioniert es. Und wie die Ausgaben davon aussehen, kann man
              <a href="https://twitter.com/LenaSchimmel/status/1165036456634716160">in diesem Twitter-Thread</a> nachlesen.</p>
          </v-col>
           <v-col class="col-sm-12 col-md-5">
            <Tweet id="1165036472812146688">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </Tweet>
           </v-col>
          <v-col class="col-sm-12 col-md-5">
            <Tweet id="1165392690625818624">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </Tweet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { Tweet } from "vue-tweet-embed";
export default {
  name: "Explain",
  components: {
    "Tweet": Tweet
  }
};
</script>
<style lang="scss">
</style>
