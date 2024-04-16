<template>
  <div class="flex flex-col h-screen">
    <NavBar />
    <div class="flex flex-col items-center justify-center flex-grow">
      <h1 class="text-3xl font-bold mb-4">Welcome to Todo App</h1>
      <p class="text-lg mb-2">
        Manage your tasks efficiently with our simple and intuitive Todo App.
      </p>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../Layout/NavBar.vue";
</script>
