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
    
    <div class="section-row">
      <div class="info-card green-bg">
        <h2 class="card-title">自助洗车使用流程</h2>
        <ul class="usage-process">
          <li>
            <div class="num">1</div>
            <div class="text">
              <h3>用户</h3>
              <p>使用微信扫一扫设备的洗车二维码</p>
            </div>
          </li>
          <li>
            <div class="num">2</div>
            <div class="text">
              <h3>冲水</h3>
              <p>按冲水键后取冲水枪，向车身冲水、去渍</p>
            </div>
          </li>
          <li>
            <div class="num">3</div>
            <div class="text">
              <h3>泡沫</h3>
              <p>按泡沫键后取泡沫枪，向车身喷洒泡沫，用洗车刷或海绵擦拭车身漆面、污渍</p>
            </div>
          </li>
          <li>
            <div class="num">4</div>
            <div class="text">
              <h3>冲水</h3>
              <p>按冲水键后取回冲水枪，将车身泡沫冲洗干净</p>
            </div>
          </li>
          <li>
            <div class="num">5</div>
            <div class="text">
              <h3>吸尘</h3>
              <p>取吸尘管在车里或者后备箱清扫脚垫和面板的灰尘</p>
            </div>
          </li>
          <li>
            <div class="num">6</div>
            <div class="text">
              <h3>洗手</h3>
              <p>清洗手套、并归还水枪毛巾、洗车工具等放置指定位置</p>
            </div>
          </li>
          <li>
            <div class="num">7</div>
            <div class="text">
              <h3>结算</h3>
              <p>完成洗车后，按结算键进行本次洗车费用结算，结束洗车流程</p>
            </div>
          </li>
        </ul>
        <div class="qrCode_box">
          <div class="carWashCode">
            <img :src="carWashCodeImage" alt="洗车码" class="qr-code-image-bottom">
          </div>
          <!-- 二维码图片 -->
          <div class="qr-code-section-bottom">
            <img :src="wechatQRCodeImage" alt="扫码公众号关注">
          </div>
        </div>
      </div>
      <div class="info-card green-bg">
        <h2 class="card-title">自助洗车温馨提示</h2>
        <div class="tips-content">
          <p class="greeting">欢迎使用喜车邦24小时自助洗车！</p>
          <p class="intro-text">共享洗车机按流量和时间计费，用一元扣一元。注册充值后余额可自由使用，但不会提供退还或逆向兑换服务。</p>

          <p class="section-title"><strong>重要提醒：</strong></p>
          <ul>
            <li>暂停使用时请点击除结算按钮外的任何按钮进行暂停，否则会继续扣费</li>
            <li>用不完的余额在点击结算按钮后自动退回洗车账户，下次可直接扫码使用</li>
            <li>充值剩余余额不支持退款，只能在本店使用完</li>
            <li>24小时实时监控，禁止停车过夜违者后果自负</li>
          </ul>

          <p class="section-title"><strong>充值说明：</strong></p>
          <ul>
            <li>新用户注册最低充值50元（可选50元、100元、200元等）</li>
            <li>充值面额会随市场行情调整，以手机显示为准</li>
          </ul>

          <p class="section-title"><strong>赠送金规则：</strong></p>
          <ul>
            <li>赠送金有效期为两年（自赠送之日起计算）</li>
            <li>充值100、150元赠送金有效期一年，200元以上两年</li>
            <li>赠送金仅限本店消费使用，不提供退还或逆向兑换服务</li>
            <li>扣款优先扣除用户余额，余额用完后才扣除赠送金</li>
          </ul>

          <p class="section-title"><strong>其他说明：</strong></p>
          <ul>
            <li>目前仅靖西市(民族综合市场)一个洗车站点</li>
            <li>注册成功后需先充值才能扫码启动机器洗车</li>
            <li>如有问题请咨询在线客服！</li>
          </ul>
        </div>
      </div>
    </div>
    <!--4.海报生成按钮和二维码切换按钮 -->
    <div class="poster-button-container">
      <div class="button-group" v-if="!isGeneratingPoster">
        <div class="qr-code-switcher">
          <button
            v-for="i in 3"
            :key="'car-' + i"
            @click="switchQRCode(i)"
            :class="{ active: currentQRCode === i }"
            class="qr-switch-btn"
          >
            洗车二维码{{ i }}
          </button>
        </div>
        <div class="wechat-qr-code-switcher">
          <button
            v-for="i in 2"
            :key="'wechat-' + i"
            @click="switchWechatQRCode(i)"
            :class="{ active: currentWechatQRCode === i }"
            class="wechat-qr-switch-btn"
          >
            微信二维码{{ i }}
          </button>
        </div>
        <button @click="$emit('back')" class="back-button">返回主页</button>
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

// 预先导入所有图片资源
import carWashCode01 from '@/assets/images/carWashCode_01.jpg';  // 洗车二维码1
import carWashCode02 from '@/assets/images/carWashCode_02.jpg';  // 洗车二维码2
import carWashCode03 from '@/assets/images/carWashCode_03.jpg';  // 洗车二维码3
import wechatQRCode01 from '@/assets/images/wechatQRCode_01.png';  // 微信二维码1
import wechatQRCode02 from '@/assets/images/wechatQRCode_02.png';  // 微信二维码2

export default {
  name: "SelfServiceCarWash",
  data() {
    return {
      isGeneratingPoster: false,
      currentQRCode: 1, // 默认显示第一张洗车二维码
      currentWechatQRCode: 1 // 默认显示第一张微信二维码
    };
  },
  computed: {
    carWashCodeImage() {
      switch (this.currentQRCode) {
        case 1:
          return carWashCode01;
        case 2:
          return carWashCode02;
        case 3:
          return carWashCode03;
        default:
          return carWashCode01;
      }
    },
    wechatQRCodeImage() {
      switch (this.currentWechatQRCode) {
        case 1:
          return wechatQRCode01;
        case 2:
          return wechatQRCode02;
        default:
          return wechatQRCode01;
      }
    }
  },
  methods: {
    // 切换洗车二维码
    switchQRCode(index) {
      this.currentQRCode = index;
    },

    // 切换微信二维码
    switchWechatQRCode(index) {
      this.currentWechatQRCode = index;
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
          // 创建下载链接
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `喜车邦自助洗车使用说明海报_洗车码${this.currentQRCode}_微信码${this.currentWechatQRCode}.png`;
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

/* 使用流程 */
.usage-process {
  list-style-type: none;
  padding-left: 30px;
  position: relative;
  margin: 20px 0; // 减小整体上下边距

  // 绘制时间线
  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 15px;
    bottom: 15px;
    width: 2px;
    background-color: white;
  }

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px; // 减小列表项间距
    position: relative;
  }

  .num {
    width: 30px;
    height: 30px;
    background-color: @white;
    border: 2px solid @primary-color;
    color: @primary-color;
    border-radius: @border-radius-circle;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    flex-shrink: 0;
    margin-right: 15px;
    position: relative;
    left: -29px;
    z-index: 1;
  }

  .text {
    color: @text-color;

    h3 {
      font-size: 16px;
      font-weight: bold;
      margin: 0 0 6px; // 减小标题和段落间距
    }

    p {
      font-size: 14px;
      margin: 0;
      line-height: 1.5; // 调整行高
    }
  }
}

/* 温馨提示卡片 */
.tips-content {
  color: @text-color-light;
  font-size: 14px;

  ul {
    padding-left: 20px;
    line-height: 1.8;
    margin: 10px 0 20px 0;
  }

  li {
    margin-bottom: 8px;
  }

  .greeting {
    font-weight: bold;
  }

  .intro-text {
    /*margin-bottom: 25px;*/
  }

  .section-title {
    margin: 25px 0 10px 0;
  }

  ol {
    padding-left: 20px;
    line-height: 1.8;
  }

  .closing {
    margin-top: 15px;
    text-align: center;
  }
}

/* 底部二维码样式 */
.qrCode_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;

  .carWashCode img {
    width: 138px;
    height: 150px;
    display: inline-block;
  }

  .qr-code-section-bottom img {
    width: 411px;
    height: 150px;
    display: inline-block;
  }
}
</style>