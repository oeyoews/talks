<template>
  <div class="text-3xl" font-semibold>
    Prompt Attack
  </div>

  <div h-full flex flex-col justify-center>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        从鹦鹉嘴里套话
      </span>
    </div>
    <div
      transition="all ease-in-out" mt-4 h-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div w-full flex flex-col gap-4>
        <div text-2xl>
          <span>
            目的和危害
          </span>
        </div>
        <div flex flex-col gap-4 text-base>
          <div rounded-lg bg-yellow-800 bg-opacity-20 border="2 solid yellow-600" px-4 py-2>
            <span>
              造成作为产品核心的基础 Prompt 泄露
            </span>
          </div>
          <div rounded-lg bg-yellow-800 bg-opacity-20 border="2 solid yellow-600" px-4 py-2>
            <span>
              能覆写 LLM Prompt 指令造成 API 被滥用
            </span>
          </div>
          <div rounded-lg bg-yellow-800 bg-opacity-20 border="2 solid yellow-600" px-4 py-2>
            <span>
              输出后结果更加难以预测
            </span>
          </div>
          <div rounded-lg bg-yellow-800 bg-opacity-20 border="2 solid yellow-600" px-4 py-2>
            <span>
              影响整体系统稳定性
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
