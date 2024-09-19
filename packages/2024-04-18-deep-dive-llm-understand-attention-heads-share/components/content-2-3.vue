<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      多头注意力之 QKV - Q 向量
    </div>
    <div my-2 text-neutral-400>
      <span>
        字词关系的相互应证。
      </span>
    </div>
    <div
      of-hidden flex-1 flex-col mt-5 w-full rounded-lg border="2 [#306623]"
      transition="all ease-in-out" duration-1500
      :class="[
        [0].includes($slidev.nav.clicks) ? 'opacity-0' : '',
        [1].includes($slidev.nav.clicks) ? 'opacity-100' : '',
        [2].includes($slidev.nav.clicks) ? 'opacity-0' : '',
      ]"
    >
      <img src="/2-3.jpeg" h-full w-full object-cover>
    </div>
  </div>
</template>
