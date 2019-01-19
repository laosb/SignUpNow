<template>
  <div>
    <top-nav title="隐私权" :show-back="true"></top-nav>
    <div class="hola-container">
      <div class="hola-card hola-content" v-html="content"></div>
    </div>
  </div>
</template>
<style scoped>
  .hola-container {
    margin-top: var(--hola-card-gap);
  }
</style>
<script>
import content from '@/../Privacy.md'
import TopNav from '@/components/TopNav'

export default {
  components: { TopNav },
  data () { return { content } }
}
</script>
