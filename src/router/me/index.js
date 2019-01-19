import about from './about'

export default [
  {
    path: '/me',
    name: 'me',
    component: () => import('@/views/Me/')
  },
  {
    path: '/me/feedback',
    name: 'me.feedback',
    component: () => import('@/views/Me/Feedback')
  },
  ...about
]
