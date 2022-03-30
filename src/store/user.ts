import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore({
  id: '__user__',
  state: () => ({}),
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
