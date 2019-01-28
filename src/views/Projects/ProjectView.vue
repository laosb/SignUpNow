<template>
  <div>
    <top-nav :title="project.Name"></top-nav>
    <div class="hola-hero hola-hero-dark-bg hola-hero-colored hola-hero-height-extended home-hero">
      <div class="hola-container hola-hero-content">
        <event-card ghost-card :event="project">
          <template v-if="hasDepts">
            <p>{{desc}}</p>
          </template>
        </event-card>
      </div>
    </div>
    <div class="hola-container">
      <div v-if="hasDepts" class="hola-columns hola-card-stack">
        <div v-for="deptInst in dept" key="deptInst.DeptID" class="hola-columns-item">
          <div class="hola-card">
            <img src="@/assets/logo.svg" :alt="event.Name" class="dept-logo">
            <div class="details">
              <p><b>{{deptInst.Name}}</b></p>
              <p v-if="deptInst.Desc">{{deptInst.Desc}}</p>
              <p v-if="deptInst.Need"><b>要求：</b>{{deptInst.Need}}</p>
              <p>
                <span v-if="deptInst.PostNum">{{deptInst.PostNum}} 人已报名，</span><!--
                --><span>计划 {{deptInst.RequireNum}} 人，最多 {{deptInst.MaxNum}} 人</span>
              </p>
              <p><button class="hola-button hola-button-primary">现在报名</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { apiGet } from '@/api'
  import TopNav from '@/components/TopNav'
  import EventCard from '@/components/EventCard'

  export default {
    name: 'ProjectView',
    components: {
      TopNav,
      EventCard
    },
    data () {
      return {
        project: {},
        dept: []
      }
    },
    async created () {
      const { data } = await apiGet('/project', { params: { ProjectID: this.$route.params.projId } })
      this.project = data.project
      this.dept = data.dept
    },
    computed: {
      hasDepts () {
        return this.dept.length > 1
      }
    }
  }
</script>

<style scoped>

</style>
