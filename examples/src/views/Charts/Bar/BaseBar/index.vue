<template>
  <div class="chart-content">
    <h3 class="h3">1. 基础示例</h3>
    <HBar :dataSource="dataSource"></HBar>

    <ShowMore>
      <Prism languages="html" :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HBar from '@libs/packages/bar'
import { baseBarMock } from '@/mocks/bar'
import codePre from './codeStr'

export default {
  name: 'BaseLine',
  components: {
    HBar
  },
  data () {
    const dataSource = baseBarMock()

    return {
      dataSource,
      codePre
    }
  }
}
</script>
