// Роутер где расположены все ссылки на страницы
import { createRouter, createWebHistory } from 'vue-router'

// Компонент домашней страницы
import HomeView from '../views/HomeView.vue'

// Компонент с формой объявления
import AdsForm from '../views/AdsView.vue'

// Компонент с авторизацией админа
import LoginView from '../views/LoginView.vue'

// Компонент компонент со всеми объявлениями
import AdsListView from '../views/AdsListView.vue'


//Инициализация самого роутера
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/adsForm',
      name: 'Form',
      component: AdsForm,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: LoginView,
    },
    {
      path: '/ads-list',
      name: 'AdsList',
      component: AdsListView,
    },
  ],
})

export default router
