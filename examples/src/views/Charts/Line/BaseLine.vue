<template>
  <div class="chart-content">
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <div class="code">

    </div>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { baseLineMock } from '@/mocks/line'

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
      dataSource: baseLineMock
    }
  }

}
</script>
