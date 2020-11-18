<template>
  <div class="chart-content">
    <h3 class="h3">1. 基础示例</h3>
    <HLine :dataSource="dataSource"></HLine>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
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
      dataSource: baseLineMock(),

      codePre
    }
  },
  methods: {
    // handleClick () {
    //   this.dataSource = baseLineMock()
    //   console.log(JSON.stringify(this.dataSource))
    // }
  }

}
</script>
