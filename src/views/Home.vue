<template>
  <div class="home">
    <top-nav>
      <tab-switch :tabs="tabs" @tabchange="typeChange"></tab-switch>
    </top-nav>
    <div class="hola-container">
      <div class="hola-columns hola-card-stack">
        <div v-if="loading" class="hola-columns-item">
          <div class="hola-card">
            <loading-component></loading-component>
          </div>
        </div>
        <event-card
                v-else
                v-for="event in events"
                :key="event.ProjectID"
                :event="event"
        ></event-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home {
    min-height: 100vh;
  }
</style>

<script>
import { apiGet } from '@/api'

import TopNav from '@/components/TopNav'
import TabSwitch from '@/components/TabSwitch'
import EventCard from '@/components/EventCard'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'home',
  components: {
    TopNav,
    LoadingComponent,
    TabSwitch,
    EventCard
  },
  data () {
    return {
      tabs: [],
      events: [],
      currentType: '',
      loading: true,
      errorOccurred: false
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
    this.currentType = tabs[0].id
    this.typeChange(this.currentType)
  },
  methods: {
    async typeChange (type) {
      let actuallyDone = false
      let fakeLoadExpired = false
      this.loading = true

      // Fake long loading time is set here to prevent visual flicking on switching tabs.

      setTimeout(() => {
        if (actuallyDone) this.loading = false
        fakeLoadExpired = true
      }, 250)

      try {
        const { data } = await apiGet('/projects', { params: { type } })
        this.events = data
      } catch (e) {
        this.loading = false
        return (this.errorOccurred = true)
      }
      actuallyDone = true
      if (fakeLoadExpired) this.loading = false
    }
  }
}
</script>
