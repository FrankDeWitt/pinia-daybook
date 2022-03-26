import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/layouts/DayBookLayout.vue'),
    children: [
      {
        name: 'no-entry',
        path: '',
        component: () =>
          import(
            /* webpackChunkName: "NoEntrySelected" */
            '@/views/NoEntrySelected.vue'
          ),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
