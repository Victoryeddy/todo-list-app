<template>
  <TodoListLayout>

    <div class="">
      <div class="mx-auto min-h-fit content-center grid w-1/2 mt-10">
        <h1 class="text-4xl font-bold">Todo List</h1>
        <div class="card shadow-lg p-3 rounded">
          <div class="flex align-center justify-between">
            <v-text-field
              type="text"
              v-model="newTodo"
              placeholder="Add a new todo"
              @keyup.enter="addTodo"
              required
              class="w-3/4 p-3 text-xl mt-3 outline-none"
            ></v-text-field>
            <v-btn @click="addTodo" class="elevation-0">
              <v-img src="../assets/plus-circle.svg" alt="" class="w-8"></v-img>
            </v-btn>
          </div>
          <ul>
            <li v-for="(todo, index) in todos" :key="todo">
              <div class="flex justify-between">
               
                <span class="mt-4 text-lg"> {{ index + 1 + ")" + " "}}{{ todo }}</span>
                <div>
  
                  <v-btn @click="editTodo(index)">
                    <v-img src="../assets/pen.svg" alt="" class="w-7"></v-img>
                  </v-btn>
                  <v-btn @click="removeTodo(index)" class="ms-4">
                    <v-img src="../assets/trash-2.svg" alt="" class="w-7" />
                  </v-btn>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </TodoListLayout>
</template>
<script setup>
import TodoListLayout from "../components/Layouts/TodoListLayout.vue"
import { useTodoStore } from "@/store/index";
import { ref } from "vue";

const store = useTodoStore();

const newTodo = ref("");

function addTodo() {
  if (newTodo.value.trim() !== "") {
    store.addTodo(newTodo.value.trim());
    newTodo.value = "";
  }
}

function removeTodo(index) {
  store.removeTodo(index);
}

function editTodo(index) {
  //A pop up dialog shows up to edit item
 let newValue = prompt('Enter new todo', todos[index]);
 if (newValue.trim() !== '') {
  // Replaces an existing item at its index with the new value
   store.todos.splice(index, 1, newValue.trim());
 }
};

// const valueName = computed(() => store.doubleCount * 3);

const todos = store.todos;
</script>

<style>
/* *{
  outline:1px solid red;
} */
</style>
