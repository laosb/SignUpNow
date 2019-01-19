import { map } from 'lodash'

const externalAppDefaults = {
  isBundled: false
}

const applyExternalDefaults = payloads => map(payloads, payload => Object.assign({}, externalAppDefaults, payload))

export default applyExternalDefaults([
  {
    id: 'external.helpbook',
    name: '杭电指南',
    type: '生活',
    icon: { type: 'md', value: 'book' },
    url: 'https://help.[REDACTED]/'
  },
  {
    id: 'external.lostfound',
    name: '失物招领',
    type: '生活',
    icon: { type: 'md', value: 'not_listed_location' },
    url: 'https://lost.[REDACTED]/#/create'
  },
  {
    id: 'external.preachmeetings',
    name: '招聘日历',
    type: '生活',
    icon: { type: 'md', value: 'work' },
    url: 'https://m.bysjy.com.cn/student/chance/preachmeeting.html?token=yxqqnn1600000002'
  },
  {
    id: 'external.hzweather',
    name: '杭州气象',
    type: '生活',
    icon: { type: 'md', value: 'toys' },
    url: 'http://www.hzqx.com/decision/'
  },
  {
    id: 'external.typhoon.zjwater',
    name: '台风(浙水)',
    type: '生活',
    url: 'http://typhoon.zjwater.gov.cn/'
  },
  {
    id: 'external.typhoon.nmc',
    name: '台风(央气)',
    type: '生活',
    url: 'http://typhoon.nmc.cn/web.html'
  },
  {
    id: 'external.skl',
    name: '点名系统',
    type: '学习',
    icon: { type: 'md', value: 'forward' },
    url: 'http://skl.hdu.edu.cn/'
  },
  {
    id: 'external.cet.chsi',
    name: '四六级(学信)',
    type: '学习',
    icon: { type: 'md', value: 'assignment_turned_in' },
    url: 'https://www.chsi.com.cn/cet/'
  },
  {
    id: 'external.cet.neea',
    name: '四六级(国考)',
    type: '学习',
    icon: { type: 'md', value: 'assignment_turned_in' },
    url: 'http://cet.neea.edu.cn/cet/'
  },
  {
    id: 'external.undergraduate_vpn',
    name: '本科 VPN',
    type: '学习',
    icon: { type: 'md', value: 'vpn_key' },
    url: 'http://pwd.hdu.edu.cn/vpn.aspx'
  }
])
