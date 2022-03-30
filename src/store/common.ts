import { getGames } from '@/api'
import { Game } from '@/typings'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCommonStore = defineStore({
  id: '__common__',
  persist: { enabled: true },
  state: () => ({
    games: [] as Game[]
  }),
  actions: {
    async initialize() {
      const { data } = await getGames()
      this.$patch({ games: data })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
