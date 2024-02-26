<template>
  <div class="text-3xl" text-black font-semibold>
    像人一样思考
  </div>
  <div h-full>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        理解字词
      </span>
    </div>
    <div h-full flex flex-col justify-center>
      <div
        mt-20 h-full flex flex-col
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div
          flex flex-col gap-2 text-black
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks >= 1 ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <div flex flex-row items-center gap-2>
            <div border="2 solid yellow-500" h-10 w-20 flex items-center justify-center rounded-lg bg="yellow-200 opacity-50">
              <span>行</span>
              <span opacity-50>业</span>
            </div>
            <div border="2 solid yellow-500" h-10 w-20 flex items-center justify-center rounded-lg bg="yellow-200 opacity-50">
              <span font-mono>23039</span>
            </div>
          </div>
          <div flex flex-row items-center gap-2>
            <div border="2 solid sky-500" h-10 w-20 flex items-center justify-center rounded-lg bg="sky-200 opacity-50">
              <span>行</span>
              <span opacity-50>得通</span>
            </div>
            <div border="2 solid sky-500" h-10 w-20 flex items-center justify-center rounded-lg bg="sky-200 opacity-50">
              <span font-mono>23039</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
