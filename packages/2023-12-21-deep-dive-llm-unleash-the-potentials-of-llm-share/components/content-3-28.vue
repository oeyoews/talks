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
        <div flex flex-col gap-4 text-xl>
          <div border="2 solid green-700" bg="green-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-8 py-4 backdrop-blur-sm>
            <div flex flex-row gap-2>
              <div>
                <span>LLM</span>
              </div>
              <div>
                <span>任意大模型</span>
              </div>
            </div>
          </div>
          <div border="2 solid sky-700" bg="sky-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-8 py-4 backdrop-blur-sm>
            <div flex flex-row gap-2>
              <div>
                <span>LangChain</span>
              </div>
              <div>
                <span>粘合剂</span>
              </div>
            </div>
          </div>
          <div flex gap-4>
            <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-4 backdrop-blur-sm>
              <div flex flex-row gap-2>
                <div>
                  <span>API</span>
                </div>
              </div>
            </div>
            <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-4 backdrop-blur-sm>
              <div flex flex-row gap-2>
                <div>
                  <span>知识库</span>
                </div>
              </div>
            </div>
            <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-4 backdrop-blur-sm>
              <div flex flex-row gap-2>
                <div>
                  <span>向量数据库</span>
                </div>
              </div>
            </div>
            <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-4 backdrop-blur-sm>
              <div flex flex-row gap-2>
                <div>
                  <span>工具</span>
                </div>
              </div>
            </div>
            <div border="2 solid purple-700" bg="purple-800 opacity-10" w-full flex flex-col items-center gap-2 rounded-lg px-4 py-4 backdrop-blur-sm>
              <div flex flex-row gap-2>
                <div>
                  <span>自动化</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
