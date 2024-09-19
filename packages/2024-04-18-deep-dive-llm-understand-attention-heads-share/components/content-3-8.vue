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
      :class="$slidev.nav.clicks > 0 ? 'text-left translate-x-[-344px] translate-y-[-218px] text-3xl!' : 'text-center'"
    >
      <span>那树在哪里？</span>
    </div>
  </div>
</template>
