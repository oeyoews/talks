<script setup lang="ts">
import { ref } from 'vue'

const sentenceRaw = ref('干一行，行一行')
</script>

<template>
  <div class="text-3xl" text-black font-semibold>
    像人一样思考
  </div>
  <div h-full>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        理解字词
      </span>
    </div>
    <div h-full flex flex-col justify-center>
      <div
        mt-20 h-full flex flex-col
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks > 0 && $slidev.nav.clicks < 4 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div bg="gray-100" rounded-lg px-4 py-2 text-2xl text-black>
          <div>
            <span font-serif>
              人要是行，干一行，行一行。 一行行，行行行；
            </span>
          </div>
          <div>
            <span font-serif>
              要是不行，干一行，不行一行。 一行不行，行行不行。
            </span>
          </div>
        </div>
        <div
          w="[200vw]"
          transition="all ease-in-out"
          flex gap-4 text-black duration-1500
          :class="[
            $slidev.nav.clicks < 2 ? 'opacity-0' : '',
            $slidev.nav.clicks > 1 && $slidev.nav.clicks <= 3 ? 'opacity-100' : '',
            $slidev.nav.clicks === 4 ? 'opacity-0' : '',
          ]"
        >
          <div class="h-full flex flex-row items-center text-3xl">
            <div flex flex-col justify-center>
              <div flex>
                <template v-for="(char, index) in sentenceRaw" :key="index">
                  <div
                    max-w-30
                    flex items-center justify-center
                    transition="all ease-in-out" duration-1500
                    :class="[
                      [0, 1].includes($slidev.nav.clicks) ? 'w-6 h-20 text-2xl' : '',
                      [2, 3, 4].includes($slidev.nav.clicks) ? 'w-10 h-20 mr-1 text-2xl' : '',
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
                      transition="all ease-in-out" duration-1500 delay-500
                      :class="[
                        [0, 1].includes($slidev.nav.clicks) ? 'border-transparent bg-opacity-0' : '',
                        [1, 2, 3, 4].includes($slidev.nav.clicks) ? 'delay-1000' : '',
                        [2].includes($slidev.nav.clicks) ? 'h-10 w-10 border-green-500 bg-green-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 0 ? 'h-10 w-10 border-gray-300 bg-gray-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 1 ? 'h-10 w-10 border-gray-300 bg-gray-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 2 ? 'h-10 w-10 border-yellow-500 bg-yellow-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 3 ? 'h-10 w-10 border-gray-300 bg-gray-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 4 ? 'h-10 w-10 border-sky-300 bg-sky-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 5 ? 'h-10 w-10 border-gray-300 bg-gray-200 bg-opacity-50' : '',
                        [3, 4].includes($slidev.nav.clicks) && index === 6 ? 'h-10 w-10 border-yellow-300 bg-yellow-200 bg-opacity-50' : '',
                      ]"
                    />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div
          flex flex-col gap-2 text-black
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <div flex flex-row items-center gap-2>
            <div>
              <span>第三个</span>
            </div>
            <div border="2 solid yellow-500" h-10 w-20 flex items-center justify-center rounded-lg bg="yellow-200 opacity-50">
              <span>行</span>
              <span opacity-50>业</span>
            </div>
          </div>
          <div flex flex-row items-center gap-2>
            <div>
              <span>第五个</span>
            </div>
            <div border="2 solid sky-500" h-10 w-20 flex items-center justify-center rounded-lg bg="sky-200 opacity-50">
              <span>行</span>
              <span opacity-50>得通</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
