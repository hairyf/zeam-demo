<template>
  <n-scrollbar class="client-body">
    <router-view />
  </n-scrollbar>
</template>

<script lang="ts">
  import { defineComponent } from 'vue-demi'
  export default defineComponent({ name: 'ClientBody' })
</script>

<style lang="scss">
  .client-body {
    @apply flex-1;
    background-image: linear-gradient(to right, #1e2530, #171c21);
  }
</style>
