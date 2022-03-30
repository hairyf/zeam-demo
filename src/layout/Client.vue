<template>
  <div class="w-80vw min-w-700 h-40px">
    <div class="header"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, defineProps } from 'vue-demi'
  export default defineComponent({ name: 'ClientLayout' })
</script>
<script lang="ts" setup>
  const props = defineProps({})
</script>

<style lang="scss" scoped>
  .header {
    background-image: linear-gradient(#1f2632, #1f2021);
  }
</style>
