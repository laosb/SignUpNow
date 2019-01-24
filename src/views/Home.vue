<template>
  <div class="home">
    <top-nav>
      <tab-switch :tabs="tabs"></tab-switch>
    </top-nav>
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
import TabSwitch from '@/components/TabSwitch'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'home',
  components: {
    TopNav,
    LoadingComponent,
    TabSwitch
  },
  data () {
    return {
      tabs: []
    }
  },
  async created () {
    const tabs = []
    const config = this.$store.state.config
    Object.keys(config.projectTypes).forEach(type => {
      tabs.push({
        id: type,
        name: config.projectTypes[type].Name
      })
    })
    this.tabs = tabs

    try {
    } catch (e) {
      this.loading = false
      return (this.errorOccured = true)
    }

    this.loading = false
  }
}
</script>
