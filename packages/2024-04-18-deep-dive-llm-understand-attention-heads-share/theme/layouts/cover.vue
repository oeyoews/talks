<script setup lang="ts">
const props = defineProps<{
  background?: string
}>()
</script>

<template>
  <Background :background="props.background" with-logo with-powered-by>
    <div class="slidev-layout" relative h-full w-full flex flex-col justify-center text-white>
      <slot />
    </div>
  </Background>
</template>
