<template>
  <v-container>
    <v-list>

       <v-list-item to="/about">
        <v-list-item-action>
          <v-icon>info</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Über Dystonse</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/route">
        <v-list-item-action>
          <v-icon>directions_transit</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Routensuche</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-subheader>Hintergrundinfos</v-subheader>

      <v-list-item to="/details/history">
        <v-list-item-action>
          <v-icon>history</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Vorgeschichte</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/details/roadmap">
        <v-list-item-action>
          <v-icon>update</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Zukünftige Features</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

  <v-list-item to="/details/algorithm">
        <v-list-item-action>
          <v-icon>memory</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Algorithmus</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <v-list-item to="/details/open-data">
        <v-list-item-action>
          <v-icon>backup</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Open Data</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <v-list-item to="/details/benefits">
        <v-list-item-action>
          <v-icon>star</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Erwarteter Nutzen</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-container>
</template>
