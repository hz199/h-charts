<template>
  <div class="chart-content">
    <h3 class="h3">3. 设置双Y轴</h3>
    <HLine :dataSource="dataSource" :settings="settings"></HLine>

    <ShowMore>
      <Prism languages="html" isLineNumber :code="codePre"></Prism>
    </ShowMore>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'
import { doubleYLineMock } from '@/mocks/line'
import codePre from './codePre'

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    const { xAxis, rows } = doubleYLineMock()

    return {
      settings: {
        yFormatter: [(val) => {
          return `${val} 人`
        }, '{value}'],
        yAxisName: ['人数', '比率']
      },
      dataSource: {
        columns: [
          { title: '余杭人数', key: 'number1'},
          { title: '西湖人数', key: 'number2' },
          { title: '比率', key: 'ratio', right: true }
        ],
        xAxis,
        rows
      },

      codePre
    }
  }

}
</script>
