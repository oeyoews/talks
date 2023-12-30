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
    <div h-full flex flex-col>
      <div
        mt-20 flex flex-col
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks >= 0 && $slidev.nav.clicks < 17 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div
          flex flex-col gap-2 text-black
          transition="all ease-in-out" duration-1500
          :class="[
            $slidev.nav.clicks >= 0 && $slidev.nav.clicks < 20 ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <div flex flex-row items-center gap-4>
            <div border="2 solid yellow-500" h-10 w-20 flex items-center justify-center rounded-lg bg="yellow-200 opacity-50">
              <span>行</span>
              <span opacity-50>业</span>
            </div>
            <div flex flex-row>
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center rounded-l-lg duration-500 bg="yellow-300"
                :class="[
                  $slidev.nav.clicks >= 1 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="orange-300"
                :class="[
                  $slidev.nav.clicks >= 2 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="red-300"
                :class="[
                  $slidev.nav.clicks >= 3 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="purple-300"
                :class="[
                  $slidev.nav.clicks >= 4 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="sky-400"
                :class="[
                  $slidev.nav.clicks >= 5 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="blue-400"
                :class="[
                  $slidev.nav.clicks >= 6 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="orange-300"
                :class="[
                  $slidev.nav.clicks >= 7 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="red-300"
                :class="[
                  $slidev.nav.clicks >= 8 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="purple-300"
                :class="[
                  $slidev.nav.clicks >= 9 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="sky-400"
                :class="[
                  $slidev.nav.clicks >= 10 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="blue-400"
                :class="[
                  $slidev.nav.clicks >= 11 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="orange-300"
                :class="[
                  $slidev.nav.clicks >= 12 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-500 bg="red-300"
                :class="[
                  $slidev.nav.clicks >= 13 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center rounded-r-lg duration-500 bg="indigo-400"
                :class="[
                  $slidev.nav.clicks >= 14 ? 'opacity-100' : 'opacity-0',
                ]"
              />
            </div>
            <div
              flex flex-row
              transition="all ease-in-out" duration-500
              :class="[
                $slidev.nav.clicks >= 15 ? 'opacity-100' : 'opacity-0',
              ]"
            >
              <div h-10 w-40 flex items-center justify-center rounded-lg bg="red-900" />
            </div>
          </div>
          <div flex flex-row items-center gap-4>
            <div border="2 solid sky-500" h-10 w-20 flex items-center justify-center rounded-lg bg="sky-200 opacity-50">
              <span>行</span>
              <span opacity-50>得通</span>
            </div>
            <div flex flex-row>
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center rounded-l-lg duration-1500 bg="sky-300"
                :class="[
                  $slidev.nav.clicks >= 1 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
                :class="[
                  $slidev.nav.clicks >= 2 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
                :class="[
                  $slidev.nav.clicks >= 3 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="purple-300"
                :class="[
                  $slidev.nav.clicks >= 4 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
                :class="[
                  $slidev.nav.clicks >= 5 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
                :class="[
                  $slidev.nav.clicks >= 6 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
                :class="[
                  $slidev.nav.clicks >= 7 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
                :class="[
                  $slidev.nav.clicks >= 8 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="purple-300"
                :class="[
                  $slidev.nav.clicks >= 9 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
                :class="[
                  $slidev.nav.clicks >= 10 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
                :class="[
                  $slidev.nav.clicks >= 11 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
                :class="[
                  $slidev.nav.clicks >= 12 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
                :class="[
                  $slidev.nav.clicks >= 13 ? 'opacity-100' : 'opacity-0',
                ]"
              />
              <div
                transition="all ease-in-out"
                h-10 w-10 flex items-center justify-center rounded-r-lg duration-1500 bg="violet-300"
                :class="[
                  $slidev.nav.clicks >= 14 ? 'opacity-100' : 'opacity-0',
                ]"
              />
            </div>
            <div
              flex flex-row
              transition="all ease-in-out" duration-500
              :class="[
                $slidev.nav.clicks >= 15 ? 'opacity-100' : 'opacity-0',
              ]"
            >
              <div h-10 w-40 flex items-center justify-center rounded-lg bg="fuchsia-900" />
            </div>
          </div>
        </div>
      </div>
      <div
        mt-4 flex flex-row
        transition="all ease-in-out" duration-1500
        :class="[
          $slidev.nav.clicks >= 0 && $slidev.nav.clicks < 17 ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center rounded-l-lg duration-1500 bg="sky-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="purple-400"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="green-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="cyan-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center duration-1500 bg="rose-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <div
          transition="all ease-in-out"
          h-10 w-10 flex items-center justify-center rounded-r-lg duration-1500 bg="purple-300"
          :class="[
            $slidev.nav.clicks >= 16 ? 'opacity-100' : 'opacity-0',
          ]"
        />
      </div>
    </div>
  </div>
</template>
