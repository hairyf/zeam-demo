<template>
  <div class="game-card__container">
    <template v-for="game in games" :key="game.id">
      <n-popover :style="{ background: 'none' }" trigger="hover" placement="right-start" :show-arrow="false">
        <template #trigger>
          <div
            class="game-card__item"
            @contextmenu="command.showManual(game.id, $event)"
            @click="$router.replace({ path: '/client/game', query: { id: game.id } })"
          >
            <img class="game-card__image" :src="game?.thumbnail" />
            <div class="game-card__reflective" />
          </div>
        </template>
        <div class="game-card__popover">
          <div class="grass" :style="{ backgroundImage: `url(${game?.thumbnail})` }" />
          <div class="header">{{ game.title }}</div>
          <div class="body">
            <img class="w-full h-100px object-cover" :src="game.thumbnail" />
          </div>
          <div class="footer">
            {{ game.short_description }}
          </div>
        </div>
      </n-popover>
    </template>
  </div>
</template>

<script lang="ts">
  import { useCommandStore } from '@/store/command'
  import { Game } from '@/typings'
  import { defineComponent, defineProps, PropType } from 'vue-demi'
  export default defineComponent({ name: 'ZGameCard' })
</script>
<script lang="ts" setup>
  defineProps({ games: Array as PropType<Game[]> })
  const command = useCommandStore()
</script>

<style lang="scss" scoped>
  .game-card {
    &__container {
      @apply grid justify-between;
      grid-template-columns: repeat(auto-fill, 150px);
      row-gap: 20px;
      column-gap: 30px;
    }
    &__item {
      @apply w-150px h-220px cursor-pointer relative overflow-hidden;
      perspective: 300px;
      perspective-origin: bottom;
      box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.5);
      img {
        transition: transform 0.3s;
      }
      &:hover img {
        transform: translate3d(0, 0, 8px) rotateX(2deg);
      }
    }
    &__image {
      @apply h-full w-full object-cover;
    }
    &__reflective {
      @apply w-200px h-600px absolute -top-280px -right-200px;
      transition: all 0.5s;
      transform: rotateZ(-60deg);
      background-color: rgba($color: #fff, $alpha: 0.1);
      box-shadow: 0px 0px 30px rgba($color: #fff, $alpha: 0.2);
    }
  }
  .game-card__item:hover .game-card__reflective {
    @apply -top-250px;
    background-color: rgba($color: #fff, $alpha: 0.2);
    box-shadow: 0px 0px 30px rgba($color: #fff, $alpha: 0.4);
  }

  .game-card__popover {
    @apply w-200px absolute bg-dark-50 top-0 overflow-hidden;
    .grass {
      @apply absolute inset-0;
      background-image: url(var(--thumbnail));
      background-position: center;
      background-size: cover;
      filter: blur(20px);
    }
    .header {
      @apply p-10 text-white text-lg relative z-10;
    }
    .body {
      @apply relative z-10;
    }
    .footer {
      @apply px-10 py-15px relative z-10 text-[#A5ADB0];
    }
  }
</style>
