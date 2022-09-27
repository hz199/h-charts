<template>
  <div class="home">
    <BasePie></BasePie>
    <BasePie1></BasePie1>
    <RadiusPie></RadiusPie>
    <RoseTypePie></RoseTypePie>

    <DocsTable></DocsTable>
  </div>
</template>
<script>
import BasePie from './BasePie/index.vue'
import BasePie1 from './BasePie1/index.vue'
import RadiusPie from './RadiusPie/index.vue'
import RoseTypePie from './RoseTypePie/index.vue'
import DocsTable from './DocsTable.vue'

export default {
  name: 'Pie',
  components: {
    BasePie,
    BasePie1,
    RadiusPie,
    RoseTypePie,
    DocsTable
  }
}
</script>

<style lang="less" scoped>

</style>
