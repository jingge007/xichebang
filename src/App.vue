<template>
  <div id="app">
    <!-- 主页按钮页面 -->
    <div v-if="currentPage === 'home'" class="home-page">
      <h1 class="title">喜车邦自助洗车系统</h1>
      <div class="button-container">
        <button class="nav-button" @click="goToPage('register')">
          新会员注册流程页面
        </button>
        <button class="nav-button" @click="goToPage('self-service')">
          自助洗车使用说明页面
        </button>
      </div>
    </div>
    
    <!-- 注册流程页面 -->
    <CarWashPoster v-if="currentPage === 'register'" @back="goToPage('home')" />
    
    <!-- 自助洗车页面 -->
    <SelfServiceCarWash v-if="currentPage === 'self-service'" @back="goToPage('home')" />
  </div>
</template>

<script>
import CarWashPoster from './components/CarWashPoster.vue'
import SelfServiceCarWash from './components/SelfServiceCarWash.vue'

export default {
  name: 'App',
  components: {
    CarWashPoster,
    SelfServiceCarWash
  },
  data() {
    return {
      currentPage: 'home' // 'home', 'register', 'self-service'
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>
html, body {
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
  min-height: 98vh;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* 主页样式 */
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 98vh;
  background: linear-gradient(135deg, #7dedb8, #47bde8);
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.title {
  color: #0052d9;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-button {
  background-color: #0052d9;
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  min-width: 300px;
}

.nav-button:hover {
  background-color: #003a99;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
</style>