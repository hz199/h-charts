import Layout from './Layout/Layout.jsx'

const components = [
  Layout,
  Layout.Sider,
  Layout.Header,
  Layout.Footer,
  Layout.MainContent
]

const install = function install (app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
