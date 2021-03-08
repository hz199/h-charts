<template>
  <div class="chart-content">
    <h3 class="h3">基础饼状图</h3>
    <HPie :dataSource="dataSource"></HPie>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HPie from '@/libs/packages/pie'
import { basePieMock } from '@/mocks/pie'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HPie
  },
  data () {
    return {
      dataSource: basePieMock(),

      codePre
    }
  }

}
</script>
