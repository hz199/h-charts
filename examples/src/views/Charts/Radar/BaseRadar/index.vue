<template>
  <div class="chart-content">
    <h3 class="h3">基础雷达图</h3>
    <HRadar :dataSource="dataSource"></HRadar>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HRadar from '@/libs/packages/radar'
import { RadarBaseMock } from '@/mocks/radar'
import codePre from './codePre'

export default {
  name: 'BaseRadar',
  components: {
    HRadar
  },
  data () {
    return {
      dataSource: RadarBaseMock(),

      codePre
    }
  }

}
</script>
