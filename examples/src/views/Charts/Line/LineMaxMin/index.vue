<template>
  <div class="chart-content">
    <h3 class="h3">5. 显示最大最小标注</h3>
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
import 'echarts/lib/component/markPoint'

export default {
  name: 'BaseLine',
  components: {
    HLine
  },
  data () {
    const { xAxis, rows } = baseLineMock()

    return {
     dataSource: {
        columns: [
          {
            title: '总计',
            key: 'sum',
            markMin: true,
            markMax: true
          },
          {
            title: '用户',
            key: 'user',
            markMin: true
          },
          {
            title: '数量',
            key: 'num',
            markMax: true
          }
        ],
        xAxis,
        rows
      },

      codePre
    }
  }

}
</script>
