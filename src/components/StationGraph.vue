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
import "echarts/lib/component/markLine";

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
      return this.$store.state.currentSearch.stationGraphs[this.station.id] && this.$store.state.currentSearch.scheduledArrivals[this.station.id];
    },
    graphoptions: function() {
      var theSource = this.$store.state.currentSearch.stationGraphs[this.station.id];
      var departures = this.$store.state.currentSearch.scheduledArrivals[this.station.id];
      var options = {
        title: {
          text: "Wahrscheinlichkeiten",
          show: false
        },
        dataset: {
          source: theSource
        },
        series: [
          {
            type: "line",
            markLine: {
              label: {
                show: false
              },
              symbol: "none",
              lineStyle: {
                type: "solid",
                opacity: 0.3,
              },
              data: departures.map(dep => { return { name: "Ankunft", xAxis: dep }; }),
            }
          }
        ],
        xAxis: {
          type: "time",
          min: theSource[1][0],
          max: theSource[theSource.length - 1][0],
          splitLine: {
            show: false
          },
          axisPointer: {
            show: true
          }
        },
        // Declare Y axis, which is a value axis.
        yAxis: { type: "value" },
        tooltip: {
          trigger: "axis"
        },
        dataZoom: [
          {
            // This dataZoom component controls x-axis by dafault
            type: "slider", // this dataZoom component is dataZoom component of slider
            start: 0,
            end: 100
          }
        ],
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
