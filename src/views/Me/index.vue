<template>
  <div>
    <top-nav title="我"></top-nav>
    <div class="hola-container">
      <div class="hola-columns hola-card-stack">
        <div class="hola-columns-item">
          <div class="hola-card">
            <h2 class="hola-card-title">{{$store.state.userInfo.name}}</h2>
            <p><b>学工号</b>&nbsp;<span>{{$store.state.userInfo.id}}</span></p>
          </div>
        </div>
        <div class="hola-columns-item">
          <div class="hola-card hola-card-list">
            <div class="hola-card-list-item">
              <h3 class="hola-card-title">社团</h3>
              <p>
                <big-num num="12" name="已报名" unit="个"></big-num>
                <big-num num="8" name="笔试通过" unit="个"></big-num>
                <big-num num="3" name="面试通过" unit="个"></big-num>
              </p>
            </div>
            <div class="hola-card-list-item">
              <h3 class="hola-card-title">活动与讲座</h3>
              <p>
                <big-num num="13" name="已报名" unit="个"></big-num>
                <big-num num="8" name="签到成功" unit="个"></big-num>
                <big-num num="1" name="缺席" unit="个"></big-num>
              </p>
            </div>
          </div>
        </div>
        <grouped-list>
          <grouped-list-item title="设置" md-icon-name="settings"/>
        </grouped-list>
        <grouped-list>
          <grouped-list-item title="反馈" md-icon-name="feedback" route-name="me.feedback"/>
          <grouped-list-item title="帮助" md-icon-name="help"/>
          <grouped-list-item title="关于" md-icon-name="info" route-name="me.about" />
        </grouped-list>
        <grouped-list>
          <grouped-list-item title="退出登录" md-icon-name="clear" route-name="login" :route-query="{ logout: 1 }"/>
        </grouped-list>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hola-card-stack {
    margin-top: var(--hola-card-gap);
  }
</style>
<script>
import TopNav from '@/components/TopNav'
import GroupedList from '@/components/GroupedList'
import GroupedListItem from '@/components/GroupedListItem'
import BigNum from '@/components/BigNum'

export default {
  components: {
    TopNav,
    BigNum,
    GroupedList,
    GroupedListItem
  }
}
</script>
