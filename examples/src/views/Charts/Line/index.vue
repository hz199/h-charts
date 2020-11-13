<template>
  <div class="home">
    <BaseLine></BaseLine>
    <AreaLine></AreaLine>
    <DoubleYLine></DoubleYLine>
  </div>
</template>
<script>
import BaseLine from './BaseLine'
import AreaLine from './AreaLine'
import DoubleYLine from './DoubleYLine'

export default {
  name: 'Line',
  components: {
    BaseLine,
    AreaLine,
    DoubleYLine
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="less" scoped>

</style>
