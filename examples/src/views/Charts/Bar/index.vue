<template>
  <div class="home">
    <Prism languages="javascript" :code="code"></Prism>

    <Prism languages="html" :code="htmlCode"></Prism>
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

const htmlCode = `
<template>
  <div class="home">
    <Prism languages="javascript" :code="code"></Prism>

    <Prism languages="html" :code="htmlCode"></Prism>
  </div>
</template>
`
export default {
  name: 'Bar',
  data () {
    return {
      code,
      htmlCode
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>

</style>