<script setup lang="ts">
const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div class="slidev-layout" relative h-full w-full text-white>
      <slot />
    </div>
  </Background>
</template>
