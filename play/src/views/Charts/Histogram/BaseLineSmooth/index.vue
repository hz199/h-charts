<template>
  <div class="chart-content">
    <h3 class="h3">曲线不平滑示例</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <Prism languages="javascript" isLineNumber :code="codeStr"></Prism>
  </div>
</template>
<script>
import HHistogram from '@yyr1994/h-charts/packages/histogram'
import { baseLineMock1 } from '@/mocks/line'

const codeStr = `
// dataSource 同上

settings: {
  smooth: false
},
`

export default {
  name: 'BaseLine',
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        smooth: false
      },
      dataSource: baseLineMock1(),

      codeStr
    }
  }

}
</script>
