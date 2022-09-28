<template>
  <div class="chart-content">
    <h3 class="h3">设置双Y轴</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@yyr1994/packages/histogram'
import { doubleYLineMock } from '@/mocks/line'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HHistogram
  },
  data () {
    const { xAxis, rows, columns } = doubleYLineMock()

    return {
      settings: {
        yFormatter: [(val) => {
          return `${val} 人`
        }, '{value}%'],
        yAxisName: ['人数', '比率']
      },
      dataSource: {
        columns: columns,
        xAxis,
        rows
      },

      codePre
    }
  }

}
</script>
