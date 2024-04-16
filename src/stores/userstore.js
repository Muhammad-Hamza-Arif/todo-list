import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    token: null,
    errorMessage: "",
  }),
  getters: {},
  actions: {
    async userRegister(payload) {
      try {
        const response = await axios.post("/api/register", payload);
        alert(response.data.message);
        console.log(response);
      } catch (error) {
        if (error.response.data.error) {
          error.response.data.error.forEach((error) => {
            alert(error);
          });
        }
      }
    },
    async userLogin(payload) {
      try {
        const response = await axios.post("/api/login", payload);
        this.token = response.data.user.token;
        localStorage.setItem("token", response.data.user.token);
        return response;
      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else if (error.response.data.message) {
            this.errorMessage = error.response.data.message;
          }
        }
        alert(this.errorMessage);
      }
    },
    async logout(token) {
      try {
          const response = await axios.post("/api/logout",{token} );
          localStorage.clear();
      }
      catch (error) {
          console.log(error);
      }
  },
  },
});
