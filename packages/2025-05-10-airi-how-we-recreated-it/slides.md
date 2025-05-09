---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'AIRI: 我们是如何从零实现外网爆火的 AI 主播的'
exportFilename: AIRI - 我们是如何从零实现外网爆火的 AI 主播的
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 200
routerMode: hash
---

<div translate-x--10>

<h1>
  <span font-airi>AIRI</span>: 我们是如何从零实现外网爆火的 AI 主播的
</h1>

<p>
  <span font-airi>AIRI</span>: How we recreated the famous AI VTuber on YouTube / Twitch from scratch
</p>

奶扣 Neko

</div>

---
layout: intro
class: px-35
glowSeed: 105
---

<div flex items-center gap-3>
  <div
    v-click="1"
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
    flex flex-col items-start transition duration-500 ease-in-out min-w-60
  >
    <img src="/person/neko.jpeg" w-40 h-40 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Neko</span>
    <div>
      <div>
        <span class="opacity-70">Literally Full-stack Developer</span>
      </div>
      <div text-sm flex items-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>nekomeowww</span>
      </div>
    </div>
  </div>
  <div flex-1 />
  <div flex flex-col gap-8>
    <div mb-4 v-click="2">
      <div mb-4 text-zinc-400>
        <span>社区</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="/proj-airi-logo.svg" size="6.5" >
          <div>Project AIRI</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-twemoji:parrot /><div>Langchain Go/JavaScript</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:kubernetes inline-block /> Kubernetes
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:go /><div>Golang</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:vue /><div>Vue</div>
        </div>
      </div>
    </div>
    <div v-click="3">
      <div mb-4 text-zinc-400>
        <span>其他项目 / 组织</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="/moeru-ai-logo.png" size="6.5" />
          <div>Moeru AI</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-fluent-emoji:notebook-with-decorative-cover /><div>Nolebase</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click="3" w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/nekomeoww-qr.png" h-50>
  </div>
</div>

---
title: The previous ones
glowSeed: 203
---

<div>
  <div grid="~ cols-2" gap-4>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-1.png" class="img" opacity-100>
      <img src="/session-1-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-2.png" class="img" opacity-100>
      <img src="/session-2-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-3.png" class="img" opacity-100>
      <img src="/session-3-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-4.png" class="img" opacity-100>
      <img src="/session-4-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
  </div>
</div>

---
title: Thank you
class: py-10
glowSeed: 230
poweredBy: true
---

<div flex>
  <div flex-1>
    <div mt-50 />
    <div text="[48px]">
      谢谢
    </div>
    <div text="white/50">
      Thank you
    </div>
  </div>
  <div text-sm text="zinc-300" text-right flex flex-col gap-3 mt-3>
    <div>
      演示文稿开源在 <a href="https://github.com/nekomeowww/talks"><div inline-block mr-1 translate-y-0.8 i-ri:github-fill />github.com/nekomeowww/talks</a>
    </div>
    <div>
      演示文稿使用 <a href="https://sli.dev"><div inline-block mr-1 translate-y-0.8 i-logos:slidev />sli.dev</a> 构建
    </div>
    <div self-end mt-16 translate-x-6>
      <img src="/slide_qr.png" w-50 />
    </div>
  </div>
</div>

<!--
With all of that, that's the end of today's session.

I bet many of you may asking for how to make this PPT, we open sourced it, it built with codes.

Any questions?
-->
