<template>
  <div class="home">
    <Prism languages="javascript" :code="code"></Prism>

    <Timeline>
      <TimelineItem>
        <p class="time">1976年</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1976年</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1976年</p>
        <p class="time">1976年</p>
          <p class="time">1976年</p>
      </TimelineItem>
    </Timeline>
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