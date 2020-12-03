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

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip' // 提示框组件
import 'echarts/lib/component/title' // 标题组件
import 'echarts/lib/component/legend' // 标注

export default {
  name: "Start",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("container"));

    var options = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "销量",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 绘制图表
    myChart.setOption(options);
  },
};
</script>
<style lang="less" scoped>
</style>