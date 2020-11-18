<template>
  <div class="chart-content">
    <h3 class="h3">2. 堆叠面积图</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <ShowMore>
      <Prism languages="html" :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { baseLineMock } from '@/mocks/line'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    return {
      settings: {
        area: true,
        axisPointer: true
      },
      dataSource: baseLineMock(),

      codePre
    }
  }

}
</script>
