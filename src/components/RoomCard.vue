<template>
  <div class="border border-[#E7E9EA] h-[228px] flex flex-col text-[#4E5058]">
    <div class="px-2 pt-2 indent-2 text-sm flex">
      <div class="bg-[#F2F3F5] flex-1 flex rounded">
        <div class="leading-8 flex-1">
          {{ modelValue.title }}
        </div>
        <button>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </div>
    </div>

    <ul class="flex-1 flex items-center">
      <li v-for="(u, i) in modelValue.list" :key="i">
        <img :src="u.avatar" :width="[100, 100, 70][modelValue.list.length]" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const modelValue = defineModel();
</script>
