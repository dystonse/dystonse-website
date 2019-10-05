<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col class="col-sm-12 col-md-8">
          <h1>Der Algorithmus, der Dystonse ermöglicht</h1>

          <p class="font-weight-medium">Ganz kurz gesagt: Dystonse ist eine A*-Routensuche mit Wahrscheinlicheitsverteilungen als Kostenfunktion. Aber was heißt das, und warum ist das gut?</p>

          <h2>Dystonse jetzt vs. Dystonse in Zukunft</h2>
            <p>
          Zwar haben wir hier schon einen lauffähigen Prototypen, aber er funktioniert nicht in jeder Hinsicht so, wie Dystonse das später einmal tun soll. Wir müssen also zwischen Ist- und Soll-Zustand unterscheiden. Natürlich gibt es auch Gemeinsamkeiten.</p>

          <h2>Grundlagen der Routensuche</h2>
          <p>Die meisten heute eingesetzten Routensuchen basieren auf dem A*-Algorithmus von 1968, der wiederum auf dem Dijkstra-Algorithmus von 1959 aufbaut. Auch Dystonse ist im Kern ein A*-Algorithmus.</p>
          
          <p>Um zu verstehen, wie Dystonse funktioniert, und was daran neuartig ist, ist also ein grundlegendes Verständnis von A* nötig. Für alle, die therorethisch früher schon mal mal wussten, wie A* funktioniert, geben wir im Folgenden eine kurze Auffrischung. </p>

          <v-alert color="warning" dark icon="ondemand_video" border="left" prominent>
            Wer hingegen gar kein Vorwissen zu Suchalgorithmen hat… Da müssen wir uns noch was überlegen. Vielleicht verlinken wir ein passendes Youtube-Video?
          </v-alert>

          <p>Was die Erklärung der Grundlagen angeht…</p>

          <v-alert color="error" dark icon="departure_board" border="left" prominent>
            Sehr geehrte Fahrgäste, die Ankunft dieses Textabschnittes verzögert sich wegen Bauarbeiten auf unbestimmte Zeit…
          </v-alert>

          <h3>Absolute Zeiten, dynamische Kosten</h3>
          <p>Während viele Beschreibungen von A* als Kostenfunktion relative Zeiten annehmen ("bis zum Knoten D braucht man auf dem kürzesten Weg 17 Minuten") rechnet Dystonse, wie auch viele andere praktische Anwendungen, mit absoluten Zeitpunkten ("am Knoten D kommt man auf dem kürzesten Weg um 12:17 Uhr an"). Das ändert zunächst gar nichts daran, wie der Algorithmus funktioniert. Aber es ist die Vorbedingung für die nächste Erweiterung:</p>

          <p>Im klassischen A* sind die Fahrzeiten zwischen zwei Knoten, also die sogenannten Kantengewichte, konstant. Eine Fahrt vom Knoten D zum benachtbarten Knoten E dauert z.B. steta 7 Minuten. In einem idealen getakteten / Fahrplanbasierten Verkehrsnetz  ohne Verspätungen mag zwar die reine Fahrzeit immer gleich sein, aber zu den Kosten gehört auch die Wartezeit bis zur Abfahrt. Die Gesamtkosten für eine Kante hängen also von der Ankunftszeit ab, man sagt: sie sind dynamisch. Daher das "Dy" am Anfang von "Dystonse".</p>

          <p>Dynamamische Kantengewichte sind also nichts neues, sondern etablierter Teil jeder Routensuche im ÖPNV. Früher basierte diese "Dynamik" nur auf dem Fahrplan, der sich ja nur selten ändert. Neuere Systeme beziehen auch Echtzeitdaten zur Verspätung mit ein, sozusagen eine "dynamischere Dynamik". Dabei gibt es verschiedene Ansätze:</p>

          <ul>
            <li>Entweder die eigentliche Suche basiert nur auf dem Fahrplan, und das Endergebnis wird nachträglich mit den Echtzeitdaten abgeglichen. So erhalten die Fahrgäste oft einen Routenvorschlag zusammen mit dem Hinweis, dass die vorgeschlagene Route aufgrund der aktuellen Verspätung gar nicht funktionieren wird.</li>
            <li>Oder aber, die aktuelle Verspätung ersetzt quasi die geplante Abfahrszeit, und die Suche basiert einfach auf diesen "neuen Fakten".</li>
          </ul>

          <p>In beiden Fällen wird zwar anerkannt, dass in der Vergangenheit nicht alles nach Plan gefahren ist, aber gleichzeitig so geplant, als gäbe es eine definitive Zukunft - also ein deterministisches Verfahren.</p>

          <h3>Wahrscheinlicheitsverteilung statt fester Zeit</h3>
          Dystonse arbeitet stochastisch - daher der 3. und 4. Buchstabe des Namens. Konkret heißt das, dass bei sämtlichen Zeiten keine festen Zeitspannen oder Zeitpunkte verwendet werden, sondern Wahrscheinlicheitsverteilungen die über eine Zeitspanne betrachtet werden.

          Auch das lässt sich verschieden komplex angehen, beginnend bei der stärksten Vereinfachung:

          <ul>
            <li>Feste Zeit laut Fahrplan: Abfahrt um 12:00</li>
            <li>Feste Zeit mit Verspätung: Abfahrt um 12:00 + 7 Minuten, also um 12:07</li>
            <li>Zeitpunkt mit Abweichungs-Spanne: Abfahrt um 12:07 ± 3 Minuten</li>
            <li>Zeitpunkt mit Standardabweichung: Abfahrt um 12:07, σ = 2,82</li>
            <li>Annäherung der Verteilung durch eine beliebige Funktion: z.B. eine linare Gleichung 4. Grades</li>
            <li>Charakterisierung der Verteilung durch mäßig viele, verschiedenartige, statistische Kennwerte: z.B. Median, Mittelwert, Extremwerte, Quartile, etc.</li>
            <li>Charakterisierung der Verteilung durch eine große Anzahl gleichartiger statistischer Kennwerte: z.B. alle 100 Perzentile</li>
          </ul>

          <p>Wir haben uns bei Dystonse für die letzte Variante entschieden. Viele reale Verteilungen lassen sich gut durch statistische Kennwerte beschreiben bzw. durch eine Normalverteilung abbilden, aber Abfahrzszeiten im ÖPNV gehören nicht dazu.</p>

          <h3>Verschiedene Darstellungen</h3>
          <p>Bei der Erklärung von Dystonse und bei der Darstellung der Ergebnisse verwenden wir zwei verschiedene Arten von Diagrammen: die Wahrscheinlicheitsverteilung und die kumulierte Verteilungsfunktion.</p>

          <p>...</p>

          <h3>Vergleichbarbeit von Wahrscheinlicheitsverteilungen</h3>
          <p>Wie weiter oben beschrieben, werden bei Dystonse alle Zeitangaben durch Verteilungen ersetzt. In vielerlei Hinsicht ändert dies nichts am A*-Algorithmus. Es gibt allerdings zwei Stellen, an denen bei A* Zeitwerte verglichen werden müssen:</p>

          <ul>
            <li>Für jeden Knoten wird der günstigste Weg dorthin gespeichert, wozu geprüft werden muss, ob ein neuer gefundener Weg günstiger ist als ein anderer</li>
            <li>In jeder Iteration des Algorithmus wird als nächstes der Knoten mit den geringsten geschätzten Kosten untersucht</li>
          </ul>

          <p>In beiden Fällen müssen zwei oder mehr Werte vergleichen werden - aber von zwei Wahrscheinlicheitsverteilungen ist nicht immer eine strikt "kleiner" oder "größer" als die andere. Derzeit greifen wir hier auf den Median der jeweiligen Verteilung zurück, um einen konkreten Zeitpunkt zum Vergleich zu haben. Alternativ können wir auch ein bestimmtes anderes Perzentil verwenden, z.B. das für 95% um eine Art Worst-Case-Analyse zu machen.</p>

          <v-alert color="secondary" dark icon="more_horiz" border="left" prominent>
            Dies waren nur einige Grundlagen. In Kürze werden wir den Text um verständliche Grafiken erweitern.
          </v-alert>

          <h2>Details des aktuellen Algorithmus</h2>

          <h2>Zukünftige Funktionsweise des Algorithmus</h2>
          <p>In einer späteren Version von Dystonse sollen diverse Aspekte anders gehandhabt werden:</p>

          <ul>
            <li>Es wird nicht nur eine Verbindung ermittelt, sondern mehrere Varianten vorgeschlagen</li>
            <li>Innerhalb einer Variante sollen alterntive Wege betrachtet werden. Es ergibt sich damit quasi ein verzeigter Baum von Routen, zwischen denen je nach Echtzeitlage entschieden werden kann</li>
            <li>Die Berechnung der Prognosen für einzelne Fahrzeuge und die Routensuche sollen voneinander getrennt werden</li>
            <li>usw.</li>
          </ul>

          <p>Viele weitere Pläne, die teilweise auch den eigntlichen Algorithmus betreffen, sind auf der Seite <router-link to="/details/roadmap">"Roadmap"</router-link> aufgelistet.</p>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Explain"
};
</script>
<style lang="scss">
</style>
