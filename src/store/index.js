import { defineStore } from 'pinia'

import { ref, computed} from "vue";

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})


export const useTodoStore = defineStore('todo', () => {
  const count = ref(3)

  const todos = ref([]);
  const name = ref('Eduardo')

  
  const doubleCount = computed(() => count.value * 2)

  function addTodo(todo) {
    todos.value.push(todo);
  }

  function removeTodo(index) {
    todos.value.splice(index, 1);
  }

  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment, todos , addTodo, removeTodo }
})
