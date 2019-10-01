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

            <p>Wir hatten nicht damit gerechnet, dass heute schon jemand hier vorbei schaut. Aktuell funktioniert noch nicht alles. Aber schauen sie sich ruhig schon einmal um.</p>

            <p>Was allerdings schon funktionieren sollte</p>

            <ul>
              <li>Die Karte unter <router-link to="/route">"Routensuche"</router-link> kann gezoomt, gescrollt und gedreht werden</li>
              <li>Die Stationen könen angeklickt werden, um sie als Start oder Ziel auszuwählen</li>
              <li>Stationen können in der Routensuche auch über die Eingabefelder am oberen Rand ausgewählt werden</li>
              <li>Im Bereich <router-link to="/details/roadmap">"Zukünftige Features"</router-link> sind bereits detaillierte Pläne zu finden</li>
            </ul>
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
