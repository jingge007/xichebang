<template>
  <div id="app">
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  height: 100%;
}

#app {
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background: #f0f0f0;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>