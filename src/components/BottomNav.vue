<template>
  <div>
    <div v-if="!inSubApp" class="hola-bottomnav-fix"></div>
    <ul class="bottom-nav" :in-sub-app="inSubApp" :is-smartisan="$device.Smartisan">
    <li>
      <router-link :to="{ name: 'home' }" active-class="hola-bottomnav-active" exact replace>
        <m-icon name="explore" size="28"></m-icon>
        <span>活动</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'notifications' }" active-class="hola-bottomnav-active" replace>
        <m-icon name="message" size="28"></m-icon>
        <span>通知</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'signed_up' }" active-class="hola-bottomnav-active" replace>
        <m-icon name="inbox" size="28"></m-icon>
        <span>已报名</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'me' }" active-class="hola-bottomnav-active" replace>
        <m-icon name="person" size="28"></m-icon>
        <span>我</span>
      </router-link>
    </li>
  </ul>
  </div>
</template>
<style scoped>
  ul.bottom-nav {
    display: flex;
    position: fixed;
    width: 100%;
    height: 3.5rem;
    bottom: 0;
    line-height: 3.5rem;
    font-size: .7rem;
    background: #fff;
    box-shadow: 0 0 9px rgba(0, 0, 0, .3);
    text-align: center;
    transition: .3s transform ease;
    transform: translateY(0);
  }
  ul.bottom-nav[in-sub-app] {
    transform: translateY(5rem);
  }
  ul.bottom-nav li a {
    padding-top: .3rem;
  }
  ul.bottom-nav li, ul.bottom-nav li a {
    color: rgba(0, 0, 0, .5);
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    flex-grow: 1;
  }
  ul.bottom-nav li, ul.bottom-nav li a.hola-bottomnav-active {
    color: var(--hola-primary-color);
  }
  ul.bottom-nav li a span {
    display: block;
    line-height: 1em;
    margin-top: -1.4rem;
    font-weight: bold;
  }
  @media (max-width: 700px) {
    ul.bottom-nav[is-smartisan] li a span {
      margin-top: -1.5rem;
      font-weight: 600;
      /* Workaround: Blink browsers don't allow text to be that small. */
      transform: scale(.8);
    }
  }
  @media (min-width: 700px) {
    ul.bottom-nav {
      display: inline-block;
      width: calc(10rem + 1px);
      height: 100vh;
      top: 0;
      left: 0;
      box-shadow: inset -1px 0 0 rgba(255, 255, 255, .5), inset 1px 0 0 rgba(255, 255, 255, .5);
      background: var(--hola-primary-color);
      text-align: left;
      overflow: hidden;
      z-index: 1;
    }
    ul.bottom-nav[in-sub-app] {
      transform: none;
    }
    ul.bottom-nav::before {
      content: '';
      display: block;
      height: 3rem;
      margin-bottom: 1rem;
    }
    ul.bottom-nav li {
      display: block;
      font-weight: bold;
      height: 3rem;
    }
    ul.bottom-nav li a {
      display: flex;
      align-items: center;
      width: auto;
      padding: 0 1rem;
      height: 3rem;
      color: var(--hola-text-light-color);
    }
    ul.bottom-nav li a.hola-bottomnav-active {
      box-shadow: inset 10rem 0 0 rgba(255, 255, 255, .2), inset 5px 0 0 var(--hola-text-light-color);
      color: var(--hola-text-light-color);
    }
    ul.bottom-nav li a span {
      display: inline-block;
      margin-top: inherit;
      line-height: 3rem;
      height: 3rem;
      transform: none;
      font-weight: inherit;
    }
    ul.bottom-nav li a span:nth-child(2) {
      font-size: 1rem;
      padding-left: .8rem;
    }
  }
  .hola-bottomnav-fix {
    height: 3.8rem;
  }
  @media (min-width: 700px) {
    .hola-bottomnav-fix { display: none; }
  }
</style>

<script>
export default {
  computed: {
    inSubApp () { return this.$route.name && !['home', 'discover', 'me'].includes(this.$route.name) }
  }
}
</script>
