<template>
  <div
    class="text-3xl" text-black font-semibold
    transition="all ease-in-out" duration-1500
    :class="[
      $slidev.nav.clicks >= 5 ? 'opacity-0' : '',
    ]"
  >
    真的很大
  </div>

  <div flex flex-col>
    <div
      my-2 text-neutral-400
      transition="all ease-in-out" duration-1500
      :class="[
        $slidev.nav.clicks >= 5 ? 'opacity-0' : '',
      ]"
    >
      <span transition="all ease-in-out" duration-1500>
        参数意味着什么？
      </span>
    </div>
    <div
      h-full flex flex-col justify-center gap-4 text-black
      transition="all ease-in-out" duration-1500
      :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks === 1 ? 'opacity-100' : '',
        $slidev.nav.clicks >= 5 ? 'opacity-0' : '',
      ]"
    >
      <div
        transition="all ease-in-out" flex flex-col gap-2 duration-1500
        :class="[
          $slidev.nav.clicks < 1 ? 'opacity-0' : '',
          $slidev.nav.clicks === 1 ? 'opacity-100' : '',
          $slidev.nav.clicks === 2 ? 'opacity-20' : '',
          $slidev.nav.clicks === 3 ? 'opacity-20' : '',
        ]"
      >
        <div
          bg="green-100" border="2 solid green-500" h-15 max-w-200 flex flex-row items-center rounded-lg px-2 py-1
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks < 1 ? 'w-17' : '',
            $slidev.nav.clicks === 1 ? 'w-full' : '',
            $slidev.nav.clicks === 2 ? 'w-100' : '',
            $slidev.nav.clicks === 3 ? 'w-17' : '',
            $slidev.nav.clicks === 4 ? 'w-17' : '',
            $slidev.nav.clicks === 5 ? 'w-17' : '',
          ]"
        >
          <span>1.5 亿</span>
        </div>
        <div flex flex-row gap-4>
          <div bg="green-50" border="2 solid green-200" flex flex-row items-center gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>输入输出尺寸</span>
            </div>
            <div text-sm font-mono>
              <span>768</span>
            </div>
          </div>
          <div bg="sky-50" border="2 solid sky-200" flex flex-row gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>全连接层蕴含的参数</span>
            </div>
            <div text-sm font-mono>
              <span>5000000</span>
            </div>
          </div>
          <div bg="yellow-50" border="2 solid yellow-200" flex flex-row items-center gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>层数</span>
            </div>
            <div text-sm font-mono>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
      <div
        flex flex-col gap-4 text-black
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks < 2 ? 'opacity-0' : '',
          $slidev.nav.clicks === 2 ? 'opacity-100' : '',
          $slidev.nav.clicks === 3 ? 'opacity-20' : '',
        ]"
      >
        <div
          bg="green-100" border="2 solid green-500"
          transition="all ease-in-out" h-15 max-w-200 flex flex-row items-center rounded-lg px-2 py-1 text-2xl duration-1500
          :class="[
            $slidev.nav.clicks < 2 ? 'w-17' : '',
            $slidev.nav.clicks === 2 ? 'w-full' : '',
            $slidev.nav.clicks === 3 ? 'w-20' : '',
            $slidev.nav.clicks === 4 ? 'w-20' : '',
            $slidev.nav.clicks === 5 ? 'w-20' : '',
          ]"
        >
          <span>15 亿</span>
        </div>
        <div flex flex-row gap-4>
          <div
            bg="green-50" border="2 solid green-200" flex flex-row items-center gap-2 rounded-lg px-2 py-1
          >
            <div text-sm>
              <span>输入输出尺寸</span>
            </div>
            <div text-sm font-mono>
              <span>1024</span>
            </div>
          </div>
          <div bg="sky-50" border="2 solid sky-200" flex flex-row gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>全连接层蕴含的参数</span>
            </div>
            <div text-sm font-mono>
              <span>80000000</span>
            </div>
          </div>
          <div bg="yellow-50" border="2 solid yellow-200" flex flex-row items-center gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>层数</span>
            </div>
            <div text-sm font-mono>
              <span>24</span>
            </div>
          </div>
        </div>
      </div>
      <div
        flex flex-col gap-4 text-black
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks < 3 ? 'opacity-0' : '',
          $slidev.nav.clicks === 3 ? 'opacity-100' : '',
        ]"
      >
        <div
          bg="green-100" border="2 solid green-500" h-15 max-w-200 flex flex-row items-center rounded-lg px-2 py-1 text-4xl
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks < 3 ? 'w-30' : '',
            $slidev.nav.clicks === 3 ? 'w-full' : '',
            $slidev.nav.clicks === 4 ? 'w-full' : '',
            $slidev.nav.clicks === 5 ? 'w-full' : '',
          ]"
        >
          <span>1750 亿</span>
        </div>
        <div flex flex-row gap-4>
          <div bg="green-50" border="2 solid green-200" flex flex-row items-center gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>输入输出尺寸</span>
            </div>
            <div text-sm font-mono>
              <span>12288</span>
            </div>
          </div>
          <div bg="sky-50" border="2 solid sky-200" flex flex-row gap-2 rounded-lg px-2 py-1>
            <div text-sm>
              <span>全连接层蕴含的参数</span>
            </div>
            <div text-sm font-mono>
              <span>1200000000</span>
            </div>
          </div>
          <div bg="yellow-50" border="2 solid yellow-200" flex flex-row items-center gap-4 rounded-lg px-2 py-1>
            <div text-sm>
              <span>层数</span>
            </div>
            <div text-sm font-mono>
              <span>96</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cube {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);
}

.cube div {
  position: absolute;
  height: 100px;
  width: 100px;
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
.front {
  transform: translateZ(50px);
}
.back {
  transform: rotateX(-180deg) translateZ(50px);
}
.left {
  transform: rotateY(-90deg) translateZ(50px);
}
.right {
  transform: rotateY(90deg) translateZ(50px);
}
</style>
