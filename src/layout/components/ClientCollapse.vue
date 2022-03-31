<template>
  <n-collapse class="client-collapse">
    <n-collapse-item name="1">
      <template #header>
        <span class="mr-5px" @click="$router.replace({ path: '/client/games', query: { type: 'favorite' } })">收藏</span>
        <span style="color: #657187">({{ favorites.length }})</span>
      </template>
      <game-list :games="favorites" />
    </n-collapse-item>
    <n-collapse-item name="2">
      <template #header>
        <span class="mr-5px" @click="$router.replace({ path: '/client/games', query: { type: 'all' } })">所有游戏</span>
        <span style="color: #657187">({{ games.length }})</span>
      </template>
      <game-list :games="games" />
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="tsx">
  /* eslint-disable eslint-comments/disable-enable-pair */
  /* eslint-disable vue/one-component-per-file */

  import { useCommandStore } from '@/store/command'
  import { useCommonStore } from '@/store/common'
  import { useUserStore } from '@/store/user'
  import { Game } from '@/typings'
  import { storeToRefs } from 'pinia'
  import { defineComponent, defineProps, computed, PropType } from 'vue-demi'
  import { useRouter } from 'vue-router'
  export default defineComponent({ name: 'ClientCollapse' })
</script>
<script lang="tsx" setup>
  const props = defineProps({
    search: {
      type: String,
      default: ''
    }
  })
  const router = useRouter()
  const user = useUserStore()
  const common = useCommonStore()
  const command = useCommandStore()

  const { games: gameSource } = storeToRefs(common)
  const games = computed(() => gameSource.value.filter((v) => new RegExp(props.search).test(v.title)))
  const favorites = computed(() => games.value.filter((v) => user.favorites.includes(v.id)))

  const GameList = defineComponent({
    props: {
      games: Array as PropType<Game[]>
    },
    setup: (props) => {
      const onClick = (id: string | number) => {
        router.replace({ path: '/client/game', query: { id } })
      }
      return () =>
        props.games?.map((game) => (
          <div key={game.id} class="game-item" onContextmenu={($event) => command.showManual(game.id, $event)} onClick={() => onClick(game.id)}>
            <img class="w-15px h-15px flex-shrink-0 object-cover" src={game.thumbnail} />
            <span>{game.title}</span>
          </div>
        ))
    }
  })
</script>

<style lang="scss">
  .client-collapse {
    .game-item {
      @apply flex items-center gap-6;
      @apply pl-26px py-4px cursor-pointer text-xs;
      @apply text-[#A2A9B8] hover:bg-[#323A4B];
      &.is-active {
        @apply text-white hover:bg-[#3E4E69];
      }
    }
  }
</style>
