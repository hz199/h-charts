<template>
  <div class="chart-content">
    <h3 class="h3">基础示例</h3>
    <HHistogram :dataSource="dataSource" ariaShow></HHistogram>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import { HHistogram } from 'h-chart'
import { baseLineMock } from '@/mocks/line'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HHistogram
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
