<script setup lang="ts">
import { normalize } from '../composables/math'

const colors = [
  { text: 'text-sky-300', bg: 'bg-sky-800/30', border: 'border-sky-800' },
  { text: 'text-violet-300', bg: 'bg-violet-800/30', border: 'border-violet-800' },
  { text: 'text-teal-300', bg: 'bg-teal-800/30', border: 'border-teal-800' },
]

const grayTextColors = [
  'text-neutral-200',
  'text-neutral-300',
  'text-neutral-400',
  'text-neutral-500',
  'text-neutral-600',
  'text-neutral-700',
]

function grayTextColorBasedOnSoftMax(value: number, ofValues: number[]) {
  const normalized = normalize(value, ofValues)
  const index = Math.floor(normalized * (grayTextColors.length - 1))
  return grayTextColors[index]
}

const data = [
  { text: 'To', embedding: [5.4, 7.1, 6.0, 5.4, 4.2, 6.4, 4.3, 8.8, 3.8] },
  { text: 'be', embedding: [6.2, 8.5, 5.9, 5.1, 4.5, 6.7, 4.8, 7.3, 4.2] },
  { text: 'or', embedding: [5.8, 6.9, 7.0, 4.8, 4.1, 6.3, 4.0, 7.9, 3.5] },
  { text: 'not', embedding: [6.1, 7.2, 6.5, 5.2, 3.9, 6.0, 4.6, 8.1, 3.9] },
  { text: 'to', embedding: [5.5, 7.4, 6.1, 5.3, 4.3, 6.5, 4.4, 8.5, 4.0] },
  { text: 'be', embedding: [6.3, 8.6, 6.0, 5.2, 4.6, 6.8, 4.9, 7.4, 4.3] },
  { text: 'this', embedding: [5.9, 7.0, 6.9, 4.9, 4.2, 6.4, 4.1, 8.0, 3.6] },
  { text: 'is', embedding: [6.0, 7.1, 6.8, 5.0, 4.0, 6.1, 4.5, 8.2, 3.8] },
  { text: 'the', embedding: [5.6, 7.3, 6.2, 5.5, 4.4, 6.6, 4.2, 8.6, 4.1] },
]
</script>

<template>
  <div class="text-3xl" font-semibold>
    向量空间究竟代表了什么？
  </div>
  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span
        v-motion
        transition="all ease-in-out" duration-1500
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
        }"
      >
        层峦叠嶂般堆叠起来的各种特征就是向量空间的本质。
      </span>
    </div>
    <div class="flex flex-row mt-5">
      <div class="flex-rol flex">
        <template v-for="(item, index) in data" :key="index">
          <div
            class="flex flex-col" transition="all ease-in-out" duration-1500
            :class="[
              [0].includes($slidev.nav.clicks) ? 'opacity-0 translate-y--4' : '',
              [1].includes($slidev.nav.clicks) ? 'opacity-100' : '',
              [2].includes($slidev.nav.clicks) ? 'opacity-0 translate-y-4' : '',
              `delay-${200 * (index + 1)}`,
            ]"
          >
            <div class="flex items-center justify-center rounded-full mb-6">
              <span
                class="border-2 rounded-md border-solid px-2 py-1" :class="[
                  colors[index % colors.length].text,
                  colors[index % colors.length].bg,
                  colors[index % colors.length].border,
                ]"
              >
                {{ item.text }}
              </span>
            </div>
            <template v-if="index !== data.length - 2">
              <div class="vertical-vector relative mx-5 flex flex-col px-2 font-math">
                <div v-for="(value, i) in item.embedding" :key="i" class="py-1">
                  <span
                    :class="[
                      grayTextColorBasedOnSoftMax(value, item.embedding),
                    ]"
                  >
                    {{ value.toFixed(1) }}
                  </span>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="relative flex flex-col px-4 font-math h-full justify-center text-3xl"
                transition="all ease-in-out" duration-1500
                :class="[
                  [0].includes($slidev.nav.clicks) ? 'opacity-0 translate-y--4' : '',
                  [1, 2].includes($slidev.nav.clicks) ? 'opacity-100' : '',
                  [3].includes($slidev.nav.clicks) ? 'opacity-0 translate-y-4' : '',
                  `delay-${200 * (index + 1)}`,
                ]"
              >
                <span>
                  ...
                </span>
              </div>
            </template>
          </div>
        </template>
      </div>
      <div class="flex flex-row h-full ml-8">
        <div
          class="flex items-center justify-center rounded-full h-full" transition="all ease-in-out" duration-1500
          :class="[
            [0].includes($slidev.nav.clicks) ? 'opacity-0 translate-y--4' : '',
            [1].includes($slidev.nav.clicks) ? 'opacity-100' : '',
            [2].includes($slidev.nav.clicks) ? 'opacity-0 translate-y-4' : '',
            `delay-${200 * (data.length + 2)}`,
          ]"
        >
          <span
            class="border-2 border-yellow-800 rounded-md border-solid bg-yellow-800/30 px-2 py-1 text-yellow-300"
          >
            ?
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vertical-vector::before, .vertical-vector::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  border: 1px solid rgb(255, 255, 255);
}

.vertical-vector::before {
  left: -6px;
  border-right: none;
}

.vertical-vector::after {
  right: -6px;
  border-left: none;
}
</style>
