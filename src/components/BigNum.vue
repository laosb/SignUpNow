<template>
  <div class="num-wrapper" :style="`color: ${color};`">
    <span class="num">{{num}}<span class="unit">{{unit}}</span></span>
    <span class="name">{{name}}&nbsp;</span>
  </div>
</template>
<style scoped>
  .num-wrapper {
    display: inline-block;
    font-weight: bold;
    opacity: .8;
    color: var(--hola-primary-color);
    margin-right: 1em;
  }
  .num {
    display: block;
    font-size: 2.4em;
    margin-bottom: -.5rem;
  }
  .unit {
    font-size: 1.3rem;
  }
  .name {
    font-size: .8rem;
    font-weight: normal;
    color: rgba(0, 0, 0, .8);
  }
</style>
<script>
export default {
  props: {
    name: { type: String },
    num: { type: [Number, String] },
    unit: { type: String, default: '' },
    color: { type: String }
  }
}
</script>
