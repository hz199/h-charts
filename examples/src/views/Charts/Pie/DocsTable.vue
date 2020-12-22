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
        }
      ],
      tableData: [
        {
          attribute: 'title',
          type: 'EChartTitleOption',
          describe: '图表标题',
          default: '{}',
        },
        {
          attribute: 'tooltip',
          type: 'EChartOption.Tooltip | boolean',
          describe: 'tooltip工具',
          default: 'true'
        },
        {
          attribute: 'legend',
          type: 'EChartOption.Legend | boolean',
          describe: 'legend工具',
          default: 'true'
        },
        {
          attribute: 'eRadius',
          type: 'string',
          describe: '外圆半径大小',
          default: '60%'
        },
        {
          attribute: 'wRadius',
          type: 'string',
          describe: '内圆半径大小',
          default: '0%'
        },
        {
          attribute: 'xOffset',
          type: 'string',
          describe: 'x轴偏移量',
          default: '50%'
        },
        {
          attribute: 'yOffset',
          type: 'string',
          describe: 'y轴偏移量',
          default: '50%'
        },
        {
          attribute: 'seriesName',
          type: 'string',
          describe: 'pie 名称',
          default: ''
        },
        {
          attribute: 'hasBorder',
          type: 'boolean',
          describe: '是否存在边框',
          default: 'true'
        },
        {
          attribute: 'borderRadius',
          type: 'number',
          describe: '边框弧度',
          default: '6'
        },
        {
          attribute: 'labelShow',
          type: 'boolean',
          describe: 'label是否显示',
          default: 'true'
        },
        {
          attribute: 'labelFontSize',
          type: 'number',
          describe: 'label字体大小',
          default: ''
        },
        {
          attribute: 'roseType',
          type: "radius | area",
          describe: '南丁格玫瑰图',
          default: ''
        },
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