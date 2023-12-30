<template>
  <div class="text-3xl" font-semibold>
    用搭积木的方式构建和延展智能
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        以自然语言为交互界面，拓展智能边界
      </span>
    </div>
    <div flex flex-col>
      <div
        w-full flex-1 text-2xl transition="all ease-in-out" duration-1500 delay-500
        :class="[
          $slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <span>斯坦福小镇</span>
      </div>
      <div
        mt-4
        h="[407px]" overflow-hidden rounded-lg transition="all ease-in-out" duration-1500
        :class="$slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0'"
      >
        <img src="/how-llm-works-3.jpg" object-contain>
      </div>
    </div>
  </div>
</template>
