<template>
  <ul class="relative h-fit flex place-content-center place-items-center transition-all -space-x-3 hover:space-x-px px-10"
    v-auto-animate @mouseleave="reset">
    <li v-if="preAvatars?.length" @click="prev" class="p-1 cursor-pointer bg-neutrals-200 rounded-full text-sm ">
      +{{ preAvatars.length }}
    </li>
    <li v-for="(avatar, i) in selectList" :key="i"
      class="p-1 bg-neutrals-200 hover:bg-neutral-400 hover:scale-110 rounded-full transition-all"
      v-element-hover="(e: boolean) => onHover(e, i)" :class="[
        actions.hovered.status && i > actions.hovered.index ? 'translate-x-2' : '',
        actions.hovered.status && actions.hovered.index > i ? '-translate-x-2' : '',
        actions.hovered.status && actions.hovered.index == i ? '' : ''
      ]">
      <img :src="avatar.url" class="rounded-full aspect-square select-none cursor-pointer" width="24" height="24" />
    </li>
    <li v-if="restAvatars?.length" @click="next" class="p-1 cursor-pointer bg-neutrals-200 rounded-full text-sm ">
      +{{ restAvatars.length }}
    </li>
  </ul>
</template>
<script setup lang="ts">
type Avatar = {
  url: string,
  online?: boolean,
  volume?: number
}

const modelValue = defineModel<Avatar[]>({
  required: true,
})

const actions = reactive({
  selectIndex: 0,
  length: 6,
  hovered: {
    status: false,
    index: 0
  },
})


const preAvatars = computed(() => modelValue.value?.slice(0, actions.selectIndex))

const selectList = computed(() => modelValue.value?.slice(
  actions.selectIndex,
  actions.selectIndex + actions.length))

const restAvatars = computed(() => modelValue.value?.slice(actions.selectIndex + actions.length))

const onHover = (bool: boolean, i: number) => {
  if (bool) {
    // actions.selectIndex = i
    actions.hovered.index = i
    actions.hovered.status = true
  }
}

const prev = () => {
  if (actions.selectIndex > actions.length) {
    actions.selectIndex -= actions.length
  } else {
    actions.selectIndex = 0
  }
}

const next = () => {
  if (actions.selectIndex + actions.length < modelValue.value.length) {
    actions.selectIndex += actions.length
  } else {
    actions.selectIndex = modelValue.value.length
  }
}

const reset = () => {
  actions.selectIndex = 0
  actions.hovered.status = false
  actions.hovered.index = 0
}
</script>
