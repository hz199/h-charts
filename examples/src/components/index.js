// import { App } from 'vue'
import Layout from './Layout/Layout'
import Menus from './Menus/index'
import Prism from './Prism/index'
import ShowMore from './ShowMore/index.vue'
import Timeline from './Timeline/index'
import Article from './Article'
import Table from './Table/index.vue'

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
  Timeline.TimelineItem,
  Table,
  Article.ArticleH1,
  Article.ArticleH3,
  Article.ArticleP
]

const install = function install (app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
