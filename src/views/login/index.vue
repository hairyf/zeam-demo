<template>
  <div class="flex justify-center items-center">
    <div class="w-480px bg-primary rounded-md">
      <div class="header"> Zeam 登录 </div>
      <div class="body">
        <div class="logo-name">
          <div class="logo"></div>
          <div class="name"> ZEAM </div>
        </div>
        <z-input v-model="userState.username" class="mb-15px" label="账号名称" />
        <z-input v-model="userState.password" type="password" class="mb-15px" label="密码" />
        <div class="flex gap-15px ml-85px">
          <z-button class="flex-1" :disabled="disabled" @click="onLogin">登录</z-button>
          <z-button class="flex-1">取消</z-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ZButton } from '@/components/button'
  import { ZInput } from '@/components/input'
  import { useUserStore } from '@/store/user'
  import { computed, onMounted, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const userStore = useUserStore()

  const userState = reactive({
    username: '',
    password: ''
  })
  const disabled = computed(() => {
    const fool = userState.username && userState.password
    return !fool
  })

  const onLogin = () => {
    userStore.$patch(userState)
    router.replace('/client')
  }
  onMounted(() => {
    if (userStore.isLoading) {
      router.replace('/client')
    }
  })
</script>

<style lang="scss" scoped>
  .header {
    @apply flex items-center;
    @apply h-40 px-10 mb-10;
    @apply text-xs rounded-t-md;
    background-image: linear-gradient(#22262c, #2a2d32);
    color: #b0b6c0;
  }
  .body {
    @apply flex flex-col p-40 pt-0;
  }
  .logo-name {
    @apply flex items-center gap-10 mb-15px pl-15px;
  }
  .logo {
    @apply w-35px h-35px rounded-full;
    background-image: linear-gradient(#e0dfdf, #c9c9c8);
  }
  .name {
    @apply font-bold;
    background-image: linear-gradient(#e0dfdf, #c9c9c8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
