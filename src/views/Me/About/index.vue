<template>
  <div>
    <top-nav title="关于" :show-back="true"></top-nav>
    <div class="hola-container">
      <div class="hola-columns hola-card-stack">
        <div class="hola-columns-item">
          <div class="hola-card about-hero">
            <img src="@/assets/logo.svg" alt="报名啦">
            <p>
              <b>报名啦 PWA 版</b>
              <br>
              <span>v{{version}}</span>
              <span v-if="$device.iOS"> for iOS</span>
              <span v-if="$device.Smartisan"> for Smartisan</span>
              <br>
              <template v-if="$store.state.updateAvailable">
                <br>
                <b>报名啦有更新可用！</b>
                <br>
                <span>请关闭所有打开的报名啦窗口，包括浏览器中打开的报名啦，再重新打开以完成更新。更新后可以查看更新历史了解更新内容。</span>
              </template>
            </p>
          </div>
        </div>
        <grouped-list>
          <grouped-list-item title="更新历史" md-icon-name="event_note" route-name="me.about.changelog" />
        </grouped-list>
        <grouped-list>
          <grouped-list-item title="隐私权" md-icon-name="sd_storage" route-name="me.about.privacyTerms"/>
          <grouped-list-item title="服务条款" md-icon-name="room_service" route-name="me.about.tos"/>
          <grouped-list-item title="开发人员" md-icon-name="group" route-name="me.about.developers"/>
        </grouped-list>
        <grouped-list>
          <grouped-list-item title="致谢与软件许可证" md-icon-name="copyright"/>
        </grouped-list>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hola-card-stack {
    margin-top: var(--hola-card-gap);
  }
  .about-hero {
    text-align: center;
  }
  .about-hero img {
    width: 55%;
  }
</style>
<script>
import { version } from '@/../package.json'
import TopNav from '@/components/TopNav'
import GroupedList from '@/components/GroupedList'
import GroupedListItem from '@/components/GroupedListItem'

export default {
  components: {
    TopNav,
    GroupedList,
    GroupedListItem
  },
  data () { return { version } }
}
</script>
