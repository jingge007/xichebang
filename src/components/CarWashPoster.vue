<template>
  <div class="car-wash-page" :class="{ 'generating-poster': isGeneratingPoster }" ref="carWashPage">
    <!--1.顶部横幅 -->
    <div class="section header-banner">
      <div class="logo-image">
        <img :src="require('@/assets/images/xichebang_logo.jpg')" alt="喜车帮logo">
      </div>
      <h1 class="title">喜车邦24小时自助洗车店</h1>
      <div class="header-service-info">
        <div class="service-hours">24HOURS 一站式服务</div>
        <div class="service-types">清水/泡沫/吸尘/洗手</div>
      </div>
    </div>
    <!--2.图文注册流程 -->
    <div class="section green-bg">
      <h2 class="card-title">新会员手机注册流程</h2>
      <div class="flow-steps" :class="{ 'for-poster': isGeneratingPoster }">
        <div class="flow-step">
          <div class="step-number">步骤一</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_01.png')" alt="注册步骤1">
            <!-- 公众号二维码展示区域 -->
            <div class="official-account-qrcode-container">
              <img 
                :src="require('@/assets/images/qrCodeOfOfficialAccount.jpg')" 
                alt="公众号二维码" 
                class="official-account-qrcode-image"
              >
            </div>
          </div>
          <div class="step-description">微信扫描墙上二维码关注公众号</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤二</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_02.png')" alt="注册步骤2">
          </div>
          <div class="step-description">进入公众号后点击会员注册</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤三</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_03.png')" alt="注册步骤3">
          </div>
          <div class="step-description">输入相关信息注册会员</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤四</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_04.png')" alt="注册步骤4">
          </div>
          <div class="step-description">注册成功后进入个人中心点击充值</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤五</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_05.png')" alt="注册步骤5">
          </div>
          <div class="step-description">选择充值套餐并完成支付</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤六</div>
          <div class="phone-mockup-image">
            <img class="stepImg" :src="require('@/assets/images/register_06.png')" alt="注册步骤6">
            <!-- 洗车码展示区域 -->
            <div class="car-wash-code-container">
              <img 
                :src="currentCarWashCode" 
                alt="洗车码" 
                class="car-wash-code-image"
              >
            </div>
          </div>
          <div class="step-description">微信扫描洗车码开始洗车服务</div>
        </div>
      </div>
    </div>
    <!--4.海报生成按钮 -->
    <div class="poster-button-container">
      <div class="button-group" v-if="!isGeneratingPoster">
        <button @click="$emit('back')" class="back-button">返回主页</button>
        <!-- 洗车码切换按钮 -->
        <div class="car-wash-code-selector-inline">
          <button 
            v-for="(code, index) in carWashCodes" 
            :key="index"
            @click="selectCarWashCode(index)"
            :class="{ active: currentCodeIndex === index }"
            class="code-btn"
          >
            洗车码{{ String(index + 1).padStart(2, '0') }}
          </button>
        </div>
        <button @click="generatePoster" class="generate-poster-btn">生成海报</button>
      </div>
    </div>
    
    <!-- Loading遮罩层 -->
    <div v-if="isGeneratingPoster" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p>海报生成中...</p>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: "CarWashPage",
  data() {
    return {
      isGeneratingPoster: false,
      currentCodeIndex: 0,
      carWashCodes: [
        require('@/assets/images/carWashCode_01.jpg'),
        require('@/assets/images/carWashCode_02.jpg'),
        require('@/assets/images/carWashCode_03.jpg')
      ]
    };
  },
  computed: {
    currentCarWashCode() {
      return this.carWashCodes[this.currentCodeIndex];
    }
  },
  methods: {
    selectCarWashCode(index) {
      this.currentCodeIndex = index;
    },
    generatePoster() {
      // 设置海报生成状态
      this.isGeneratingPoster = true;

      // 隐藏按钮以避免出现在海报中
      const posterButton = document.querySelector('.poster-button-container');
      
      if (posterButton) {
        posterButton.style.display = 'none';
      }

      // 等待DOM更新后再生成海报
      this.$nextTick(() => {
        const element = this.$refs.carWashPage;

        html2canvas(element, {
          scale: 2, // 提高清晰度
          useCORS: true, // 允许跨域图片
          backgroundColor: '#f0f2f5', // 设置背景色
          scrollX: 0,
          scrollY: 0,
          ignoreElements: (element) => {
            // 忽略loading遮罩层，不将其包含在截图中
            return element.classList && element.classList.contains('loading-overlay');
          }
        }).then(canvas => {
          // 根据当前选中的洗车码生成文件名
          const codeNumber = String(this.currentCodeIndex + 1).padStart(2, '0');
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `喜车邦新会员手机注册流程海报_洗车码${codeNumber}.png`;
          link.click();

          // 恢复按钮显示和状态
          if (posterButton) {
            posterButton.style.display = 'block';
          }
          
          this.isGeneratingPoster = false;
        }).catch(error => {
          console.error('生成海报失败:', error);
          alert('生成海报失败，请重试');
          // 确保恢复按钮显示和状态
          if (posterButton) {
            posterButton.style.display = 'block';
          }
          
          this.isGeneratingPoster = false;
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/index.less";

/* 全局和基础样式 */
.car-wash-page {
  font-family: @font-family;
  background-color: @background-color;
  padding: 20px 20px 100px 20px; // 保留底部padding以避免按钮遮挡内容
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%; // 使用width而不是min-width
  position: relative;
  box-sizing: border-box;
  min-height: calc(100vh - 40px); // 减去上下padding避免滚动条
  overflow: hidden; // 隐藏溢出内容
  
  // 海报生成模式下移除底部padding
  &.generating-poster {
    padding: 20px;
    min-height: auto;
  }
}

.section, .section-row {
  width: 100%;
  max-width: 100%;
}

.section-row {
  display: flex;
  gap: 20px;
}

.section-row > * {
  flex: 1;
}

/* 图文注册流程 */
.flow-steps {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 0;
  text-align: center;
  color: white;
  flex-wrap: nowrap;
  max-width: 100%;
  overflow-x: auto;
  .scrollbar-style();
}

/* 海报模式下的注册流程 */
.flow-steps.for-poster {
  flex-wrap: wrap;
  overflow-x: visible;
  justify-content: center;

  .flow-step {
    min-width: 200px;
    flex: 1;
    margin: 0 10px 30px 10px;
  }

  .arrow {
    display: none;
  }
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  margin-bottom: 30px;
  flex-shrink: 0;

  .step-number {
    background-color: @white;
    color: @primary-color;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px 15px;
    white-space: nowrap;
  }
}

/* 添加公众号二维码相关样式 */
.official-account-qrcode-container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .official-account-qrcode-image {
    max-width: 100%;
    max-height: 100%;
  }
}

.phone-mockup-image {
  position: relative;
  width: 240px;
  height: 517px;
  margin-bottom: 10px;
  .flex-center();

  .stepImg {
    max-width: 100%;
    max-height: 100%;
    border-radius: @border-radius-large;
    overflow: hidden;
  }
}

/* 添加洗车码相关样式 */
.car-wash-code-container {
  position: absolute;
  top: 59%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .car-wash-code-image {
    max-width: 100%;
    max-height: 100%;
  }
}

.car-wash-code-selector-inline {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  .code-btn {
    padding: 6px 12px;
    border: 2px solid @primary-color;
    background-color: white;
    border-radius: 20px;
    color: @primary-color;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    
    &:hover {
      background-color: @primary-color;
      color: white;
    }
    
    &.active {
      background-color: @primary-color;
      color: white;
    }
  }
}

.car-wash-code-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
  
  .code-btn {
    padding: 6px 12px;
    border: 2px solid @primary-color;
    background-color: white;
    border-radius: 20px;
    color: @primary-color;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: @primary-color;
      color: white;
    }
    
    &.active {
      background-color: @primary-color;
      color: white;
    }
  }
}

/* 海报模式下隐藏洗车码切换按钮 */
.generating-poster .car-wash-code-selector {
  display: none;
}

.arrow {
  font-size: 40px;
  color: white;
  margin: 0 15px;
  align-self: center;
  font-weight: bold;
  line-height: 1;
}

/* 注册流程步骤描述 */
.step-description {
  color: black;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-weight: bold;
}
</style>