export default `
<template>
  <HHistogram :dataSource="dataSource"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
export default {
  components: {
    HHistogram
  },
  data () {
    return {
      dataSource: {
        columns: [
          { title: '总计', key: 'sum', type: 'bar' },
          { title: '用户', key: 'user', type: 'bar' },
          { title: '数量', key: 'num' }
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
          { sum: 1111, user: 1393, num: 1593 },
          { sum: 2222, user: 1393, num: 1593 },
          { sum: 3333, user: 1393, num: 1593 },
          { sum: 4444, user: 1393, num: 1593 },
          { sum: 5555, user: 1393, num: 1593 },
          { sum: 6666, user: 1393, num: 1593 }
        ]
      }
    }
  }
}
</script>
`