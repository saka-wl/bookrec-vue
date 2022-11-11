import { createRouter, createWebHashHistory } from 'vue-router'

import MyHome from '../Body/MyHome.vue'
import Myself from '../Body/Myself.vue'
import Recommend from '../Body/Recommend.vue'
import Login from '../Login/Login.vue'
import Search from '../Search/Search.vue'
import MoreBook from '../MoreBook/MoreBook.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: MyHome},
    { path: '/recommend', component: Recommend},
    { path: '/self', component: Myself},
    { path: '/login', component: Login},
    { path: '/search', component: Search},
    { path: '/morebook', component: MoreBook, name: 'moreBook', props: true},
  ]
})

export default router
