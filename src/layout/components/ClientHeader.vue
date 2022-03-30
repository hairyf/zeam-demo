<template>
  <div class="header">
    <div class="controls">
      <div v-for="v in ['Zteam', '查看', '好友', '游戏', '帮助']" :key="v" class="link">{{ v }}</div>
    </div>
    <div class="__placeholder">
      <div class="infos">
        <div class="notify">
          <n-icon size="12"><EarthOutline /></n-icon>
        </div>
        <div class="mail">
          <div class="text-xs mt-2px mr-4px">9</div>
          <n-icon size="12"><CogSharp /></n-icon>
        </div>
        <div class="user">
          <div class="w-21px h-full bg-white"></div>
          <div class="flex-1">TuiMao!!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useUserStore } from '@/store/user'
  import { storeToRefs } from 'pinia'
  import { EarthOutline, CogSharp } from '@vicons/ionicons5'
  import { defineComponent } from 'vue-demi'
  export default defineComponent({ name: 'ClientHeader' })
</script>
<script lang="ts" setup>
  const userStore = useUserStore()
  const { username } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
  .header {
    @apply h-75px px-20 pt-5px rounded-md;
    @apply flex justify-between;
    background-image: linear-gradient(#1f2632, #1f2021);
  }
  .controls {
    @apply flex gap-10px;
  }
  .link {
    @apply inline-block text-xs  leading-8 select-none;
    color: #686d78;
    &:hover {
      color: #aeaeaf;
    }
  }
  .infos {
    @apply flex gap-10px cursor-default select-none;
  }
  .notify {
    @apply px-12px;
    @apply bg-[#1A2B3C] text-[#A4A4A4] hover:bg-[#22354A];
  }
  .mail {
    @apply flex items-center;
    @apply px-5px;
    @apply bg-[#5B7E0F] hover:bg-[#7DA54A] text-white;
  }
  .user {
    @apply flex items-center gap-12px;
    @apply h-21px w-100px text-xs;
    @apply text-[#55A4C4] bg-[#1A2B3C] hover:bg-[#22364B];
  }
</style>
