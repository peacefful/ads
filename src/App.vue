<!--Основной файл с приложением-->

<template>
<!--  Если текущий маршрут не является страницей с авторизаей,
то отображаем нашу оболочку с шапкой-->
  <DefaultLayout v-if="currentRoute !== '/auth'">
    <RouterView />
  </DefaultLayout>
<!--  Инача отображем обычный маршрут без оболочки с шапкой-->
  <RouterView v-else />
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

// Инициализируем роутер
const route = useRoute();

// Переменная с текущим роутом
const currentRoute = ref<string>('');

// Отслежием на какой мы странице, и проводим проверку в разметке на страницу авторизации
watch(
  () => route.path,
  (newPath) => currentRoute.value = newPath
);
</script>
