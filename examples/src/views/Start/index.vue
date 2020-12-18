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

    let data = [
      { name: "农、林、牧、鱼业", value: 100 },
      { name: "制造业", value: 200 },
      { name: "电力、热力、燃气及水生产和供应业", value: 300 },
      { name: "建筑业", value: 500 },
      { name: "批发和零售业", value: 800 },
      { name: "住宿和餐饮业", value: 900 },
      { name: "金融业", value: 1000 },
    ];

    let legendData = [],
      seriesData = [];

    data.map((v, i) => {
      legendData.push(v.name);
      seriesData.push({
        value: v.value,
        name: v.name,
      });
    });

    for (let i = 0; i < 7; i++) {
      seriesData.push({
        value: 0,
        name: "",
        label: { show: false },
        labelLine: { show: false },
        itemStyle: { color: "rgba(0,0,0,0)" },
      });
    }

    const options = {
      legend: {
        icon: "circle",
      },
      // 遗留一个问题，hover时底图会遮住，暂时没有解决
      series: [
        {
          name: "",
          type: "pie",
          radius: ["10%", "60%"],
          startAngle: 180,
          center: ["50%", "50%"],
          roseType: "area",
          selectedMode: "single",
          label: {
            show: true,
            position: 'inside',
          },
          data: seriesData
        },
      ],
    };

    console.log(options)

    // 绘制图表
    myChart.setOption(options);
  },
};
</script>
<style lang="less" scoped>
</style>