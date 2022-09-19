<template>
  <HLayout :hasSider="true">
    <HSider>
      <div class="logo"></div>
      <HMenus :onTap="handleMenuTap" v-model:currentPath="currentPath">
        <template v-for="menu in menuConfig">
          <template v-if="menu.children && menu.children.length > 0">
            <HMenuItemGroup :key="menu.title">
              <template v-slot:title><span>{{menu.title}}</span></template>
              <HMenuItemGroupItem 
                v-for="item in menu.children"
                :key="item.path"
                :path="item.path">{{item.title}}</HMenuItemGroupItem>
            </HMenuItemGroup>
          </template>
          <template v-else>
            <HMenuItem :path="menu.path" :key="menu.path">{{menu.title}}</HMenuItem>
          </template>
        </template>
      </HMenus>
    </HSider>
    <HLayout>
      <HHeader class="clearfix">
        <HMenus horizontal class="pull-right">
          <HMenuItem>关于</HMenuItem>
          <HMenuItem>
            <a href="https://github.com/hz199/h-charts" target="_block">
              <img src="./assets/github.png" width="20" style="display: inline-block; vertical-align: middle;" alt="" srcset="">
            </a>
          </HMenuItem>
        </HMenus>
      </HHeader>
      <HMainContent>
        <article class="article-main">
          <router-view v-slot="{ Component }">
            <transition name="fadeTran" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </article>
      </HMainContent>
      <HFooter>
        @yyr1994/HChart
      </HFooter>
    </HLayout>
  </HLayout>
</template>

<script setup name="Layout">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import menuConfig from './menuConfig'

const router = useRouter();
const route = useRoute();

const currentPath = ref(route.fullPath)

const handleMenuTap = (path) => {
  console.log(path)
  router.push(path)
}
</script>
<style lang="less" scoped>
.logo {
  height: 64px;
  text-align: center;
}
.article-main {
  margin: 0 auto;
    max-width: 80%;
    padding: 30px 15px 40px;
    position: relative;
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
