import Vue from 'vue'
import Vuex from 'vuex'
import { filter } from 'lodash'
import { createInstance } from 'localforage'
import { apiGet, apiDelete, _setApiToken } from '@/api'

Vue.use(Vuex)

const localStore = createInstance({ name: 'hduHelp' })

export default new Vuex.Store({
  state: {
    BASE_URL: 'https://api.[REDACTED]/',
    token: null,
    userInfo: null,
    updateAvailable: false,
    infoCenter: [],
    shell: {
      type: null,
      version: '',
      extraInfo: null
    }
  },
  mutations: {
    _setToken (state, token) {
      state.token = token
      _setApiToken(token)
    },
    _setUserInfo (state, infoObj) { state.userInfo = infoObj },
    _updateAvailable (state) { state.updateAvailable = true },
    _clearPageInfo (state) {
      state.infoCenter = filter(state.infoCenter, ({ scope }) => scope !== 'page')
    },
    _setShellInfo (state, { type, version, extraInfo }) {
      state.shell.type = type
      state.shell.version = version
      state.shell.extraInfo = extraInfo
    },
    postInfo (state, info, scope = 'page') {
      // Page-scope info will be cleared on navigation events.
      // TODO: Allow users manually dismiss global info.
      return state.infoCenter.push({ info, scope })
    }
  },
  actions: {
    async init ({ commit }) {
      let token = await localStore.getItem('token')
      const userInfo = await localStore.getItem('userInfo')
      if (token && userInfo) {
        commit('_setToken', token) // Temporailly set a token for validation.
        let { data, Data } = await apiGet('/token/validate')
        if (Data && !data) data = Data
        if (data.isViald === 0) return commit('_setToken', null) // Mark as not logged in.
        if (data.isValid === 2) token = data.accessToken // Refresh the token.
        commit('_setToken', token)
        commit('_setUserInfo', userInfo)
      }
    },
    async login ({ commit }, token) {
      commit('_setToken', token)
      await localStore.setItem('token', token)
      const { data } = await apiGet('/school/staff/info')
      const userInfo = {
        id: data.STAFFID,
        name: data.STAFFNAME,
        unit: data.UNITCODE,
        type: data.STAFFTYPE
      }
      commit('_setUserInfo', userInfo)
      await localStore.setItem('userInfo', userInfo)
    },
    async logout ({ commit, state }) {
      await apiDelete('/token', { token: state.token })
      commit('_setToken', null)
      await localStore.setItem('token', null)
      commit('_setUserInfo', null)
      await localStore.setItem('userInfo', null)
    }
  }
})
