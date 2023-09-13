<template>
  <div ref="carousel" class="flex flex-col mx-auto relative">
    <div ref="slide" class="snap-x overflow-x-scroll overflow-y-hidden scroll-smooth flex items-center h-full gap-2">
      <div class="slide" v-for="banner, i in banners" :key="i" :data-slideIndex="i">
        <div class="slide-banner">
          Tour the Empire State Building!
          <a href="">Buy tickets now.</a>
        </div>
        <img width="100%" :src="banner.url">
      </div>
    </div>

    <div id="back-button" class="arrow back">←</div>
    <div id="forward-button" class="arrow forward">→</div>
    <div class="slide-indicators">
      <div class="slide-indicator active"></div>
      <div class="slide-indicator"></div>
      <div class="slide-indicator"></div>
      <div class="slide-indicator"></div>
      <div class="slide-indicator"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const carousel = ref()
const slide = ref()

const banners = defineModel<Components.Banner[]>('banner')


</script>
<style lang="scss" scoped>
.overflow-scrolling {
  -webkit-overflow-scrolling: touch;
}
</style>
