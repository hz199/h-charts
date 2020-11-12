<template>
  <div class="chart-content">
    <h3 class="h3">1. 基础示例</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <ShowMore>
      <Prism languages="html" :code="baseLineCodeStr"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { baseLineMock } from '@/mocks/line'
import baseLineCodeStr from './codes/baseLine'

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    return {
      settings: {
        yAxisType: 'value'
      },
      dataSource: baseLineMock(),

      baseLineCodeStr
    }
  }

}
</script>
