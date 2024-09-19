<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      多头注意力之 QKV - V 向量
    </div>
    <div my-2 text-neutral-400>
      <span>
        字词在大语言模型的小宇宙中的表达映射。
      </span>
    </div>
    <div
      of-hidden flex-1 flex-col mt-5 mx-auto rounded-lg border="2 [#306623]"
      transition="all ease-in-out" duration-1500
      :class="[
        [0].includes($slidev.nav.clicks) ? 'opacity-0' : '',
        [1].includes($slidev.nav.clicks) ? 'opacity-100' : '',
        [2].includes($slidev.nav.clicks) ? 'opacity-0' : '',
      ]"
    >
      <video h-full w-full object-contain controls>
        <source src="/Value 求解.mov" type="video/mp4">
      </video>
    </div>
  </div>
</template>
