<template>
  <div class="z-search">
    <n-icon class="z-search__prefix" color="#7D7D7D" size="20">
      <SearchOutline />
    </n-icon>
    <input ref="inputElement" v-model="value" :placeholder="placeholder || '按名称搜索'" />
    <n-icon v-if="awaitFocused" class="z-search__suffix" color="#7D7D7D" size="20" @click="onClearSearch">
      <Close />
    </n-icon>
  </div>
</template>

<script lang="ts">
  import { useFocus, useVModel } from '@vueuse/core'
  import { defineComponent, defineProps, ref, watch } from 'vue-demi'
  export default defineComponent({ name: 'ZSearch' })
</script>
<script lang="ts" setup>
  import { SearchOutline, Close } from '@vicons/ionicons5'
  const props = defineProps({
    modelValue: String,
    placeholder: String
  })
  const emits = defineEmits(['clear'])

  const value = useVModel(props, 'modelValue')
  const inputElement = ref<HTMLInputElement>()
  const { focused } = useFocus(inputElement)
  const awaitFocused = ref(false)
  // 解决取消高亮后无法点击清除
  watch(focused, (fool) => {
    if (fool) awaitFocused.value = fool
    else setTimeout(() => (awaitFocused.value = fool), 100)
  })
  const onClearSearch = () => {
    value.value = ''
    emits('clear')
  }
</script>

<style lang="scss">
  .z-search {
    @apply h-34px rounded-sm relative;
    @apply bg-[#24262B] text-[#DFE0E0];
    &__prefix {
      @apply absolute z-10 top-6px left-6px;
    }
    &__suffix {
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
</style>
