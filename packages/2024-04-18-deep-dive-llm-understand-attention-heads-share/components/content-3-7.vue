<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      通过求解损失实现
    </div>
    <div my-2 text-neutral-400>
      <span>
        损失即是神经网络距离正确答案的距离。
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
        <source src="/损失计算.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>
