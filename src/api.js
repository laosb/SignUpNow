import axios from 'axios'
import router from '@/router/'
import store from '@/store'

const errorStrBuilder = ({code, reason}) => `HDUHELP${code}: ${reason}`

// Extended options in arguments[1]:
// noPostingInfo: boolean default = false, When set to true, this request would not post a piece of info
//   in info center when the API returned a cached payload.
// noErrorRedirecting: boolean default = false, When set to true, this request would not trigger the
//   navigation to error page, but will throw an error. You need to manually catch the error.
export async function apiGet (url, opts, ...rest) {
  try {
    const { data } = await axios.get(url, opts, ...rest)
    // The error message here is an internal format. Keep it like this and it will be handled by error
    // page.
    if (data.error !== 0) throw new Error(errorStrBuilder({ code: data.error, reason: data.msg }))
    if (!opts || !opts.noPostingInfo) {
      if (data.isCache) store.commit('postInfo', `由于各种原因，此处部分数据来自于报名啦的缓存，缓存于 ${(new Date(data.time * 1000)).toLocaleString()}。`)
    }
    return data
  } catch (e) {
    // if ((!opts || !opts._tryingAgain) && (e.response.status === 500)) {
    //   // Do a retry when facing 500 errors before we fail.
    //   let data
    //   try {
    //     data = await apiGet(url, { ...opts, _tryingAgain: true }, ...rest)
    //   } catch (e) {
    //     if (opts && opts.noErrorRedirecting) throw e
    //     router.push({ name: 'error' })
    //   }
    //   return data
    // }
    let reason = e.message
    if (e.response && e.response.data && e.response.data.error) {
      reason = errorStrBuilder({ code: e.response.data.error, reason: e.response.data.msg })
    }
    if (opts && opts.noErrorRedirecting) throw e
    router.push({ name: 'error', query: { error: reason } })
  }
}

export async function apiPost (url, params) {
  try {
    const { data } = await axios.post(url, params)
    if (data.error !== 0) throw new Error(`错误代码 ${data.error}：${data.msg}`)
    return data
  } catch (e) {
    store.commit('postInfo', `发生错误：${e.message}`)
  }
}

export async function apiDelete (url, params) {
  const { data } = await axios.delete(url, { params })
  if (data.error !== 0) throw new Error(`错误代码 ${data.error}：${data.msg}`)
  return data
}

export function _setApiToken (token) {
  axios.defaults.headers = {
    'Authorization': 'token ' + token
  }
}
