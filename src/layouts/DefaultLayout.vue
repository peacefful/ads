<!--Основная оболочка для приложения, с шапкой и слотом в котором находятся компоненты-->

<template>
  <div class="flex flex-col min-h-screen">
<!--    Шапка-->
    <Header />
    <main class="flex-grow p-4">
<!--      слот в котором находятся основные компоненты-->
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/components'
</script>
