import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/activity/1',
    },
    {
      path: '/RadioList',
      name: 'RadioList',
      component: () => import('@/view/RadioListPage.vue'),
    },
    {
      path: '/RoomCard',
      name: 'RoomCard',
      component: () => import('@/view/GridGroupRoom.vue'),
    },
    {
      path: '/avatars',
      name: 'avatars',
      component: () => import('@/view/AvatarPage.vue')
    },
    {
      path: '/grid_mics',
      name: 'GridMics',
      component: () => import('@/view/GridMics.page.vue')
    },
    {
      path: '/activity/:activity',
      name: 'ActivityPage',
      props: true,
      component: () => import('@/view/ActivityPage.vue')
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: () => import('@/view/ScrollLoadPage.vue')
    }
  ],
});
