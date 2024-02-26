<template>
  <div class="text-3xl" text-black font-semibold>
    像人一样思考
  </div>

  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span
        transition="all ease-in-out" duration-1500
      >
        「单字接龙」游戏
      </span>
    </div>
    <div
      class="flex flex-col justify-center text-3xl"
      transition="all ease-in-out" mt-4 text-black duration-1500
      :class="[
        [1, 2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div>
        <div flex items-center>
          <span>1 分钟思维实验：<span font-semibold>我们平时是如何思考的？</span></span>
        </div>
        <div mt-10 flex flex-col justify-center gap-4>
          <div
            border="green-100 1 solid"
            bg="green-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-0
            :class="[
              [2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-carbon:phone-incoming-filled mr-4 text-green-500 />
            <span>和别人打电话的时候</span>
          </div>
          <div
            border="sky-100 1 solid"
            bg="sky-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-500
            :class="[
              [2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-carbon:edit mr-4 text-sky-500 />
            <span>在考试这样<span font-bold>紧张的</span>环境下书写自由答题类题目的答案的时候</span>
          </div>
          <div
            border="purple-100 1 solid"
            bg="purple-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-1500
            :class="[
              [2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-carbon:group-presentation mr-4 text-purple-500 />
            <span>在进行<span font-bold>临时的</span>即兴演讲的时候</span>
          </div>
          <div
            border="pink-100 1 solid"
            bg="pink-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-2000
            :class="[
              [2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-carbon:chat-bot mr-4 text-pink-400 />
            <span>聊天吹水的时候</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
