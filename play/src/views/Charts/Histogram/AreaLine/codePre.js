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
        area: true
      },
      dataSource: {
        "columns": [
          {
            "title": "余杭人数",
            "key": "number1"
          },
          {
            "title": "西湖人数",
            "key": "number2"
          },
          {
            "title": "下城人数",
            "key": "number3"
          }
        ],
        "xAxis": [
          "2002-04-12",
          "2014-08-06",
          "2017-01-24",
          "2015-11-17",
          "1998-06-19",
          "1980-04-18"
        ],
        "rows": [
          {
            "number1": 999,
            "number2": 1350,
            "number3": 1606
          },
          {
            "number1": 836,
            "number2": 1491,
            "number3": 1876
          },
          {
            "number1": 494,
            "number2": 1362,
            "number3": 1073
          },
          {
            "number1": 858,
            "number2": 1384,
            "number3": 1078
          },
          {
            "number1": 927,
            "number2": 1087,
            "number3": 1146
          },
          {
            "number1": 115,
            "number2": 1036,
            "number3": 1098
          }
        ]
      }
    }
  }
}
</script>
`