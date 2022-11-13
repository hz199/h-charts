import { Plugin } from 'vite';
import markdown from './markdown';
import { stripScript, stripTemplate, genInlineComponentText } from './utils';

function markdownToVuePlugin(options = {}): Plugin {

  return {
    name: 'markdownToVuePlugin',
    enforce: 'pre',
    transform: function (code, id) {
      // 截取.md文件
      if (!(/\.md$/.test(id))) { return }

      const content = markdown.render(code)

      // 定义几个变量，用于解析内容
      const startTag = '<!--component-code:'
      const startTagLen = startTag.length
      const endTag = ':component-code-->'
      const endTagLen = endTag.length
      let output = [];            // 最后输出内容
      let componentId = 0;        // 组件id
      let start = 0;              // 字符串开始位置
      let pageScript = '';        // script标签
      let componentsString = '';  // 组件数据字符串


      // 查找是否具有组件内容
      let commentStart = content.indexOf(startTag);
      let commentEnd = content.indexOf(endTag);
      let echartPathList = [];

      while (commentStart !== -1 && commentEnd !== -1) {
        // 将查找到组件之前的内容先添加进去
        output.push(content.slice(start, commentStart))

        // <!-- *** ---> 找到之间的内容
        const commentContent = content.slice(commentStart + startTagLen, commentEnd)
        // 去掉标签的内容
        const html = stripTemplate(commentContent)
        const script = stripScript(commentContent)
        // 通过vue将html模板和script标签解析成组件内容
        const demoComponentName = `component-code-${componentId}`;
        // echartPaths 需要单独处理
        const { demoComponentContent, echartPaths } = genInlineComponentText(html, script, null, demoComponentName)
        
        echartPathList.push(...echartPaths)
        output.push(`<template #source><${demoComponentName} /></template>`)
        componentsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`

        // 重新计算下一次的位置
        componentId++
        start = commentEnd + endTagLen
        commentStart = content.indexOf(startTag, start)
        commentEnd = content.indexOf(endTag, commentStart + startTagLen)
      }

      const setEchartPaths = Array.from(new Set(echartPathList))

      // 有组件数据则注册组件，
      if (componentsString) {
        pageScript = `<script lang="ts">
                    import * as Vue from 'vue';
                    import prismJs from 'prismjs';
                    ${setEchartPaths.join('')}
                    export default Vue.defineComponent({
                        name: 'component-code',
                        components: {
                            ${componentsString}
                        },
                        mounted () {
                          prismJs?.highlightAll();
                        }
                    })
                </script>`
      }

      // 把剩下的内容一块加进去
      output.push(content.slice(start))
      const html = `
                    <template>
                        ${output.join('')}
                    </template>
                    ${pageScript}
                    `;

      return {
        code: html
      }
    }
  }
}


export default markdownToVuePlugin;
