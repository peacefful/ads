<!--Страница всех объявлений-->

<template>
  <div class="flex flex-col">
    <strong>Общее количество объявлений: {{adsList.length}}</strong>
    <strong>Инстаграм объявлений: {{filterAds('instagram')}}</strong>
    <strong>Телеграм объявлений: {{filterAds('telegram')}}</strong>
    <strong>Вацап объявлений: {{filterAds('whatsapp')}}</strong>
  </div>
  <ul>
<!--    Через цикл выводим каждое объявление-->
    <li v-for="(ads, index) in adsList" :key="index">
      <div class="text-xl border border-solid border-black bg-white mt-2 p-3 rounded-lg">
        <a :href="getFileUrl(ads.file)" target="_blank">
          <img :src="getFileUrl(ads.file)" width="100" height="150" alt="Ad image">
        </a>
        <p class="mt-6">{{ ads.description }}</p>
        <div class="text-sm mt-8 opacity-60">
          Тип: {{ ads.adsType }} {{ ads.adsSubType }}
          <p class="mt-4">
            Пользователь: {{ ads.name }} {{ ads.surname }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { getAdsList } from '@/api/services';
import type { TAdsForm } from '@/components'
import { ref } from 'vue'

const adsList = ref<TAdsForm[]>([])

const filterAds = (type: string) => {
  const filteredData = adsList.value.filter((ad) => ad.adsType === type)
  return filteredData.length
}

const instagramAds = filterAds('instagram')
const telegramAds = filterAds('telegram')
const whatsAppAds = filterAds('whatsapp')

// Функция для отображения фотографии к объявлению
const getFileUrl = (file: string | File | null): string => {
  if (file instanceof File) {
    return URL.createObjectURL(file);
  }
  return file || '/placeholder.png';
};

// Запрос на получение всех объявлений
getAdsList().then((res) => {
  if (res?.documents) {
    adsList.value = res.documents.map((doc) => ({
      id: doc.id,
      name: doc.name,
      surname: doc.surname,
      description: doc.description,
      adsType: doc.adsType,
      adsSubType: doc.adsSubType,
      file: doc.file || null,
    }));
  }
});
</script>
