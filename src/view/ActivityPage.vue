<template>
  <section data-weui-theme="light" class="container">
    <div class="w-screen h-screen flex items-center justify-center" v-if="actions.loading">
      <lottie-player autoplay loop mode="normal" :src="getJson('/src/assets/json/cover.json')"
        class="w-14 aspect-square" />
    </div>
    <div v-else class="page">
      <Carousel v-model:banner="actions.banners" />

      <!-- <button class="weui-btn weui-btn_primary">
        同意
      </button> -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import "weui"
import weui from 'weui.js';
const getJson = (url: string) => import.meta.glob('@/assets/json/*.json', { eager: true, as: 'url' })[url]

const actions = ref({
  loading: true,
  banners: [
    {
      url: 'https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/d5JiF2JjxniJRH6xviYA.jpg',
    },
    {
      url: 'https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/atRogpxlJTXAvhWe654i.jpg',
    },
    {
      url: 'https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/q8svpF1B6dG5wNuiTgyV.jpg',
    },
    {
      url: 'https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/oweFaoCZ4g8bieZdvG5L.jpg',
    },
    {
      url: 'https://web-dev.imgix.net/image/j2RDdG43oidUy6AL6LovThjeX9c2/G0aWgHwWJTPZus9YEMyH.jpg',
    },
  ]
})

onMounted(() => {
  setTimeout(() => {
    actions.value.loading = false
  }, 2000)
})
</script>
<style lang="scss" scoped>
</style>
