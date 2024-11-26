<!--Страница с формой-->
<template>
  <div class="max-w-[900px] m-auto">
    <div v-if="!adsService.isSuccessCreateAds && !adsService.isLoadingCreateAds">
      <AdsForm />
    </div>

<!--    Если происходит загрузка, то отображаем спиннер для загрузки-->
    <div class="flex justify-center mt-8" v-else-if="adsService.isLoadingCreateAds">
      <SpinnerLoading />
    </div>

<!--    Если объявление было создано, то отображаем сообщение об успешном создании-->
    <div class="mt-8" v-else>
      <SuccessMessage />
    </div>
  </div>
</template>


<script setup lang="ts">
import { AdsForm, SuccessMessage } from '@/components'
import { useAdsService } from '@/stores/ads.service'
import { SpinnerLoading } from '@/components'

const adsService = useAdsService()
</script>
