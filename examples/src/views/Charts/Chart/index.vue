<template>
  <div class="home">
    <h1>
      Echart 的壳子
    </h1>
    <HChart :options="option" :theme="redTheme"></HChart>
  </div>
</template>
<script>
import 'echarts/lib/chart/line'
import HChart from '@libs/packages/chart'
import { redTheme } from '@libs/utils/themes'

const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};



export default {
  name: 'Chart',
  components: {
    HChart
  },
  data () {
    return {
      option,
      redTheme
    }
  }
}
</script>
<style lang="less" scoped>

</style>