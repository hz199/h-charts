<template>
  <div class="chart-content">
    <h3 class="h3">1. 基础示例</h3>
    <HBar :dataSource="dataSource"></HBar>
  </div>
</template>
<script>
import HBar from '@libs/packages/bar'
import { baseBarMock } from '@/mocks/bar'

export default {
  name: 'BaseLine',
  components: {
    HBar
  },
  data () {
    const dataSource = baseBarMock()

    return {
      dataSource
    }
  }
}
</script>
