export default `
/*
 * 注意:
 *  1. 使用 xAxisType:time dataSource.xAxis不起作用
 *  2. dataSource.rows 属性的value是一个二维数组 [时间戳, value]
 */

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
      dataSource: {
        'columns': [
          { title: '余杭人数', key: 'number1'},
          { title: '西湖人数', key: 'number2' },
          { title: '下城人数', key: 'number3' }
        ],
        rows: [{
          "number1": [
            1605581788000,
            1798
          ],
          "number2": [
            1605581788000,
            2200
          ],
          "number3": [
            1605581788000,
            2518
          ]
        }, {
          "number1": [
            1605583588000,
            1776
          ],
          "number2": [
            1605583588000,
            1182
          ],
          "number3": [
            1605583588000,
            869
          ]
        }, {
          "number1": [
            1605585388000,
            2480
          ],
          "number2": [
            1605585388000,
            719
          ],
          "number3": [
            1605585388000,
            1743
          ]
        }, {
          "number1": [
            1605587188000,
            2840
          ],
          "number2": [
            1605587188000,
            1733
          ],
          "number3": [
            1605587188000,
            1186
          ]
        }, {
          "number1": [
            1605588988000,
            2829
          ],
          "number2": [
            1605588988000,
            972
          ],
          "number3": [
            1605588988000,
            1535
          ]
        }, {
          "number1": [
            1605590788000,
            1735
          ],
          "number2": [
            1605590788000,
            940
          ],
          "number3": [
            1605590788000,
            1768
          ]
        }, {
          "number1": [
            1605592588000,
            2957
          ],
          "number2": [
            1605592588000,
            2010
          ],
          "number3": [
            1605592588000,
            1011
          ]
        }, {
          "number1": [
            1605594388000,
            1650
          ],
          "number2": [
            1605594388000,
            377
          ],
          "number3": [
            1605594388000,
            792
          ]
        }, {
          "number1": [
            1605596188000,
            2072
          ],
          "number2": [
            1605596188000,
            250
          ],
          "number3": [
            1605596188000,
            2048
          ]
        }, {
          "number1": [
            1605597988000,
            1401
          ],
          "number2": [
            1605597988000,
            2130
          ],
          "number3": [
            1605597988000,
            671
          ]
        }]
      }
    }
  }

}
</script>
`