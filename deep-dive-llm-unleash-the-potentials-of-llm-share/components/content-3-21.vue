<template>
  <div
    v-motion :initial="{
      opacity: 0,
    }" :enter="{
      opacity: 1,
      transition: {
        duration: 1000,
      },
    }" class="h-full w-full flex items-center justify-center" font-semibold
  >
    <div
      class="text-5xl space-x-4" transition="all ease-in-out" flex items-center duration-1500
      :class="$slidev.nav.clicks > 0 ? 'translate-x-[-247px] translate-y-[-218px] text-3xl!' : ''"
    >
      <div
        i-twemoji:brick inline-block transition="all 1000! ease-in-out"
        :class="$slidev.nav.clicks > 0 ? 'opacity-0' : ''"
      />
      <span>用搭积木的方式构建和延展智能</span>
    </div>
  </div>
</template>
