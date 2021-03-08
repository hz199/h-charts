import { defineComponent, provide, inject, h } from 'vue'
import './index.less';

const Menus = defineComponent({
  name: 'HMenus',
  props: {
    horizontal: {
      type: Boolean,
      default: () => false
    },
    onTap: {
      type: Function,
      default: () => {}
    },
    currentPath: {
      type: String
    }
  },
  render () {
    return h('ul', {
      class: this.horizontal ? 'menus clearfix menus__horizontal' : 'menus'
    }, this.$slots.default())
  },
  methods: {
    updateCurrentPath (path) {
      this.$emit('update:currentPath', path)
    }
  },
  created () {
    provide('MenusContext', this)
  }
})

const MenuItem = defineComponent({
  name: 'HMenuItem',
  setup () {
    return {
      menusContext: inject('MenusContext')
    }
  },
  props: {
    path: {
      type: String,
      default: () => ''
    }
  },
  render () {
    const { onTap, updateCurrentPath, currentPath } = this.menusContext

    return h('li', {
      class: currentPath === this.path ? 'menus__item menus__item--active' : 'menus__item'
    }, h('p', {
      class: 'menus__text',
      onClick: () => {
        onTap(this.path)
        updateCurrentPath(this.path)
      }
    }, this.$slots.default()))
  }
})

const MenuItemGroup = defineComponent({
  name: 'HMenuItemGroup',
  render () {
    return h('li', {
        class: 'menus__item-group'
      }, [
        h('div', {
          class: 'menus__item-group-title'
        }, this.$slots.title()),
        h('ul', {
          class: 'menu__item-group-list'
        }, this.$slots.default())
      ])
    }
})

const MenuItemGroupItem = defineComponent({
  name: 'HMenuItemGroupItem',
  props: {
    path: {
      type: String,
      default: () => ''
    }
  },
  setup () {
    return {
      menusContext: inject('MenusContext')
    }
  },
  render () {
    const { onTap, updateCurrentPath, currentPath } = this.menusContext
    return h('li', {
      class: currentPath === this.path ? 'menus__item menus__item--group menus__item--active' : 'menus__item menus__item--group'
    }, h('p', {
      class: 'menus__text',
      onClick: () => {
        onTap(this.path)
        updateCurrentPath(this.path)
      }
    }, this.$slots.default()))
  }
})

Menus.MenuItem = MenuItem
Menus.MenuItemGroup = MenuItemGroup
Menus.MenuItemGroupItem = MenuItemGroupItem

export default Menus
