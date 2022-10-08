<template>
  <div class="home">
    <ArticleH1>介绍</ArticleH1>
    <ArticleP>
      vue3.0发布了新版本，同时图表又是在项目中经常用到的组件，抱着学习vue3.0的态度尝试着封装下echarts
      一些常用的组件
    </ArticleP>

    <ArticleH3 style="margin-top:10px;">yarn</ArticleH3>
    <Prism :code="`yarn add @yyr1994/h-charts`"></Prism>
    <Prism languages="javascript" :code="code"></Prism>

    <ArticleH3 style="margin-top:10px;">mock</ArticleH3>
    <ArticleP>
      dataSource 例子展示时使用的
      <a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer"
        >MockJS</a
      >
      具体规则请看官网
    </ArticleP>
  </div>
</template>
<script>
const code = `
// 只支持 esModule

import { hChart } from '@yyr1994/h-charts'
`

export default {
  name: 'Home',
  data () {
    return {
      code
    }
  }
}
</script>
<style lang="less" scoped>

</style>