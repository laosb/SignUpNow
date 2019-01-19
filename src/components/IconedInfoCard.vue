<template>
  <!-- For icons, use color from Material Color A400;
  For Big Nums, use color from Material Color 800;
  Two colors must be in the same row. -->
  <iconed-card
    :icon-color="iconColor"
    :icon-name="iconName"
    :title="title"
    :title-color="titleColor"
    :available="available"
  >
    <p style="color: rgba(0, 0, 0, .8)">{{info}}</p>
    <slot name="actions" slot="actions"></slot>
  </iconed-card>
</template>
<script>
import IconedCard from './IconedCard'

export default {
  components: { IconedCard },
  props: {
    iconName: { type: String },
    iconColor: { type: String, default: '#3498db' },
    titleColor: { type: String },
    title: { type: String },
    info: { type: String },
    available: { type: Boolean, default: false}
  }
}
</script>
