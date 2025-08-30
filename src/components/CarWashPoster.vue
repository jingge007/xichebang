<template>
  <div class="car-wash-page" ref="carWashPage">
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
            <img :src="require('@/assets/images/register_01.png')" alt="注册步骤1">
          </div>
          <div class="step-description">微信扫描墙上二维码关注公众号</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤二</div>
          <div class="phone-mockup-image">
            <img :src="require('@/assets/images/register_02.png')" alt="注册步骤2">
          </div>
          <div class="step-description">进入公众号后点击会员注册</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤三</div>
          <div class="phone-mockup-image">
            <img :src="require('@/assets/images/register_03.png')" alt="注册步骤3">
          </div>
          <div class="step-description">输入相关信息注册会员</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤四</div>
          <div class="phone-mockup-image">
            <img :src="require('@/assets/images/register_04.png')" alt="注册步骤4">
          </div>
          <div class="step-description">注册成功后进入个人中心点击充值</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤五</div>
          <div class="phone-mockup-image">
            <img :src="require('@/assets/images/register_05.png')" alt="注册步骤5">
          </div>
          <div class="step-description">选择充值套餐并完成支付</div>
        </div>
        <div class="arrow">→</div>
        <div class="flow-step">
          <div class="step-number">步骤六</div>
          <div class="phone-mockup-image">
            <img :src="require('@/assets/images/register_06.png')" alt="注册步骤6">
          </div>
          <div class="step-description">微信扫描洗车码开始洗车服务</div>
        </div>
      </div>
    </div>
    <!--3.使用流程与收费标准 -->
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
            <img :src="require(`@/assets/images/carWashCode_0${currentQRCode}.jpg`)" alt="洗车码" class="qr-code-image-bottom">
          </div>
          <!-- 二维码图片 -->
          <div class="qr-code-section-bottom">
            <img :src="require(`@/assets/images/wechatQRCode_0${currentWechatQRCode}.png`)" alt="扫码注册">
          </div>
        </div>
      </div>
      <div class="info-card green-bg">
        <h2 class="card-title">自助洗车温馨提示</h2>
        <div class="tips-content">
          <p class="greeting">欢迎使用喜车邦24小时自助洗车！</p>
          <p>共享洗车机按流量和时间计费，用一元扣一元。注册充值后余额可自由使用，但不会提供退还或逆向兑换服务。</p>

          <p><strong>重要提醒：</strong></p>
          <ul>
            <li>暂停使用时请点击除结算按钮外的任何按钮进行暂停，否则会继续扣费</li>
            <li>用不完的余额在点击结算按钮后自动退回洗车账户，下次可直接扫码使用</li>
            <li>充值剩余余额不支持退款，只能在本店使用完</li>
            <li>24小时实时监控，禁止停车过夜违者后果自负</li>
          </ul>

          <p><strong>充值说明：</strong></p>
          <ul>
            <li>新用户注册最低充值50元（可选50元、100元、200元等）</li>
            <li>充值面额会随市场行情调整，以手机显示为准</li>
          </ul>

          <p><strong>赠送金规则：</strong></p>
          <ul>
            <li>赠送金有效期为两年（自赠送之日起计算）</li>
            <li>充值100、150元赠送金有效期一年，200元以上两年</li>
            <li>赠送金仅限本店消费使用，不提供退还或逆向兑换服务</li>
            <li>扣款优先扣除用户余额，余额用完后才扣除赠送金</li>
          </ul>

          <p><strong>其他说明：</strong></p>
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
        <button @click="generatePoster" class="generate-poster-btn">生成海报</button>
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
      currentQRCode: 1, // 默认显示第一张洗车二维码
      currentWechatQRCode: 1 // 默认显示第一张微信二维码
    };
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
      const button = document.querySelector('.poster-button-container');
      button.style.display = 'none';

      // 等待DOM更新后再生成海报
      this.$nextTick(() => {
        const element = this.$refs.carWashPage;

        html2canvas(element, {
          scale: 2, // 提高清晰度
          useCORS: true, // 允许跨域图片
          backgroundColor: '#f0f2f5', // 设置背景色
          scrollX: 0,
          scrollY: 0
        }).then(canvas => {
          // 创建下载链接
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `喜车邦自助洗车海报_洗车码${this.currentQRCode}_微信码${this.currentWechatQRCode}.png`;
          link.click();

          // 恢复按钮显示和状态
          button.style.display = 'block';
          this.isGeneratingPoster = false;
        }).catch(error => {
          console.error('生成海报失败:', error);
          alert('生成海报失败，请重试');
          // 确保恢复按钮显示和状态
          button.style.display = 'block';
          this.isGeneratingPoster = false;
        });
      });
    }
  }
};
</script>

<style scoped>
/* 全局和基础样式 */
.car-wash-page {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f0f2f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 100%;
  position: relative;
  min-width: 1200px;
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

/* 顶部横幅 */
.header-banner {
  background-color: #0052d9;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border-radius: 8px;
  height: 60px;
  min-width: 800px;
}

.header-service-info {
  margin-left: auto;
  text-align: right;
}

.service-hours {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #F8EE03;
}

.service-types {
  font-size: 14px;
}

.logo-image {
  height: 50px;
  margin-right: 15px;
}

.logo-image img {
  height: 100%;
  border-radius: 50%;
  border: 3px solid white;
}

.header-banner .title {
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 4px;
  white-space: nowrap;
  margin: 0 15px;
}

/* 信息卡片通用样式 */
.info-card,
.green-bg {
  padding: 20px;
  border-radius: 10px;
  color: #333;
  background: linear-gradient(135deg, #7dedb8, #47bde8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  display: inline-block;
  background-color: #0052d9;
  color: white;
  padding: 8px 25px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px;
  border: 2px solid white;
  margin: -35px auto 15px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* 温馨提示卡片 */
.tips-content {
  color: #3e3e3e;
  font-size: 14px;
}

.tips-content ul {
  padding-left: 20px;
  line-height: 1.8;
  margin: 10px 0;
}

.tips-content li {
  margin-bottom: 8px;
}

.tips-content .greeting {
  font-weight: bold;
  margin-bottom: 10px;
}

.tips-content ol {
  padding-left: 20px;
  line-height: 1.8;
}

.tips-content li {
  margin-bottom: 8px;
}

.tips-content .closing {
  margin-top: 15px;
  text-align: center;
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
}

/* 海报模式下的注册流程 */
.flow-steps.for-poster {
  flex-wrap: wrap;
  overflow-x: visible;
  justify-content: center;
}

.flow-steps.for-poster .flow-step {
  min-width: 200px;
  flex: 1;
  margin: 0 10px 30px 10px;
}

.flow-steps.for-poster .arrow {
  display: none;
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  margin-bottom: 30px;
  flex-shrink: 0;
}

.step-number {
  background-color: white;
  color: #0052d9;
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

.arrow {
  font-size: 40px; /* 增大箭头字体大小 */
  color: white;
  margin: 0 15px; /* 增加左右间距 */
  align-self: center;
  font-weight: bold; /* 加粗箭头 */
  line-height: 1; /* 调整行高 */
}

/* 底部二维码样式 */
.qrCode_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
}

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

/* 图片注册流程 */
.phone-mockup-image {
  width: 240px;
  height: 514px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-mockup-image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 30px;
  overflow: hidden;
}

/* 使用流程 */
.usage-process {
  list-style-type: none;
  padding-left: 30px;
  position: relative;
}

/* 绘制时间线 */
.usage-process::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 15px;
  bottom: 15px;
  width: 2px;
  background-color: white;
}

.usage-process li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;
}

.usage-process .num {
  width: 30px;
  height: 30px;
  background-color: white;
  border: 2px solid #0052d9;
  color: #0052d9;
  border-radius: 50%;
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

.usage-process .text {
  color: #333;
}

.usage-process .text h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px;
}

.usage-process .text p {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

/* 海报生成按钮样式 - 悬浮固定在底部 */
.poster-button-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

/* 按钮组水平排列 */
.button-group {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* 二维码切换按钮样式 */
.qr-code-switcher,
.wechat-qr-code-switcher {
  display: flex;
  gap: 5px;
}

.qr-switch-btn,
.wechat-qr-switch-btn {
  background-color: #0052d9;
  color: white;
  border: none;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.qr-switch-btn:hover,
.wechat-qr-switch-btn:hover {
  background-color: #003a99;
}

.qr-switch-btn.active,
.wechat-qr-switch-btn.active {
  background-color: #F8EE03;
  color: #0052d9;
  font-weight: bold;
}

.generate-poster-btn {
  background-color: #0052d9;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.generate-poster-btn:hover {
  background-color: #003a99;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>