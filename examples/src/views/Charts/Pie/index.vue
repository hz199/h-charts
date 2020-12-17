<template>
  <div class="home">
    <BasePie></BasePie>
    <RadiusPie></RadiusPie>
    <RoseTypePie></RoseTypePie>
  </div>
</template>
<script>
import BasePie from './BasePie'
import RadiusPie from './RadiusPie'
import RoseTypePie from './RoseTypePie'

export default {
  name: 'Pie',
  components: {
    BasePie,
    RadiusPie,
    RoseTypePie
  }
}
</script>

<style lang="less" scoped>

</style>
