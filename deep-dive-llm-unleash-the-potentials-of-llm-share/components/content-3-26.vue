<template>
  <div class="text-3xl" font-semibold>
    用搭积木的方式构建和延展智能
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        可泛化的能力，不再局限于基座大模型
      </span>
    </div>
    <div
      transition="all ease-in-out" mt-10 h-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : '',
        $slidev.nav.clicks === 2 ? 'opacity-0' : '',
      ]"
    >
      <div flex flex-col gap-2 transition="all ease-in-out" duration-1500>
        <div text-xl>
          <div>
            <span>
              一个代替忙碌的自己参加会议的 GPT
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              听写转写
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              总结会议纪要
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              生成 Confluence 文档写入 API 调用
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              计算向量数据库 Word Embedding
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              写入 Chat with Meeting Notes 专属的向量数据库
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
