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
      transition="all ease-in-out" mt-4 h-full flex flex-col gap-4 duration-1500 :class="[
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 6 ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div w-full flex flex-col gap-4>
        <div
          w-full rounded-lg bg-sky-800 bg-opacity-50 px-4 py-2 border="2 solid"
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 1 ? 'border-sky-500' : 'border-sky-800 opacity-50',
          ]"
        >
          <div>
            <span text-lg>
              结构化提问
            </span>
          </div>
          <div>
            <span text-base>使用详细清楚的提问，说清楚自己是谁，做了什么尝试，现在面临什么困境，希望得到什么结果</span>
          </div>
        </div>
        <div
          w-full rounded-lg bg-sky-800 bg-opacity-50 px-4 py-2 border="2 solid"
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 2 ? 'border-sky-500' : 'border-sky-800 opacity-50',
          ]"
        >
          <div>
            <span text-xl>
              影响概率
            </span>
          </div>
          <div>
            <span text-base>既然是概率模型，可以通过人工构造规律和样本的方式给 LLM 回答和生成参考</span>
          </div>
        </div>
        <div
          w-full rounded-lg bg-sky-800 bg-opacity-50 px-4 py-2 border="2 solid"
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 3 ? 'border-sky-500' : 'border-sky-800 opacity-50',
          ]"
        >
          <div>
            <span text-xl>
              任务拆分
            </span>
          </div>
          <div>
            <span text-base>既然文本都会被 LLM 处理，这个时候重叠的上下文是会造成干扰的，最好拆分任务</span>
          </div>
        </div>
        <div
          w-full rounded-lg bg-sky-800 bg-opacity-50 px-4 py-2 border="2 solid"
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 4 ? 'border-sky-500' : 'border-sky-800 opacity-50',
          ]"
        >
          <div>
            <span text-xl>
              约束输出
            </span>
          </div>
          <div>
            <span text-base>可以通过约束输出的手段来降低幻觉和虚谈症带来的影响</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
