import router from '@/router'
import { useCommonStore } from '@/store/common'
import '@/style/index.scss'
import { useTitle } from '@vueuse/core'
import { App, computed } from 'vue'

export const useAppInitialize = (app: App<Element>) => {
  const route = router.currentRoute
  const commonStore = useCommonStore()

  const title = computed(() => {
    if (route.value.path === '/game') {
      const id = route.value.params.id as string
      const game = commonStore.games.find((v) => v.id == +id)
      return game?.title ? `Zteams 中的 ${game?.title}` : 'Zteams'
    }
    return route.value.meta.title || 'Zteams'
  })
  useTitle(title)
}
