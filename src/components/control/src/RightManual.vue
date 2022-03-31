<template>
  <n-dropdown
    placement="right-start"
    trigger="manual"
    :x="locations[0]"
    :y="locations[1]"
    :options="options"
    :show="manual.visible"
    :on-clickoutside="onClickoutside"
    @select="handleContextMenu"
  />
</template>

<script lang="ts">
  import { useCommandStore } from '@/store/command'
  import { useUserStore } from '@/store/user'
  import { storeToRefs } from 'pinia'
  import { defineComponent, ref, watch, computed } from 'vue-demi'
  export default defineComponent({ name: 'RightManual' })
</script>
<script lang="ts" setup>
  const commandStore = useCommandStore()
  const userStore = useUserStore()
  const { manual } = storeToRefs(commandStore)
  const { favorites } = storeToRefs(userStore)
  const isFavorite = computed(() => favorites.value.includes(+manual.value.target))

  const locations = ref([0, 0])
  watch(
    () => manual.value.event,
    (event) => (locations.value = [event.clientX, event.clientY]),
    { deep: true, flush: 'pre' }
  )
  const onClickoutside = () => {
    manual.value.visible = false
  }

  const options = computed(() => [
    {
      key: 'favorite',
      label: isFavorite.value ? '从收藏夹中移除' : '添加至收藏夹'
    }
  ])

  const handleContextMenu = (command: string) => {
    if (command === 'favorite') {
      const target = +manual.value.target
      const index = favorites.value.indexOf(target)
      if (isFavorite.value) {
        favorites.value.splice(index, 1)
      } else {
        favorites.value.push(target)
      }
    }
    manual.value.visible = false
  }
</script>

<style lang="scss" scoped></style>
