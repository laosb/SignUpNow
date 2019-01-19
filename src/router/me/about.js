export default [
  {
    path: '/me/about',
    name: 'me.about',
    component: () => import('@/views/Me/About/')
  },
  {
    path: '/me/about/changelog',
    name: 'me.about.changelog',
    component: () => import('@/views/Me/About/Changelog')
  },
  {
    path: '/me/about/developers',
    name: 'me.about.developers',
    component: () => import('@/views/Me/About/Developers')
  },
  {
    path: '/me/about/privacy-terms',
    name: 'me.about.privacyTerms',
    component: () => import('@/views/Me/About/PrivacyTerms')
  },
  {
    path: '/me/about/tos',
    name: 'me.about.tos',
    component: () => import('@/views/Me/About/Tos')
  }
]
