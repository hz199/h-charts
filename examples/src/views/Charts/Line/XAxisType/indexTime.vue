<template>
  <div class="chart-content">
    <h3 class="h3">6. x轴 xAxisType:time 类型</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <ShowMore>
      <Prism languages="html" :code="codePreTime"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { xTypeTimeLineMock } from '@/mocks/line'
import codePreTime from './codePreTime'
import 'echarts/lib/component/markPoint'

export default {
  name: 'XAxisType',
  components: {
    HLine
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
