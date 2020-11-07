export default `
<template>
  <HLine :dataSource="dataSource" :settings="settings"></HLine>
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
        area: true
      },
      dataSource: {
        'columns': [
          { title: '总计', key: 'sum'},
          { title: '用户', key: 'user' },
          { title: '数量', key: 'num' }
        ],
        'xAxis|6': [
          '@date("yyyy-MM-dd")'
        ],
        'rows|6': [
          { 'sum|100-1000': 800, 'user|1000-1500': 1393, 'num|1200-2000': 1593 },
        ]
      }
    }
  }

}
</script>
`