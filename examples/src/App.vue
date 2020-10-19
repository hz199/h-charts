<template>
  <Layout :hasSider="true">
    <Sider>
      <div class="logo"></div>
      <Menus :onTap="handleMenuTap" v-model:currentPath="currentPath">
        <MenuItem :path="'/'">介绍</MenuItem>
        <MenuItemGroup>
          <template v-slot:title><span>Layout</span></template>
          <MenuItemGroupItem :path="'/23'">快速上手33</MenuItemGroupItem>
          <MenuItemGroupItem :path="'/4'">快速上手55</MenuItemGroupItem>
        </MenuItemGroup>
        <MenuItemGroup>
          <template v-slot:title><span>Layout</span></template>
          <MenuItemGroupItem :path="'/5'">快速上手33</MenuItemGroupItem>
          <MenuItemGroupItem :path="'/6'">快速上手55</MenuItemGroupItem>
        </MenuItemGroup>
      </Menus>
    </Sider>
    <Layout>
      <Header class="clearfix">
        <Menus horizontal class="pull-right">
          <MenuItem>关于</MenuItem>
        </Menus>
      </Header>
      <MainContent>
      </MainContent>
      <Footer>
        Footer
      </Footer>
    </Layout>
  </Layout>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      currentPath: '/'
    }
  },
  methods: {
    handleMenuTap (path) {
      console.log(path)
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 64px;
  text-align: center;
}
</style>
