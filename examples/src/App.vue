<template>
  <Layout :hasSider="true">
    <Sider>
      <div class="logo"></div>
      Sider
    </Sider>
    <Layout>
      <Header>
        Header
      </Header>
      <MainContent>
        <p v-for="item in 90" :key="item">{{item}}</p>
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
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 64px;
  text-align: center;
}
</style>
