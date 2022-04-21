import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotView from '../views/HotView.vue'
import MyPostView from '../views/MyPostView.vue'
import MyDraftView from '../views/MyDraftView.vue'
import For01View from '../views/For01View.vue'
import For02View from '../views/For02View.vue'
import For03View from '../views/For03View.vue'

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
  },
  {
    path: '/for01',
    name: 'for01',
    component: For01View,
  },
  {
    path: '/for02',
    name: 'for02',
    component: For02View,
  },
  {
    path: '/for03',
    name: 'for03',
    component: For03View,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
