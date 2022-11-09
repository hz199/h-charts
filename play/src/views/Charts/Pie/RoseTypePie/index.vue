<template>
  <div class="chart-content">
    <h3 class="h3">南丁格尔玫瑰</h3>
    <HPie :dataSource="dataSource" :settings="settings"></HPie>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import { HPie } from 'h-chart'
import { basePieMock } from '@/mocks/pie'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HPie
  },
  data () {
    return {
      settings: {
        wRadius: '10%',
        roseType: 'radius'
        // labelFontSize: 13,
        // labelShow: false
      },
      dataSource: basePieMock(),

      codePre
    }
  }

}
</script>
