<template>
  <div>
    <button @click="openModel">loadMore</button>
    <ListPage v-model="actions.show" />
  </div>
</template>
<script setup lang="ts">
import ListPage from './components/ListPage.vue'
const actions = ref({
  show: false
})


const openModel = () => {
  console.log('openModel')
  actions.value.show = true
}
</script>
