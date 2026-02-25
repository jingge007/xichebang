<template>
  <div class="home-page">
    <h1 class="title">喜车邦自助洗车系统</h1>
    <div class="button-container">
      <button class="nav-button" @click="$router.push('/register')">
        新会员注册流程页面
      </button>
      <button class="nav-button" @click="$router.push('/self-service')">
        自助洗车使用说明页面
      </button>
      <button class="nav-button" @click="$router.push('/registration-agreement')">
        会员注册协议页面
      </button>
      <button class="nav-button" @click="$router.push('/faq')">
        常见问题解答页面
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
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
