<template>
  <div class="chart-content">
    <h3 class="h3">4. 曲线不平滑示例</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <Prism languages="javascript" :code="codeStr"></Prism>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { baseLineMock } from '@/mocks/line'

const codeStr = `
// dataSource 同上

settings: {
  smooth: false
},
`

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    return {
      settings: {
        smooth: false
      },
      dataSource: baseLineMock(),

      codeStr
    }
  }

}
</script>
