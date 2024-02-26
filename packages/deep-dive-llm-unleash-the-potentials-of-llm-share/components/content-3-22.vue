<template>
  <div class="text-3xl" font-semibold>
    用搭积木的方式构建和延展智能
  </div>

  <div h-full flex flex-col justify-center>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        以自然语言为交互界面，拓展智能边界
      </span>
    </div>
    <div
      transition="all ease-in-out" h-full w-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : '',
        $slidev.nav.clicks === 2 ? 'opacity-0' : '',
      ]"
    >
      <div h-full w-full flex flex-col items-center gap-4>
        <div border="2 solid green-700" bg="green-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-8 py-4>
          <div flex flex-row gap-2>
            <div>
              <span>LLM</span>
            </div>
            <div>
              <span>基座大模型</span>
            </div>
          </div>
        </div>
        <div border="2 solid sky-700" bg="sky-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-8 py-4>
          <div flex flex-row gap-2>
            <div>
              <span>Agent</span>
            </div>
            <div>
              <span>智能体</span>
            </div>
          </div>
          <div border="2 solid sky-700" bg="sky-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-2>
            <div flex flex-row gap-2>
              <div>
                <span>Prompt</span>
              </div>
              <div>
                <span>提示词</span>
              </div>
            </div>
            <div border="2 solid sky-700" bg="sky-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-2>
              <div flex flex-row gap-2>
                <div>
                  <span>工具</span>
                </div>
                <div>
                  <span>API 调用</span>
                </div>
              </div>
              <div w-full flex justify-center gap-3>
                <div border="2 solid sky-500" bg="sky-800 opacity-40" flex flex-row gap-2 rounded-lg px-4 py-2>
                  <div>
                    <span>视觉感知 API</span>
                  </div>
                </div>
                <div border="2 solid sky-500" bg="sky-800 opacity-40" flex flex-row gap-2 rounded-lg px-4 py-2>
                  <div>
                    <span>搜索引擎 API</span>
                  </div>
                </div>
                <div border="2 solid sky-500" bg="sky-800 opacity-40" flex flex-row gap-2 rounded-lg px-4 py-2>
                  <div>
                    <span>浏览器 API</span>
                  </div>
                </div>
                <div border="2 solid sky-500" bg="sky-800 opacity-40" flex flex-row gap-2 rounded-lg px-4 py-2>
                  <div>
                    <span>机票订购 API</span>
                  </div>
                </div>
                <div border="2 solid sky-500" bg="sky-800 opacity-40" flex flex-row gap-2 rounded-lg px-4 py-2>
                  <div>
                    <span>外卖点餐 API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-8 py-4>
          <div flex flex-row gap-2>
            <div>
              <span>完全能力</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
