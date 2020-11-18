<template>
  <div class="home">
    <Prism languages="javascript" :code="code"></Prism>
  </div>
</template>
<script>
const code =
`export default {
  name: 'Bar',
  data () {
    return {
    }
  },
  components: {
  }
}`
export default {
  name: 'Bar',
  data () {
    return {
      code,
    }
  }
}
</script>
<style lang="less" scoped>

</style>