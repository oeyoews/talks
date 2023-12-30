<template>
  <div text-3xl text-black font-semibold>
    什么洪水猛兽？
  </div>

  <div
    class="flex flex-row" h-full w-full py-8
    text-black
  >
    <div mr-4 h-full w-full flex flex-1>
      <div
        w-full flex-1 rounded-lg bg-zinc-100 p-4 text-2xl
        transition="all ease-in-out" duration-1500 delay-500
        :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
      >
        <span>发展时间线</span>
        <p text-xl>
          <span leading-relaxed>右边是迄今为止，自最早的 GPT 底层架构的提出，以词向量化技术爆炸为标的，以最早的名为 Word2Vec 词法分析库为起点，到现如今的 ChatGPT 和 GPT-4 的发展时间线。</span>
        </p>
      </div>
    </div>
    <video
      controls rounded-lg
      transition="all ease-in-out" duration-1500
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <source src="/how-llm-works-aftermath-of-llm-video-1.mp4">
    </video>
  </div>
</template>
