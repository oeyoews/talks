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
        <div text-xl backdrop-blur-md>
          <div>
            <span>
              一个能够处理和解决运维信息收集难题的 GPT
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800" backdrop-blur-md>
          <div>
            <span>
              通过命令行获取当前系统信息
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800" backdrop-blur-md>
          <div>
            <span>
              搜索最相关的运维 oncall 任务故障排查日志
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800" backdrop-blur-md>
          <div>
            <span>
              生成命令行调用的命令
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800" backdrop-blur-md>
          <div>
            <span>
              向用户发起信息收集请求（命令执行授权）
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-30" border="2 solid sky-800" backdrop-blur-md>
          <div>
            <span>
              执行命令，同步返回结果，循环解决直至收集完成
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
