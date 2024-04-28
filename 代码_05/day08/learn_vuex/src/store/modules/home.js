export default {
  state: () => ({
    counter: 991,
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
  },
  mutations: {
    changeCounter(state) {
      state.counter++
    },
  },
  actions: {

  }
}