<template>
  <button class="z-button" :class="[disabled && 'is-disabled']" :disabled="disabled" @click="!disabled && emits('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, defineProps } from 'vue-demi'
  export default defineComponent({ name: 'ZButton' })
</script>
<script lang="ts" setup>
  const props = defineProps({ disabled: Boolean })
  const emits = defineEmits(['click'])
</script>

<style lang="scss">
  .z-button {
    @apply text-xs h-24px flex items-center px-10;
    background-image: linear-gradient(#424851, #31373d);
    color: #b5bcc8;
    &.is-disabled {
      background-color: #2c3036;
      background-image: none;
      color: #4c515a;
    }
    &:active {
      background-image: linear-gradient(#292c31, #31373d);
    }
  }
</style>
