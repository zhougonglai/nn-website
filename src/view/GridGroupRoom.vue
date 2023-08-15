<template>
  <section class="flex-1 grid grid-cols-[repeat(3,_283px)] gap-5 place-items-center place-content-center">
    <RoomCard v-model="grid1" />
    <RoomCard v-model="grid2" />
    <RoomCard v-model="grid3" />

    <RoomCard v-model="grid4" />
    <RoomCard v-model="grid5" />
    <RoomCard v-model="grid6" />
  </section>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import avatar001 from '@/assets/fake/0_0_1_N.webp'
import avatar002 from '@/assets/fake/0_0_2_N.webp'
import avatar003 from '@/assets/fake/0_0_3_N.webp'
import avatar004 from '@/assets/fake/0_0_4_N.webp'
import avatar013 from '@/assets/fake/0_1_3_N.webp'
import avatar014 from '@/assets/fake/0_1_4_N.webp'
import avatar015 from '@/assets/fake/0_1_5_N.webp'
import avatar016 from '@/assets/fake/0_1_6_N.webp'
import avatar021 from '@/assets/fake/0_2_1_N.webp'
import avatar022 from '@/assets/fake/0_2_2_N.webp'
import avatar023 from '@/assets/fake/0_2_3_N.webp'
import avatar027 from '@/assets/fake/0_2_7_N.webp'
import avatar029 from '@/assets/fake/0_2_9_N.webp'
import avatar031 from '@/assets/fake/0_3_1_N.webp'
import avatar033 from '@/assets/fake/0_3_3_N.webp'
import avatar034 from '@/assets/fake/0_3_4_N.webp'
import avatar128 from '@/assets/fake/grid_0_128_N.webp'

const avatars = [
  avatar001,
  avatar002,
  avatar003,
  avatar004,
  avatar013,
  avatar014,
  avatar015,
  avatar016,
  avatar021,
  avatar022,
  avatar023,
  avatar027,
  avatar029,
  avatar031,
  avatar033,
  avatar034,
  avatar128,
]
const randomAratar = () => avatars[Math.floor(Math.random() * avatars.length)]

const fake = (length: number) => Array.from(Array(length), () => ({
  avatar: randomAratar(),
  // avatar: `https://avatars.githubusercontent.com/u/${Math.round(
  //   Math.random() * 999999
  // )}`,
  name: Math.round(Math.random() * 99999999).toString(16).substr(-16),
}))

const grid1 = ref({
  list: fake(1),
  title: '语音房 1',
});

const grid2 = ref({
  list: fake(9),
  title: '语音房 2',
});

const grid3 = ref({
  list: fake(2),
  title: '语音房 3',
});

const grid4 = ref({
  list: fake(8),
  title: '语音房 4',
});

const grid5 = ref({
  list: fake(3),
  title: '语音房 5',
});

const grid6 = ref({
  list: fake(3),
  title: '语音房 6',
});

const { resume, isActive } = useIntervalFn(() => {
  if (grid1.value.list.length > 1) {
    grid1.value.list.pop()
  } else {
    grid1.value.list = grid1.value.list.concat(fake(1))
  }

  console.log(grid1.value.list.length)

  if (grid2.value.list.length > 9) {
    grid2.value.list.pop()
  } else {
    grid2.value.list = grid2.value.list.concat(fake(1))
  }
  console.log(grid2.value.list.length)

  if (grid3.value.list.length > 2) {
    grid3.value.list.pop()
  } else {
    grid3.value.list = grid3.value.list.concat(fake(1))
  }

  if (grid4.value.list.length > 8) {
    grid4.value.list.pop()
  } else {
    grid4.value.list = grid4.value.list.concat(fake(1))
  }

  if (grid5.value.list.length > 3) {
    grid5.value.list.pop()
  } else {
    grid5.value.list = grid5.value.list.concat(fake(1))
  }

  if (grid6.value.list.length > 3) {
    grid6.value.list.pop()
  } else {
    grid6.value.list = grid6.value.list.concat(fake(2))
  }

}, 2000)


onMounted(() => {
  if (!isActive.value) resume()
})
</script>
