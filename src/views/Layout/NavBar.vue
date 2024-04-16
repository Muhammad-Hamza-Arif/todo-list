<template>
  <div
    class="flex justify-between bg-gray-500 text-white px-5 py-3 items-center"
  >
    <h1 class="text-xl">Todo App</h1>
    <div v-if="isToken">
      <button @click="addTodo()" class="bg-slate-700 px-3 py-2 rounded-md">
        Add Todo
      </button>
      <button
        @click="userLogout()"
        class="ml-5 bg-slate-700 px-3 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
    <div v-else>
      <router-link to="/login" class="bg-slate-700 px-3 py-2 rounded-md"
        >Sign In</router-link
      >
      <router-link to="/register" class="ml-5 bg-slate-700 px-3 py-2 rounded-md"
        >Register</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTodoStore } from "../../stores/todostore";
import { useUserStore } from "../../stores/userstore";
const todostore = useTodoStore();
const userstore = useUserStore();
const router = useRouter();
const isToken = ref(null);
const userToken = localStorage.getItem("token");
onMounted(() => {
  isToken.value = localStorage.getItem("token");
});
const addTodo = () => {
  todostore.todoName = "Add";
  router.push("/addtodo");
};
const userLogout = async () => {
  await userstore.logout(userToken);
  router.push("/");
};
</script>
