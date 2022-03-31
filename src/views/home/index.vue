<template>
  <div class="p-28px">
    <div class="flex items-center text-lg mb-20 text-[#686868]">
      <span class="text-[#D3D3D3]">全部游戏</span>
      <span>（{{ games.length }}）</span>
      <div class="text-base flex w-200px items-center">
        <span class="text-base flex-shrink-0">排序方式：</span>
        <n-select v-model:value="select" size="small" :options="options" placeholder="--" />
      </div>
      <div class="h-px flex-1 bg-[#424A55]" />
    </div>
    <z-game-cards :games="filterGames" />
  </div>
</template>

<script lang="ts" setup>
  import { ZGameCards } from '@/components/control'
  import { useCommonStore } from '@/store/common'
  import { computed, ref } from 'vue-demi'
  import dayjs from 'dayjs'
  const common = useCommonStore()
  const games = computed(() => common.games)
  const select = ref('base')

  const filterGames = computed(() => {
    const x = [...games.value]
    if (select.value === 'base') {
      return x.sort((a, b) => a.title.localeCompare(b.title))
    }
    if (select.value === 'date') {
      const toNumber = (string_: string) => dayjs(string_).valueOf()
      return x.sort((a, b) => toNumber(a.title) - toNumber(b.title))
    }
    return x
  })

  const options = [
    {
      label: '按字母排序',
      value: 'base'
    },
    {
      label: '发行日期',
      value: 'date'
    }
  ]
</script>

<style lang="scss" scoped></style>
