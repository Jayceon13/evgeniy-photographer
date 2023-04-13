
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/individual', component: () => import('pages/RatesIndivid.vue') },
      { path: '/wedding', component: () => import('pages/RatesWedding.vue') },
      { path: '/family', component: () => import('pages/RatesFamily') },
      { path: '/love', component: () => import('pages/RatesLove') }


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
