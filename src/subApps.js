import { map } from 'lodash'
import SubApp from './SubApp'

import subAppExternal from './subAppExternal'

const appPayloadDefault = payload => ({
  type: '其他',
  infoCard: false,
  authRequired: false,
  isWeChat: false,
  isBundled: true,
  icon: { type: 'md', value: 'extension' },
  url: `app.${payload.id}`
})

const genSubApps = payloads => map(payloads, payload => new SubApp(Object.assign({}, appPayloadDefault(payload), payload)))

const appPayloads = [
  {
    id: 'scores',
    name: '成绩',
    type: '学习',
    icon: { type: 'md', value: 'done_all' }
  },
  {
    id: 'schedule',
    name: '课表',
    type: '学习',
    icon: { type: 'md', value: 'view_week' }
  },
  {
    id: 'exam',
    name: '考试安排',
    type: '学习',
    icon: { type: 'md', value: 'edit' }
  },
  {
    id: 'card',
    name: '一卡通',
    type: '生活',
    icon: { type: 'md', value: 'credit_card' }
  },
  {
    id: 'sunrun',
    name: '阳光长跑',
    type: '生活',
    icon: { type: 'md', value: 'directions_run' }
  },
  {
    id: 'map',
    name: '杭电地图',
    type: '生活',
    icon: { type: 'md', value: 'map' }
  }
]

export default genSubApps(appPayloads.concat(subAppExternal))
