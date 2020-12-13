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

    <DocsTable></DocsTable>
  </div>
</template>
<script>
import BaseHistogram from './BaseHistogram'
import AreaLine from './AreaLine'
import DoubleYLine from './DoubleYLine'
import BaseLineSmooth from './BaseLineSmooth'
import LineMaxMin from './LineMaxMin'
import XAxisType from './XAxisType'
import XAxisTypeTime from './XAxisType/indexTime'
import BarStack from './BarStack'
import WaterFall from './WaterFall'

import DocsTable from './DocsTable'

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
