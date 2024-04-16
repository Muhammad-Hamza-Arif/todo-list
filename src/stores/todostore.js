import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoName: "",
    todos: [],
    getTodoDataById:[]
  }),
  getters: {
    getTodos(state) {
      return state.todos;
  },
  getSelectedTodo(state) {
    return state.getTodoDataById;
},
  },
  actions: {
    async addTodoItem(payload) {
      try {
        const userToken = localStorage.getItem("token");
        const response = await axios.post("/api/item", payload, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        return response;
      } catch (error) {
      }
    },
    async getTodoItems() {
      try {
          const userToken = localStorage.getItem("token");
          const response = await axios.get('/api/items', {
              headers: {
                  Authorization: `Bearer ${userToken}`,
              },
          });
          this.todos = response.data.items.data;
          return response
      } catch (error) {
          console.error(error);
      }
  },
  async deleteTodoItem(id) {
    try {
        const userToken = localStorage.getItem("token");
        const response = await axios.delete(`/api/item/${id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        return response
    } catch (error) {
        console.error(error);
    }
},
async getTodoById(id) {
  try {
      const userToken = localStorage.getItem("token");
      const response = await axios.get(`/api/item/${id}`, {
          headers: {
              Authorization: `Bearer ${userToken}`,
          },
      });
      this.getTodoDataById = response.data.item;
  } catch (error) {
      console.error(error);
  }
},
async updateTodo(payload, id) {
  try {
      const userToken = localStorage.getItem("token");
      const response = await axios.put(`/api/item/${id}`, payload, {
          headers: {
              Authorization: `Bearer ${userToken}`,
          },
      });
      return response
  } catch (error) {
      console.error(error);
  }
},
  },
});
