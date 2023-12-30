<template>
  <div class="text-3xl" font-semibold>
    活在幻觉里的，患有虚谈症的尸体
  </div>

  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        因为是纯概率所以会犯蠢，不听话
      </span>
    </div>
    <div
      transition="all ease-in-out" mt-4 flex flex-col gap-4 duration-1500 :class="[
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
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-50" border="2 solid sky-600">
          <div>
            <span>
              输入：
            </span>
          </div>
          <div>
            <span>
              可以给我推荐一下 2023 年好吃的上海餐厅吗？
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="yellow-800 opacity-50" border="2 solid yellow-600">
          <div>
            <span>
              输出：
            </span>
          </div>
          <div>
            <span>
              我喜欢。
            </span>
          </div>
        </div>
      </div>
      <div
        flex flex-col gap-2 transition="all ease-in-out" duration-1500 :class="[
          $slidev.nav.clicks !== 2 && $slidev.nav.clicks !== 3 ? 'opacity-20' : '',
        ]"
      >
        <div rounded-lg px-4 py-2 bg="sky-900 opacity-50" border="2 solid sky-600">
          <div>
            <span>
              输入：
            </span>
          </div>
          <div>
            <span>
              2023 年人类在火星上发现了什么。
            </span>
          </div>
        </div>
        <div rounded-lg px-4 py-2 bg="yellow-800 opacity-50" border="2 solid yellow-600">
          <div>
            <span>
              输出：
            </span>
          </div>
          <div>
            <span>
              2023 年人类在火星上发现了固态水。
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
