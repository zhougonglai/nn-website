<template>
  <RadioGroup v-model="modelValue" class="flex flex-col space-y-2">
    <RadioGroupOption as="template" v-for="item in list" :key="item.value" :value="item.value" :disabled="item.disabled"
      v-slot="{ active, checked, disabled }">
      <div class="leading-6 rounded border flex items-center text-[#4E5058] p-2 space-x-2" :class="{
        'bg-[#F2F3F5] cursor-not-allowed': disabled,
        'border-app-primary': checked,
        'ring-1 ring-app-primary': active,
        'cursor-pointer': !disabled,
      }">
        <template v-if="isVNode(item.prefixIcon)">
          <component :is="item.prefixIcon" />
        </template>
        <!-- TODO:  -->
        <template v-else-if="item.prefixIcon">
          {{ item.prefixIcon }}
        </template>
        <span class="flex-1">{{ item.label }}</span>
        <template v-if="isVNode(item.suffixIcon)">
          <component :is="item.suffixIcon" />
        </template>
        <!-- TODO:  -->
        <template v-else-if="item.suffixIcon">
          {{ item.suffixIcon }}
        </template>
      </div>
    </RadioGroupOption>
  </RadioGroup>
</template>
<script setup lang="ts">
/* global RadioItem */
import { isVNode } from 'vue'

const modelValue = defineModel()
const list = defineModel<RadioItem[]>('list')
</script>
