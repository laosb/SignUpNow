import { apiGet } from '@/api'

// TODO: more uniformed way to detect environment.
const baseUrl = document.location.href.match('__shell_cordova')
  ? 'hduhelp://'
  : `${window.location.origin}/#/`

export const getProvidersByEnv = env => {
  let providers = [
    'weixin',
    'school',
    'yiban'
  ]
  // In Mini Program we will not be able to use other methods involves 3rd pages.
  // And wxApp login can only be done in Mini Program.
  if (env === 'wxApp') return ['wxApp']
  if (env === 'weixin') providers.push('weixin')
  // Add more env-limitations here.
  return providers
}

export const getLoginUrl = async (provider, redirectTo) => {
  const loginUrlProviders = {
    school: '/login/url/school',
    yiban: '/login/url/yiban',
    weixin: '/weixin/login/weixin/url'
  }
  let redirect = baseUrl + 'login'
  if (redirectTo) {
    const redirectUrlPart = encodeURIComponent(redirectTo)
    redirect += `?redirectTo=${redirectUrlPart}`
  }

  let url
  let options = { params: { redirect } }
  if (provider === 'weixin') options = { params: { redirectSuccess: redirect, redirectFailed: redirect } }
  const payload = await apiGet(loginUrlProviders[provider], options)
  url = payload.url ? payload.url : payload.data.url
  return url.replace('\\u0026', '&')
}

export const getWeixinBindUrl = async token => (await apiGet('/weixin/bind/weixin/url', {
  params: { token, redirectSuccess: baseUrl, redirectFailed: baseUrl }
})).data.url
