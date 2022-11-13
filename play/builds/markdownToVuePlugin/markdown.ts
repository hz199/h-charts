const container = require('markdown-it-container')
const prismJs = require('prismJs')
const markdownIt = require('markdown-it')
require('prismjs/plugins/line-numbers/prism-line-numbers.min.js')

// 定义解析成Vue组件的容器，就是解析在.md文件里 :::CustomBlock ... ::: 的内容
function mdContainer(md) {
  md.use(container, 'CustomBlock', {
    // 验证规则，只有匹配成功才会执行
    validate(params) {
      return params.trim().match(/^CustomBlock\s*(.*)$/)
    },
    render(tokens, idx) {
      // open 节点
      if (tokens[idx].nesting === 1) {
        // 获取demo后面一个token的内容，如：

        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content.trim() : '';

        // 组装成组件并返回
        // <MarkdownBlock> 是我自己定义的一个组件，具有两个插槽source 和 code。用于展示组件效果和代码。
        // <!--component-demo: ${content} :component-demo--> 就是后面用来解析成组件的内容
        return `<MarkdownBlock>
                    <!--component-code: ${content} :component-code-->
                    <template #code>
                `

      } else {
        // closing tag
        return `</template>
        </MarkdownBlock>`;
      }
    }
  })
}

// 定义一些配置，这里重点是highlight里面的转换
const markdownConfig = {
  html: true,           // Enable HTML tags in source
  xhtmlOut: true,       // Use '/' to close single tags (<br />).
  breaks: true,         // Convert '\n' in paragraphs into <br>
  langPrefix: 'lang-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,       // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  highlight: function (codeStr, lang) {
    const prismLanguage = `language-${lang || 'javascript'}`
    const grammar = prismJs.languages[`${lang || 'javascript'}`]
    const resultHtml = prismJs.highlight(codeStr, grammar, prismLanguage)
    const code = `<pre class="${prismLanguage} line-numbers"><code class="${prismLanguage}">${resultHtml}</code></pre>`;
    return code;
  }
}

// markdown-it对象
const markdown = markdownIt(markdownConfig);
markdown.use(container).use(mdContainer)

// 导出该对象
export default markdown
