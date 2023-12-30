<template>
  <div class="text-3xl" text-black font-semibold>
    当我们说微调的时候是在做什么？
  </div>

  <div flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        我们实际上是在扭曲大模型所在的宇宙
      </span>
    </div>
    <div
      flex gap-4 transition="all ease-in-out" duration-1500 :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 2 ? 'opacity-100' : '',
        $slidev.nav.clicks === 3 ? 'opacity-0' : '',
      ]"
    >
      <div w-full>
        <div mt-4 h-full>
          <div
            border="2 dashed green-300" h="[340px]" transition="all ease-in-out"
            relative z-0 w-full flex items-end justify-center rounded-lg bg-green-200 bg-opacity-30 text-black duration-1500
          >
            <div
              absolute z-1 h-3 w-3 rounded-full
              border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[240px] top-[60px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[240px] top-[60px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>Hell</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[240px] top-[60px]' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[220px] top-[24px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>Hell</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[400px] top-[80px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[400px] top-[80px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>o</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[400px] top-[80px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[320px] top-[70px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>o</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[440px] top-[160px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[440px] top-[160px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>Wo</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[440px] top-[160px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[470px] top-[200px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>Wo</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[140px] top-[120px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[100px] top-[140px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>rld</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[140px] top-[120px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[140px] top-[120px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>rld</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[680px] top-[200px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[680px] top-[200px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>Th</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[680px] top-[200px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[620px] top-[240px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>Th</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[240px] top-[120px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[240px] top-[120px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>is</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[240px] top-[120px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[200px] top-[140px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>is</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full border="2 solid"
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[560px] top-[120px] bg-green-500 border-transparent' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[560px] top-[120px] border-green-500' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-5' : '',
                ]"
              >
                <span>GPT</span>
              </div>
            </div>
            <div
              absolute z-1 h-3 w-3 rounded-full
              bg-green-500
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks === 0 || $slidev.nav.clicks === 1 ? 'left-[560px] top-[120px] ' : '',
                $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'left-[610px] top-[115px]' : '',
              ]"
            >
              <div
                mt-3 w-10 font-mono
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks === 2 || $slidev.nav.clicks === 3 ? 'opacity-100' : 'opacity-0',
                ]"
              >
                <span>GPT</span>
              </div>
            </div>
            <div mb-4 font-mono>
              <span>Hello, World! This is GPT.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
