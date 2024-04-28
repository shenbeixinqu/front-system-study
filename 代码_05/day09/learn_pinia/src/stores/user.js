import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: "kobe",
    age: 19,
    level: 98
  })
})


export default useUser