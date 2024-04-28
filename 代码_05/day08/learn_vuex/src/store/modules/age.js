export default {
  namespaced: true,
  state: () => ({
    age: 88
  }),
  getters: {
    doubleAge(state) {
      return state.age * 2
    }
  },
  mutations: {
    changeAge(state) {
      state.age++
    }
  },
  actions: {

  }
}