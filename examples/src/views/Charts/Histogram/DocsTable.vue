<template>
  <div class="chart-content">
    <h3 class="h3">settings 配置项</h3>
    <Table class="table"
      :columns="columns"
      :data="tableData"
    ></Table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '配置属性',
          key: 'attribute',
          align: 'center'
        },
        {
          title: '类型',
          key: 'type',
          align: 'center'
        },
        {
          title: '描述',
          key: 'describe',
          align: 'center'
        },
        {
          title: '默认值',
          key: 'default',
          align: 'center'
        },
        {
          title: '使用条件',
          key: 'seriesType',
          align: 'center'
        }
      ],
      tableData: [
        {
          attribute: 'xAxisType',
          type: 'EChartOption.BasicComponents.CartesianAxis.Type | undefined',
          describe: 'x轴的类型',
          default: 'category',
          seriesType: 'bar/line'
        },
        {
          attribute: 'xVisible',
          type: 'boolean',
          describe: 'x轴是否显示',
          default: 'true',
          seriesType: 'bar/line'
        },
        {
          attribute: 'tooltip',
          type: 'EChartOption.Tooltip | boolean',
          describe: 'tooltip工具',
          default: 'true',
          seriesType: 'bar/line'
        },
        {
          attribute: 'yFormatter',
          type: 'Tuple<string | ((val: any) => string), 2>',
          describe: '长度为2的元组，类型是echart格式化字符串或者函数',
          default: `['{value}', '{value}']`,
          seriesType: 'bar/line'
        },
        {
          attribute: 'yVisible',
          type: 'boolean',
          describe: '是否显示y轴',
          default: `true`,
          seriesType: 'bar/line'
        },
        {
          attribute: 'yAxisName',
          type: 'Array<string> | undefined',
          describe: 'y轴名字',
          default: `undefined`,
          seriesType: 'bar/line'
        },
        {
          attribute: 'LegendVisible',
          type: 'boolean | undefined',
          describe: '图例是否显示',
          default: `true`,
          seriesType: 'bar/line'
        },
        {
          attribute: 'area',
          type: 'boolean | undefined',
          describe: '区域图形显示',
          default: 'undefined',
          seriesType: 'line'
        },
        {
          attribute: 'smooth',
          type: 'boolean',
          describe: '是否是平滑曲线',
          default: 'true',
          seriesType: 'line'
        },
        {
          attribute: '-',
          type: '-',
          describe: '-',
          default: `-`
        },
        {
          attribute: 'barGap',
          type: 'string',
          describe: '两个柱状体之间的间隔',
          default: `20%`,
          seriesType: 'bar'
        },
        {
          attribute: 'stack',
          type: 'boolean',
          describe: '柱状图堆叠',
          default: `false`,
          seriesType: 'bar'
        },
        {
          attribute: 'labelShow',
          type: 'boolean',
          describe: '柱状图中间标签知否显示（数值）',
          default: `false`,
          seriesType: 'bar'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.table {
  margin-top: 30px;
}
</style>