<template>
  <div
    class="text-3xl" font-semibold
    transition="all ease-in-out" duration-1500
    :class="[
      [0, 1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
    ]"
  >
    字词在一种「元素周期表」中的表达
  </div>
  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span
        transition="all ease-in-out" duration-1500
        :class="[
          [0, 1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
        ]"
      >
        如何计算得到这个元素周期表？
      </span>
    </div>
    <div flex gap-6>
      <div
        w="[50%]" transition="all ease-in-out" h-full duration-1500 :class="[
          [0, 1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div font-semibold>
          <span>
            Subword 和 Word Embedding
          </span>
        </div>
        <div mt-4 h-full>
          <div
            border="2 dashed green-500" h="[340px]" transition="all ease-in-out" relative z-0 w-full flex
            items-end justify-center border-green-800 rounded-lg bg-green-900 bg-opacity-30 duration-1500
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
      <div
        w="[50%]"
        transition="all ease-in-out" duration-1500
        h="[340px]"
        :class="[
          [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div>
          <span>业界用的方案</span>
        </div>
        <div
          bg="gray-900 opacity-50" border="2 solid gray-600"
          mt-4 h-full flex flex-col justify-center gap-6 rounded-lg p-4
        >
          <div font-semibold font-mono>
            <span>Byte-pair Encoding</span> (<span>BPE</span>)
          </div>
          <div font-semibold font-mono>
            <span>WordPiece</span>
          </div>
          <div font-semibold font-mono>
            <span>Unigram</span>
          </div>
          <div font-semibold font-mono>
            <span>SentencePiece</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
