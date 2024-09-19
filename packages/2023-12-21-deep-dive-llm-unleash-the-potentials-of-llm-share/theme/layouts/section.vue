<script setup lang="ts">
const props = defineProps<{
  background?: string
  sectionNumber?: number
  sectionTitle?: string
  sectionSubtitle?: string
}>()
</script>

<template>
  <Background :background="props.background">
    <div ml="[45%]" class="slidev-layout" relative h-full w-full flex flex-col justify-center>
      <div class="text-4xl font-semibold mb-2!">
        Part <span class="text-[#60cd6a] font-mono">{{ String(props.sectionNumber || 0).padStart(2, '0') }}</span>
      </div>
      <h1 class="text-4xl font-semibold mb-2!">
        {{ props.sectionTitle || '' }}
      </h1>
      <span>
        {{ props.sectionSubtitle || '' }}
      </span>
    </div>
  </Background>
</template>
