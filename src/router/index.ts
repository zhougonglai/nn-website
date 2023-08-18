import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/RadioList',
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
    }
  ],
});
