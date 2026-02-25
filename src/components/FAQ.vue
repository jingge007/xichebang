<template>
  <div class="faq-page">
    <div class="container">
      <h1>常见问题解答</h1>
      
      <div class="faq-item">
        <div class="faq-question">如何启动洗车机？</div>
        <div class="faq-answer">您需要先注册并充值50元或以上金额，然后扫描洗车机上的二维码来启动机器。</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">充值后余额如何使用？</div>
        <div class="faq-answer">充值后的余额将会自动添加到您的账户中，您可以随时使用余额进行洗车支付。</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">赠送金有有效期吗？</div>
        <div class="faq-answer">赠送金有有效期。有效期为赠送之日起2年，过期未消费的赠送金将清零。</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">是否可以退款或逆向兑换余额或赠送金？</div>
        <div class="faq-answer">我们不提供任何退款或逆向兑换服务，充值的余额和赠送金只能用于洗车消费。</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">如何暂停洗车过程？</div>
        <div class="faq-answer">当您暂停使用时，请点击除了结算按钮之外的任何按钮进行暂停，避免继续扣费。</div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">目前有哪些洗车站点？</div>
        <div class="faq-answer">目前我们仅在靖西市（民族综合市场）设有洗车站点。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style lang="less" scoped>
.faq-page {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  
  .container {
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    
    h1 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
      color: #117aff;
    }
    
    .faq-item {
      margin-bottom: 15px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      
      .faq-question {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        padding: 10px 0;
      }
      
      .faq-answer {
        font-size: 14px;
        color: #555;
        padding-left: 20px;
        margin-top: 10px;
      }
    }
  }
}

/* 响应式设计 */
@media (max-width: 767px) {
  .faq-page {
    .container {
      h1 {
        font-size: 22px;
      }
      
      .faq-item {
        .faq-question {
          font-size: 15px;
        }
        
        .faq-answer {
          font-size: 13px;
          padding-left: 15px;
        }
      }
    }
  }
}
</style>