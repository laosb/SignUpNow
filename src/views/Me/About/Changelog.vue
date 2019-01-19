<template>
  <div>
    <top-nav title="更新历史" :show-back="true"></top-nav>
    <div class="hola-container">
      <div class="hola-columns hola-card-stack">
        <div v-for="(updates, version) in history" :key="version" class="hola-columns-item">
          <div class="hola-card">
            <h3 class="hola-card-title">{{version}}</h3>
            <ul>
              <li v-for="update in updates" :key="update">{{update}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hola-card-stack {
    margin-top: var(--hola-card-gap);
  }
</style>
<script>
import history from '@/../History.yml'
import TopNav from '@/components/TopNav'

export default {
  components: { TopNav },
  data () { return { history } }
}
</script>
