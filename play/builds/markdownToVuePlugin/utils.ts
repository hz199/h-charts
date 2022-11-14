// plugin/util.js
import { compileTemplate, SFCTemplateCompileOptions } from '@vue/compiler-sfc'

export function stripScript(content) {
  // const result = content.match(/<(script)>([\s\S]+)<\/script>/)
  const result = content.match(/<script.*?>([\s\S]+?)<\/script>/)
  return result && result[1] ? result[1].trim() : ''
}

export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export function pad(source) {
  return source
    .split(/\r?\n/)
    .map((line) => `  ${line}`)
    .join('\n')
}

const templateReplaceRegex = /<template>([\s\S]+)<\/template>/g

export function genInlineComponentText(template, script, extendsScript = '', id = '') {
  let source = template
  if (templateReplaceRegex.test(source)) {
    source = source.replace(templateReplaceRegex, '$1')
  }
  const finalOptions: SFCTemplateCompileOptions = {
    id: id,
    source: `<div>${source}</div>`,
    filename: 'inline-component',
    // compiler: TemplateCompiler,
    compilerOptions: {
      mode: 'function',
    },
  }

  // 利用Vue的底层工具将原始模板代码编译为渲染函数代码
  const compiled = compileTemplate(finalOptions)
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach((tip) => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map((e) => `  - ${e}`).join('\n') +
        '\n'
    )
  }
  let demoComponentContent = `
    ${compiled.code.replace('return function render', 'function render')}
  `
  script = script.trim();

  let echartPaths = [];

  if (script) {
    const paths = script.match(/import ('|")(echarts\/lib\/([a-zA-Z]+)\/)([a-zA-Z]+)('|");/g, '');

    if (paths && Array.isArray(paths)) {
      echartPaths.push(...paths)
    }

    script = script
      .replace(/export\s+default/, 'const democomponentExport =')
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
      .replace(/import ('|")(echarts\/lib\/([a-zA-Z]+)\/)([a-zA-Z]+)('|");/g, '')
  } else {
    script = 'const democomponentExport = {}'
  }

  // 最后导出一个自执行的渲染函数字符串
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...democomponentExport,
      ${extendsScript ? `extends: ${extendsScript},` : ''}
    }
  })()`

  return {
    demoComponentContent,
    echartPaths
  }
}

