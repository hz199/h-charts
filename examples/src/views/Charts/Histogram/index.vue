<template>
  <div class="home">
    <BaseLine></BaseLine>
    <AreaLine></AreaLine>
    <DoubleYLine></DoubleYLine>
    <BaseLineSmooth></BaseLineSmooth>
    <LineMaxMin></LineMaxMin>
    <XAxisTypeTime></XAxisTypeTime>
    <XAxisType></XAxisType>

    <DocsTable></DocsTable>
  </div>
</template>
<script>
import BaseLine from './BaseLine'
import AreaLine from './AreaLine'
import DoubleYLine from './DoubleYLine'
import BaseLineSmooth from './BaseLineSmooth'
import LineMaxMin from './LineMaxMin'
import XAxisType from './XAxisType'
import XAxisTypeTime from './XAxisType/indexTime'
import DocsTable from './DocsTable'

export default {
  name: 'Line',
  components: {
    BaseLine,
    AreaLine,
    DoubleYLine,
    BaseLineSmooth,
    LineMaxMin,
    XAxisType,
    XAxisTypeTime,
    DocsTable
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="less" scoped>

</style>
