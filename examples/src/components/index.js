import Layout from './Layout/Layout.jsx'
import Menus from './Menus/index.jsx'

const components = [
  Layout,
  Layout.Sider,
  Layout.Header,
  Layout.Footer,
  Layout.MainContent,
  Menus,
  Menus.MenuItem,
  Menus.MenuItemGroup,
  Menus.MenuItemGroupItem
]

const install = function install (app) {
  console.log(install.installed)
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
