<!--  Форма для заполнения данных-->

<template>
  <form @submit.prevent="post">
    <p class="text-3xl font-bold">Заполните форму для услуги в {{serviceType}}</p>
    <div class="mt-4">
      <label class="label-form">
        Имя
<!--        Инпут к корому мы прявязываем имя (также как и фамилии, описание, тип объявление)
            из глобального хранилища-->
        <input v-model="adsFormData.name" type="text">
      </label>
      <label class="label-form">
        Фамилия
        <input v-model="adsFormData.surname" type="text">
      </label>
    </div>
    <div class="label-form mt-2">
      Описание
      <textarea v-model="adsFormData.description" class="w-2xl"/>
    </div>
    <label class="label-form mt-2">
      Тип объявления
      <select v-model="adsFormData.adsType">
        <option v-for="type in adsTypeList" :key="type.id" :value="type.value">
          {{type.title}}
        </option>
      </select>
    </label>
    <label v-if="adsFormData.adsType === 'instagram'" class="label-form mt-2">
      Тип публикации
      <select v-model="adsFormData.adsSubType">
        <option v-for="type in adsSubtype" :key="type.id" :value="type.value">
          {{type.title}}
        </option>
      </select>
    </label>
    <label class="label-form mt-2">
      Прикрепите фотографии
      <input @change="onFileChange" class="mt-2" type="file">
    </label>
    <button class="mt-6 p-2">Подать объявление</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { typeList, adsSubtypeList } from '@/config'
import { useAdsService } from '@/stores/ads.service'

//список типов объявлений
const adsTypeList = ref(typeList)

//список подтипов объявлений
const adsSubtype = ref(adsSubtypeList)

//глодальное хранилище данных
const { adsFormData, post, clearFormData, serviceType  } = useAdsService()

//получение файла из формы
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  adsFormData.file = target.files?.[0] || null;
};

//Очищаем данные формы при открытии
onMounted(() => clearFormData())
</script>

<style scoped lang="scss">
@use "style.module.scss";
</style>
