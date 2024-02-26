<template>
  <div class="text-3xl" font-semibold>
    上下文中的 Token 越多越不好
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        工作记忆的限制
      </span>
    </div>
    <div
      mt-2
      transition="all ease-in-out" flex flex-col gap-2 duration-1500 :class="[
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div
        mt-2
        overflow-hidden rounded-lg transition="all ease-in-out" duration-1500
        :class="$slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0'"
      >
        <img src="/how-llm-works-5.jpg" object-contain>
      </div>
    </div>
  </div>
</template>
