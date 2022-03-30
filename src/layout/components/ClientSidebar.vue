<template>
  <div class="w-260px relative">
    <div class="absolute inset-0 flex flex-col">
      <div class="home-button" @click="$router.replace('/client/home')">主页</div>
      <div class="bg-[#2A2F38] p-5px">
        <div class="search">
          <n-icon class="prefix" color="#7D7D7D" size="20">
            <SearchOutline />
          </n-icon>
          <input ref="inputElement" v-model="searchText" placeholder="按名称搜索" />
          <n-icon v-if="awaitFocused" class="suffix" color="#7D7D7D" size="20" @click="onClearSearch">
            <Close />
          </n-icon>
        </div>
      </div>
      <n-scrollbar class="collapse-container flex-1 bg-[#24282F]">
        <n-collapse default-expanded-names="1" accordion>
          <n-collapse-item name="1">
            <template #header>
              <span class="mr-5px">收藏</span>
              <span style="color: #657187">(59)</span>
            </template>
            <div class="game-item">
              <img class="w-15px h-15px" />
              <span>7 Days to Die</span>
            </div>
          </n-collapse-item>
          <n-collapse-item name="2">
            <template #header>
              <span class="mr-5px">所有游戏</span>
              <span style="color: #657187">(59)</span>
            </template>
            <div class="game-item">
              <img class="w-15px h-15px" />
              <span>7 Days to Die</span>
            </div>
            <div class="game-item">
              <img class="w-15px h-15px" />
              <span>7 Days to Die</span>
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue-demi'
  import { useFocus } from '@vueuse/core'

  export default defineComponent({ name: 'ClientSideBar' })
</script>
<script lang="ts" setup>
  import { SearchOutline, Close } from '@vicons/ionicons5'
  // #region input and search
  const inputElement = ref<HTMLInputElement>()
  const { focused } = useFocus(inputElement)
  const awaitFocused = ref(false)
  // 解决取消高亮后无法点击清除
  watch(focused, (fool) => {
    if (fool) awaitFocused.value = fool
    else setTimeout(() => (awaitFocused.value = fool), 100)
  })
  const searchText = ref('')
  const onClearSearch = () => {
    searchText.value = ''
  }
  // #endregion
</script>

<style lang="scss" scoped>
  .home-button {
    @apply flex items-center cursor-pointer;
    @apply ml-5px mb-10px h-34px pl-5px rounded-sm;
    @apply bg-[#25272d] text-[#8F8F8F] hover:bg-[#3E4047] hover:text-[#C9C9CB];
  }

  .search {
    @apply h-34px rounded-sm relative;
    @apply bg-[#24262B] text-[#DFE0E0];
    .prefix {
      @apply absolute z-10 top-6px left-6px;
    }
    .suffix {
      @apply absolute z-10 top-6px right-6px cursor-pointer;
    }
    input {
      @apply bg-transparent h-full w-full;
      @apply pl-30px;
      @apply outline-none;
      &::-webkit-input-placeholder {
        font-style: italic;
        transition: color 0.5s;
        color: #24262b;
      }
      &:hover {
        &::-webkit-input-placeholder {
          color: #454447;
        }
      }
      &:focus {
        &::-webkit-input-placeholder {
          color: #696b6e;
        }
      }
    }
  }

  :deep(.collapse-container) {
    // clear margin and padding
    .n-collapse-item {
      @apply mt-0 border-none;
      .n-collapse-item__content-inner {
        @apply pt-0 text-xs;
      }
    }

    // hover and active
    .n-collapse-item--active .n-collapse-item__header,
    .n-collapse-item__header:hover {
      background-image: none;
      background-color: #3e4e69;
      .n-collapse-item__header-main {
        color: #fff;
      }
    }
    .n-collapse-item__header {
      background-image: linear-gradient(to right, #292f3b, #23272f);
    }

    // set padding and size
    .n-collapse .n-collapse-item:first-child > .n-collapse-item__header,
    .n-collapse-item__header {
      @apply p-5px text-xs;
    }

    // set color
    .n-collapse-item__header {
      .n-collapse-item__header-main,
      .n-collapse-item-arrow {
        color: #cae4fb;
      }
    }
    .n-scrollbar-rail__scrollbar {
      background-color: #606774;
    }
  }

  .game-item {
    @apply flex items-center gap-6;
    @apply pl-26px py-4px cursor-pointer;
    @apply text-[#A2A9B8] hover:bg-[#323A4B];
    &.is-active {
      @apply text-white hover:bg-[#3E4E69];
    }
  }
</style>
