<template>
  <h1 class="h1">
    <div class="msg">
      {{ msg }}
    </div>
  </h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 0
    }
  }
}
</script>
<style lang="less" scoped>
.h1 {
  .msg {
    font-size: 40px;
  }
}
</style>
