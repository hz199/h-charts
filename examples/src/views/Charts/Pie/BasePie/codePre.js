export default `
<template>
  <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
export default {
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        stack: true // 柱状图堆叠图
      },
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
        "xAxis": [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        "rows": [
          {
            "evaporation": 529,
            "rainfall": 1806
          },
          {
            "evaporation": 681,
            "rainfall": 1840
          },
          {
            "evaporation": 882,
            "rainfall": 1664
          },
          {
            "evaporation": 920,
            "rainfall": 1056
          },
          {
            "evaporation": 959,
            "rainfall": 1026
          },
          {
            "evaporation": 289,
            "rainfall": 1461
          },
          {
            "evaporation": 347,
            "rainfall": 1884
          },
          {
            "evaporation": 440,
            "rainfall": 528
          },
          {
            "evaporation": 852,
            "rainfall": 911
          },
          {
            "evaporation": 381,
            "rainfall": 574
          },
          {
            "evaporation": 267,
            "rainfall": 1970
          },
          {
            "evaporation": 945,
            "rainfall": 1410
          }
        ]
      }
    }
  }
}
</script>
`