<template>
  <div class="text-3xl" text-black font-semibold>
    像人一样思考
  </div>

  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        学习知识
      </span>
    </div>
    <div
      transition="all ease-in-out" flex flex-col gap-4 text-black duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 5 ? 'opacity-100' : '',
        $slidev.nav.clicks === 6 ? 'opacity-0' : '',
      ]"
    >
      <div
        flex flex-col gap-2 transition="all ease-in-out" duration-1500 :class="[
          $slidev.nav.clicks !== 1 && $slidev.nav.clicks !== 3 ? 'opacity-20' : '',
        ]"
      >
        <div rounded-lg px-4 py-2 bg="sky-50" border="2 solid sky-100">
          <div>
            <span>
              输入：
            </span>
          </div>
          <div>
            <span>
              请你帮我找到下面文章中的关键句子。

              文章：...
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="green-50" border="2 solid green-100">
          <div>
            <span>
              输出：
            </span>
          </div>
          <div>
            <span>
              以下是关键句子：

              1. ...
              2. ...
            </span>
          </div>
        </div>
      </div>
      <div
        flex flex-col gap-2 transition="all ease-in-out" duration-1500 :class="[
          $slidev.nav.clicks !== 2 && $slidev.nav.clicks !== 3 ? 'opacity-20' : '',
        ]"
      >
        <div rounded-lg px-4 py-2 bg="sky-50" border="2 solid sky-100">
          <div>
            <span>
              输入：
            </span>
          </div>
          <div>
            <span>
              请你帮我润色下面的句子。

              句子：...
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="green-50" border="2 solid green-100">
          <div>
            <span>
              输出：
            </span>
          </div>
          <div>
            <span>
              以下是润色后的句子：

              ...
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
