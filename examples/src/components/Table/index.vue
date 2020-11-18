<template>
  <div class="table-wrapper">
    <table cellspacing="0" cellpadding="0" class="table is-border" style="width: 100%">
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index" :class="item.align === 'center' ? 'text-center' : ''">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="data.length > 0">
          <tr v-for="(item, oIndex) in data" :key="oIndex">
            <td v-for="(aItem, aIndex) in columns" :key="data.length + aIndex" :class="aItem.align === 'center' ? 'text-center' : ''">
              <RenderBody v-if="aItem.render" :row="item" :render="aItem.render"></RenderBody>
              <span v-else>{{item[aItem.key]}}</span>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td style="text-align:center;" class="empty" :colspan="columns.length">暂无数据</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import RenderBody from './RenderBody'

export default {
  name: 'Table',
  components: { RenderBody },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
}
</script>
<style scoped lang="less">
.table-wrapper {
  border-top: 1px solid #dddee1;
  border-left: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
  color: #344951;
}
.table > thead > tr > th {
  border-bottom: 1px solid #e9eaec;
  height: 44px;
  line-height: 44px;
  background-color: #f8f8f9;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 12px;
  font-weight: bold;
}
.table > tbody > tr > td.text-center {
  text-align: center;
}

.table > tbody > tr:nth-child(2n) {
  background-color: #f8f8f8;
}

.table > tbody > tr > td.text-center {
  text-align: center;
}

.table > thead > tr > th.empty {
  padding: 20px;
}

/* .table > tbody > tr > td:last-child {
  border-bottom: none;
} */

.table > tbody > tr > td {
  border-bottom: 1px solid #e9eaec;
  height: 44px;
  line-height: 44px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 12px;
}

.table.is-border > thead > tr > th {
  border-right: 1px solid #e9eaec;
}
.table.is-border > thead > tr > th:last-child {
  border-right: none
}

.table.is-border > tbody > tr > td {
  border-right: 1px solid #e9eaec;
}
.table.is-border > tbody > tr > td:last-child {
  border-right: none
}

</style>
