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
    <div
      transition="all ease-in-out" mt-10 h-full flex flex-col gap-4 duration-1500
      :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 5 ? 'opacity-100' : '',
        $slidev.nav.clicks === 6 ? 'opacity-0' : '',
      ]"
    >
      <div
        flex flex-col gap-2
        transition="all ease-in-out" duration-1500
      >
        <div text-2xl>
          <div>
            <span>
              如何让 LLM 只输出
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-50" border="2 dashed sky-600">
          <div>
            <span>
              我就是 Kubernetes 的死忠粉！
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-50" border="2 dashed sky-600">
          <div>
            <span>
              🐮
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
