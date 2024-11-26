<!--Форма для авторизации-->

<template>
  <form @submit.prevent="authSystem" class="w-[500px]">
    <p class="text-3xl font-bold">Войдите</p>
    <label class="label-form">
      Логин
      <input v-model="authForm.login" type="text">
    </label>
    <label class="label-form">
      Пароль
      <input v-model="authForm.password" type="password">
    </label>
    <button class="p-1 w-16 mt-2">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { useAuthService } from '@/stores/auth.service'
import { watch } from 'vue'
import { useRouter } from 'vue-router';

// Получаем данные из Pinia-хранилища
const { authForm, authSystem, isAuth } = useAuthService();

// Инициализируем router
const router = useRouter();

// Следим за изменением значения isAuth
watch(
  () => isAuth, // Отслеживаем isAuth.value, а не сам ref
  (newValue) => {
    console.log(newValue);
    if (newValue) router.push('/ads-list');
  }
);
</script>

<style scoped lang="scss">
@use "style.module.scss";
</style>
