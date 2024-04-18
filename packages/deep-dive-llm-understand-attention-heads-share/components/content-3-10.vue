<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      那树在哪里？
    </div>
    <div my-2 text-neutral-400>
      <span>
        神经网络就像是一棵巨大的树，我们通过摇晃树叶到达期望的位置来获知答案
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
      <img src="/3-10.jpeg" h-full w-full object-contain>
    </div>
  </div>
</template>
