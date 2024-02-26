<template>
  <div class="text-3xl" font-semibold>
    阿谀奉承
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        能拍独角兽马屁的马屁精
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
        <img src="/how-llm-works-4.jpg" object-contain>
      </div>
    </div>
    <div
      mt-4 transition="all ease-in-out" duration-1500 :class="[
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <span text-sm>
        论文研究了 5个最先进的语言模型 (ChatGPT 系列、Claude 系列、LLaMA 2)，确认这些基于人类反馈强化学习 (RLHF) 的 AI 普遍会对人类阿谀奉承。当人类有先入为主的观点时它会主动贴合，当被质疑时它会认错，甚至将正确答案修改为错误答案。
      </span>
    </div>
  </div>
</template>
