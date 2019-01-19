<template>
  <div class="loading-wrapper">
    <div class="loading"></div>
  </div>
</template>
<style scoped>
  @keyframes circ-anim {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    margin: 1em;
    display: inline-block;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 4px solid var(--hola-focus-color);
    border-bottom-color: var(--hola-primary-color);
    animation: circ-anim 0.7s linear infinite;
  }

  .loading-wrapper {
    text-align: center;
    padding: .5rem;
  }
</style>
<script>
export default {

}
</script>
