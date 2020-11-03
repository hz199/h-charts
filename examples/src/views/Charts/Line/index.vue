<template>
  <div class="home">
    <HLine :dataSource="dataSource"></HLine>
  </div>
</template>
<script>
import HLine from '@libs/packages/line'

export default {
  name: 'Line',
  components: {
    HLine
  },
  data () {
    return {
      dataSource: {
        columns: [
          {
            title: '日期',
            key: 'date'
          },
          {
            title: '用户',
            key: 'user'
          },
          {
            title: '数量',
            key: 'num'
          }
        ],
        rows: [
          { 'date': '2020-11-01', 'user': 1393, 'num': 1093 },
          { 'date': '2020-11-02', 'user': 3530, 'num': 3230 },
          { 'date': '2020-11-03', 'user': 2923, 'num': 2623 },
          { 'date': '2020-11-04', 'user': 1723, 'num': 1423 },
          { 'date': '2020-11-05', 'user': 3792, 'num': 3492 },
          { 'date': '2020-11-06', 'user': 4593, 'num': 4293 }
        ]
      }
    }
  }

}
</script>
<style lang="less" scoped>

</style>
