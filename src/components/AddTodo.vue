<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12">
    <div>
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        {{ name }} Todo Item
      </h2>
    </div>

    <div class="mt-10">
      <div>
        <label
          for="title"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Title</label
        >
        <div class="mt-2">
          <input
            v-model="form.title"
            name="title"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
        </div>
      </div>

      <div class="mt-4">
        <label
          for="description"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Description</label
        >
        <div class="mt-2">
          <textarea
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            name="description"
            v-model="form.description"
          >
          </textarea>
        </div>
      </div>

      <div class="mt-2">
        <button
          @click="addTodo()"
          class="flex justify-center rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ name }} Todo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useTodoStore } from "../stores/todostore";
import router from "@/router";
const store = useTodoStore();
const route = router.currentRoute;
let name = ref("");
const form = ref({
  title: "",
  description: "",
});
const addTodo = async () => {
  if (!form.value.title.trim()) {
    alert("Title is required");
  }
  if (!form.value.description.trim()) {
    alert("Description is required");
  }
  if (form.value.title && form.value.description) {
    if (name.value == "Add") {
      await store.addTodoItem(form.value);
    } else {
      await store.updateTodo(form.value, route.value.params.id)
    }
    router.push("/viewtodos");
  }
};

onMounted(() => {
  name.value = store.todoName;
  if (store.getTodoDataById) {
    form.value.title = store.getSelectedTodo.title;
    form.value.description = store.getSelectedTodo.description;
  }
});
</script>

<style lang="scss" scoped></style>
