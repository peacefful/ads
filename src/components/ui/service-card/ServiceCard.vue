<!--Тип объявления-->

<template>
  <section @click="push('/adsForm')" class="flex flex-col h-full p-6 w-[420px] rounded-2xl bg-blue-500 text-white ease-in duration-75 cursor-pointer hover:text-white hover:bg-blue-400">
    <div>
      <slot/>
<!--      заголовок-->
      <h3 class="font-bold">{{ title }}</h3>
    </div>
<!--    описание объявления-->
    <div v-if="Array.isArray(description)">
      <ul v-for="(item, index) in description" :key="index">
        <li class="mt-2 ">{{ item }}</li>
      </ul>
    </div>
    <p v-else class="mt-2">
      {{ description }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { type TService } from '@/components/types/service.dto'
import { useRouter } from "vue-router"

defineProps<TService>()

const { push } = useRouter()
</script>
