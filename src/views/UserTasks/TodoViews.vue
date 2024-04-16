<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">All ToDos</h2>
    <ul ref="todosList">
      <div
        v-show="loading"
        class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-800 bg-opacity-50"
      >
        <Loader />
      </div>
      <div
        v-for="todo in getAllTodos"
        :key="todo.id"
        class="bg-white rounded-lg shadow-md p-4 mb-4"
      >
        <ViewTodos
          :todoItem="todo"
          @deleteTodoItem="deleteTodoItem"
          @editTodoItem="editTodoItem"
        />
      </div>
    </ul>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todostore";
import ViewTodos from "@/components/ViewTodos.vue";
import { useRouter } from "vue-router";
import { onMounted, computed } from "vue";
const store = useTodoStore();
const router = useRouter()
const getAllTodos = computed(() => store.getTodos);
onMounted(() => {
  store.getTodoItems();
});
const deleteTodoItem = async (id) => {
  await store.deleteTodoItem(id).then(()=>{
    store.getTodoItems()
  });
};

const editTodoItem = async (id) => {
    store.todoName = "Edit"
  await store.getTodoById(id);
  await router.push({ path: `todo/edit/${id}` });
};
</script>

<style lang="scss" scoped></style>
