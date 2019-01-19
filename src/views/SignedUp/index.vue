<template>
  <div>
    <top-nav title="已报名"></top-nav>
    <div class="hola-container">
      <!-- <grouped-list>
        <grouped-list-item title="资讯" md-icon-name="event_note"/>
      </grouped-list> -->
    </div>
  </div>
</template>
<style scoped>
  .hola-card-stack {
    margin-top: var(--hola-card-gap);
  }
</style>
<script>
import TopNav from '@/components/TopNav'
import GroupedList from '@/components/GroupedList'
import GroupedListItem from '@/components/GroupedListItem'

export default {
  components: {
    TopNav,
    GroupedList,
    GroupedListItem
  }
}
</script>
