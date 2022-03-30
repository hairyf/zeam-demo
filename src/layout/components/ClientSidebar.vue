<template>
  <div class="client-sidebar w-260px relative">
    <div class="absolute inset-0 flex flex-col">
      <!-- home button -->
      <div class="home-button" @click="$router.replace('/client/home')">主页</div>
      <!-- search input -->
      <div class="bg-[#2A2F38] p-5px">
        <z-search v-model="searchText" @clear="onClear" />
      </div>
      <!-- collapse -->
      <n-scrollbar class="collapse-container flex-1 bg-[#24282F]">
        <client-collapse :search="searchText"></client-collapse>
      </n-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue-demi'
  export default defineComponent({ name: 'ClientSideBar' })
</script>
<script lang="ts" setup>
  import ClientCollapse from './ClientCollapse.vue'
  import { ZSearch } from '@/components/input'

  const searchText = ref('')
  const onClear = () => {}
</script>

<style lang="scss" scoped>
  .home-button {
    @apply flex items-center cursor-pointer;
    @apply ml-5px mb-10px h-34px pl-5px rounded-sm;
    @apply bg-[#25272d] text-[#8F8F8F] hover:bg-[#3E4047] hover:text-[#C9C9CB];
  }
</style>
