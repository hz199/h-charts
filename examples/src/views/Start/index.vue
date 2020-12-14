<template>
  <div class="home">
    dataSource 例子展示时使用的
    <a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer"
      >MockJS</a
    >
    具体规则请看官网

    <div id="container" style="height: 400px"></div>
  </div>
</template>
<script>
import { defaultTheme } from '@libs/utils/themes'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注


export default {
  name: "Start",
  mounted() {
    echarts.registerTheme(defaultTheme.name, defaultTheme.value)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("container"), defaultTheme.name);

    var options = {
      aria: {
      show: true
    },
  "title": {
    text: '懂法守法'
  },
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "label": {
        "show": true,
        "backgroundColor": "#fff",
        "color": "#556677",
        "borderColor": "rgba(0,0,0,0)",
        "shadowOffsetY": 0
      },
      "lineStyle": {
        "width": 0
      }
    },
    "padding": [
      10,
      10
    ]
  },
  "legend": {
    "show": true,
    "icon": "circle",
    "textStyle": {
      "fontSize": 12,
      "color": "#c8c8c8"
    }
  },
  "xAxis": [
    {
      "type": "category",
      "data": [
        "1976-11-18",
        "1988-10-11",
        "2007-03-24",
        "1999-01-03",
        "2019-05-20",
        "1999-09-23"
      ]
    }
  ],
  "yAxis": [
    {
      "type": "value"
    }
  ],
  "series": [
    {
      "name": "总计",
      "type": "line",
      "data": [
        233,
        115,
        680,
        800,
        436,
        147
      ],
      "smooth": true,
      // "symbol": "circle",
      "symbolSize": 10
    },
    {
      "name": "用户",
      "type": "bar",
      "data": [
        1028,
        1059,
        1310,
        1048,
        1217,
        1106
      ],
      "smooth": true,
      "symbol": "circle",
      "symbolSize": 10
    },
    {
      "name": "数量",
      "type": "bar",
      "data": [
        1962,
        1377,
        1876,
        1938,
        1299,
        1286
      ],
      "smooth": true,
      "symbol": "circle",
      "symbolSize": 10
    }
  ]
}

    // 绘制图表
    myChart.setOption(options);
  },
};
</script>
<style lang="less" scoped>
</style>