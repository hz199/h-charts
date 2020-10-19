import { defineComponent, provide, inject } from 'vue'
import './index.less';

const Menus = defineComponent({
  name: 'Menus',
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
    return (
      <ul class={this.horizontal ? 'menus clearfix menus__horizontal' : 'menus'}>
        {
          this.$slots
        }
      </ul>
    )
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
  name: 'MenuItem',
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

    return (
      <li class={currentPath === this.path ? 'menus__item menus__item--active' : 'menus__item'}>
        <p class="menus__text" onClick={() => {
          onTap(this.path)
          updateCurrentPath(this.path)
        }}>
          {this.$slots}
        </p>
      </li>
    )
  }
})

const MenuItemGroup = defineComponent({
  name: 'MenuItemGroup',
  render () {
    return (
      <li class="menus__item-group">
        <div class="menus__item-group-title">
          {this.$slots.title()}
        </div>
        <ul class="menu__item-group-list">
         {
           this.$slots.default()
         }
        </ul>
      </li>
    )
  }
})

const MenuItemGroupItem = defineComponent({
  name: 'MenuItemGroupItem',
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

    return (
      <li class={currentPath === this.path ? 'menus__item menus__item--group menus__item--active' : 'menus__item menus__item--group'}>
        <p class="menus__text" onClick={() => {
          onTap(this.path)
          updateCurrentPath(this.path)
        }}>
          {this.$slots}
        </p>
      </li>
    )
  }
})

Menus.MenuItem = MenuItem
Menus.MenuItemGroup = MenuItemGroup
Menus.MenuItemGroupItem = MenuItemGroupItem

export default Menus
