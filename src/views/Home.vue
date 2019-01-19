<template>
  <div class="home">
    <top-nav></top-nav>

  </div>
</template>

<style scoped>
  .home {
    min-height: 100vh;
  }
</style>

<script>
// import { apiGet } from '@/api'

import TopNav from '@/components/TopNav'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'home',
  components: {
    TopNav,
    LoadingComponent
  },
  data () {
    return {

    }
  },
  async created () {
    try {
    } catch (e) {
      this.loading = false
      return (this.errorOccured = true)
    }

    this.loading = false
  }
}
</script>
