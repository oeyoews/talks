<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import Logo from '../assets/daocloud-logo.png'
import PoweredBy from '../assets/powered-by.png'

const props = defineProps<{
  background?: string
  withLogo?: boolean
  withPoweredBy?: boolean
}>()

const style = computed(() => handleBackground(props.background, false))
</script>

<template>
  <div :style="style" class="h-full w-full">
    <div
      v-if="props.withLogo"
      absolute left="[40px]" top="[20px]" w="[144px]" h="[46px]"
      transition="all ease-in-out" duration-500
    >
      <img :src="Logo">
    </div>
    <slot />
    <div v-if="props.withPoweredBy" absolute right="[40px]" bottom="[0px]" w="[144px]" h="[46px]">
      <img :src="PoweredBy">
    </div>
  </div>
</template>
