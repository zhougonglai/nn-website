<template>
  <section class="flex-1 overflow-y-auto">
    <div class="p-5">
      <ul class="grid grid-cols-[repeat(3,283px)] h-full w-full gap-5 place-items-center place-content-center ">
        <li v-for="(url, key, index) in imgs" :key="key"
          class="h-60 w-full rounded border border-gray-300 flex items-center justify-center">
          <div class="relative w-16 h-16 flex items-center justify-center">
            <div v-if="index == 0" class="animate-ping absolute inset-0 rounded-full bg-yellow-500 bg-opacity-60" />
            <template v-else-if="index == 1">
              <div
                class="animate-ping animate-delay-75 absolute inset-0 rounded-full border border-yellow-500 border-opacity-80" />
              <div
                class="animate-ping animate-delay-300 absolute inset-0 rounded-full border border-yellow-500 border-opacity-80" />
              <div
                class="animate-ping animate-delay-700 absolute inset-0 rounded-full border border-yellow-500 border-opacity-80" />
            </template>

            <div class="absolute inset-0 scale-50" v-else-if="index == 2">
              <div v-for="i in 128" :key="i" class="spike" :style="{ '--i': i }" />
            </div>

            <img :src="url" width="64" height="64" class="rounded-full aspect-square z-10" />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
const imgs = import.meta.glob('@/assets/fake/*.webp', { eager: true, as: 'url' })


</script>
<style lang="scss" >
@use "sass:math";

.animate-delay {
  &-75 {
    animation-delay: 75ms;
  }

  &-300 {
    animation-delay: 300ms;
  }

  &-700 {
    animation-delay: 700ms;
  }
}

@property --fx {
  syntax: '<number>';
  initial-value: 1;
  inherits: true
}

:root {
  $n: 128;
  $ha: math.div(math.$pi, $n);
  --n: #{$n};
  --f: #{math.tan($ha)};
}

$p: 3;
$h: .25em;
$w: 4em;
$t: 9s;
$min: .1;
$dif: 1 - $min;
$amp: .5*$dif;
$mid: $min + $amp;
$m: 36;
$ua: math.div(360deg, $m);

.spike {
  --fx: calc(var(--i)/var(--n));
  position: absolute;
  top: calc(50% - #{.5*$h});
  left: 50%;
  width: $w;
  height: $h;
  transform-origin: 0 50%;
  transform: rotate(calc(var(--i)*1turn/var(--n))) translate(calc(#{$h}/var(--f))) scalex(var(--fx));
  background: currentcolor;
  color: HSL(calc(var(--i)*#{$p}*360/var(--n)), 100%, 75%);
  animation: a $t ease-in-out calc(var(--i)/var(--n)*#{-2*$t}) infinite;

  &:before,
  &:after {
    --k: 0;
    --s: calc(2*var(--k) - 1);
    position: absolute;
    top: calc(50% - #{.5*$h});
    left: calc(var(--k)*100% - #{.5*$h});
    width: $h;
    height: $h;
    border-radius: 50%;
    transform: scalex(calc(1/var(--fx)));
    background: inherit;
    content: ''
  }

  &:after {
    --k: 1
  }

  &:nth-child(2n) {

    &:before,
    &:after {
      box-shadow: calc(var(--s)*#{2*$h}) 0 0 -1px currentcolor;
    }
  }
}

@keyframes a {
  @for $i from 0 to $m {
    #{math.div($i*100%,$m)} {
      --fx: #{$mid + 2*$amp*math.sin($i*2*$ua)*math.sin($i*3*$ua)*math.sin($i*5*$ua)*math.sin($i*7*$ua)};
    }
  }
}
</style>
