<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="col-sm-11 col-lg-8">
            <h1>Die lange, steinige Vorgeschichte von Dystonse</h1>

            <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item icon="departure_board" large icon-color="white">
                <span slot="opposite">1995 - 2004</span>
                <v-card class="elevation-2" color="primary">
                  <v-card-text v-if="$vuetify.breakpoint.smAndDown"><i>1995 - 2004</i></v-card-text>
                  <v-card-title class="headline">Bus fahren als tägliches<br/>Abenteuer</v-card-title>
                  <v-card-text>
                    <p>
                    9 Jahre lang ist Lena jeden Tag mit dem Bus 30 Minuten zur Schule und 30 Minuten wieder zurück gefahren. Die Direkt&shy;ver&shy;bin&shy;dung von Tür zu Tür war naheliegend, aber meist völlig überfüllt und verspätet, so dass sie über die Jahre viele weniger offensichtliche Routen ausprobierte. Diese Strategie zu perfektionieren brauchte viele Jahre Optimierung. Wenn es du nur einfacher ginge… 
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item icon="gps_fixed" large icon-color="white" color="#2EA900">
                <span slot="opposite">2011 - 2014</span>
                <v-card class="elevation-2" color="#2EA900">
                  <v-card-text class="white--text" v-if="$vuetify.breakpoint.smAndDown"><i>2011 - 2014</i></v-card-text>
                  <v-card-title class="headline white--text">Greenmobile Innovations UG</v-card-title>
                  <v-card-text class="white--text">
                    <b>Wo ist mein Bus oder so?</b> - Mit diesem Slogan gründeten wir 2011 ein Unternehmen, das die Nutzung des Nahverkehrs re&shy;vo&shy;lutionieren sollte. Bei der Beschäftigung mit Echtzeitdaten wurde klar, dass man damit viel mehr machen könnte, als einfach nur aktuelle Verspätungen anzeigen oder Positionen auf Karten zu visualisieren. Hier entstand auch die Grundidee zu <i>Dystonse</i> Leider hatten die Verkehrsbetriebe wenig Interesse an einer Kooperation, und Open Data war damals noch nicht in der Branche angekommen.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item icon="menu_book" large icon-color="black" color="amber lighten-4">
                <span slot="opposite">2015 - 2018</span>
                <v-card class="elevation-2" color="amber lighten-4">
                  <v-card-text v-if="$vuetify.breakpoint.smAndDown"><i>2015 - 2018</i></v-card-text>
                  <v-card-title class="headline">Masterarbeit?</v-card-title>
                  <v-card-text>
                    In dieser Zeit hat Lena versucht, ihr Informatikstudium abzuschließen und dabei einen Rahmen für die Umsetzung <i>Dystonse</i> zu finden. Es gab sogar schon Interesse beim <acronym title="Deutsches Zentrum für Luft- und Raumfahrt">DLR</acronym>, den wahrscheinlichkeitsbasierten Ansatz von <i>Dystonse</i> in ein Forschungsprojekt einzubetten, aber letztlich scheiterten mehrere Anläufe, dies zum Thema einer Abschlussarbeit zu machen, noch bevor die eigentliche Umsetzung begonnen hatte. Aus dieser Zeit stammen die (überwiegend leeren) Github-Repositories und viele Notizen und Überlegungen.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item icon="lens" large icon-color="#009CD1" color="#FF2F8F">
                <span slot="opposite">2019</span>
                <v-card class="elevation-2" color="#FF2F8F">
                  <v-card-text class="white--text" v-if="$vuetify.breakpoint.smAndDown"><i>2010</i></v-card-text>
                  <v-card-title class="headline white--text">Prototyp(e Fund)</v-card-title>
                  <v-card-text class="white--text">
                    <b>Einfach mal machen!</b> - auch ohne, dass ein Unternehmen oder eine Universität daran beteiligt ist. Im August entstand in nur drei Tagen ein benutzbarer Prototyp des <i>Dystonse</i>-Algorithmus, und Ende September in ebenso kurzer Zeit diese Website, um die Routensuche benutzbar zu machen. Damit haben wir uns nun beim <a class="black--text" href="https://prototypefund.de/">Prototype Fund</a> beworben, und hoffen, das Projekt damit noch ein ganzes Stück weiter bringen zu können.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
               <v-timeline-item icon="more_vert" icon-color="white" color="#DDDDDD">
                
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
