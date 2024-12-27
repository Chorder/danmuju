import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Download from '../views/Download.vue';
import Channels from '../views/Channels.vue';
import Docs from '../docs/Docs.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'root', component: Home, },
    { path: '/home', name: 'home', component: Home, },
    { path: '/download', component: Download },
    { path: '/channels', component: Channels },
    { path: '/docs', component: Docs },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
