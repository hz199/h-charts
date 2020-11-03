<template>
  <div class="home">
    <h1>
      Echart 的壳子
    </h1>

    <HChart :options="options"></HChart>
  </div>
</template>
<script>
import 'echarts/lib/chart/line'
import HChart from '@libs/packages/chart'

const options = {
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
    grid: {
        // left: '8%',
        // right: '8%',
        // top: '15%',
        // bottom: '10%',
        // containLabel: false
    },
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {
        axisLine: {
            show: true,
        },
    },
    series: [{
        name:'A',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 13,
        data: [5, 10, 41, 35, 51, 49, 62]
      },
        {
            name:'B',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            data: [50, 20, 35, 20, 75, 30, 60]
        },
        {
            name:'C',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 13,
            data: [15, 30, 15, -42, 55, 20, 40]
        },
        {
            name:'D',
            type: 'line',
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
      options
    }
  }
}
</script>
<style lang="less" scoped>

</style>