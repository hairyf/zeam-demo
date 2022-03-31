<template>
  <div class="p-28px">
    <div class="flex items-center text-lg mb-20">
      <span class="text-[#D3D3D3]">{{ type === 'all' ? '全部游戏' : '收藏夹' }}</span>
      <span class="text-[#686868]">（{{ current.length }}）</span>
      <div class="h-px flex-1 bg-[#424A55]" />
    </div>
    <z-game-cards :games="current" />
  </div>
</template>

<script lang="ts" setup>
  import { ZGameCards } from '@/components/control'
  import { useCommonStore } from '@/store/common'
  import { useUserStore } from '@/store/user'
  import { useRouteQuery } from '@vueuse/router'
  import { computed } from 'vue-demi'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const common = useCommonStore()
  const user = useUserStore()

  const type = useRouteQuery('type', 'all', { route })

  const games = computed(() => common.games)
  const favorites = computed(() => games.value.filter((v) => user.favorites.includes(v.id)))

  const current = computed(() => (type.value === 'all' ? games.value : favorites.value))
</script>

<style lang="scss" scoped></style>
