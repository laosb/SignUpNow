<template>
  <div class="tab-container">
    <a href="#" class="tab-item" @click.prevent="switchTab(tab)" v-for="tab in tabs" :key="tab.id" :ref="tab.id">
      <span>{{tab.name}}</span>
    </a>
    <div class="tab-active-indicator" :style="`left: ${activeLeftOffset}px; width: ${activeWidth}px;`"></div>
  </div>
</template>

<script>
import { find } from 'lodash'
export default {
  name: 'TabSwitch',
  data () {
    return {
      activeTab: '',
      activeLeftOffset: 0,
      activeWidth: 0
    }
  },
  props: {
    tabs: Array,
    defaultActiveTab: String
  },
  methods: {
    switchTab (tab) {
      this.activeTab = tab.id
      this.updateOffset()
      this.$emit('tabchange', tab.id)
    },
    tabsChange (tabs) {
      if (tabs.length === 0) return
      if (this.defaultActiveTab && !find(tabs, { id: this.defaultActiveTab })) {
        throw new Error('the defaultActive tab does not exist in tabs.')
      }
      this.activeTab = this.activeTab || this.tabs[0].id
      this.updateOffset()
    },
    updateOffset () {
      let activeTabEl = this.$refs[this.activeTab]
      if (!activeTabEl) return
      if (activeTabEl) activeTabEl = activeTabEl[0]
      this.activeWidth = activeTabEl.offsetWidth
      this.activeLeftOffset = activeTabEl.offsetLeft
    }
  },
  created () {
    this.tabsChange(this.tabs)
  },
  mounted () {
    this.updateOffset()
  },
  watch: {
    defaultActiveTab (newVal) {
      this.switchTab({ id: newVal })
    },
    tabs (newVal) {
      this.tabsChange(newVal)
    }
  }
}
</script>

<style scoped>
  .tab-container {
    display: block;
    overflow-x: auto;
    color: inherit;
  }
  .tab-item {
    color: inherit;
    padding: .2em .5em .3em;
    text-decoration: none;
  }
  .tab-active-indicator {
    position: absolute;
    bottom: 0;
    height: .1em;
    overflow: hidden;
    color: inherit;
    transition: all .3s ease;
  }
  .tab-active-indicator::before {
    /* This is an hack to make the indicator use text color to fill. */
    content: '■';
    display: block;
    margin-top: -99px;
    transform: scale(9999);
    color: inherit;
  }
</style>
