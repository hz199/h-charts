<template>
  <div class="chart-content">
    <h3 class="h3">x轴 xAxisType: value 类型</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@/libs/packages/histogram'
import { xTypeValueLineMock } from '@/mocks/line'
import 'echarts/lib/component/markPoint'

const code = `
/*
 * 注意:
 *  1. 使用同上 xAxisType: time
 *  2. 使用 xAxisType:value dataSource.xAxis不起作用
 *  3. dataSource.rows 属性的value是一个二维数组 [index, value]
 */
`

export default {
  name: 'XAxisType',
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        xAxisType: 'value'
      },

      dataSource: xTypeValueLineMock(),

      codePre: code
    }
  }

}
</script>
