<template>
  <div class="container">
    <client-header />
    <div class="flex gap-2px h-800">
      <client-sidebar />
      <client-body />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue-demi'
  export default defineComponent({ name: 'ClientLayout' })
</script>
<script lang="ts" setup>
  import ClientHeader from './components/ClientHeader.vue'
  import ClientSidebar from './components/ClientSidebar.vue'
  import ClientBody from './components/ClientBody.vue'
  import { Game } from '@/typings'
  import { getGames } from '@/api/index.mock'

  const games = ref<Game[]>([])

  onMounted(async () => {
    const { data } = await getGames()
    games.value = data
  })
</script>

<style lang="scss" scoped>
  .container {
    @apply w-80vw min-w-700;
    @apply rounded-md bg-[#1B1E23];
    border: solid 1px #bdbdbd;
  }
</style>
