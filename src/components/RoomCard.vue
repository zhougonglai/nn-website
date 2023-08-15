<template>
  <div class="border border-[#E7E9EA] h-[228px] w-[283px] flex flex-col text-[#4E5058] rounded-lg">
    <div class="px-2 pt-2 indent-2 text-sm flex">
      <div class="bg-[#F2F3F5] flex-1 flex rounded">
        <div class="leading-8 flex-1">
          {{ modelValue.title }}
        </div>
        <button>
          <svg fill="currentColor" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </button>
      </div>
    </div>

    <ul class="flex-1 grid place-content-center place-items-center p-2 " :class="[
      'grid-cols-1',
      'grid-cols-1',
      'grid-cols-2 gap-4',
      'grid-cols-3 gap-4',
      'grid-cols-4 gap-4',
      'grid-cols-4 gap-4',
      'grid-cols-4 gap-4',
      'grid-cols-4 gap-4',
      'grid-cols-4 gap-4',
      'grid-cols-5 gap-2',
      'grid-cols-5 gap-2',
    ][modelValue.list.length]" ref="parent">
      <li v-for="(u, i) in modelValue.list" :key="i">
        <img :src="u.avatar" :width="[100, 100, 70, 70, 70, 70, 70, 70, 40, 40][modelValue.list.length]"
          class="rounded-full aspect-square object-cover" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'
const modelValue = defineModel();
const [parent] = useAutoAnimate()

const initial = ref({
  scale: 0,
  opacity: 0,
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  },
})

const enter = ref({
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  },
})

const leave = ref({
  scale: 0,
  opacity: 0,
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  },
})
</script>
