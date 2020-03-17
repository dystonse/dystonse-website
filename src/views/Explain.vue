<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="col-sm-12 col-md-8">
            <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
            <h1>Dystonse - wir steigern das Vertrauen in den ÖPNV durch wahrscheinlichkeitsbasierte Routensuche</h1>
            <h2>Das Problem</h2>
            <p>Für die Suche nach der optimalen Route laut Fahrplan gibt es bereits gute digitale Hilfsmittel. Aber wenn der Bus verspätet ist oder die S-Bahn ausfällt, kommt Stress auf, denn die bisherigen Werkzeuge sind wenig hilfreich zum Abwägen der Optionen. Und die unzähligen Alternativrouten und ihre jeweiligen Ungewissheiten sind viel zu komplex, um „im Kopf“ eine gute Entscheidung zu treffen. Wer weiß schon, wie wahrscheinlich es ist, den knappen Anschluss zu bekommen, und wie es am besten weiter geht, wenn man ihn doch verpasst?</p>

            <h2>Die Lösung</h2>
            <p>Dystonse findet Routen im Nahverkehrsnetz (vorerst in Berlin, später auch an anderen Orten), und berechnet schon während der Suche mögliche sowie tatsächliche Verspätungen und Ausfälle mit ein. Die Suche erfolgt über die Website oder später mit Apps. Zu jeder Route gibt es daher nicht nur eine einzelne (optimistische) Ankunftszeit, sondern eine Übersicht, wann man mit welcher Wahrscheinlichkeit ankommen wird. Nach Wunsch können Routen nach Worst-, Average- und Best-Case ausgewählt werden. Künftig soll Dystonse auch während der Reise auf Veränderungen im Verkehr reagieren und in Echtzeit aktuelle Alternativrouten vorschlagen.</p>

            <h2>Der Zwischenstand</h2>
            <p>Dystonse ist aktuell noch ein früher Prototyp, das heißt, aktuell funktioniert noch nicht alles. Was allerdings schon geht:</p>

            <ul>
              <li>Die Karte unter <router-link to="/route">"Routensuche"</router-link> kann gezoomt, gescrollt und gedreht werden</li>
              <li>Die Stationen könen angeklickt werden, um sie als Start oder Ziel auszuwählen</li>
              <li>Stationen können in der Routensuche auch über die Eingabefelder am oberen Rand ausgewählt werden</li>
              <li>Im Bereich <router-link to="/details/roadmap">"Zukünftige Features"</router-link> sind bereits detaillierte Pläne zu finden</li>
              <li>Die eigentliche Suche funktioniert, die Darstellung des Such-Vorgangs und vorallem des Ergebnisses ist aber noch <i>sehr</i> unübersichtlich.</li>
              <li>Die Auswahl von Datum und Uhrzeit ist noch ohne Funktion.</li>
            </ul>

            <h2>Die Förderung</h2>
            <p>Wir haben uns mit Dystonse für eine Förderung durch den <a href="https://prototypefund.de/">Prototype Fund</a> beworben - und <a href="https://prototypefund.de/projects/round-7/">wurden angenommen</a>! 🎉</p>
            <p>Konkret heißt das, dass wir seit Anfang März 2020 vom BMBF gefördert werden (<a href="/imprint">Informationen zur Förderung</a>) Die Förderung gibt uns die Möglichkeit, für sechs Monate viel Arbeitszeit in dieses Projekt zu stecken und viele Komponenten, die wir nur schnell als Proof of Concept zusammen gebastelt hatten, nochmal ordentlich neu zu entwickeln.</p>
            <p>Aktuell sind wir sehr aktiv dabei, diese Erneuerung vorzubereiten. Von diesen Änderungen wird in den nächsten Wochen oder Monaten nur wenig zu sehen sein - dafür tut sich einiges hinter den Kulissen, was <a href="https://github.com/dystonse">auf GitHub</a> und in unserem <a href="https://blog.dystonse.org">Blog</a> verfolgt werden kann.</p>

            <h2>Etwas mehr Hintergrund</h2>
            <p>Was intern bei der Routensuche geschieht, ist derzeit noch schwer nachvollziehbar. Einige Erklärungen kann man allerdings
              <a href="https://twitter.com/LenaSchimmel/status/1165036456634716160">in diesem Twitter-Thread</a> nachlesen.</p>
            <p>Weitere Neueigkeiten twittern wir unter <a href="https://twitter.com/dystonse">@dystonse</a>.</p>
          </v-col>
          <!-- Tweets will not show on firefox due to tracking protection. We could use something like
          https://www.npmjs.com/package/ember-detect-tracking-protection to detect this and only show a message -->
          <v-col class="col-sm-12 col-md-5">
            <Tweet id="1165036472812146688">
              <i>Tweet wird geladen… Eventuell wird dies durch den <a href="https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatenverfolgung-desktop?as=u&utm_source=inproduct">Verbesserten Schutz vor Aktivitätenverfolgung</a> oder ähnliches verhindert.</i>
            </Tweet>
          </v-col>
          <v-col class="col-sm-12 col-md-5">
            <Tweet id="1165392690625818624">
              <i>Tweet wird geladen… Eventuell wird dies durch den <a href="https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatenverfolgung-desktop?as=u&utm_source=inproduct">Verbesserten Schutz vor Aktivitätenverfolgung</a> oder ähnliches verhindert.</i>
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
    Tweet: Tweet
  }
};
</script>
<style lang="scss">
</style>
