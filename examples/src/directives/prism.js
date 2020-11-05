import prismJs from 'prismjs'

const install = (app) => {
  app.directive('prism', (el, binding) => {
    const { arg } = binding
    const prismLanguage = `language-${arg || 'javascript'}`
    const grammar = prismJs.languages[`${arg || 'javascript'}`]
    const code = el.innerHTML
    const resultHtml = prismJs.highlight(code, grammar, prismLanguage)
    const preDom = document.createElement('pre')
    const codeDom = document.createElement('code')
    codeDom.append(resultHtml)
    preDom.append(codeDom)

    el.innerHTML = preDom
    console.log(preDom)
  })
}

export default {
  install
}