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
  import { defineComponent, onMounted } from 'vue-demi'
  export default defineComponent({ name: 'ClientLayout' })
</script>
<script lang="ts" setup>
  import ClientHeader from './components/ClientHeader.vue'
  import ClientSidebar from './components/ClientSidebar.vue'
  import ClientBody from './components/ClientBody.vue'
  import { useUserStore } from '@/store/user'
  import { useRouter } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()

  onMounted(() => {
    if (userStore.isLogin) {
      router.replace('/login')
    }
  })
</script>

<style lang="scss" scoped>
  .container {
    @apply w-80vw min-w-700 overflow-hidden;
    @apply rounded-md bg-[#1B1E23];
    border: solid 1px #bdbdbd;
  }
</style>
