<template>
  <div class="home">
    <ArticleH1>介绍</ArticleH1>
    <ArticleP>
      这个项目时参考<a target="_black" href="https://v-charts.js.org/#/">v-chart</a>，但又做了一些改变。vue3.0发布了新版本，同时图表又是在项目中经常用到的组件，抱着学习vue3.0的态度尝试着封装下echarts
      一些常用的组件
    </ArticleP>

     <Prism languages="javascript" :code="`import { hChart } from '@yyr1994/h-charts'`"></Prism>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="less" scoped>

</style>