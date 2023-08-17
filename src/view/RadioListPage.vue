<template>
  <section class="flex-1 flex items-center justify-center">
    <RadioList v-model="modelValue" v-model:list="list" />
  </section>
</template>
<script setup lang="tsx">
import SvgIcon from '~virtual/svg-component';

const modelValue = ref('person')

const list = [
  {
    prefixIcon: <SvgIcon name='link' />,
    label: '个人社区',
    value: 'person',
    suffixIcon: <SvgIcon name="ADD" />,
  },
  {
    prefixIcon: (
      <svg class="w-4 h-4 fill-app-primary">
        <use xlinkHref="#icon-a-zu-2" />
      </svg>
    ),
    label: '官方社区',
    value: 'official',
    suffixIcon: (
      <svg class="w-4 h-4 fill-current">
        <use xlinkHref="#icon-a-zu37188" />
      </svg>
    ),
  },
  {
    prefixIcon: (
      <svg class="w-4 h-4 fill-app-primary">
        <use xlinkHref="#icon-a-zu-2" />
      </svg>
    ),
    label: '游戏社区',
    value: 'games',
    disabled: true,
    suffixIcon: (
      <svg class="w-4 h-4 fill-current">
        <use xlinkHref="#icon-a-zu37188" />
      </svg>
    ),
  },
]
</script>
