<template>
  <div class="z-input">
    <label class="z-input__label">{{ label }}</label>
    <input v-model="value" :type="type" class="z-input__input" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, defineProps } from 'vue-demi'
  import { useVModel } from '@vueuse/core'
  export default defineComponent({ name: 'ZInput' })
</script>
<script lang="ts" setup>
  const props = defineProps({
    type: String,
    label: String,
    modelValue: String
  })
  const value = useVModel(props, 'modelValue')
</script>

<style lang="scss">
  .z-input {
    @apply text-xs;
    @apply flex justify-center items-center;
    color: #979aa2;
    .z-input__label {
      @apply text-right w-60px ml-15px mr-10px;
    }
    .z-input__input {
      @apply flex-1 h-24px bg-transparent outline-none px-5px;
      border: solid 1px #4a5466;
      &:focus {
        border-color: #dbdada;
      }
    }
  }
</style>
