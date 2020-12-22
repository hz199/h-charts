<template>
  <div class="home">
    <BaseRadar></BaseRadar>

    <DocsTable></DocsTable>
  </div>
</template>
<script>
import BaseRadar from './BaseRadar'
import DocsTable from './DocsTable'

export default {
  name: 'Radar',
  components: {
    BaseRadar,
    DocsTable
  }
}
</script>

<style lang="less" scoped>

</style>
