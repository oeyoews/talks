<template>
  <div class="text-3xl" font-semibold>
    第一印象
  </div>

  <div
    class="flex flex-col justify-center text-3xl"
    mt-16
    :class="$slidev.nav.clicks > 0 ? 'space-y-8' : 'space-y-4'"
  >
    <div
      flex items-center font-normal
      transition="all ease-in-out"
      duration-1500 delay-250
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <div i-twemoji-face-with-spiral-eyes mr-4 /> <span>犯蠢</span>
    </div>
    <div
      flex items-center font-normal
      transition="all ease-in-out"
      duration-1500 delay-250
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <div i-twemoji:clown-face mr-4 /> <span>胡编乱造</span>
    </div>
    <div
      flex items-center font-normal
      transition="all ease-in-out"
      duration-1500 delay-500
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <div i-twemoji:face-with-symbols-on-mouth mr-4 /> <span>不听话</span>
    </div>
    <div
      flex items-center font-normal
      transition="all ease-in-out"
      duration-1500 delay-750
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <div i-twemoji:zany-face mr-4 /> <span>不会数学运算</span>
    </div>
    <div
      flex items-center font-normal
      transition="all ease-in-out"
      duration-1500 delay-1000
      :class="$slidev.nav.clicks > 0 ? 'opacity-100' : 'opacity-0'"
    >
      <div i-twemoji:woozy-face mr-4 /> <span>不会逻辑推理</span>
    </div>
  </div>
</template>
