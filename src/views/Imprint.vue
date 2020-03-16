<!-- myapp/src/components/Explain.vue-->
<template>
  <div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col class="col-sm-12 col-md-8">
            <h1>Impressum</h1>

            <h2>Angaben gemäß § 5 TMG und Verantwortliche für den Inhalt nach § 55 Abs. 2 RStV:</h2>

            <ul>
              <li>Dystonse - Lena Schimmel und Kirstin Rohwer GbR</li>
              <li>Chemnitzstr. 7</li>
              <li>38118 Braunschweig</li>
              <li>E-Mail: <a href="mailto:mail@dystonse.org">mail@dystonse.org</a></li>
            </ul>

            <h2>Förderung</h2>

            <v-img height="200px" contain position="left" src="BMBF_gefördert vom_deutsch.jpg" />

            Das "Software Sprint-Einzelvorhaben: Dystonse - Wahrscheinlichkeitsbasierte ÖPNV-Routensuche" wird unter dem Förderkennzeichen 01IS19S23 vom BMBF gefördert.

            <h3>Kurzbschreibung des Vorhabens</h3>

            Für die Suche nach der optimalen Route laut Fahrplan gibt es bereits gute digitale Hilfsmittel. Aber wenn der Bus verspätet ist oder die S-Bahn ausfällt, kommt Stress auf, denn die bisherigen Werkzeuge sind wenig hilfreich zum Abwägen der Optionen. Und die unzähligen Alternativrouten und ihre jeweiligen Ungewissheiten sind viel zu komplex, um „im Kopf“ eine gute Entscheidung zu treffen. Diese bisherige Unkalkulierbarkeit macht den ÖPNV für viele unattraktiv – dabei wäre es gut fürs Klima, wenn viel mehr Menschen auf Bus und Bahn umsteigen. Dystonse will das Vertrauen in den ÖPNV steigern, indem die (Un-)Sicherheit der Umstiege transparent gemacht wird und Handlungsoptionen vorgeschlagen werden.

            Dystonse findet Routen im Nahverkehrsnetz (vorerst in Berlin, später auch an anderen Orten), und berechnet schon während der Suche mögliche sowie tatsächliche Verspätungen und Ausfälle mit ein. Die Suche erfolgt über die Website oder später mit Apps. Zu jeder Route gibt es daher nicht nur eine einzelne (optimistische) Ankunftszeit, sondern eine Übersicht, wann man mit welcher Wahrscheinlichkeit ankommen wird. Nach Wunsch können Routen nach Worst-, Average- und Best-Case ausgewählt werden. Künftig soll Dystonse auch während der Reise auf Veränderungen im Verkehr reagieren und in Echtzeit aktuelle Alternativrouten vorschlagen.

            <h2>Haftung für Inhalte</h2>

            <p>Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>

            <h2>Haftung für Links</h2>

            <p>Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Imprint"
};
</script>
<style lang="scss">
</style>
