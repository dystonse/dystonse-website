<template>
  <div>
    <v-container>
      <h1>Zukünftig geplante Features in Dystonse</h1>
      <p>Wir bewerben uns aktuell für eine Föderung durch den <a href="https://prototypefund.de/">Prototype Fund</a>, daher ist die Aufteilung dieser Übersicht zeitlich daran orientiert.</p>
      <h2>Defintiv im Förderzeitraum</h2>
      <p> Die folgenden Features sollten auf jeden Fall im Förderzeitraum umsetzbar sein:</p>

      <v-row justify="center">
        <v-col class="col-sm-12 col-md-8">
          <v-expansion-panels>

            <v-expansion-panel>
              <v-expansion-panel-header class="title" color="red">Website mobiltauglich machen</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Die aktuelle Website wurde mit Vue.js und vuetify umgesetzt. Damit ist es prinzipiell möglich, Websites responsive - und somit mobiltauglich - zu machen. Dafür müssen aber noch diverse Details angepasst werden. Auch wenn später native Apps folgen sollen, ist eine mobiltaugliche Website ein naheliegender Schritt: mit wenig zusätzlichem Aufwand wird eine Lösung geschaffen, mit der auch Interessierte Dystonse unterwegs testen können, für die eine Installation eine Hemmschwelle darstellt.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Suche leistungsfähig und fehlerfrei in Rust neu implementieren</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Für diesen ersten Prototyp wurde die serverseitige Suche in JavaScript mittels NodeJS umgesetzt. Dies bot sich an, da die Ausgangsdaten (siehe Open Data) bereits in Form von npm-Paketen vorlagen, und mit JavaScript relativ schnell etwas lauffähiges "zusammen gefrickelt" werden kann. Der Fokus lag darauf, innerhalb wenier Tage etwas vorzeigbares zu haben, und damit zu belegen, dass der Algorithmus 1. prinzipiell umsetzbar ist, 2. brauchbare Ergebnisse liefert und 3. dies innerhalb überschaubarer Zeiten.
                </p>

                <p>
                  Für den realen Einsatz war dieser Code nie gedacht - stattdessen soll eine effiziente, parallelisierbare und gut wartbare Codebasis geschaffen werden. Aktuell Planen wir eine Umsetzung in Rust, weil:
                </p>

                <ul>
                  <li>Rust generell für schnelle Ausführung optimiert ist (native AOT-Compilierung, zero-cost-abstractions, automatische Optimierung mittels LLVM)</li>
                  <li>Erweiterungen existieren, um Rechenintensive Kernfunktionalitäten für aktuelle CPUs zu vektorisieren (hier insbesondere die Multiplikation von Wahrscheinlichkeits-Zeit-Verteilungen, die den Kern des Algorithmus bilden)</li>
                  <li>typsicher ist und generell viele Fehler bereits zur Compile-Zeit auffängt</li>
                  <li>echtes Multithreading unterstützt</li>
                  <li>Kommunikation zwischen Threads und konflikt-freies Teilen von Speicher über Threadgrenzen unterstützt</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">APIs standardisieren, um verschiedene Front- und Backends kompatibel zu machen</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Der neuartige Ansatz mit seinen Wahrscheinlichkeitsverteilungen verlangt zwar aufeinander abgestimmte Front- und Backends - dennoch soll keine abgeschirmte Insellösung entstehen. Mit dem <a href="https://github.com/public-transport/friendly-public-transport-format/">FPTF (Friendly Public Transport Format)</a> bestehen bereits einfache, gut verständliche Schnittstellen für ÖPNV-Software. Soweit möglich, wollen wir alle Komponenten damit kompatibel halten, und die (offene) Spezifikation des FPTF um die Wahrscheinlichkeits-Angaben erweitern.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Native Apps für Android und iOS</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  ÖPNV-Routing-Software wird vor allem unterwegs genutzt - also ist die Bedienbarkeit auf Mobilgeräten unverzichtbar. Im Gegensatz zu einer mobiltauglichen Version dieser Website ist mit deutlich mehr Entwicklungsaufwand zu rechnen - aber auch einer Reihe von Features, die mit Websites nicht denkbar sind.
                </p>
                <p>
                  Eine erste Version der Apps kann eine einfache GUI sein, die fast sämtliche Logik weiterhin an den Server auslagert.
                </p>
                <p>
                  Im späteren Verlauf kann dann versucht werden, die Suchlogik ebenfalls auf dem Mobilgerät auszuführen und damit weniger abhängig von der Internetverbindung zu machen (siehe eigener Punkt weiter unten).
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <h2>Eventuell im Förderzeitraum</h2>

      <v-row justify="center">
        <v-col class="col-sm-12 col-md-8">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header class="title">Ergebnisse einfacher visualisieren</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Die aktuelle Visualisierung der Suchergebnisse erfüllt auch den Zweck, die interne Arbeitsweise offen zu legen und technik-begeisterte Nerds und Power-User anzusprechen. Wir haben aber auch das Ziel, die komplexen Abläufe einer dynamisch optimierten ÖPNV-Reise für weitere Zielgruppen zu erschließen. Dazu braucht es weitere Kompromisse zwischen detaillierter und abstrahierter Darstellung. Wie können wir die Verteilung von möglichen Reisezeiten für Reisende verständlich machen, die nicht darin geübt sind, zweidimensionale Graphen zu lesen? Ab welchem Grad der Vereinfachung hätte Dystonse keinen Mehrwert mehr gegenüber herkömmlichen ÖPNV-Suchen?
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Echzeitdaten integrieren und Suche während der Fahrt stetig updaten</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Dystonse basiert auf Prognosen dessen, mit welcher Wahrscheinlichkeit Fahrzeuge zu verschiedenen Zeitpunkten fahren werden. Diese "unscharfen" Prognosen basieren derzeit nur auf den Zeiten laut Fahrplan, die anhand von Erfahrungswerten mit einer zufälligen Streuung versehen werden.
                </p>
                <p>
                  In einem nächsten Schritt sollen Echtzeitdaten einbezogen werden, so dass im Moment der Routensuche die aktuelle Situation bestmöglich berücksichtigt wird. Daraus können wiederum bessere Prognosen abgeleitet werden. Z.B. zeigen Analysen von Verspätungsdaten, dass ein bereits deutlich verspäteter Bus seltener dazu neigt, die aktuelle Verspätung beizubehalten, dafür aber öfter Zeiten wieder gut macht oder aber seine Pünktlichkeit noch deutlich verschlechtert.
                </p>
                <p>
                  Allerdings sind Prognosen umso ungenauer, je weiter in die Zukunft sie gestellt werden. Daher muss es letztlich das Ziel sein, während der gesamten Reisezeit stets aktuelle Echtzeitdaten in die Berechnung einzubeziehen und das Ergebnis anzupassen. Reisende können dann z.B. benachrichtigt werden, um früher oder später umzusteigen, oder in eine andere Linie als zuvor angegeben.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Verzweigte Routen</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Wie im vorherigen Absatz beschrieben, kann sich die ideale Route während der Fahrt anhand von aktualisierten Echtzeitdaten verändern. Auch wenn im Voraus nicht exakt bekannt ist, wie sich Verspätungen verändern werden, sind die Eventualitäten bereits Teil des Berechnungsmodells. Anstatt also eine einzelne Route zu suchen und nur für diese Zeitverteilungen zu berechnen, könnten "Entscheidungspunkte" schon vorher berechnet werden, also Punkte, an denen dynamisch während der Fahrt entschieden werden muss, wie die Reise am besten forgesetzt werden sollte.
                </p>
                <p>
                  Letztlich wäre es denkbar, schon ab Beginn mehrere solcher Entscheidungsmöglichkeiten in die Gesamtroute und die Abschätzung der Ankunftszeit einzuberechnen. Der Entwicklungs- und Rechenaufwand für die Suche würde dadurch nur geringfügig steigen. Dafür wäre es noch komplexer, das Ergebnis für die Reisenden darzustellen und begreiflich zu machen.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Realistischere Prognosen für den Fahrtverlauf</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Aktuell wird ein sehr einfaches - wenn auch faktenbasiertes - Modell verwendet, um die Verspätungen von Fahrzeugen vorher zu sagen. Uns liegen bereits mehrere Gigabyte an historischen Verspätungsdaten vor, aus denen ein viel detaillierteres Modell erstellt werden könnte, bis hin zu einem neuronalen Netz, das ein Dutzend Faktoren einbezieht.
                </p>
                <p>
                  Wir erhoffen uns aber auch schon von weniger komplexen Ansätzen eine deutliche Verbesserung der Vorhersagen.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-col>
      </v-row>

      <h2>Erst nach dem Förderzeitraum</h2>

      <v-row justify="center">
        <v-col class="col-sm-12 col-md-8">
          <v-expansion-panels>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Offline-Funktionalität in Apps</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Wenn die Suche effizient neu implementiert ist - voraussichtlich in der Sprache Rust - entsteht ein Programmkern, der prinzipiell auch direkt auf Mobilgeräten ausgeführt werden kann. Im Idealfall wäre damit z.B. ein vollständiger Offline-Betrieb möglich (dann natürlich wieder ohne Echtzeitdaten, außer ggf. der eigenen Verspätung im aktuellen Fahrzeug). Eine vollständige Simulation des Verkehrsnetzes (z.B. ganz Berlin oder sogar ganz Deutschland) würde aber wohl mehr Speicherplatz, Rechenleistung und Akku-Kapazität brauchen, als Mobilgeräte bieten können.
                </p>
                <p>
                  Wir wollen daher erproben, ob vor Fahrtbeginn ein vereinfachtes Modell auf das Mobilgerät übertragen werden kann, das nur die relevanten Stationen, Linien und Abfahrtszeiten enthält. Interessant wäre das z.B. für Pendler und andere Menschen, die öfter zwischen den selben Stationen unterwegs sind. Der DB-Navigator enthielt eine solche Funktion bereits ca. 2006, also vor dem Aufkommen von Smartphones in der JavaME-Version.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Echtzeitdaten über schwache Datenverbindungen ermöglichen</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Falls die Mobilanwendung in der Lage ist, eigenständig Routen zu suchen, so würden diese Suchen ebenfalls enorm von Echtzeitdaten profitieren. Während der Fahrt sind dabei nur die Verspätungen von höchstens einem Dutzend Fahrzeugen relevant. Diese Daten können theoretisch auch über extrem schlechte Datenverbindungen erfolgen, die leider gerade bei Zugfahrten oft vorkommen.
                </p>
                <p>
                  Bestehende Navigations-Apps setzen dafür auf TCP/IP-Verbindungen, die prinzipbedingt schlecht bis gar nicht mit schwachen Mobilfunkverbindungen funktionieren. In der Praxis können daber trotz "einem Balken Empfang" oft absolut keine Daten übertragen werden. Wie möchten versuchen, hier mittels UDP-Verbindungen auch über eine minimale Verbindung noch die relevanten Echtzeitdaten zu aktualisieren.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Betrieb außerhalb von Berlin ermöglichen</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Für den ersten Prototypen wurde der Verkehrsraum Berlin gewählt. Dafür sprach:
                </p>
                <ul>
                  <li>leicht verfügbare Fahrplan- und Netzdaten in vielen Formaten</li>
                  <li>Echtzeitdaten</li>
                  <li>Anschauliches Beispiel für eine Metropole mit riesiger Fahrzeuganzahl</li>
                  <li>Ortskenntnisse bei den Entwicklerinnen, sowie die Möglichkeit, ab und zu vor Ort zu testen</li>
                </ul>
                <p>
                  Der Ansatz von Dystonse ist natürlich für viele Regionen außerhalb von Berlin übertragbar, und eigentlich sogar dort noch notwendiger, wo die Takte der Linien weniger eng sind als in Berlin. Wir möchten daher die nötigen Schritte unternehmen, um Dystonse universell einsetzbar zu machen. Dazu gehören z.B. Tools, die Daten in verschiedenen Ausgangsformaten annehmen. Neben FPTF sind auch GTFS und das proprietäre Hafas-Format in Deutschland relevant. Zudem wird eine einheitliche europäische Lösung diskutiert. Freie Software für die Konvertierung zwischen diesen Formaten besteht bereits, so dass hier hoffentlich nur ein paar Versuche und das Aufstellen von best practices nötig sein werden.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Skalierbarkeit</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Die Wahrscheinlichkeits-basierten Routensuchen mit Dystonse werden auch nach allen möglichen Optimierungsschritten noch viel mehr Rechenaufwand erfordern als klassische Routensuchen auf Fahrplanbasis. Bei einer wachsenden Anzahl von Nutzer_innen wird ein einzelner Server zwangsläufig an seine Grenzen stoßen. Während die eigentliche Umsetzung der Skalierbarkeit erst bei Bedarf erfolgt, möchten wir von Beginn an Entscheidungen vermeiden, die eine spätere Skalierung erschweren.
                </p>
                <p>
                  Es besteht auch schon ein grober Plan, wie diese Skalierbarkeit erreicht werden könnte:
                </p>
                <p>
                  (Zeichnung folgt)
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Weitere Verkehrsmittel einbinden</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Aktuell bezieht Dystonse nur S- und U-Bahnen in die Suche ein. Busse, Straßenbahnen und Züge sind derzeit nur deaktiviert, um die Datenmengen und Rechenaufwände in Grenzen zu halten. Sobald eine effizientere Implementierung in z.B. Rust vorliegt, können diese Verkehrsmittel einfach hinzu genommen werden.
                </p>
                <p>
                  Der Algorithmus setzt jedoch nicht voraus, dass alle Verkehrsmittel einem festen Fahrplan folgen müssen. Stattdessen ist er eine gute Basis, um später auch Fußwege, (Anruf-Sammel-)Taxen, (Leih-)Fahrrärer und -Roller einzubeziehen. Auch die unvorhersehbare Verfügbarkeit von Leihfahzeugen lässt sich in das statistische Modell aufnehmen, um eine wirklich umfassende, multi-modale Suche zu realisieren.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header class="title">Analyse-Tool für die Verkehrsplanung</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Zwar wurde Dystonse bisher für die Planung von individuellen Reisen erstellt. Aber auch für Zwecke der Verkehrsplanung könnte es nützlich sein.
                </p>
                <p>
                  Schon bei der individuellen Nutzung ließen sich Trends feststellen: wann und wo häufen sich reale Anfragen, die nur Routen mit großer Unsicherheit und/oder langen Wartezeiten ergeben?
                </p>
                <p>
                  Die Algorithmen von Dystonse ließen sich aber auch gezielt zur Analyse ganzer Verkehrsnetze einsetzen:
                </p>
                <ul>
                  <li>Finden von Schwächen im Fahrplan</li>
                  <li>Erfassung realer Verspätungen und Einschätzung ihres Einflusses auf relevante Reisezeiten</li>
                  <li>Evaluierung von geplanten Fahrplänen</li>
                  <li>Disponierung von Fahrzeugen im konkreten Ausnahmefall</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Roadmap",
  components: {},
  data: function () {
    return {};
  }
};
</script>
<style lang="scss">
</style>
