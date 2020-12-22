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
import BasePie from './BasePie'
import BasePie1 from './BasePie1'
import RadiusPie from './RadiusPie'
import RoseTypePie from './RoseTypePie'
import DocsTable from './DocsTable'

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
