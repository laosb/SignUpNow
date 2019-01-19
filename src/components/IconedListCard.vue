<template>
  <iconed-card
    :icon-color="iconColor"
    :icon-name="iconName"
    :title="title"
    :title-color="titleColor"
    :summary="summary"
    :available="available"
  >
    <table class="table">
      <tbody>
        <tr v-for="(row, i) in data" :key="i">
          <td v-for="(cell, i) in row" :key="i">{{cell}}</td>
        </tr>
      </tbody>
    </table>
  </iconed-card>
</template>
<style scoped>
  .table {
    margin-left: calc(var(--hola-card-padding) - 4em);
  }
</style>
<script>
import IconedCard from './IconedCard'

export default {
  components: { IconedCard },
  props: {
    iconName: { type: String },
    iconColor: { type: String, default: '#3498db' },
    titleColor: { type: String },
    title: { type: String },
    summary: { type: String },
    data: { type: Array },
    available: { type: Boolean, default: false}
  }
}
</script>
