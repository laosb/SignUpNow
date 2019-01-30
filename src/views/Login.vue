<template>
  <div class="login-page">
    <img src="@/assets/logo.svg" alt="HDUHelp" class="logo">
    <template v-if="!$store.state.userInfo && !$route.query.auth && !$route.query.code && !$route.query.logout">
      <template v-if="$route.query.alt">
        <template v-for="(loginUrl, provider) in loginUrls">
          <!-- TODO: Make sure we can specify default login provider in different env -->
          <a
                  v-if="loginUrl" :href="loginUrl"
                  :class="`hola-button ${provider === 'school'
                  ? 'hola-button-primary'
                  : 'hola-button-normal'}`"
                  :key="provider"
                  @click="tryLogin"
          >{{providerDisplay[provider]}}登录</a>
        </template>
        <p v-if="Object.keys(loginUrls) <= 0">请稍等...</p>
        <p><router-link :to="{ name: 'login' }">直接登录</router-link></p>
      </template>
      <template v-else>
        <form @submit.prevent="loginSubmit">
          <p><input type="text" class="hola-form-ctrl hola-input-singleline" placeholder="账号" name="account"></p>
          <p><input type="password" class="hola-form-ctrl hola-input-singleline" placeholder="密码" name="password"></p>
          <p><input type="submit" class="hola-button hola-button-primary" value="登录"></p>
        </form>
        <br>
        <p><router-link :to="{ name: 'login', query: { alt: 1 } }">第三方授权登录</router-link></p>
      </template>
    </template>
    <template v-else-if="!$route.query.logout">
      <p>欢迎使用报名啦</p>
      <p>我们正在为您的使用做一些准备...</p>
    </template>
    <template v-else>
      <p>{{$store.state.userInfo.name}}，您确定要退出登录吗？</p>
      <a href="/" @click.prevent="logout" class="hola-button hola-button-primary">退出登录</a>
      <a href="#" @click.prevent="$router.go(-1)" class="hola-button">取消</a>
    </template>
  </div>
</template>
<style scoped>
  .login-page {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #fff;
    text-align: center;
  }
  form {
    text-align: center;
  }
  .logo {
    margin: 15vh 0;
    height: 32vh;
  }
  .hola-button:not(input) {
    display: block;
    margin: 1em 30vw;
  }
  @media (min-width: 700px) {
    .login-page {
      left: -10rem;
    }
  }
</style>
<script>
  import { apiPost } from '@/api'
import { getProvidersByEnv, getLoginUrl, getWeixinBindUrl } from '@/utils/login'

export default {
  data () {
    return {
      loginUrls: {
        school: null,
        weixin: null,
        wxApp: null,
        yiban: null
      },
      urlToStartWeixinBinding: null,
      providerDisplay: {
        'school': '智慧杭电',
        'weixin': '微信',
        'yiban': '易班'
      }
    }
  },
  async created () {
    // alert(document.location.href)
    if (this.$route.query.auth) {
      // alert(this.$route.query.auth)
      this.$store.dispatch('login', this.$route.query.auth)
      return
    }

    if (this.$route.query.code && (this.$route.query.code === '40198')) {
      return (this.urlToStartWeixinBinding = await getLoginUrl('school', '/login?startWeixinBinding=1'))
    }

    // TODO: Roll out param "env".
    getProvidersByEnv(/* env = */'weixin').forEach(async provider => {
      this.loginUrls[provider] = await getLoginUrl(provider, this.$route.query.redirectTo)
    })
  },
  watch: {
    '$store.state.userInfo' (info) {
      if (info) return this.enter()
    },
    async '$route.query.startWeixinBinding' (startWeixinBinding) {
      if (startWeixinBinding) {
        const url = await getWeixinBindUrl(this.$store.state.token)
        window.location = url
      }
    }
  },
  methods: {
    async loginSubmit (event) {
      const { account, password } = event.target.elements
      const { data } = await apiPost('/login/cas', {
        appName: 'SignUpNow',
        user: account.value,
        pass: btoa(password.value)
      })
      return this.$store.dispatch('login', data.access_token)
    },
    tryLogin (event) {
      if (this.$device.iOS) {
        // On iOS if we redirected to external link, the callback would never come back into PWA.
        // So we call webview here (actually an iframe).
        event.preventDefault()
        this.$router.push({
          name: 'webview',
          query: {
            target: event.target.href
          }
        })
      }
    },
    enter () {
      const redirectUrl = this.$route.query.redirectTo
      this.$router.push(redirectUrl || '/')
    },
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.go(-1)
    }
  }
}
</script>
