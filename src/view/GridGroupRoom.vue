<template>
  <section class="grid grid-cols-3 gap-5">
    <RoomCard v-model="grid1" />
    <RoomCard v-model="grid2" />
    <RoomCard v-model="grid3" />

    <RoomCard v-model="grid4" />
    <RoomCard v-model="grid5" />
    <RoomCard v-model="grid6" />
  </section>
</template>
<script lang="ts" setup>
const grid1 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 1',
});
const grid2 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 2',
});
const grid3 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 3',
});
const grid4 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 4',
});
const grid5 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 5',
});
const grid6 = ref({
  list: [
    {
      avatar: `https://avatars.githubusercontent.com/u/${Math.round(
        Math.random() * 999999
      )}`,
      name: (Math.random() * 999999).toString().sub(-16),
    },
  ],
  title: '语音房 6',
});
</script>
