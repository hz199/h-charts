<template>
  <div class="home">
    <HLine :dataSource="dataSource" :settings="settings"></HLine>
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
      settings: {
        yAxisType: 'value'
      },
      dataSource: {
        columns: [
          {
            title: '总计',
            key: 'sum'
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
          { 'sum': 600, 'user': 1393, 'num': 1093 },
          { 'sum': 700, 'user': 3530, 'num': 3230 },
          { 'sum': 800, 'user': 2923, 'num': 2623 },
          { 'sum': 900, 'user': 1723, 'num': 1423 },
          { 'sum': 1000, 'user': 3792, 'num': 3492 },
          { 'sum': 500, 'user': 4593, 'num': 4293 }
        ]
      }
    }
  }

}
</script>
<style lang="less" scoped>

</style>
