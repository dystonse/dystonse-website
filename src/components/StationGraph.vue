<template>
  <v-sheet :height="ready ? 400 : 'auto'" :width="ready ? 400 : 'auto'" class="d-flex align-center">
    <v-chart v-if="ready" :options="graphoptions" autoresize theme="ovilia-green" />
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

export default {
  name: "station-graph",
  components: {
    "v-chart": ECharts
  },
  data: function() {
    return {};
  },
  props: ["station"],
  computed: {
    ready: function() {
      return Boolean(
        this.$store.state.currentSearch.stationGraphs[this.station.id]
      );
    },
    graphoptions: function() {
      var theSource = this.$store.state.currentSearch.stationGraphs[this.station.id];
      var options = {
        title: {
          text: "Wahrscheinlichkeiten",
          show: false
        },
        dataset: {
          source: theSource,
        },
        series: [
          { type: "line", },
        ],
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
        tooltip: {
          trigger: "axis",
        }
      };
      console.log("Options: ");
      console.log(options);
      return options;
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
