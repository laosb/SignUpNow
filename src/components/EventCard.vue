<template>
  <div class="hola-columns-item">
    <div class="hola-card event-card">
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventCard',
    props: {
      event: Object
    },
    computed: {
      readableType () {
        return this.$store.state.config.projectTypes[this.event.Type].Name
      }
    }
  }
</script>

<style scoped>
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
</style>
