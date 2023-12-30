<template>
  <div class="text-3xl" font-semibold>
    如何利用这种规律智能？
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        提示词工程就是提问的艺术
      </span>
    </div>
    <div flex gap-4>
      <div
        w-full flex-1 rounded-lg bg-neutral-800 p-4 text-2xl
        transition="all ease-in-out" duration-1500 delay-500
        :class="[
          $slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <span>陶哲轩的提示词</span>
        <p text-xl>
          <span leading-relaxed>右边是陶哲轩在尝试解决数学问题的时候寻求 ChatGPT 帮助的 Prompt 截图。</span>
        </p>
        <p text-xl>
          <span leading-relaxed>核心关键在于他把问题说清楚了，不仅用 GPT，还用了 GPT 的插件，而且是在找 GPT 寻求建议。</span>
        </p>
      </div>
      <div
        h="[407px]" overflow-hidden rounded-lg
        transition="all ease-in-out" duration-1500
        :class="$slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0'"
      >
        <img src="/how-llm-works-2.png" h="[600px]" object-contain>
      </div>
    </div>
  </div>
</template>
