<template>
  <div class="card bg-white mt-32 Login px-4 py-11 max-w-xs mx-auto">
    <h2 class="text-3xl font-medium text-center">Log In</h2>
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
    </div>
    <button
      class="mt-4 px-24 py-2 text-white hover:bg-gray-600 rounded w-full font-medium bg-slate-800"
      @click="loginUser"
    >
      Log In
    </button>
    <router-link to="/register">
      <button
        class="mt-4 px-24 py-2 text-white hover:bg-gray-600 rounded w-full font-medium bg-slate-800"
      >
        Register
      </button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/userstore";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();
const form = ref({
  email: "",
  password: "",
});

const loginUser = async () => {
  await userStore.userLogin(form.value).then((res)=>{
    if(res.statusText == 'OK'){
        router.push("/viewtodos")
    }
  });
};
</script>

<style lang="scss" scoped></style>
