// import { App } from 'vue'
import Layout from './Layout/Layout'
import Menus from './Menus/index'

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
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
