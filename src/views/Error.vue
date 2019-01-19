<template>
  <div>
    <top-nav></top-nav>
    <div class="error">
      <template v-if="$route.query.type === 'auth'">
        <p>
          <b>授权登录失败</b><br>请检查网络连接并重试
        </p>
        <a href="/" class="hola-button hola-button-primary">刷新并重试</a>
      </template>
      <template v-else-if="errorNum === 40199">
        <p>
          <b>您的易班账号需数字杭电授权后才可登录。</b><br>请尝试使用「数字杭电登录」登录，成功之后未来就可以使用易班登录。
        </p>
        <a href="#" @click.prevent="logout" class="hola-button hola-button-primary">重新登录</a>
      </template>
      <template v-else>
        <p>
          <b>发生了一些错误</b><br>
          {{$route.query.error}}<br>
          网络连接失败或服务暂时不可用<br>
        </p>
        <button @click.prevent="$router.go(-1)" class="hola-button hola-button-primary">重试</button>&nbsp;
        <button @click.prevent="$router.go(-2)" class="hola-button hola-button-normal">回到上一页</button>
        <br>
        <a href="#" @click.prevent="logout" class="hola-button">重新登录</a>
      </template>
    </div>
  </div>
</template>
<style scoped>
  .error {
    text-align: center;
    margin: 40vh 2em;
  }
</style>
<script>
/*
 * For UX, only use this error screen for unrecoverable errors.
 * Never use this for submitting. Use toasts.
 */
import TopNav from '@/components/TopNav'

export default {
  components: { TopNav },
  computed: {
    errorNum () {
      const matchRes = this.$route.query.error.match(/^HDUHELP([0-9]+): /)
      return matchRes ? parseInt(matchRes[1], 10) : null
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>
