<template>
  <div class="home">
    <BasePie></BasePie>
    <RadiusPie></RadiusPie>
  </div>
</template>
<script>
import BasePie from './BasePie'
import RadiusPie from './RadiusPie'

export default {
  name: 'Pie',
  components: {
    BasePie,
    RadiusPie
  }
}
</script>

<style lang="less" scoped>

</style>
