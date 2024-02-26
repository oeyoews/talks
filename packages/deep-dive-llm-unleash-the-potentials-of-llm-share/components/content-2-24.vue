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
        flex flex-col gap-2
        transition="all ease-in-out" duration-1500
        :class="[
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
              工业革命发生
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
            <span text-green-700>
              工业革命发生在
            </span>
            <span>
              18 世纪末至 19 世纪初，是从手工业向机器制造业的转变，是人类历史上最重要的转折点之一。
            </span>
          </div>
        </div>
      </div>
      <div
        flex flex-col gap-2
        transition="all ease-in-out" duration-1500
        :class="[
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
              你说的对，但是 Golang 是一款
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
            <span text-green-700>
              你说的对，但是 Golang 是一款
            </span>
            <span>
              由 Google 开发的开源编程语言，它结合了 Python 的简洁性和 C++ 的高性能，旨在提高程序员的开发效率。
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
