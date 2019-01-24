<template>
  <div class="wrapper">
    <div
      class="top-nav"
      :style="!$device.iOS && !$device.Smartisan && 'text-align: left;'"
      ref="topnav"
    >
      <span class="back-btn" v-if="showBack" @click="$router.go(-1)">
        <m-icon :name="$device.iOS ? 'arrow_back_ios' : 'arrow_back'"></m-icon>
      </span>
      <span class="main-title">{{ title }}</span>
      <div class="outside">
        <slot></slot>
      </div>
    </div>
    <div :style="`height: ${navOffsetHeight}px;`"></div>
  </div>
</template>
<style scoped>
  .wrapper {
    width: inherit;
  }
  .top-nav {
    position: fixed;
    width: inherit;
    height: auto;
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
  .main-title {
    font-weight: bold;
  }
  .back-btn {
    position: absolute;
    display: inline-block;
    top: calc((3rem - 24px) / 2);
    line-height: 0;
  }
 .back-btn { left: .9rem; }
</style>
<script>
export default {
  data () {
    return {
      navOffsetHeight: 48
    }
  },
  props: {
    showBack: { type: Boolean, default: false },
    title: { type: String, default: '报名啦' }
  },
  methods: {
    updateOffsetHeight () {
      this.navOffsetHeight = this.$refs.topnav.clientHeight;
    }
  },
  mounted () {
    this.updateOffsetHeight()
  }
}
</script>
