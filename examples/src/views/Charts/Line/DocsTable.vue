<template>
  <div class="chart-content">
    <h3 class="h3">8. settings 配置项</h3>
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
        }
      ],
      tableData: [
        {
          attribute: 'xAxisType',
          type: 'EChartOption.BasicComponents.CartesianAxis.Type | undefined',
          describe: 'x轴的类型',
          default: 'undefined'
        },
        {
          attribute: 'xVisible',
          type: 'boolean | undefined',
          describe: 'x轴是否显示',
          default: 'undefined'
        },
        {
          attribute: 'area',
          type: 'boolean | undefined',
          describe: '区域图形显示',
          default: 'undefined'
        },
        {
          attribute: 'smooth',
          type: 'boolean | undefined',
          describe: '是否是平滑曲线',
          default: 'undefined'
        },
        {
          attribute: 'tooltip',
          type: 'EChartOption.Tooltip | boolean',
          describe: 'tooltip工具',
          default: 'undefined'
        },
        {
          attribute: 'yFormatter',
          type: 'Tuple<string | ((val: any) => string), 2>',
          describe: '长度为2的元组，类型是echart格式化字符串或者函数',
          default: `['{value}', '{value}']`
        },
        {
          attribute: 'yVisible',
          type: 'boolean | undefined',
          describe: '是否显示y轴',
          default: `undefined`
        },
        {
          attribute: 'yAxisName',
          type: 'Array<string> | undefined',
          describe: 'y轴名字',
          default: `undefined`
        },
        {
          attribute: 'LegendVisible',
          type: 'boolean | undefined',
          describe: 'LegendVisible',
          default: `undefined`
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