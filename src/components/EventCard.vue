<template>
  <router-link :to="{ name:'project_view', params: { projId: event.ProjectID } }" class="hola-columns-item">
    <div :class="`hola-card event-card ${ghostCard ? 'hola-card-ghost' : '' }`">
      <img src="@/assets/logo.svg" :alt="event.Name" class="event-logo">
      <div class="details">
        <p><b>{{event.Name}}</b></p>
        <p>{{new Date(event.HostTime * 1000).toLocaleDateString()}} @ {{event.HostLocation}}</p>
        <p>by {{event.Owner}}</p>
        <p>
          <span v-if="event.PostNum">{{event.PostNum}} 人已报名</span>
          <span v-else>暂无人报名</span>
          <span v-if="event.NeedMeet" class="hola-badge">需面试</span>
          <span v-if="event.NeedCheckIn" class="hola-badge">需签到</span>
          <span v-if="event.NeedSchedule" class="hola-badge">需课表</span>
        </p>
        <slot></slot>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'EventCard',
    props: {
      event: Object,
      ghostCard: { type: Boolean, default: false }
    },
    computed: {
      readableType () {
        return this.$store.state.config.projectTypes[this.event.Type].Name
      }
    }
  }
</script>

<style scoped>
  .hola-columns-item, .hola-columns-item * {
    text-decoration: none;
  }
  .event-card {
    display: flex;
  }
  .event-logo {
    width: 100px;
    height: 100px;
  }
  .details {
    flex-grow: 1;
  }
  .details p {
    margin-bottom: .1em;
  }
  .hola-card-ghost {
    background: transparent;
    box-shadow: none;
  }
</style>
