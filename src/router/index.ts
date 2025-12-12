import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
//   {
//     name: 'home',
//     path: '/',
//     component: () => import('@/views/home')
//   }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;