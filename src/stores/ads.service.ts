// Глобальное хранилище объявлений

import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { createAds, setFileToStorage } from '@/api'
import type { TAdsForm } from '@/components'
import { storage } from '@/lib/appwrite'
import { BUCKET_ID } from '@/constans/app.constants'

export const useAdsService = defineStore('ads', () => {

  //Основные данные формы
  const adsFormData: TAdsForm = reactive({
    name: '',
    surname: '',
    description: '',
    adsType: '',
    adsSubType: '',
    file: null,
  })

  // Название типа объявление, для отображения в заголовке формы
  const serviceType = ref<string>('')

  // Проверка на успешное создание объявление
  const isSuccessCreateAds = ref<boolean>(false)

  // Проверка на загрузку
  const isLoadingCreateAds = ref<boolean>(false)


  // Основная функция для создания объявления
  const post = async () => {
    if (adsFormData.file && typeof adsFormData.file !== 'string') {
      isLoadingCreateAds.value = true

      // Запрос на загрузку изображения
      const uploadedFile = await setFileToStorage(adsFormData.file);


      // Если фото успешно загружено,
      // то мы получаем ссылку с хранилища изображения и отправляем запрос на создание объявление
      // с остальными данными (имя, фамилия, описание и тд)
      if (uploadedFile) {
        const fileUrl = storage.getFileView(BUCKET_ID, uploadedFile.$id);
        const adData = { ...adsFormData, file: fileUrl };

        const isCreated = await createAds(adData);
        if (isCreated) isSuccessCreateAds.value = true;

        isLoadingCreateAds.value = false

        // После создание записи очащаем наши данные с формы
        clearFormData();
      }
    }
  };


  // Функция для очищения данных с формы
  const clearFormData = () => {
    adsFormData.name = ''
    adsFormData.surname = ''
    adsFormData.description = ''
    adsFormData.adsType = ''
    adsFormData.adsSubType = ''
  }

  return {
    adsFormData,
    isSuccessCreateAds,
    serviceType,
    isLoadingCreateAds,
    clearFormData,
    post,
  }
})
