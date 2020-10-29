<template>
  <div class="home">
    <h1>
      Echart 的壳子
    </h1>
    <HChart :options="option" :theme="redTheme"></HChart>
  </div>
</template>
<script>
import 'echarts/lib/chart/pie'
import HChart from '@libs/packages/chart'
import { redTheme } from '@libs/utils/themes'

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 100, name: '搜索引擎'}
      ]
    }
  ]
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