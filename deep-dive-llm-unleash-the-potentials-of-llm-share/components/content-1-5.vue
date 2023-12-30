<template>
  <div text-3xl text-black font-semibold>
    过去一年里究竟发生了什么?
  </div>

  <div class="timeline flex flex-col text-3xl" mt-4 text-black space-y-2>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-100 />
      <div text-lg font-mono>
        2022 年 11 月 30 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>ChatGPT</span>
        </span>
        <span>发布</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-250
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-200 />
      <div text-lg font-mono>
        2022 年 12 月 05 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>ChatGPT</span>
        </span>
        <span>日活用户突破 </span><span font-mono>100 万</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-500
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-300 />
      <div text-lg font-mono>
        2023 年 02 月 23 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>LLaMA</span>
        </span>
        <span>发布</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-750
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-400 />
      <div text-lg font-mono>
        2023 年 03 月 14 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>GPT-4</span>
        </span>
        <span>发布</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-1000
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-500 />
      <div text-lg font-mono>
        2023 年 04 月 07 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>阿里巴巴通义千问发布</span>
        </span>
        <span>发布</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-1250
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-600 />
      <div text-lg font-mono>
        2023 年 06 月 01 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>国产大模型军备竞赛开始</span>
        </span>
        <span>...</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-1500
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div mr-2 h-3 w-3 rounded-full bg-green-700 />
      <div text-lg font-mono>
        2023 年 07 月 18 日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>LLaMA 2</span>
        </span>
        <span>发布</span>
      </p>
    </div>
    <div
      transition="all ease-in-out"
      flex items-center text-2xl font-normal duration-1500 delay-1750
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0 translate-x-[-10px]'"
    >
      <div relative>
        <div relative z-1 mr-2 h-3 w-3 rounded-full bg-sky-500 />
      </div>
      <div text-lg font-mono>
        直至今日
      </div>
      <p class="mb-0! mt-0! px-2! py-2!">
        <span mx-2 inline-flex items-center>
          <span font-semibold font-mono>ChatGPT</span>
        </span>
        <span>拥有了超过 </span><span font-mono>1 亿 8050 万</span><span>活跃用户</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
