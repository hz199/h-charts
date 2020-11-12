<template>
  <div class="show-more">
    <div class="content" :style=" !status ? 'max-height:400px;' : ''">
      <slot></slot>
    </div>
    <div class="footer" @click="handleSwitch">
      展开/收起
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowMore',
  data () {
    return {
      status: false
    }
  },
  methods: {
    handleSwitch () {
      this.status = !this.status
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../vars.less';

.show-more {
  width: 100%;
}
.content {
  overflow: auto;
  transition: all .5s;
  border-radius: 8px 8px 0 0;
}
.footer {
  transition: all .5s;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
}
.footer:hover {
  color: @primary-color;
}
</style>
