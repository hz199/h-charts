<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <HLine></HLine>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HLine from '/@es/line'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HLine
  }
}
</script>
