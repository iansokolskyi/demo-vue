import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import UserList from '../views/UserList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SignUp,
  },
  {
    path: '/users',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserList,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
