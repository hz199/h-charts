// import { App } from 'vue'
import Layout from './Layout/Layout'
import Menus from './Menus/index'
import Prism from './Prism/index'
import ShowMore from './ShowMore'
import Timeline from './Timeline'

const components = [
  Layout,
  Layout.Sider,
  Layout.Header,
  Layout.Footer,
  Layout.MainContent,
  Menus,
  Menus.MenuItem,
  Menus.MenuItemGroup,
  Menus.MenuItemGroupItem,
  Prism,
  ShowMore,
  Timeline,
  Timeline.TimelineItem
]

const install = function install (app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
