<template>
  <div class="chart-content">
    <h3 class="h3">7. x轴 xAxisType: value 类型</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <ShowMore>
      <Prism languages="html" :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
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
    HLine
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
