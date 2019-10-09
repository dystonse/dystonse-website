<template>
  <v-sheet height="400px" class="d-flex align-center">
    <v-chart v-if="ready" :options="graphoptions" autoresize theme="ovilia-green" />
    <v-alert v-if="!ready" color="warning" dark icon="show_chart" border="left" prominent class="flex-grow-1">
        Der Graph wird erst angezeigt, nachdem eine Suche abgeschlossen wurde.
    </v-alert>
  </v-sheet>
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/axisPointer";
import "echarts/lib/component/legend";
import "echarts/lib/component/dataZoom";

import util from "util";

export default {
  name: "graph",
  components: {
    "v-chart": ECharts
  },
  data: function() {
    return {};
  },
  computed: {
    ready: function() {
      return this.$store.state.currentSearch.fullGraph && this.$store.state.currentSearch.fullGraph.length > 1;
    },
    graphoptions: function() {
      var theSource = this.$store.state.currentSearch.fullGraph;
      var firstLine = theSource[0];
      if (!firstLine) {
        return {};
      }
      var dimensions = [
        {
          name: "Zeit",
          type: "time"
        }
      ];
      var series = [];
      for (var i = 0; i < firstLine.length; i++) {
        dimensions.push("Spalte" + i);
        var next = {
          type: "line",
          name: firstLine[i],
          encode: {
            x: "Zeit",
            y: "Spalte" + i
          }
        };
        series.push(next);
      }

      return {
        title: {
          text: "Wahrscheinlichkeiten",
          subtext: "Dummy-Daten",
          show: false,
        },

        legend: {},
        dataset: {
          dimensions: dimensions,
          source: theSource
        },
        // Declare X axis, which is a category axis, mapping
        // to the first column by default.
        xAxis: {
          type: "time",
          min: theSource[1][0],
          max: theSource[theSource.length - 1][0],
          axisPointer: {
            show: true
          }
        },
        // Declare Y axis, which is a value axis.
        yAxis: { type: "value" },
        dataZoom: [
          {
            // This dataZoom component controls x-axis by dafault
            type: "slider", // this dataZoom component is dataZoom component of slider
            start: 0,
            end: 100
          }
        ],
        series: series,
      };
    }
  }
};
</script>
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
