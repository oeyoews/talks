<script setup lang="ts">
import { ref } from 'vue'

const sentenceRaw = ref('深入浅出：大语言模型')
</script>

<template>
  <div class="text-3xl" font-semibold>
    大语言模型的小宇宙：字与词
  </div>
  <div
    class="h-full flex flex-row items-center text-3xl"
  >
    <div h-full flex flex-col justify-center>
      <div flex>
        <template v-for="(char, index) in sentenceRaw" :key="index">
          <div
            max-w-30
            flex items-center justify-center
            transition="all ease-in-out" duration-1500
            :class="[
              [0].includes($slidev.nav.clicks) ? 'w-6 h-20 text-2xl' : '',
              [1].includes($slidev.nav.clicks) ? 'w-10 h-20 mr-1 text-2xl' : '',
              [2].includes($slidev.nav.clicks) && index === 0 ? 'w-20 h-20 mr-20 text-4xl' : '',
              [2].includes($slidev.nav.clicks) && index !== 0 ? 'w-10 h-20 mr-1 text-2xl opacity-0' : '',
              `index-${index}`,
            ]"
          >
            <div
              v-motion relative
              z-1
              :initial="{
                opacity: 0,
              }"
              :enter="{
                opacity: 1,
                transition: {
                  duration: 500,
                  delay: 100 * index,
                },
              }"
            >
              <template v-if="char !== '' && char !== ' '">
                <span>{{ char }}</span>
              </template>
              <template v-else>
                <span>&nbsp;</span>
              </template>
            </div>
            <div
              absolute z-0
              border="2 solid" rounded-lg
              transition="all ease-in-out" duration-1500 delay-500
              :class="[
                [0].includes($slidev.nav.clicks) ? 'border-transparent bg-opacity-0' : '',
                [0, 1].includes($slidev.nav.clicks) ? 'delay-1000' : '',
                [1].includes($slidev.nav.clicks) ? 'h-10 w-10 border-green-500 bg-green-600 bg-opacity-50' : '',
                [2].includes($slidev.nav.clicks) && index === 0 ? 'h-20 w-20 border-green-500 bg-green-600 bg-opacity-50' : '',
                [2].includes($slidev.nav.clicks) && index !== 0 ? 'hidden opacity-0 bg-opacity-0 border-transparent' : '',
              ]"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
