<template>
  <main class="w-screen h-screen flex flex-col overflow-hidden">
    <header class="bg-gray-200 text-xl p-2 space-x-2">
      <router-link to="/RadioList"> RadioListPage </router-link>
      <router-link to="/RoomCard"> RoomCard </router-link>
      <router-link to="/avatars"> avatars </router-link>
      <router-link to="/grid_mics"> grid_mics </router-link>
      <router-link to="/scroll"> scroll </router-link>
    </header>
    <router-view> </router-view>
  </main>
</template>
