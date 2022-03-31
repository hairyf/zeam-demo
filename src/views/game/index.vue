<template>
  <n-result class="game-detail" status="404" title="你没看错，我懒得写了" description="生活总归带点荒谬">
    <template #footer>
      <n-button type="info" ghost @click="$router.push({ path: '/client' })">找点乐子吧</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
  import { getGame } from '@/api'
  import { Game } from '@/typings'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()

  const detail = ref<Game>()

  onMounted(async () => {
    const id = route.query.id as any
    const { data } = await getGame(id)
    detail.value = data
  })
</script>

<style lang="scss">
  .game-detail {
    margin-top: 100px;
    color: #fff !important;
    .n-result-header__title {
      color: #fff !important;
    }
  }
</style>
