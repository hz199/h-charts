<template>
  <div class="home">
    <BaseHistogram></BaseHistogram>
    <AreaLine></AreaLine>
    <DoubleYLine></DoubleYLine>
    <BaseLineSmooth></BaseLineSmooth>
    <LineMaxMin></LineMaxMin>
    <XAxisTypeTime></XAxisTypeTime>
    <XAxisType></XAxisType>
    <BarStack></BarStack>
    <WaterFall></WaterFall>
    
    <DocsColumnsTable/>
    <DocsTable></DocsTable>
  </div>
</template>
<script>
import BaseHistogram from './BaseHistogram/index.vue'
import AreaLine from './AreaLine/index.vue'
import DoubleYLine from './DoubleYLine/index.vue'
import BaseLineSmooth from './BaseLineSmooth/index.vue'
import LineMaxMin from './LineMaxMin/index.vue'
import XAxisType from './XAxisType/index.vue'
import XAxisTypeTime from './XAxisType/indexTime.vue'
import BarStack from './BarStack/index.vue'
import WaterFall from './WaterFall/index.vue'

import DocsTable from './DocsTable.vue'
import DocsColumnsTable from './DocsColumnsTable.vue'

export default {
  name: 'Line',
  components: {
    BaseHistogram,
    AreaLine,
    DoubleYLine,
    BaseLineSmooth,
    LineMaxMin,
    XAxisType,
    XAxisTypeTime,
    BarStack,
    WaterFall,

    DocsTable,
    DocsColumnsTable
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="less" scoped>

</style>
