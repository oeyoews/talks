<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
      transition: {
        duration: 1000,
      },
    }"
    class="h-full w-full flex items-center justify-center"
    font-semibold
  >
    <div
      class="text-5xl space-x-4" transition="all ease-in-out" flex items-center duration-1500
      :class="$slidev.nav.clicks > 0 ? 'translate-x-[-262px] translate-y-[-218px] text-3xl!' : ''"
    >
      <div
        i-twemoji:ringed-planet inline-block transition="all 1000! ease-in-out"
        :class="$slidev.nav.clicks > 0 ? 'opacity-0' : ''"
      />
      <span>大语言模型的小宇宙：字与词</span>
    </div>
  </div>
</template>
