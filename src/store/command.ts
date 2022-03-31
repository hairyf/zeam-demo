import { acceptHMRUpdate, defineStore } from 'pinia'
import { nextTick } from 'vue'

export const useCommandStore = defineStore({
  id: '__command__',
  state: () => ({
    manual: {
      target: '' as string | number,
      visible: false,
      event: {} as MouseEvent
    }
  }),
  actions: {
    async showManual(target: string | number, event: MouseEvent) {
      event.preventDefault()
      this.manual.visible = false
      await nextTick()
      this.manual.visible = true
      this.manual.target = target
      this.manual.event = event
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommandStore, import.meta.hot))
}
