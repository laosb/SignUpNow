<template>
  <iconed-card
    :icon-color="iconColor"
    :icon-name="iconName"
    :title="title"
    :title-color="titleColor"
    :summary="summary"
    :available="available"
  >
    <p v-for="{title, left, right} in data" :key="title" class="item">
      <template v-if="title">
        <b :style="`color: ${titleColor};`">{{title}}</b><br>
      </template>
      <span class="left">{{left}}</span>
      <span class="right">{{right}}</span>
    </p>
    <slot name="actions" slot="actions"></slot>
  </iconed-card>
</template>
<style scoped>
  .item {
    border-bottom: 1px dashed #ccc;
    margin-bottom: .2em;
    padding-bottom: .2em;
    color: rgba(0, 0, 0, .8);
  }
  .item:after {
    content: '';
    display: block;
    clear: both;
  }
  .item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .right {
    float: right;
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
