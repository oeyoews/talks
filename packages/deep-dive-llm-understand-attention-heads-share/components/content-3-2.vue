<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      神经网络是如何训练的？
    </div>
    <div my-2 text-neutral-400>
      <span>
        相互应证的关系的繁琐体现。
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
      <img src="/3-2.jpeg" h-full w-full object-contain>
    </div>
  </div>
</template>
