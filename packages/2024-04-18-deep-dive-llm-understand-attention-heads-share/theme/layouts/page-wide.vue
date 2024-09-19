<script setup lang="ts">
const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div relative h-full w-full text-white text="[1.1rem]">
      <slot />
    </div>
  </Background>
</template>
