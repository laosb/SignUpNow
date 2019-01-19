<template>
  <div class="wrapper">
    <div
      :class="{
        'top-nav': true,
        'info-open': showInfo
      }"
      :style="!$device.iOS && !$device.Smartisan && 'text-align: left;'"
    >
      <span class="back-btn" v-if="showBack" @click="$router.go(-1)">
        <m-icon :name="$device.iOS ? 'arrow_back_ios' : 'arrow_back'"></m-icon>
      </span>
      <span class="main-title">{{ title }}</span>
      <span class="info-btn" v-if="hasInfo" @click="toggleInfo">
        <m-icon name="info"></m-icon>
      </span>
      <div class="info">
        <p v-for="{info} in $store.state.infoCenter" :key="info">{{info}}</p>
      </div>
    </div>
    <div style="height: 3rem;"></div>
  </div>
</template>
<style scoped>
  .wrapper {
    width: inherit;
  }
  .top-nav {
    position: fixed;
    width: inherit;
    height: 3rem;
    background: var(--hola-primary-color);
    color: var(--hola-text-light-color);
    line-height: 3rem;
    font-size: 1.2rem;
    box-shadow: 0 10px 9px -9px rgba(0, 0, 0, .3);
    padding: 0 calc(.9rem + 24px + 1rem);
    box-sizing: border-box;
    text-align: center;
    z-index: 998;
    overflow: hidden;
    transition: .3s ease height;
  }
  .top-nav.info-open {
    height: auto;
  }
  .main-title {
    font-weight: bold;
  }
  .back-btn, .info-btn {
    position: absolute;
    display: inline-block;
    top: calc((3rem - 24px) / 2);
    line-height: 0;
  }
 .back-btn { left: .9rem; }
 .info-btn { right: .9rem; }
 .info {
   background: rgba(255, 255, 255, .7);
   color: #333;
 }
 .info p {
   padding: .3rem;
   margin: 0;
   line-height: 1.2rem;
   font-size: .8rem;
   text-align: left;
   border-top: 1px solid rgba(255, 255, 255, .3);
 }
</style>
<script>
export default {
  data () {
    return {
      showInfo: false
    }
  },
  props: {
    showBack: { type: Boolean, default: false },
    title: { type: String, default: '报名啦' }
  },
  computed: {
    hasInfo () { return this.$store.state.infoCenter.length > 0 }
  },
  methods: {
    toggleInfo () { this.showInfo = !this.showInfo }
  }
}
</script>
