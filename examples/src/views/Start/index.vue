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
import { defaultTheme } from "@libs/utils/themes";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip"; // 提示框组件
import "echarts/lib/component/title"; // 标题组件
import "echarts/lib/component/legend"; // 标注

export default {
  name: "Start",
  mounted() {
    echarts.registerTheme(defaultTheme.name, defaultTheme.value);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(
      document.getElementById("container"),
      defaultTheme.name
    );

    var options = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                {value: 30, name: 'rose 1'},
                {value: 28, name: 'rose 2'},
                {value: 26, name: 'rose 3'},
                {value: 24, name: 'rose 4'},
                {value: 22, name: 'rose 5'},
                {value: 20, name: 'rose 6'},
                {value: 18, name: 'rose 7'},
                {value: 16, name: 'rose 8'}
            ]
        }
      ],
    };

    // 绘制图表
    myChart.setOption(options);
  },
};
</script>
<style lang="less" scoped>
</style>