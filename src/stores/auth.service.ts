// Глобальное хранилище авторизации

import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import type { TAuthForm } from '@/components'
import { useRouter } from 'vue-router'

export const useAuthService = defineStore('auth', () => {

  //Данные для авторизации
  const authForm:TAuthForm = reactive({
    login: '',
    password: ''
  })

  // Роутер для маршрутизации
  const router = useRouter()

  // Проверка на авторизацию
  const isAuth = ref<boolean>(false)

  // Функция для авторизации, если пользователь ввел корректные данные,
  // то его переадресует на список объявлпений
  const authSystem = () => {
    if (authForm.password === 'admin123' && authForm.login === 'admin') {
      isAuth.value = true
      router.push("/ads-list")
    }
  }

  return {
    authForm,
    isAuth,
    authSystem,
  }
})
