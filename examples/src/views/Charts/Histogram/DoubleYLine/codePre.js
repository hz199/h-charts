export default `
<template>
  <HLine :dataSource="dataSource"></HLine>
</template>
<script>
import { HLine } from '@yyr1994/h-charts'
export default {
  components: {
    HLine
  },
  data () {
    return {
      settings: {
        yFormatter: [(val) =>  val + '人', '{value}%'],
        yAxisName: ['人数', '比率']
      },
      dataSource: {
        columns: [
          { title: '余杭人数', key: 'number1'},
          { title: '西湖人数', key: 'number2' },
          { title: '比率', key: 'ratio', right: true, type: 'bar' }  // right设置为true，比率依据右侧坐标显示
        ],
        xAxis: [
          '2020-11-01',
          '2020-11-02',
          '2020-11-03',
          '2020-11-04',
          '2020-11-05',
          '2020-11-06'
        ],
        rows: [
          { number1: 1111, number2: 1393, ratio: 10 },
          { number1: 2222, number2: 1393, ratio: 20 },
          { number1: 3333, number2: 1393, ratio: 30 },
          { number1: 4444, number2: 1393, ratio: 40 },
          { number1: 5555, number2: 1393, ratio: 50 },
          { number1: 6666, number2: 1393, ratio: 60 }
        ]
      }
    }
  }

}
</script>
`