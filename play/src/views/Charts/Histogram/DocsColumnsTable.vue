<template>
  <div class="chart-content">
    <h3 class="h3">直方图 columns 配置项</h3>
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
          attribute: 'right',
          type: 'boolean',
          describe: '是否开启右侧Y轴',
          default: 'false',
          seriesType: 'bar/line'
        },
        {
          attribute: 'markMax',
          type: 'boolean',
          describe: '最大值标注',
          default: 'false',
          seriesType: 'bar/line'
        },
        {
          attribute: 'markMin',
          type: 'boolean',
          describe: '最小值标注',
          default: 'false',
          seriesType: 'bar/line'
        },
        {
          attribute: 'type',
          type: 'line | bar',
          describe: '直方图类型（折线 | 柱状图）',
          default: 'line',
          seriesType: 'bar/line'
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