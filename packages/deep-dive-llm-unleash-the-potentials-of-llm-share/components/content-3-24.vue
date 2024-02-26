<template>
  <div class="text-3xl" font-semibold>
    用搭积木的方式构建和延展智能
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        以自然语言为交互界面，拓展智能边界
      </span>
    </div>
    <div mt-4 flex flex-row gap-4>
      <div
        w="[30%]" transition="all ease-in-out" bg="green-900 opacity-50" flex-1 rounded-lg p-4 text-xl duration-1500 delay-500 h="[350px]"
        :class="[
          $slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div>
          <span>直接解锁多模态能力</span>
        </div>
        <div mt-4 text-sm>
          <span>像是 AutoGPT，XAgent 和 HuggingGPT 这样的多 Agent（智能体）框架，可以实现调度任务到垂直领域内最强的模型的能力</span>
        </div>
        <div mt-4 text-sm>
          <span>也有论文作者提出过设想，通过利用 LLM 集成已有的 API，在数字和物理领域实现多样化的任务</span>
        </div>
      </div>
      <video
        w="[72%]"
        transition="all ease-in-out"
        :class="$slidev.nav.clicks === 1 ? 'opacity-100' : 'opacity-0'"
        controls mb-4 rounded-lg duration-1500
      >
        <source src="/how-llm-works-agent-video-1.mp4">
      </video>
    </div>
  </div>
</template>
