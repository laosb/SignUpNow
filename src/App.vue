<template>
  <div id="app">
    <!--<transition :name="pageTransition">-->
      <router-view class="page hola-side-view"/>
    <!--</transition>-->
    <bottom-nav></bottom-nav>
  </div>
</template>

<style>
  #app {
    --hola-primary-color: #3949ab;
    --hola-focus-color: rgba(57, 73, 171, .5);
  }
</style>

<style scoped>
/* .slide-left-leave-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-right-enter-active {
  transition: .3s ease;
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
} */
  .hola-side-view { width: 100vw; }
  @media (min-width: 700px) {
    .hola-side-view {
      position: relative;
      margin-left: calc(10rem + 1px);
      width: calc(100vw - 10rem - 1px);
      min-height: 100vh;
      z-index: 2;
      box-shadow: inset 1px 0 9px rgba(0, 0, 0, .3);
    }
  }
</style>

<script>
import BottomNav from './components/BottomNav'

export default {
  components: { BottomNav },
  // data () { return { pageTransition: 'slide-left' } },
  watch: {
    '$route' (to, from) {
    //     let toDepth = to.path.split('/').length
    //     let fromDepth = from.path.split('/').length
    //     if (toDepth === fromDepth) return (this.pageTransition = '')
    //     this.pageTransition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //     // https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%9F%BA%E4%BA%8E%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E8%BF%87%E6%B8%A1
      this.$store.commit('_clearPageInfo')
    }
  }
}
</script>
