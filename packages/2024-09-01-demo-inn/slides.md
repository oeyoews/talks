---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Neuri & llmg
exportFilename: Demo Inn SH - Neuri & llmg
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 458
routerMode: hash
---

<div translate-x--5>

# Seamless agent toolkit, and unified LLM gateway

Neuri & llmg

Neko

</div>

<!-- <div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div> -->

<!--
Hi!

And greetings to everyone attended my session here.

In today's session, me, Fanshi Zhang, will introduce the amazing tool called Ollama to serve models, along with the associated operator to deploy and scale LLMs seamlessly.
-->

---
layout: intro
class: px-35
glowSeed: 105
---

<div flex items-center>
  <div
    v-click="1" flex flex-col items-start transition duration-500 ease-in-out min-w-60
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <img src="/person/neko.jpg" w-40 h-40 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Neko</span>
    <div>
      <div>
        <span class="opacity-70">Senior software engineer</span>
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
        <span>Communities</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:kubernetes inline-block /> Kubernetes
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:go /><div>Golang</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:vue /><div>Vue</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-twemoji:parrot /><div>Langchain Go/JavaScript</div>
        </div>
      </div>
    </div>
    <div v-click="3">
      <div mb-4 text-zinc-400>
        <span>Other projects / organizations</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-fluent-emoji:notebook-with-decorative-cover /><div>Nolebase</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-gravity-ui:snail /><div>Guii.ai</div>
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

<!--
As background, [click] Me, Fanshi Zhang, a software engineer at DaoCloud, focusing on AI and Kubernetes.

[click] But my story won't simply stop for just Kubernetes, or AI, but also being as the contributor to Golang, Vue.js, Langchain, many other communities.

(By the way, this presentation is written in Vue and TypeScript, so, I am a full stack developer :D).

[click] I am also the co-founder of one of the famously known knowledge management tool Nolebase, served for Obsidian and Logseq. Co-founder of the generative UI devtool called Guii.ai, which I will show you in the demo later.
-->

---
layout: intro
class: px-35
glowSeed: 205
---

<div flex>
  <div flex-1>
    <h1 mb="0!">The Challenges</h1>
    <span text="sm white/50 nowrap">Structured data and all sort of things</span>
  </div>
</div>

<!--
Let's get to the journey.

As being in the role of infra team as well as AI team, many of you may understand that deploying large language models involves complex setups and management.
-->

---
class: flex justify-center items-center gap-20 px40 text-xl
---

<div text-4xl absolute :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'" transition duration-500 ease-in-out>
  <span>So what have we done?</span>
</div>

<div flex flex-col items-center>

<v-clicks>

<div mt-20>

<h1 flex items-center text="6xl!">
  <span font-mono>Neuri</span>
</h1>

</div>

<div text-sm mt-20>
  <span>Easy to use LLM agent</span>
</div>

</v-clicks>

</div>

<!--
I know it sounds like I am a team of Ollama and I am promoting it. Nah, I am not.

Let me [click] introduce Ollama Operator.

[click] This is our one simple intall-to-go plugin solution that brings Ollama to your Kubernetes clusters.
-->

---
class: py-10
---

# Features

<span>Key capabilities</span>

<div mt-10 />

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid blue-800" bg="blue-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:carbon-for-ibm-product h-20 w-20 />
    </div>
    <div bg="blue-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Any model</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid sky-800" bg="sky-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:circle-packing h-20 w-20 />
    </div>
    <div bg="sky-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Structured</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid cyan-800" bg="cyan-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:category-new-each h-20 w-20 />
    </div>
    <div bg="cyan-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Generative stream</span>
    </div>
  </div>
  <div
    :class="$clicks < 4 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid teal-800" bg="teal-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:ibm-watsonx-code-assistant h-20 w-20 />
    </div>
    <div bg="teal-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Code snippet</span>
    </div>
  </div>
  <div
    :class="$clicks < 5 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:ibm-cloud-event-streams h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Composable agents</span>
    </div>
  </div>
</v-clicks>

</div>

<!--
Just forget about the downsides of Ollama and challenges, let's talk about the features that Ollama Operator brings.

We got [click] model caching, [click] model preloading, [click] scaling with replicas, [click] apply correct resource limit, and [click] achieve operator automation.

Why?

I do know that Ollama currently supported model pooling, preloading and swapping. But, actually, back in the days when I was working on Ollama Operator, they are not supported.

For the other problems, for general Ollama servers, there is no way to set the resource limit, and even assign GPUs to it. WHich makes it hard to control.

And what if you want to create a model mesh for the models? It is not possible for just Ollama, we here brought the power of Deployment and replicas to help to scale the models, and have multiple different models run simultaneously.
-->

<!--
TODO
-->

---
class: flex justify-center items-center gap-20 px40 text-xl
---

<div text-4xl absolute :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'" transition duration-500 ease-in-out>
  <span>So what have we done?</span>
</div>

<div flex flex-col items-center>

<v-clicks>

<div mt-20>

<h1 flex items-center text="6xl!">
  <span font-mono>llmg</span>
</h1>

</div>

<div text-sm mt-20>
  <span>Unified LLM Gateway</span>
</div>

</v-clicks>

</div>

---
class: py-10
---

# Any protocols

<span>Everything, through APIs</span>

<div mt-10 />

<div class="flex items-stretched gap-4">
  <v-click>
    <div class="bg-teal-800/20 border-2 border-teal-600 rounded-lg p-4 flex flex-col items-center" w="[25%]" h-60>
      <div i-carbon:arrows-horizontal text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">gRPC</h3>
    </div>
  </v-click>

  <v-click>
    <div class="bg-cyan-800/20 border-2 border-cyan-600 rounded-lg p-4 flex flex-col items-center" w="[25%]" h-60>
      <div i-simple-icons:graphql text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">GraphQL</h3>
    </div>
  </v-click>

  <v-click>
    <div class="bg-sky-800/20 border-2 border-sky-600 rounded-lg p-4 flex flex-col items-center" w="[25%]" h-60>
      <div i-carbon:3rd-party-connected text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">WebSocket</h3>
    </div>
  </v-click>

  <v-click>
    <div class="bg-blue-800/20 border-2 border-blue-600 rounded-lg p-4 flex flex-col items-center" w="[25%]" h-60>
      <div i-carbon:connect text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">RESTful</h3>
    </div>
  </v-click>
</div>

---
class: py-10
---

# Let's Build Together

<span>Join us in shaping the future of LLM</span>

<div flex justify-center gap-50>
  <div
    v-click="1" flex items-start transition duration-500 ease-in-out gap-30
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div mt-4 flex flex-col items-center>
      <img src="/neuri-js-repository-qr.png" w-60 />
      <div text-2xl flex items-center gap-2>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>neuri-js</span>
      </div>
    </div>
  </div>
  <div
    v-click="1" flex items-start transition duration-500 ease-in-out gap-30
    :class="$clicks < 1 ? 'translate-x-20' : 'translate-x-0'"
  >
    <div mt-4 flex flex-col items-center>
      <img src="/llmg-repository-qr.png" w-60 />
      <div text-2xl flex items-center gap-2>
        <div i-carbon:book /><span underline decoration-dashed font-mono decoration-zinc-300>llmg</span>
      </div>
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 230
---

<div flex>
  <div flex-1>
    <div mt-50 />
    <div text="[48px]">
      Thank you
    </div>
  </div>
  <div text-sm text="zinc-300" text-right flex flex-col gap-3 mt-3>
    <div>
      Slides open sourced at <a href="https://github.com/nekomeowww/talks"><div inline-block mr-1 translate-y-0.8 i-ri:github-fill />github.com/nekomeowww/talks</a>
    </div>
    <div>
      Slides built on top of <a href="https://sli.dev"><div inline-block mr-1 translate-y-0.8 i-logos:slidev />sli.dev</a>
    </div>
    <div self-end mt-16 translate-x-6>
      <img src="/slides_qr.png" w-50 />
    </div>
  </div>
</div>

<!--
With all of that, that's the end of today's session.

I bet many of you may asking for how to make this PPT, we open sourced it, it built with codes.

We would like to ask you to give us some thumb ups on sched.

Any questions?
-->
