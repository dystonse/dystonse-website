<template>
  <v-sheet height="400px">
    <v-chart :options="graphoptions" autoresize theme="ovilia-green" />
  </v-sheet>
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
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
    graphoptions: function() {
      var theSource = this.$store.state.currentSearch.fullGraph;
      console.log("The source: " + util.inspect(theSource));
      var firstLine = theSource[0];
      console.log("The first linme: " + util.inspect(firstLine));
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
        console.log("gepiuscht");
      }

      console.log("Will return dimensions: " + util.inspect(dimensions));
      console.log("Will return series: " + util.inspect(series));

      return {
        title: {
          text: "Wahrscheinlichkeiten",
          subtext: "Dummy-Daten",
          show: false,
        },

        legend: {},
        tooltip: {},
        dataset: {
          dimensions: dimensions,
          source: theSource
        },
        // Declare X axis, which is a category axis, mapping
        // to the first column by default.
        xAxis: {
          type: "time",
          min: "2019-09-26T12:00:00.725Z",
          max: "2019-09-26T18:00:00.725Z",
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
