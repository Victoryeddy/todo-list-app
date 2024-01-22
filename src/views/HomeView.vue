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
                <span class="mt-4 text-lg">
                  {{ index + 1 + ")" + " " }}{{ todo }}</span
                >
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

      <div
        class="wrapper pt-5"
        style="background-color: #082032; min-height: 70vh"
      >
        <div class="static-txt">I'm a</div>
        <ul class="dynamic-txt">
          <li class="my-0"><span>Youtuber</span></li>
          <li class="mt-1"><span>Designer</span></li>
          <li class="mt-1"><span>Developer</span></li>
          <li class="mt-1"><span>Freelancer</span></li>
        </ul>
      </div>

      <div>
        <p class="text-3xl">Background Color</p>
        <router-link to="/carousel" class="bg-orange-800 p-3">Go To</router-link>
      </div>
    </div>
  </TodoListLayout>
</template>
<script setup>
import TodoListLayout from "../components/Layouts/TodoListLayout.vue";
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
  let newValue = prompt("Enter new todo", todos[index]);
  if (newValue.trim() !== "") {
    // Replaces an existing item at its index with the new value
    store.todos.splice(index, 1, newValue.trim());
  }
}

// const valueName = computed(() => store.doubleCount * 3);

const todos = store.todos;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  /* outline:1px solid green; */
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  /* display:flex;
  justify-content:center;
  align-items:center; */
  min-height: 100vh;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.wrapper .static-txt {
  color: #fff;
  font-size: 3rem;
  font-weight: 400;
}

.wrapper .dynamic-txt {
  margin-left: 15px;
  line-height: 5rem;
  /* background-color: orangered; */
  height: 4.3rem;
  overflow: hidden;
}

.dynamic-txt li {
  list-style-type: none;
  color: #ff4c29;
  font-size: 3rem;
  font-weight: 400;
  position: relative;
  top: 0;
  animation: slide 12s steps(4) infinite;
}

@keyframes slide {
  100% {
    top: -340px;
  }
}

.dynamic-txt li::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #082032;
  left: 0;
  border-left: 2px solid #ff4c29;
  animation: typing 3s steps(10) infinite;
  /* The steps is just the number of letters to skip by */
}

@keyframes typing {
  40%,
  60% {
    left: calc(100% + 30px);
  }
  100% {
    left: 0;
  }
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
