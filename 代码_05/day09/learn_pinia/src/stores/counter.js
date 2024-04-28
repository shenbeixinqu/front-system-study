import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 88
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    doubleCountAddOne() {
      return this.doubleCount + 1
    },
    showMessage(state) {
      const userStore = useUser()
      return `name: ${userStore.name} count: ${state.count}`
    }
  },
  actions: {
    increment() {
      this.count++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCounter