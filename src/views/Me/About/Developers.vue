<template>
    <div>
        <top-nav title="开发人员" :show-back="true"></top-nav>
        <div class="hola-container">
          <div class="hola-columns hola-card-stack">
            <IDCard v-for="(info, index) in developers" :info="info" :key="index"></IDCard>
          </div>
        </div>
    </div>
</template>

<script>

import devs from '@/../Devs.yml'

import IDCard from '@/components/IDCard'
import TopNav from '@/components/TopNav'

export default {
  components: {
    IDCard,
    TopNav
  },
  data () {
    return {
      developers: devs
    }
  }
}
</script>

<style lang="less" scoped>
.developers {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
}
</style>
