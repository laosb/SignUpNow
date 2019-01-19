<template>
  <div>
    <top-nav title="反馈" :show-back="true"></top-nav>
    <div class="feedback">
      <p>
        <b>反馈 bug 或提出建议</b><br>
        您可以通过以下渠道向我们反馈：<br>
      </p>
      <a
              href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=[REDACTED]&card_type=group&source=external"
              class="hola-button hola-button-primary"
      >QQ 反馈群</a>&nbsp;
      <p>若点击该按钮没有反应，请复制群号：<br><b>[REDACTED]</b><br>并手动申请入群。</p>
    </div>
  </div>
</template>
<style scoped>
  .feedback {
    text-align: center;
    margin: 40vh 2em;
  }
</style>
<script>
import TopNav from '@/components/TopNav'

export default {
  components: { TopNav }
}
</script>
