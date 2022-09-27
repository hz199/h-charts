<template>
  <div class="chart-content">
    <h3 class="h3">Bar 堆叠图</h3>
    <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HHistogram from '@/packages/histogram'
import { baseBarMock } from '@/mocks/bar'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        stack: true
      },
      dataSource: baseBarMock(),

      codePre
    }
  }

}
</script>
