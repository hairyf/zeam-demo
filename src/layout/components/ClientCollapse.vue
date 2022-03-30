<template>
  <n-collapse>
    <n-collapse-item name="1">
      <template #header>
        <span class="mr-5px">收藏</span>
        <span style="color: #657187">({{ favorites.length }})</span>
      </template>
      <div v-for="item in favorites" :key="item.id" class="game-item">
        <img class="w-15px h-15px flex-shrink-0 object-cover" :src="item.thumbnail" />
        <span>{{ item.title }}</span>
      </div>
    </n-collapse-item>
    <n-collapse-item name="2">
      <template #header>
        <span class="mr-5px">所有游戏</span>
        <span style="color: #657187">({{ games.length }})</span>
      </template>
      <div v-for="item in games" :key="item.id" class="game-item">
        <img class="w-15px h-15px flex-shrink-0 object-cover" :src="item.thumbnail" />
        <span>{{ item.title }}</span>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts">
  import { useCommonStore } from '@/store/common'
  import { useUserStore } from '@/store/user'
  import { storeToRefs } from 'pinia'
  import { defineComponent, defineProps, computed } from 'vue-demi'
  export default defineComponent({ name: 'ClientCollapse' })
</script>
<script lang="ts" setup>
  const props = defineProps({
    search: {
      type: String,
      default: ''
    }
  })
  const userStore = useUserStore()
  const commonStore = useCommonStore()

  const { games: gameSource } = storeToRefs(commonStore)
  const games = computed(() => {
    return gameSource.value.filter((v) => new RegExp(props.search).test(v.title))
  })
  const favorites = computed(() => games.value.filter((v) => userStore.favorites.includes(v.id)))
</script>

<style lang="scss" scoped>
  .game-item {
    @apply flex items-center gap-6;
    @apply pl-26px py-4px cursor-pointer text-xs;
    @apply text-[#A2A9B8] hover:bg-[#323A4B];
    &.is-active {
      @apply text-white hover:bg-[#3E4E69];
    }
  }
</style>
