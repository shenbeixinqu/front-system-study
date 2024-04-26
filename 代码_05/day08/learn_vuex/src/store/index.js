import { createStore } from 'vuex'
import { CHANGE_INGO } from './mutation_types'

export default createStore({
  state: () => ({
    counter: 991,
    name: "kobe",
    age: 27,
    friends: [
      { id: 10001, age: 20 },
      { id: 10002, age: 25 },
      { id: 10003, age: 35 }
    ]
  }),
  getters: {
    // 基本使用
    doubleCounter(state) {
      return state.counter * 2
    },
    totalAge(state) {
      return state.friends.reduce((pre, item) => {
        return pre + item.age
      }, 0)
    },
    // 在getters属性中 获得其他的getters
    message(state, getters) {
      return `name: ${state.name} age: ${state.age} frineds: ${getters.totalAge}`
    },

    // getters是可以返回一个参数的 调用这个函数可以传入参数
    getFriendById(state) {
      return function(id) {
        const friend = state.friends.find(item => item.id === id)
        return friend
      }
    }
    
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload
    },
    incrementAge(state) {
      state.age++
    },
    // changeInfo(state, payload) {
    //   state.name = payload.name
    //   state.age = payload.age
    // }

    // 使用常量 
    [CHANGE_INGO](state, payload) {
      state.name = payload.name
      state.age = payload.age
    }
  },
  actions: {
  },
  modules: {
  }
})
