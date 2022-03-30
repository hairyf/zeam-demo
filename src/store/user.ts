import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore({
  id: '__user__',
  state: () => ({
    username: '',
    password: '',
    favorites: [] as string[]
  }),
  actions: {},
  getters: {
    isLoading: (state) => {
      const fool = state.username && state.password
      return !!fool
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
