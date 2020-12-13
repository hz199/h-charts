<template>
  <div class="chart-content">
    <h3 class="h3">Bar 瀑布图</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@libs/packages/histogram'
import { waterFallMock } from '@/mocks/bar'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        waterfall: true,
        fallTotalName: '哈哈哈',
        fallLegendName: '生活费'
      },
      dataSource: waterFallMock(),

      codePre
    }
  }

}
</script>
