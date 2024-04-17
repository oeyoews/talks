<template>
  <div class="text-3xl" font-semibold>
    字词在一种「元素周期表」中的表达
  </div>
  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span
        v-motion
        transition="all ease-in-out" duration-1500
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
        }"
      >
        如何计算得到这个元素周期表？
      </span>
    </div>
    <div
      flex
      transition="all ease-in-out" duration-1500
      :class="[
        [3].includes($slidev.nav.clicks) ? '' : 'gap-6',
      ]"
    >
      <div
        w="[50%]"
        transition="all ease-in-out" duration-1500
        :class="[
          [1, 2].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div font-semibold>
          <span>One-hot 编码</span>
        </div>
        <div mt-4>
          <div
            border="2 dashed green-500"
            z-1
            flex flex-1 flex-col justify-center
            border-green-800 rounded-lg bg-green-900 bg-opacity-30
            p-4
            transition="all ease-in-out" duration-1500
          >
            <div text-base>
              <div
                relative flex flex-wrap gap-4
                class="node-connect"
              >
                <div
                  v-for="(item, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T']"
                  :key="index"
                  border="2 solid green-500" bg="green-700"
                  relative h-16 w-16 flex items-center justify-center rounded-lg p-4
                >
                  <span text-3xl font-semibold font-mono>{{ item }}</span>
                  <div top="0" left="1" class="node-to" absolute rounded-lg>
                    <span font-mono>{{ index + 1 }}</span>
                  </div>
                </div>
                <div h-full flex items-center justify-center translate-x="[20px]">
                  <span text-4xl>...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        w="[50%]"
        transition="all ease-in-out" h-full duration-1500
        :class="[
          [2, 3].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
          [3].includes($slidev.nav.clicks) ? 'translate-x-[-105.7%]' : '',
        ]"
      >
        <div font-semibold>
          <span>
            Subword 和 Word Embedding
          </span>
        </div>
        <div mt-4 h-full>
          <div
            border="2 dashed green-500"
            h="[340px]"
            transition="all ease-in-out" relative z-0 w-full flex items-end justify-center border-green-800 rounded-lg bg-green-900 bg-opacity-30 duration-1500
          >
            <div left="120px" top="60px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>Hell</span>
              </div>
            </div>
            <div left="200px" top="80px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>o</span>
              </div>
            </div>
            <div left="220px" top="160px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>Wo</span>
              </div>
            </div>
            <div left="70px" top="120px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>rld</span>
              </div>
            </div>
            <div left="340px" top="200px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>Th</span>
              </div>
            </div>
            <div left="120px" top="120px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>is</span>
              </div>
            </div>
            <div left="280px" top="120px" absolute z-1 h-3 w-3 rounded-full bg-green-500>
              <div mt-4 w-10>
                <span>GPT</span>
              </div>
            </div>
            <div mb-4>
              <span>Hello, World! This is GPT.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
