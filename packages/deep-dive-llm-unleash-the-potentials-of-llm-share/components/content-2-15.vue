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
      class="flex flex-col justify-center text-2xl"
      transition="all ease-in-out" mt-4 text-black duration-1500
      :class="[
        [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div>
        <div mb-4 flex>
          <span><span font-semibold>我平时的思考模式</span></span>
        </div>
        <div justify-content flex flex-col gap-4>
          <div
            border="gray-100 1 solid"
            bg="gray-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-0
            :class="[
              [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-icon-park-outline:arrow-right mr-4 />
            <span>有一个向前的方向</span>
          </div>
          <div
            border="gray-100 1 solid"
            bg="gray-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-0
            :class="[
              [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-icon-park-outline:full-screen-one mr-4 />
            <span>不断发散的思考</span>
          </div>
          <div
            border="gray-100 1 solid"
            bg="gray-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-0
            :class="[
              [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-icon-park-outline:cycle-movement mr-4 />
            <span>回想和记得话题中心</span>
          </div>
          <div
            border="gray-100 1 solid"
            bg="gray-50"
            flex items-center
            rounded-lg
            px-4 py-2
            text-2xl
            transition="all ease-in-out"
            duration-1500 delay-0
            :class="[
              [1].includes($slidev.nav.clicks) ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div i-icon-park-outline:connection-point-two mr-4 />
            <span>根据自己的习惯造句</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
