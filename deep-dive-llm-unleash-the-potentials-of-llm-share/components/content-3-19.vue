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
      transition="all ease-in-out" mt-10 h-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 5 ? 'opacity-100' : '',
        $slidev.nav.clicks === 6 ? 'opacity-0' : '',
      ]"
    >
      <div w-full>
        <div mb-2>
          <span>把问题说清楚</span>
        </div>
        <div w-full flex flex-col gap-4>
          <div
            w-full rounded-lg bg-green-800 bg-opacity-50 px-4 py-2 border="2 solid"
            transition="all ease-in-out" duration-1500
            :class="[
              $slidev.nav.clicks === 1 ? 'border-green-500' : 'border-green-800 opacity-50',
            ]"
          >
            <span>我是谁</span>
          </div>
          <div
            w-full rounded-lg bg-green-800 bg-opacity-50 px-4 py-2 border="2 solid"
            transition="all ease-in-out" duration-1500
            :class="[
              $slidev.nav.clicks === 2 ? 'border-green-500' : 'border-green-800 opacity-50',
            ]"
          >
            <span>我在做什么</span>
          </div>
          <div
            w-full rounded-lg bg-green-800 bg-opacity-50 px-4 py-2 border="2 solid"
            transition="all ease-in-out" duration-1500
            :class="[
              $slidev.nav.clicks === 3 ? 'border-green-500' : 'border-green-800 opacity-50',
            ]"
          >
            <span>做了什么失败尝试</span>
          </div>
          <div
            w-full rounded-lg bg-green-800 bg-opacity-50 px-4 py-2 border="2 solid"
            transition="all ease-in-out" duration-1500
            :class="[
              $slidev.nav.clicks === 4 ? 'border-green-500' : 'border-green-800 opacity-50',
            ]"
          >
            <span>现在有什么困境</span>
          </div>
          <div
            w-full rounded-lg bg-green-800 bg-opacity-50 px-4 py-2 border="2 solid"
            transition="all ease-in-out" duration-1500
            :class="[
              $slidev.nav.clicks === 5 ? 'border-green-500' : 'border-green-800 opacity-50',
            ]"
          >
            <span>期望得到什么结果</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
