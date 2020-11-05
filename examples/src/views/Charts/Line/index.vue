<template>
  <div class="home">
    <BaseLine></BaseLine>

    <AreaLine></AreaLine>
  </div>
</template>
<script>
import BaseLine from './BaseLine'
import AreaLine from './AreaLine'

export default {
  name: 'Line',
  components: {
    BaseLine,
    AreaLine
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="less" scoped>

</style>
