<!--Шапка приложения-->
<template>
  <header class="h-20 bg-blue-500 text-white px-4 shadow-xl flex justify-between items-center rounded-b-lg ">
    <div class="w-full flex justify-between flex-wrap items-center">
      <h1 class="font-bold text-4xl cursor-pointer" @click="push('/')">
        I-REKLAMA
      </h1>
      <a href="https://wa.me/message/EVPYAALIUEBWO1" target="_blank" class="opacity-60 cursor-pointer hover:opacity-100">
        Поддержка: 8-705-317-37-07
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const { push } = useRouter()
</script>
