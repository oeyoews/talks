<script setup lang="ts">
const chars = {
  你: {
    context: '你',
    predict: [
      {
        text: '好',
        possiblilities: 0.821676,
      },
      {
        text: '叫',
        possiblilities: 0.818492,
      },
      {
        text: '今',
        possiblilities: 0.959828,
        finetuned: true,
      },
      {
        text: '要',
        possiblilities: 0.741289,
      },
      {
        text: '想',
        possiblilities: 0.517177,
      },
      {
        text: '我',
        possiblilities: 0.513993,
      },
    ],
  },
  天: {
    context: '你今',
    predict: [
      {
        text: '天',
        possiblilities: 0.821676,
      },
    ],
  },
  想: {
    context: '你今天',
    predict: [
      {
        text: '想',
        possiblilities: 0.821676,
      },
      {
        text: '要',
        possiblilities: 0.741289,
      },
      {
        text: '会',
        possiblilities: 0.513993,
      },
    ],
  },
}
</script>

<template>
  <div class="text-3xl" text-black font-semibold>
    当我们说微调的时候是在做什么？
  </div>

  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        大模型不存储知识，它只是学会了知识编写的规则。
      </span>
    </div>
    <div
      flex gap-4 w="[200vw]" transition="all ease-in-out" duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 5 ? 'opacity-100' : '',
        $slidev.nav.clicks === 6 ? 'opacity-0' : '',
      ]"
    >
      <div
        v-for="(charItem, charIndex) in Object.keys(chars)" :key="charIndex" flex justify-center text-2xl
        text-black transition="all ease-in-out" duration-1500 :class="[
          $slidev.nav.clicks >= charIndex + 1 ? 'opacity-100' : 'opacity-0',
          $slidev.nav.clicks === 4 ? 'text-lg' : '',
        ]"
      >
        <div
          w-full flex justify-center transition="all ease-in-out" duration-1500 :class="[
            $slidev.nav.clicks < 4 ? 'gap-2' : '',
          ]"
        >
          <div
            border="2 solid green-200" bg="green-100" h-fit w-fit flex flex-row rounded-lg
            transition="all ease-in-out" duration-1500 :class="[
              $slidev.nav.clicks < 4 ? 'px-4 py-2' : '',
            ]"
          >
            <span>{{ chars[charItem as keyof typeof chars].context }}</span>
          </div>
          <div flex flex-col gap-2>
            <div
              v-for="(predictItem, predictIndex) in chars[charItem as keyof typeof chars].predict"
              :key="predictIndex" border="2 dashed" bg="gray-50" h-fit w-fit w-full flex
              rounded-lg transition="all ease-in-out" duration-1500 :class="[
                'finetuned' in predictItem && predictItem.finetuned ? 'border-red-200 bg-red-100' : 'border-transparent',
                predictIndex === 0 ? 'text-neutral-800' : '',
                predictIndex === 1 ? 'text-neutral-700' : '',
                predictIndex === 2 ? 'text-neutral-600' : '',
                predictIndex === 3 ? 'text-neutral-500' : '',
                predictIndex === 4 ? 'text-neutral-400' : '',
                predictIndex === 5 ? 'text-neutral-300' : '',
                predictIndex === 6 ? 'text-neutral-200' : '',
                predictIndex >= 7 ? 'text-neutral-100' : '',
                $slidev.nav.clicks < 4 ? 'px-4 py-2 gap-4' : '',
                $slidev.nav.clicks === 4 ? 'px-2 py-1 gap-4' : '',
                $slidev.nav.clicks === 5 || $slidev.nav.clicks === 6 ? 'text-xs px-2 py-1 gap-1' : '',
              ]"
            >
              <div>
                <span>{{ predictItem.text }}</span>
              </div>
              <div>
                <span font-mono>{{ predictItem.possiblilities }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
