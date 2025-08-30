<template>
  <div id="app">
    <CarWashPoster />
  </div>
</template>

<script>
import CarWashPoster from './components/CarWashPoster.vue'

export default {
  name: 'App',
  components: {
    CarWashPoster
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

#app {
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background: #f0f0f0;
  overflow-x: hidden;
  width: 100vw;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
