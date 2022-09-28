<template>
  <div class="chart-content">
    <h3 class="h3">Line 堆叠面积图</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@yyr1994/packages/histogram'
import { baseLineMock1 } from '@/mocks/line'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        area: true,
        axisPointer: true
      },
      dataSource: baseLineMock1(),

      codePre
    }
  }

}
</script>
