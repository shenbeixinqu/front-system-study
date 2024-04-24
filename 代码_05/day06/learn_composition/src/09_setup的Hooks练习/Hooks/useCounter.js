import { ref, onMounted } from 'vue'

export default function useCounter (){
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  onMounted(() => {
    setTimeout(() => {
      counter.value = 975
    }, 1000)
  })

  return {
    counter,
    increment,
    decrement
  }
}