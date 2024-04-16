<template>
    <div
		class="card bg-white mt-32 Login px-4 py-11 max-w-xs mx-auto"
	>
		<h2 class="text-3xl font-medium text-center">Register</h2>
		<div>
			<input
				type="email"
                v-model="form.email"
				placeholder="Enter your email address"
				class="mt-4 p-2 border border-gray-300 rounded-md w-full"
			/>
			<input
				type="password"
                v-model="form.password"
				placeholder="Enter your password"
				class="mt-4 p-2 border border-gray-300 rounded-md w-full"
			/>
			<input
				type="password"
                v-model="form.password_confirmation"
				placeholder="Enter your confirm password"
				class="mt-4 p-2 border border-gray-300 rounded-md w-full"
			/>

		</div>
		<button
			class="mt-4 px-24 py-2 text-black hover:bg-gray-400 rounded w-full"
            @click="registerUser"
		>
			Register
		</button>
	</div>
</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from '../stores/userstore'
const userStore = useUserStore()
const form = ref({
    email:'',
    password:'',
    password_confirmation:'',
})

const registerUser = async () => {
	console.log(form.value)
    await userStore.userRegister(form.value)
}
</script>

<style lang="scss" scoped>

</style>