import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/UserTasks/HomeView.vue'
import ViewTodos from '../views/UserTasks/TodoViews.vue'
import RegisterView from "../views/RegisterView.vue"
import WelcomeView from "../views/GuestUser/WelcomeView.vue"
import LoginView from "../views/LoginView.vue"
import AddTodo from "../views/UserTasks/AddTodoView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/viewtodos',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'todo',
          component: ViewTodos,
        },
      ]
    },
    {
      path: '/addtodo',
      name: 'addtodo',
      component: AddTodo,
    },
    {
      path: '/todo/edit/:id',
      name: 'edittodo',
      component: AddTodo,
    },
        {
          path:'/',
          name: 'guestser',
          component: WelcomeView
        },
        {
          path:'/register',
          name: 'register',
          component: RegisterView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView,
        },
  ]
})

export default router
