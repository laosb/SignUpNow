<template>
  <div class="hola-card-list-item">
    <router-link class="item" :to="{ name: routeName, query: routeQuery }">
      <span class="icon"><m-icon :name="mdIconName"></m-icon></span>
      <span class="title">{{title}}</span>
      <span class="enterable"><m-icon name="chevron_right"></m-icon></span>
    </router-link>
  </div>
</template>
<style scoped>
  .item {
    display: block;
    position: relative;
    line-height: 2rem;
    height: 2rem;
    text-decoration: none;
    color: var(--hola-text-dark-color);
  }
  .item > span {
    position: absolute;
    top: calc((2rem - 24px) / 2);
    height: 24px;
  }
  .item > .icon {
    color: var(--hola-primary-color);
  }
  .item > .title {
    font-size: 1rem;
    height: 1rem;
    line-height: 1rem;
    top: .5rem; /* calc((2rem - 1rem) / 2) */
    left: calc(24px + .5rem);
  }
  .item > .enterable {
    right: 0;
    opacity: .5;
  }
</style>
<script>
export default {
  props: {
    mdIconName: { type: String },
    iconSrc: { type: String }, // TODO: Not yet implemented
    externalUrl: { type: String }, // TODO: Not yet implemented
    routeName: { type: String },
    routeQuery: { type: Object },
    title: { type: String, required: true }
  }
}
</script>
