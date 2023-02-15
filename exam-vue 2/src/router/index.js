import { createRouter, createWebHistory } from 'vue-router'
import RegistrPage from "@/components/RegistrPage.vue";
import Login from "@/components/Login.vue";
import HomePage from "@/components/HomePage.vue";
import Users from "@/components/Users.vue";
import NewsPage from "@/components/NewsPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/first',
      component: RegistrPage
    },
    {
      path: '/second',
      component: Login,
      alias:'/'
    },
    {
      path: '/third',
      component: HomePage
    },
    {
      path: '/fourth',
      component: NewsPage
    },
    {
      path: '/fifth',
      component: Users
    },
    
  ]
})

export default router