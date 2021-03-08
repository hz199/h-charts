<template>
  <div class="home">
    <HChart :options="options" :events="chartEvents"></HChart>

    <Prism languages="html" isLineNumber :code="optionsStr"></Prism>
  </div>
</template>
<script>
import 'echarts/lib/chart/bar'
import HChart from '@/libs/packages/chart'
import { optionsStr } from './code'

const options ={
  tooltip: {
    trigger: 'axis',
    show: true,
  },
  legend: {
    show: true,
    icon: 'circle',
    top: 20,
    textStyle: {
      fontSize: 12,
      color: '#c8c8c8'
    },
  },
  grid: {},
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  },
  yAxis: {
    axisLine: {
      show: true,
    },
  },
  series: [{
      name: 'A',
      type: 'bar',
      smooth: true,
      symbol: 'circle',
      symbolSize: 13,
      data: [5, 10, 41, 35, 51, 49, 62]
    },
    {
      name: 'B',
      type: 'bar',
      smooth: true,
      symbol: 'circle',
      symbolSize: 13,
      data: [50, 20, 35, 20, 75, 30, 60]
    },
    {
      name: 'C',
      type: 'bar',
      smooth: true,
      symbol: 'circle',
      symbolSize: 13,
      data: [15, 30, 15, -42, 55, 20, 40]
    },
    {
      name: 'D',
      type: 'bar',
      smooth: true,
      symbol: 'circle',
      symbolSize: 13,
      data: [5, 60, 20, 45, 15, 55, 25]
    },
  ]
};

export default {
  name: 'Chart',
  components: {
    HChart
  },
  data () {
    return {
      optionsStr,
      options,

      chartEvents: {
        click: (...args) => {
          console.log(args)
        },
        legendselectchanged: (...args) => { // [params, Echart]
          console.log(args, 'legendselectchanged')
        },
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>