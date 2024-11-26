<!--Сообщение об успешной подаче объявление-->

<template>
  <div class="flex flex-col justify-center items-center text-center gap-4">
    <img src="/public/images/148767.png" alt="not picture" height="200" width="200" />
    <h2>
      Объевление успешно создано,
      <span @click="showFormAds" class="cursor-pointer text-blue-400 hover:text-blue-500">
        можете создать новое
      </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useAdsService } from '@/stores/ads.service'

// Получаем глобальное хранилище данных
const adsService = useAdsService()

// Функция которая показывает форму если пользователь захотел подать новое объявление
const showFormAds = () => {
  adsService.isSuccessCreateAds = false
}
</script>

<style scoped lang="scss">

</style>
