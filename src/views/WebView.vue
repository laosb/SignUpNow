<template>
  <div>
    <top-nav :title="title" :show-back="true"></top-nav>
    <iframe
            class="iframe"
            ref="iframe"
            :src="src"
            @load="frameLoad"
            frameborder="0"

    ></iframe>
  </div>
</template>
<style scoped>
.iframe {
  width: 100%;
  height: calc(100vh - 3rem);
}
</style>
<script>
import TopNav from '@/components/TopNav'

export default {
  components: { TopNav },
  data () {
    return {
      src: this.$route.query.target,
      title: ''
    }
  },
  computed: {
    errorNum () {
      const matchRes = this.$route.query.error.match(/^HDUHELP([0-9]+): /)
      return matchRes ? parseInt(matchRes[1], 10) : null
    }
  },
  methods: {
    frameLoad () {
      try {
        const frameWindow = this.$refs.iframe.contentWindow
        this.title = (frameWindow.document && frameWindow.document.title) ? frameWindow.document.title : ''
        if (frameWindow.location.hostname === window.location.hostname) window.location = frameWindow.location
      } catch (e) {
        // We're ignoring all errors there cause we all know there will be errors in case it's on foreign domains.
        // Keep calm we don't need to do anything on that pages. Actually we could do nothing.
      }
    }
  }
}
</script>
