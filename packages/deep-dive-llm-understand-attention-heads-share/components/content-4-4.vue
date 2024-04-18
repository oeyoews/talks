<template>
  <div max-h-full h-full text-black flex flex-col>
    <div class="text-3xl" font-semibold>
      GPU 计算的难点是什么？
    </div>
    <div my-2 text-neutral-400>
      <span>
        力大砖飞可不是一句玩笑话。
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
      <img src="/4-4.png" h-full w-full object-contain>
    </div>
  </div>
</template>
