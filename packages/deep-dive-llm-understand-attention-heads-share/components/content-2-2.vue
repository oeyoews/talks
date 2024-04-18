<template>
  <div max-h-full h-full flex flex-col>
    <div class="text-3xl" font-semibold>
      多头注意力之 QKV
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
      <img src="/2-2.jpeg" h-full w-full object-cover>
    </div>
  </div>
</template>
