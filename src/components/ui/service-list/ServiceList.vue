<!--Список все объявлений-->

<template>
  <section class="mt-4">
    <h2 class="font-bold text-2xl text-center">Наши услуги</h2>
    <div class="flex justify-around flex-wrap items-stretch gap-2.5 mt-4">
<!--      Проходим циклом чтобы отобразить каждую карточку объявления-->
      <ul v-for="service in serviceList" :key="service.id">
        <ServiceCard
          @click="adsService.serviceType = service.title"
          :id="service.id"
          :title="service.title"
          :description="service.description"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ServiceCard, type TService } from '@/components'
import { ref } from 'vue';
import { useAdsService } from '@/stores/ads.service'

// Получаем глобальное хранилище данных
const adsService = useAdsService()

// Список все объявлений
const serviceList = ref<TService[]>([
  {
    id: 1,
    title: 'Instagram',
    description: [
      'Пост: cоздание и публикация контента, который появляется в ленте подписчиков',
      'Сторис: Временный контент, доступный в течение 24 часов',
      'Закреп: Сохранение сторис в специальном разделе профиля',
    ],
  },
  { id: 2, title: 'Telegram', description: 'Рассылка по 3 группам в Telegram Карагандинской области - купи продай тематики' },
  { id: 3, title: 'Whatsapp', description: 'Рассылка по WhatsApp группам Карагандинской области, 40 групп - купи продай тематики' },
])
</script>
