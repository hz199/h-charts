<template>
  <div class="chart-content">
    <h3 class="h3">3. 设置双Y轴</h3>
    <HLine :dataSource="dataSource"></HLine>

    <!-- <ShowMore>
      <Prism languages="html" :code="areaLineCodeStr"></Prism>
    </ShowMore> -->
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { doubleYLineMock } from '@/mocks/line'
import areaLineCodeStr from './codes/areaLine'

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    return {
      dataSource: doubleYLineMock(),

      areaLineCodeStr
    }
  }

}
</script>
