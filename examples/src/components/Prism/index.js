
import { defineComponent, h } from 'vue'
import prismJs from 'prismjs'
import './dartPrism.css'

const Prism = defineComponent({
  name: 'Prism',
  props: {
    code: {
      type: String
    },
    languages: {
      type: String,
      default: 'markup'
    }
  },
  render() {
    const prismLanguage = `language-${this.languages || 'javascript'}`
    const grammar = prismJs.languages[`${this.languages || 'javascript'}`]

    const resultHtml = prismJs.highlight(this.code, grammar, prismLanguage)

    return h('pre', {
      class: `language-${this.languages}`
    }, [
      h('code', {
        class: `language-${this.languages}`,
        innerHTML: resultHtml
      })
    ])
  },
})

export default Prism