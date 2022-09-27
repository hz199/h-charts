export default `
<template>
  <HPie :dataSource="dataSource" :settings="settings"></HPie>
</template>
<script>
import { HPie } from '@yyr1994/h-charts'
export default {
  components: {
    HPie
  },
  data () {
    return {
      settings: {
        wRadius: '10%', // 内圆半径大小，默认0%
        eRadius: '30%', // 外圆半径大小 默认60%
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
          },
          {
            "title": "萧山人数",
            "key": "number4"
          }
        ],
        "rows": {
          "number1": 471,
          "number2": 1179,
          "number3": 931,
          "number4": 1310
        }
      }
    }
  }
}
</script>
`