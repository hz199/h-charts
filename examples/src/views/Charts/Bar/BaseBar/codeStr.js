export default `
<template>
  <HLine :dataSource="dataSource"></HLine>
</template>
<script>
import { HBar } from '@yyr1994/h-charts'
export default {
  components: {
    HBar
  },
  data () {
    return {
      dataSource: {
        "columns": [
          {
            "title": "蒸发量",
            "key": "evaporation",
            "type": "bar"
          },
          {
            "title": "降雨量",
            "key": "rainfall",
            "type": "bar"
          }
        ],
        "xAxis": [  "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        "rows": [
          {
            "evaporation": 216,
            "rainfall": 912
          },
          {
            "evaporation": 132,
            "rainfall": 888
          },
          {
            "evaporation": 430,
            "rainfall": 1791
          },
          {
            "evaporation": 643,
            "rainfall": 681
          },
          {
            "evaporation": 366,
            "rainfall": 692
          },
          {
            "evaporation": 503,
            "rainfall": 1502
          },
          {
            "evaporation": 623,
            "rainfall": 1972
          },
          {
            "evaporation": 630,
            "rainfall": 1786
          },
          {
            "evaporation": 256,
            "rainfall": 1104
          },
          {
            "evaporation": 609,
            "rainfall": 1750
          },
          {
            "evaporation": 103,
            "rainfall": 1117
          },
          {
            "evaporation": 314,
            "rainfall": 1226
          }
        ]
      }
    }
  }
}
</script>
`