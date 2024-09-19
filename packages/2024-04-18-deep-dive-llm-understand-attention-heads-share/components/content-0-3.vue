<script setup lang="ts">
import { ref } from 'vue'

const sentenceRaw = ref('深入浅出 LLM：释放 LLM 的潜力')
</script>

<template>
  <div
    class="text-3xl" font-semibold transition="all ease-in-out" duration-1500
    :class="[
      [1].includes($slidev.nav.clicks) ? 'opacity-0' : '',
    ]"
  >
    大语言模型的小宇宙：字与词
  </div>
  <div
    class="h-full flex-row items-center text-3xl"
  >
    <div
      class="h-full flex items-center text-3xl"
    >
      <div h-full flex flex-col justify-center>
        <div flex>
          <template v-for="(char, index) in sentenceRaw" :key="index">
            <div
              v-if="index === 0"
              max-w-30
              flex items-center justify-center
              transition="all ease-in-out" duration-1500
              :class="[
                [0].includes($slidev.nav.clicks) && index === 0 ? 'w-20 h-20 mr-4 text-4xl' : '',
                [0].includes($slidev.nav.clicks) && index !== 0 ? 'w-10 h-20 mr-1 text-2xl opacity-0' : '',
                [1].includes($slidev.nav.clicks) && index === 0 ? 'w-20 h-20 mr-4 text-4xl opacity-0' : '',
                [1].includes($slidev.nav.clicks) && index !== 0 ? 'w-10 h-20 mr-1 text-2xl opacity-0' : '',
                `index-${index}`,
              ]"
            >
              <div
                relative
                z-1
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
                transition="all ease-in-out" duration-1500
                :class="[
                  [0].includes($slidev.nav.clicks) && index === 0 ? 'h-20 w-20 border-sky-500 bg-sky-600 bg-opacity-50 active' : '',
                  [1].includes($slidev.nav.clicks) ? 'h-20 w-20 border-sky-500 bg-sky-600 bg-opacity-50 active opacity-0' : '',
                ]"
              />
            </div>
          </template>
        </div>
      </div>
      <div
        h-full
        flex flex-col justify-center
        transition="all ease-in-out" duration-1500
        :class="[
          [0].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
          [1].includes($slidev.nav.clicks) ? 'opacity-0' : '',
        ]"
      >
        <div flex>
          <div
            flex items-center justify-center
            transition="all ease-in-out" duration-1500
            class="mr-1 h-20 w-80 text-4xl"
          >
            <div
              relative
              z-1
            >
              <span font-mono>85315, 109</span>
            </div>
            <div
              absolute z-0
              border="2 solid" rounded-lg
              transition="all ease-in-out" duration-1500 delay-500
              class="h-20 w-80 bg-opacity-50"
              :class="[
                [0, 1].includes($slidev.nav.clicks) ? 'border-sky-500 bg-sky-600 active' : '',
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.node-connect::after {
  content: '';
  position: absolute;
  width: calc(1rem + 5px);
  height: 2px;
  top: 50%;
  left: 0;
  transform: translateX(calc(1rem * 2 + 4px + 1rem - 1px)) translateY(-1px);
  @apply bg-green-500 transition-all transition-ease-in-out duration-1500;
}

.active.node-connect::after {
  @apply bg-sky-500;
}

.node-from::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  right: -5px;
  transform: translateY(-4px);
  border-radius: 999px;
  @apply bg-green-500 transition-all transition-ease-in-out duration-1500;
}

.active.node-from::after {
  @apply bg-sky-500;
}

.node-to::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  left: -5px;
  transform: translateY(-4px);
  border-radius: 999px;
  @apply bg-green-500 transition-all transition-ease-in-out duration-1500;
}

.active.node-to::before {
  @apply bg-sky-500;
}
</style>
