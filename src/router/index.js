import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotView from '../views/HotView.vue'
import MyPostView from '../views/MyPostView.vue'
import MyDraftView from '../views/MyDraftView.vue'

const routes = [
  {
    path: '/',
    redirect: '/hot',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'hot',
        name: 'hot',
        component: HotView,
      },
    ]
  },
  {
    path: '/myPost',
    name: 'myPost',
    component: MyPostView,
  },
  {
    path: '/myDraft',
    name: 'myDraft',
    component: MyDraftView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
