<template>
  <div class="text-3xl" font-semibold>
    大语言模型的小宇宙：字与词
  </div>

  <div
    class="flex flex-col justify-center text-3xl"
    mt-16
    transition="all ease-in-out" duration-1500
    :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
  >
    <div>
      <div flex flex-row items-center py-2>
        <span text-2xl>中文的最小单位：</span>
        <span py-2 text-green-400>字</span>
      </div>
      <div flex>
        <template v-for="(char, index) in ['词', '汇']" :key="index">
          <template v-if="char !== '' && char !== ' '">
            <div
              max-w-30
              flex items-center justify-center
              text-3xl
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks > 1 ? 'w-16 h-16 mr-4' : 'w-8 h-16',
                `index-${index}`,
              ]"
            >
              <div>
                <span relative z-1>{{ char }}</span>
              </div>
              <div
                absolute z-0 h-16 w-16
                border="4 solid" rounded-lg
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks > 1 ? 'bg-green-600 bg-opacity-50 border-green-500' : 'border-transparent',
                ]"
              />
            </div>
          </template>
          <template v-else>
            <span>&nbsp;</span>
          </template>
        </template>
      </div>
    </div>
    <div mt-4>
      <div flex flex-row items-center py-2>
        <span items-center text-2xl>英文的最小单位：</span>
        <span text-green-400>字母</span>
      </div>
      <div flex>
        <template v-for="(char, index) in ['W', 'o', 'r', 'd']" :key="index">
          <template v-if="char !== '' && char !== ' '">
            <div
              max-w-30
              flex items-center justify-center
              text-3xl
              transition="all ease-in-out" duration-1500
              :class="[
                $slidev.nav.clicks > 1 ? 'w-16 h-16 mr-4' : 'w-5 h-16',
                `index-${index}`,
              ]"
            >
              <div>
                <span relative z-1 font-mono>{{ char }}</span>
              </div>
              <div
                absolute z-0 h-16 w-16
                border="4 solid" rounded-lg
                transition="all ease-in-out" duration-1500 delay-1000
                :class="[
                  $slidev.nav.clicks > 1 ? 'bg-green-600 bg-opacity-50 border-green-500' : 'border-transparent',
                ]"
              />
            </div>
          </template>
          <template v-else>
            <span>&nbsp;</span>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
