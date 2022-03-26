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
      {
        name: 'entry',
        path: ':id',
        component: () =>
          import(
            /* webpackChunkName: "EntryView" */
            '@/views/EntryView.vue'
          ),
        props: (route: any) => {
          return {
            id: route.params.id,
          }
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
