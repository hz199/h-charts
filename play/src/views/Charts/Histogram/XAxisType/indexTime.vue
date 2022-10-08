<template>
  <div class="chart-content">
    <h3 class="h3">x轴 xAxisType:time 类型</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePreTime"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@yyr1994/h-charts/libs/packages/histogram'
import { xTypeTimeLineMock } from '@/mocks/line'
import codePreTime from './codePreTime'
import 'echarts/lib/component/markPoint'

export default {
  name: 'XAxisType',
  components: {
    HHistogram
  },
  data () {

    return {
      settings: {
        xAxisType: 'time'
      },

      dataSource: xTypeTimeLineMock(),

      codePreTime
    }
  }

}
</script>
