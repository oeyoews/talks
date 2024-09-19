<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold pl="[3.5rem]" pr="[3.5rem]" pt="2.5rem">
      向量空间究竟代表了什么？
    </div>
    <div
      of-hidden flex-1 flex-col my-5 mx-auto rounded-lg border="2 [#306623]"
      transition="all ease-in-out" duration-1500
      :class="[
        [0].includes($slidev.nav.clicks) ? 'opacity-0' : '',
        [1].includes($slidev.nav.clicks) ? 'opacity-100' : '',
        [2].includes($slidev.nav.clicks) ? 'opacity-0' : '',
      ]"
    >
      <img src="/1-4.jpeg" h-full w-full object-contain>
    </div>
  </div>
</template>
