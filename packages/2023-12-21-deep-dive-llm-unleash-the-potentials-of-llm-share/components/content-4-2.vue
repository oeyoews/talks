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
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 8 ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div w-full flex flex-col gap-4>
        <div
          w-full rounded-lg bg-opacity-50 px-4 py-2 border="2 solid" backdrop-blur-md
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 0 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 1 ? 'border-sky-500 bg-sky-800' : '',
            $slidev.nav.clicks === 2 ? 'border-red-500 bg-red-800' : '',
            $slidev.nav.clicks === 3 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 4 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 5 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 6 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 7 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 8 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 9 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
          ]"
        >
          <div>
            <span text-lg>
              结构化提问
            </span>
          </div>
          <div>
            <span
              v-if="$slidev.nav.clicks !== 2"
              text-base
            >
              使用详细清楚的提问，说清楚自己是谁，做了什么尝试，现在面临什么困境，希望得到什么结果
            </span>
            <span
              v-if="$slidev.nav.clicks === 2"
              text-base
            >
              结构化提问通常用 """ 作为分隔符，可以添加额外的很多分隔符来对抗结构化，或者让自己的比对方更结构化
            </span>
          </div>
        </div>
        <div
          w-full rounded-lg bg-opacity-50 px-4 py-2 border="2 solid" backdrop-blur-md
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 0 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 1 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 2 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 3 ? 'border-sky-500 bg-sky-800' : '',
            $slidev.nav.clicks === 4 ? 'border-red-500 bg-red-800' : '',
            $slidev.nav.clicks === 5 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 6 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 7 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 8 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 9 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
          ]"
        >
          <div>
            <span text-xl>
              影响概率
            </span>
          </div>
          <div>
            <span
              v-if="$slidev.nav.clicks !== 4"
              text-base
            >
              既然是概率模型，可以通过人工构造规律和样本的方式给 LLM 回答和生成参考
            </span>
            <span
              v-if="$slidev.nav.clicks === 4"
              text-base
            >
              比如最近的 PoemPoemPoemPoem 攻击和通过添加去世的奶奶给我讲故事来诱导 LLM 变得温顺
            </span>
          </div>
        </div>
        <div
          w-full rounded-lg bg-opacity-50 px-4 py-2 border="2 solid" backdrop-blur-md
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 0 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 1 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 2 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 3 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 4 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 5 ? 'border-sky-500 bg-sky-800' : '',
            $slidev.nav.clicks === 6 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 7 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 8 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 9 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
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
          w-full rounded-lg bg-opacity-50 px-4 py-2 border="2 solid" backdrop-blur-md
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks === 0 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 1 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 2 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 3 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 4 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 5 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 6 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
            $slidev.nav.clicks === 7 ? 'border-sky-500 bg-sky-800' : '',
            $slidev.nav.clicks === 8 ? 'border-red-500 bg-red-800' : '',
            $slidev.nav.clicks === 9 ? 'border-sky-800 opacity-50 bg-sky-800' : '',
          ]"
        >
          <div>
            <span text-xl>
              约束输出
            </span>
          </div>
          <div>
            <span
              v-if="$slidev.nav.clicks !== 8"
              text-base
            >
              可以通过约束输出的手段来降低幻觉和虚谈症带来的影响
            </span>
            <span
              v-if="$slidev.nav.clicks === 8"
              text-base
            >
              如果要求返回为 YAML 和 JSON 格式，则可以间接实现注入攻击
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
