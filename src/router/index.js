import Home from '../page/home.vue'
import Main from '../page/classify/main.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "page" */ '@/page/register')
  },
  {
    path: '/list',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/list/',
        name: 'topic',
        component: () => import(/* webpackChunkName: "list" */  '@/page/classify/dream/list.vue'),
      },
      {
        path: '/list/hat',
        name: 'green',
        component: () => import(/* webpackChunkName: "forgive" */  '@/page/classify/forgive/list.vue'),
      },
      {
        path: '/list/wheel',
        name: 'spare',
        component: () => import(/* webpackChunkName: "wheel" */  '@/page/classify/wheel/list.vue'),
      },
      {
        path: '/list/up',
        name: 'hook',
        component: () => import(/* webpackChunkName: "hookup" */  '@/page/classify/hookup/list.vue'),
      },
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '@/page/classify/article/index.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "article" */ '@/page/classify/article/edit.vue')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "classify" */  '@/page/404.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  }
]

export default routes