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
      transition="all ease-in-out" mt-4 h-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : '',
        $slidev.nav.clicks === 2 ? 'opacity-0' : '',
      ]"
    >
      <div flex flex-col gap-2 transition="all ease-in-out" duration-1500>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              面向开发者的搜索引擎 Phind.com 和搜索大师 Perplexity.ai
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              ChatGPT 插件
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              操作 Android 手机
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              操作 Microsoft Office 全家桶的 Copilot
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              金融分析师 Finchat.io
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              法律顾问 ChatLaw.cloud
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800">
          <div>
            <span>
              玩游戏
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
