<template>
  <div class="home">
    <BaseLine></BaseLine>
    <AreaLine></AreaLine>
    <DoubleYLine></DoubleYLine>
    <BaseLineSmooth></BaseLineSmooth>
    <LineMaxMin></LineMaxMin>
  </div>
</template>
<script>
import BaseLine from './BaseLine'
import AreaLine from './AreaLine'
import DoubleYLine from './DoubleYLine'
import BaseLineSmooth from './BaseLineSmooth'
import LineMaxMin from './LineMaxMin'

export default {
  name: 'Line',
  components: {
    BaseLine,
    AreaLine,
    DoubleYLine,
    BaseLineSmooth,
    LineMaxMin
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="less" scoped>

</style>
