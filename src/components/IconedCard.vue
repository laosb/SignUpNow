<template>
  <div class="hola-card">
    <div v-if="title" class="title-line">
      <div class="icon-wrapper" :style="`background: ${iconColor};`">
        <span class="icon"><m-icon :name="iconName" size="24"></m-icon></span>
      </div>
      <h4 :style="`color: ${titleColor};`">
        {{title}}<span class="summary">{{summary}}</span>
      </h4>
      <slot name="actions"></slot>
    </div>
    <slot v-if="available"/>
    <p v-else class="not-available" :style="`color: ${titleColor};`">本模块目前不可用。</p>
  </div>
</template>
<style scoped>
  .hola-card {
    position: relative;
  }
  .icon-wrapper {
    display: block;
    color: #fff;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    text-align: center;
    margin-right: .7rem;
  }
  .icon {
    display: inline-block;
    margin: calc((32px - 24px) / 2);
  }
  .title-line {
    display: flex;
    align-items: center;
    margin-bottom: .5em;
  }
  .title-line h4 {
    flex-grow: 1;
  }
  .title-line .summary {
    display: block;
    font-weight: normal;
  }
  .not-available {
    text-align: center;
  }
</style>
<script>
export default {
  props: {
    iconName: { type: String },
    iconColor: { type: String, default: '#3498db' },
    title: { type: String },
    titleColor: { type: String, default: '#3498db' },
    summary: { type: String },
    available: { type: Boolean, default: true}
  }
}
</script>
