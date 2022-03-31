<template>
  <div class="h-screen overflow-y-hidden flex justify-center items-center">
    <n-config-provider :theme-overrides="overridesTheme">
      <router-view />
      <z-right-manual />
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
  import { ZRightManual } from '@/components/control'
  import overridesTheme from '@/config/naive-ui-theme-overrides.json'
</script>

<style></style>
