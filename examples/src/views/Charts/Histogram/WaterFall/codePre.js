export default `
/*
 * 注意:
 *  1. 使用 waterfall: true dataSource.xAxis 不起作用
 *  2. rows 是长度为1的数组结构
 *  3. 默认存在总计，也就是所有数据之如
 *  4. columns 中的type: line 不起作用
 */

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
        waterfall: true,
        fallTotalName: '哈哈哈',
        fallLegendName: '生活费'
      },
      dataSource: {
        "columns": [
          {
            "title": "房租",
            "key": "number1"
          },
          {
            "title": "水电费",
            "key": "number2"
          },
          {
            "title": "交通费",
            "key": "number3"
          },
          {
            "title": "伙食费",
            "key": "number4"
          },
          {
            "title": "日用品数",
            "key": "number5"
          }
        ],
        "rows": [
          {
            "number1": 3000,
            "number2": 1000,
            "number3": 2000,
            "number4": 400,
            "number5": 600
          }
        ]
      }
    }
  }

}
</script>
`