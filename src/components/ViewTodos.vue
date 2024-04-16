<template>
	<li class="bg-white rounded-lg p-4 mb-4">
		<strong class="text-xl font-semibold">{{ todoItem.title }}</strong>
		<p class="text-gray-600">{{ todoItem.description }}</p>
		<button
			@click="deleteTodoItem(todoItem.id)"
			class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
		>
			Delete
		</button>
		<button
			@click="editTodoItem(todoItem.id)"
			class="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
		>
			Edit
		</button>
	</li>
</template>

<script setup>
	defineProps({
		todoItem: Object,
	});
	const emit = defineEmits(["deleteTodoItem", "editTodoItem"]);
	const deleteTodoItem = (id) => {
		var answer = confirm("Do you really want to delete the Todo?");
		if (answer) {
			emit("deleteTodoItem", id);
		}
	};
	const editTodoItem = (id) => {
		emit("editTodoItem", id);
	};
</script>
