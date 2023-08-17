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
    <!-- Plan B -->
    <TransitionGroup :css="false" tag="ul" class="flex-1 transition-all grid place-content-center place-items-center p-2 "
      :class="[
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
      ][modelValue.list.length]">
      <li v-for="(u, i) in modelValue.list" :key="i" v-motion :initial="initial" :enter="enter" :leave="leave">
        <img :src="u.avatar" :width="[0, 100, 100, 70, 70, 70, 70, 70, 70, 40, 40][modelValue.list.length]"
          class="rounded-full aspect-square object-cover transition-all" />
      </li>
    </TransitionGroup>
    <!-- Plan A -->
    <!-- <TransitionGroup appear tag="ul" :css="false"
      class="flex-1 transition-[width,height] flex-nowrap overflow-clip grid grid-flow-row place-content-center place-items-center p-2 "
      :class="[
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
      ][modelValue.list.length]" @appear="onEnter" @enter="onEnter" @leave="onLeave">
      <li v-for="(u, i) in modelValue.list" :key="i" :data-index="i"
        class="transition-[width,height] flex items-center justify-center">
        <img :src="u.avatar" :width="[0, 100, 100, 70, 70, 70, 70, 70, 70, 40, 40][modelValue.list.length]"
          class="rounded-full aspect-square object-cover transition-all" />
      </li>
    </TransitionGroup> -->
  </div>
</template>
<script lang="ts" setup>
import { gsap, Elastic } from 'gsap'
import { useMotions } from '@vueuse/motion'
const modelValue = defineModel();
const motions = useMotions()

const initial = ref({
  scale: 0,
  transition: {
    type: 'spring',
    bounce: 4,
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  },
})

const enter = ref({
  scale: 1,
  transition: {
    type: 'spring',
    bounce: 8,
    stiffness: 400,
    damping: 15,
    mass: 1,
  },
})

const leave = ref({
  scale: 0,
})

const onEnter = (el: HTMLElement, done: () => void) => {
  console.log('onEnter')
  gsap.fromTo(el, {
    scale: 0,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    duration: 1,
    lazy: true,
    // ease: "elastic.out(2.5, 0.3)",
    immediateRender: false,
    stagger: 0.1,
    ease: Elastic.easeOut.config(1.5, 0.3),
    onComplete: done
  })
}

const onLeave = (el: HTMLElement, done: () => void) => {
  console.log('onLeave')
  gsap.fromTo(el,
    {
      scale: 1,
      opacity: 1,
      width: el.offsetWidth,
      height: el.offsetHeight
    }, {
    width: 0,
    height: 0,
    scale: 0,
    opacity: 0,
    overwrite: true,
    duration: 0.1,
    ease: 'easeIn',
    immediateRender: false,
    onComplete: done
  })
}
</script>
