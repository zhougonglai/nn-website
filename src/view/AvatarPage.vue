<template>
  <section class="flex-1 flex place-content-center place-items-center">
    <AvatarGroup v-model="actions.avatarList" />
  </section>
</template>
<script setup lang="ts">
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

const actions = reactive({
  avatarList: avatars.map((url: string) => ({
    url,
  }))
})

</script>
