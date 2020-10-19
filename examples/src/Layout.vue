<template>
  <HLayout :hasSider="true">
    <HSider>
      <div class="logo"></div>
      <HMenus :onTap="handleMenuTap" v-model:currentPath="currentPath">
        <template v-for="menu in menuConfig">
          <template v-if="menu.children && menu.children.length > 0">
            <HMenuItem :path="menu.path" :key="menu.path">{{menu.title}}</HMenuItem>
            <HMenuItemGroup :key="menu.title">
              <template v-slot:title><span>{{menu.title}}</span></template>
              <HMenuItemGroupItem :path="'/23'">快速上手33</HMenuItemGroupItem>
              <HMenuItemGroupItem :path="'/4'">快速上手55</HMenuItemGroupItem>
            </HMenuItemGroup>
          </template>
          <template>
            <HMenuItem :path="menu.path" :key="menu.path">{{menu.title}}</HMenuItem>
          </template>
        </template>

        <!-- <HMenuItemGroup>
          <template v-slot:title><span>Layout</span></template>
          <HMenuItemGroupItem :path="'/23'">快速上手33</HMenuItemGroupItem>
          <HMenuItemGroupItem :path="'/4'">快速上手55</HMenuItemGroupItem>
        </HMenuItemGroup>
        <HMenuItemGroup>
          <template v-slot:title><span>Layout</span></template>
          <HMenuItemGroupItem :path="'/5'">快速上手33</HMenuItemGroupItem>
          <HMenuItemGroupItem :path="'/6'">快速上手55</HMenuItemGroupItem>
        </HMenuItemGroup> -->
      </HMenus>
    </HSider>
    <HLayout>
      <HHeader class="clearfix">
        <HMenus horizontal class="pull-right">
          <HMenuItem>关于</HMenuItem>
        </HMenus>
      </HHeader>
      <HMainContent>
        <router-view v-slot="{ Component }">
          <transition name="fadeTran" appear>
            <component :is="Component" />
          </transition>
        </router-view>
      </HMainContent>
      <HFooter>
        Footer
      </HFooter>
    </HLayout>
  </HLayout>
</template>

<script>

export default {
  name: 'Layout',
  components: {
  },
  data () {
    return {
      currentPath: '/',
      menuConfig: [
        {
          title: '介绍',
          path: '/'
        },
        {
          title: 'Layout',
          children: [
            {
              title: 'bar 柱状图',
              path: '/bar'
            },
            {
              title: 'line 折线图',
              path: '/line'
            },
          ]
        }
      ]
    }
  },
  methods: {
    handleMenuTap (path) {
      console.log(path)
    }
  },
  watch: {
    '$router' () {
      console.log(this.$router)
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 64px;
  text-align: center;
}
.fadeTran-enter-active {
  animation: bounce-in 0.6s ease-in-out both;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
