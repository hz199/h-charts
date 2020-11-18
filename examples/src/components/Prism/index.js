
import { defineComponent, h } from 'vue'
import prismJs from 'prismjs'
import './dartPrism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'

const Prism = defineComponent({
  name: 'Prism',
  props: {
    code: {
      type: String
    },
    languages: {
      type: String,
      default: 'markup'
    },
    isLineNumber: {
      type: Boolean,
      default: () => false
    }
  },
  render() {
    const prismLanguage = `language-${this.languages || 'javascript'}`
    const grammar = prismJs.languages[`${this.languages || 'javascript'}`]

    const resultHtml = prismJs.highlight(this.code, grammar, prismLanguage)

    return h('pre', {
      class: `language-${this.languages} ${this.isLineNumber ? 'line-numbers' : ''}`
    }, [
      h('code', {
        class: `language-${this.languages}`,
        innerHTML: resultHtml
      })
    ])
  },
  mounted () {
    if (this.isLineNumber) {
      prismJs.highlightAll()
    }
  }
})

export default Prism