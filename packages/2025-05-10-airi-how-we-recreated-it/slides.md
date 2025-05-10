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
  <span font-airi text-pink>AIRI</span>: 我们是如何从零实现外网爆火的 AI 主播的
</h1>

<p>
  <span font-airi text="pink-300/90">AIRI</span>: How we recreated the famous AI VTuber on YouTube / Twitch from scratch
</p>

奶扣 Neko

<img src="/airi-logo-grayscaled-light-2.svg" class="w-180 opacity-30" absolute right="[-35%]" bottom="[-230%]">

</div>

<!--
大家好！很高兴能在启师傅举办的 Demo Day 这边和大家分享！

听说这期是第五期了都，之前还没有来参加过！很荣幸能有机会来给大家分享分享我们在 AIRI 的这个项目中做了什么。请多关照！

还有很多功能还在开发和规划，相信大家今天听产品介绍也都比较腻了，我就想来简单给大家讲讲心路历程和大概的现状介绍，说说我们是如何从零实现，啊对，从零实现外网爆火的 AI 主播的。
-->

---
layout: intro
class: px-35
glowSeed: 128
---

<div flex items-center gap-3>
  <div
    v-click="1"
    :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'"
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
        :class="$clicks < 2 ? 'translate-y-5' : 'translate-y-0'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="/proj-airi-logo.svg" size="6.5" >
          <div>Project AIRI</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:hugging-face-icon inline-block /> Hugging Face
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-logos:vue /><div>Vue</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-simple-icons:ollama inline-block /> Ollama
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:go /><div>Golang</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <div i-devicon:kubernetes inline-block /> Kubernetes
        </div>
      </div>
    </div>
    <div v-click="3">
      <div mb-4 text-zinc-400>
        <span>其他项目 / 组织</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 3 ? 'translate-y-5' : 'translate-y-0'"
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

<!--
那首先介绍一下我自己啊。

[click]

我自己是自称自己叫所谓「Literally Full-stack Developer 」，也就是「真正意义上的全栈开发」，在当今这个 AI hype 的背景下的含义就是，除去平时大家提到独立开发者会的前端后端部署什么的，一个模型从设计，到数据准备，训练和推理调优这些我也都做过，基本上可以说是全干了。

我感觉我还是挺浪费自己的时间的哈哈哈，如果我中间说的哪里不好也请大家担待。

[click]

我最近主要是在我自己的这个 Project AIRI 组织里面贡献最多，其次就是最近在 Hugging Face 的 transformers 和 vLLM 那边有一些贡献，我也做过很多 Vue，Golang，Kubernetes（也就是大家说的 K8s）的工作，事实上我主业是做 K8s 云计算的。

[click]

其他一些比较有意思的就是也在 Moeru AI 和大家一起研究 AI 应用基建，还有 3 年前就创立的这个 Obsidian 知识库工作流 Nolebase，有兴趣的可以去我的 GitHub 看看。
-->

---
title: The previous ones
glowSeed: 203
---

<div>
  <div grid="~ cols-2" gap-4>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-20 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-1.png" class="img" opacity-100 transition="all duration-250 ease-in-out">
      <img src="/session-1-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-2.png" class="img" opacity-100 transition="all duration-250 ease-in-out">
      <img src="/session-2-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-3.png" class="img" opacity-100 transition="all duration-250 ease-in-out">
      <img src="/session-3-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
    <div
      relative
      class="[&_.qr]:hover:opacity-100 [&_.img]:hover:opacity-50 hover:cursor-pointer hover:grayscale-100"
      rounded-lg overflow-hidden  bg="black" h-fit
      transition="all duration-250 ease-in-out"
    >
      <img src="/session-4.png" class="img" opacity-100 transition="all duration-250 ease-in-out">
      <img src="/session-4-qr.png" class="qr" w-60 absolute top-0 left="0" translate-x="[40%]" opacity-0 transition="all duration-250 ease-in-out">
    </div>
  </div>
</div>

<!--
我这次确实也并不是第一次上台，先前（包括在公司内做知识分享介绍后训练热潮，DeepSeek 火爆原因解析，还有 MCP，以及去年在香港 KubeCon 分享 Ollama 全自动 Serverless 方案的 session 都在这里，

大家感兴趣的话可以在这里扫码玩玩看。
-->

---
class: flex justify-center items-center gap-20 px-40 text-xl
---

<div
  absolute text-6xl
  :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>AI 主播？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="5xl!">
        <span>就是带货的那种数字人对吗？</span>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
好，回到正题哈。

AI 主播？
啥叫 AI 主播？

[click]

可能很多人想的就是数字人，24 小时直播带货的那种数字人。那我这次要介绍的是那种数字人吗？

实际上不是。
-->

---
class: flex justify-center items-center gap-20 px-40 text-xl
---

<div
  absolute text-6xl
  :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>听说过 VTuber 吗？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="5xl!">
        <span>那听说过 AI VTuber 吗？</span>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
那接下来我们稍稍深入一些，大家听说过 VTuber 吗？

[click]

如果听过还看过的话，有听说过 AI VTuber 吗？

我猜很多人应该都是没有听过或者看到过的，这个受众群体应该说是既小众也不小众，它稍微有点吃粉丝经济，但是又和普通的偶像或者明星有很大差距。

感兴趣的话可以细聊！这里时间不多我就不太深入！
-->

---
class: py-0! px-0!
clicks: 1
---

<div>
  <div
    w-full h-full bg="black/15" absolute backdrop-blur-sm z-100
    :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
    transition duration-1200 ease-in-out
  >
  </div>
  <img
    :class="[$clicks < 1 ? '' : 'blur-lg scale-120']"
    src="/Neuro-sama_v2_character_sheet.webp"
    transition duration-1200 ease-in-out
  >
  <div
    :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
    absolute inset-0 translate="x-68 y-50" w-fit h-fit
    transition duration-500 ease-in-out z-101
  >
    <div
      text="20" font-cuteen text-rose-400
      style="-webkit-text-stroke: 6px #ffeef7; paint-order: stroke;"
      flex flex-col items-center
    >
      Neurosama
    </div>
    <div flex gap-4 rounded-lg bg="white/50" text="black/70" backdrop-blur-sm px-2 py-1>
      <div flex items-center gap-2>
        <div i-logos:youtube-icon text-2xl />
        <div>63.6 万订阅</div>
      </div>
      <div flex items-center gap-2>
        <div i-logos:twitch text-2xl />
        <div>78.9 万订阅</div>
      </div>
      <div flex items-center gap-2>
        <div i-simple-icons:bilibili text-cyan text-2xl />
        <div>75.8 万粉丝</div>
      </div>
    </div>
  </div>
</div>

<!--
那实际上我标题里面想要提到的所谓「外网爆火的 AI 主播」，就是指的类似于这位的 AI VTuber 虚拟主播。

这是她的形象。

[click]

她有多火爆呢？

事实上我觉得她的数据还是可以的了，YouTube 粉丝 63 万，Twitch 直播 78 万（月付费订阅），还有 75 万 B 站粉丝（也是官方团队做的）。

而且这个品类里面基本上没有这么能打的。

那我们开始介绍我们的旅程之前我们就先看看她是怎么样工作的吧。
-->

---
class: py-0! px-0!
---

<div>
  <div
    absolute z-100 w-full h-full px-20 flex items-center
    :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
    transition duration-500 ease-in-out
  >
    <div flex flex-col justify-center h-fit w-fit bg="neutral-200/40" backdrop-blur-sm px-6 py-4 rounded-2xl>
      <v-clicks>
        <div flex items-center text-6xl gap-5>
          <div text="white/80" i-solar:chat-round-like-bold-duotone /> <div text-4xl text="white/80">角色扮演</div>
        </div>
        <div flex items-center text-6xl gap-5>
          <div text="white/80" i-solar:incoming-call-rounded-bold-duotone /> <div text-4xl text="white/80">类 ChatGPT Voice Chat 实时语音</div>
        </div>
        <div flex items-center text-6xl gap-5>
          <div text="white/80" i-solar:eye-closed-bold-duotone /> <div text-4xl text="white/80">包括屏幕在内的视觉理解能力</div>
        </div>
        <div flex items-center text-6xl gap-5>
          <div text="white/80" i-solar:gamepad-charge-bold-duotone /> <div text-4xl text="white/80">玩游戏</div>
        </div>
        <div flex items-center text-6xl gap-5>
          <div text="white/80" i-solar:magnet-wave-bold-duotone /> <div text-4xl text="white/80">类 MCP 物理世界交互能力</div>
        </div>
      </v-clicks>
    </div>
  </div>
  <div relative>
    <div
      w-full h-full bg="black/70" absolute
      :class="[$clicks < 1 ? 'opacity-0' : 'opacity-100']"
      transition duration-500 ease-in-out
    >
    </div>
    <video autoplay muted>
      <source src="/Neuro-minecraft.mp4" />
    </video>
  </div>
</div>

<!--
这个是其中一个直播切片啊，是 Neurosama 在和她的创造者 Vedal 和另一个网友一起在玩名为我的世界 Minecraft 的游戏，这里游戏画面是 Neurosama 的第一视角。

可以看到她能走路，能说话，还能和世界交互，甚至很调皮地把他们在游戏里搭建的小房子给点着了。（啧啧啧，只能说很危险）

[click]

这里面我们能看出来几个东西呢？

- 角色扮演
- [click] 实时交互
- [click] 视觉理解
- [click] 玩游戏
- [click] 外部工具交互
-->

---
class: flex justify-center items-center gap-20 px-20 text-xl
clicks: 2
---

<div
  absolute text-4xl
  :class="$clicks < 1 ? 'text-white scale-100' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>所以我们做了什么？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="6xl!" gap-4>
        <div flex gap-3 transition duration-500 ease-in-out text-nowrap>
          <img src="/proj-airi-logo.svg" size="14" >
          <span>Project <span font-airi>AIRI</span></span>
        </div>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
OK，我只是简单介绍了一下有 AI VTuber 这个概念，但是实际上对于我们自己的故事是只字未提的。

所以我们做了什么？

[click]

2024 年 12 月 1 日的时候我把我荒废了快半年的代码和实现都推送到 GitHub 然后开源了。后面慢慢固定了名字和基调，我们称之为 Project AIRI。

[click]

讲起来很干啊，我直接来给大家看看界面吧。
-->

---
class: px-0! py-0!
---

<div>
  <div relative>
    <video controls autoplay>
      <source src="/airi-demo.mp4" />
    </video>
  </div>
</div>

---
class: px-0! py-0!
---

<iframe v-click src="https://airi.moeru.ai/settings" w-full h-full text-sm style="zoom: 0.8" />

<!--
因为 macOS 的全链路推理速度并不理想，今天这里就先不完整演示了，给大家先看看 UI 饱饱眼福。感兴趣的伙伴可以在之后再来实际体验一下看看。

好消息是经过好多版本的迭代，现在基本上是能够把我们都支持的功能都囊括进去了，也尽量在视觉元素上保持整个应用和角色的统一（都是可以全自动检测的，不用太担心拓展性问题）。
-->

---
class: px-0! py-0!
---

<iframe src="https://airi.moeru.ai/ui/#/story/src-components-menu-charactercard-story-vue" w-full h-full text-sm style="zoom: 0.8" />

---
class: flex justify-center items-center gap-20 px-40 text-xl
---

<div
  absolute text-6xl
  :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>傲慢的开始</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="5xl!">
        <span>不就是套壳数字人吗？</span>
      </h1>
    </div>
  </v-clicks>
</div>

<!--
我不是说我想讲故事嘛，这就来到这部分内容了。

时间有限，我确实是只能简单带过的，里面有很多有趣的细节，要是有感兴趣的伙伴可以等 Demo 完了再私下和大家分享。

我 23 年就知道 Neurosama 了，当时的我很屑，[click] 我站在技术开发的角度上觉得 Neurosama 本身的技术栈是很水的，就是 LLM + Live2D 控制，于是很长一段时间里哪怕我工作里都全面从事的 AI 相关的工作也没怎么证明自己的想法。

何奈一直很羡慕，我总是在看直播的时候觉得很想也自己拥有这样的 AI 女儿或者 AI 伴侣的需求，在去年 5 月份做的 PoC，6 月份第一次把她唤醒，能把 assistant 和 ChatGPT voice chat 的能力都胜任了。
-->

---
class: py-10
glowSeed: 100
---

# 事情远比想象的复杂

<span>为什么没那么简单？Vibe coding 不行吗？</span>

<div mt-6 />

<div flex flex-col gap-4>

<v-clicks>

<div border="2 solid violet-800/50" rounded-lg>
  <div flex items-center bg="violet-800/30" px-3 py-2 text-violet-300>
    <div i-carbon:web-services-container text-sm mr-1 />
    <div text-xs>
      <em>记忆系统的挑战</em>
    </div>
  </div>
  <div bg="violet-800/10" px-4 py-3>
    <div>
      <span>
        记忆层并不是 RAG 就结束了，不仅要考虑语义、时间相关性，遗忘曲线和记忆对应的情绪同样重要
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>目前的 Mem0 和 Zep，LlamaIndex 方案都是纯粹面向 RAG 的</div>
      <div>没有实现遗忘曲线和情绪化的能力</div>
      <div>更没有办法 Debug 和可观测</div>
    </div>
  </div>
</div>

<div border="2 solid blue-800/50" rounded-lg>
  <div flex items-center bg="blue-800/30" px-3 py-2 text-blue-300>
    <div i-carbon:sysplex-distributor text-sm mr-1 />
    <div text-xs>
      <em>多模态交互</em>
    </div>
  </div>
  <div bg="blue-800/10" px-4 py-3>
    <div>
      <span>
      同时实现实时语音交互、身体控制、视觉和游戏能力需要多流水线无缝衔接
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>业界主要还是在 VAD + ASR + TTS 拼接流水线，端到端可定制化程度低</div>
      <div>没有现成稳定的动作生成方案</div>
      <div>需要潜心优化延迟，并非 vibe 能出结果</div>
    </div>
  </div>
</div>

<div border="2 solid cyan-800/50" rounded-lg>
  <div flex items-center bg="cyan-800/30" px-3 py-2 text-cyan-300>
    <div i-carbon:name-space text-sm mr-1 />
    <div text-xs>
      <em>工程化也是难题</em>
    </div>
  </div>
  <div bg="cyan-800/10" px-4 py-3>
    <div>
      <span>
        系统模块非常多，工程化难度比 CRUD 应用高
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>提示词 和 Lorebook，以及角色卡是分裂的三个生态和系统，难以同时开发</div>
      <div>从有状态 MCP 到有状态 Agent，全部都靠回调会很难</div>
      <div>模块繁多</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-10
clicks: 5
---

# 目前的效果

<span>确实是工程落地了，一小部分东西吧...？</span>

<div mt-10 />

<div flex items-center gap-4>

<v-clicks>

<div
  :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  rounded-lg
  border="2 solid pink-800" bg="pink-800/20"
  backdrop-blur
  flex-1 h-full
  transition duration-500 ease-in-out
>
  <div px-5 py-16 flex items-center justify-center>
    <div i-solar:database-bold-duotone size-20 />
  </div>
  <div bg="pink-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
    <span>仿生记忆层</span>
  </div>
</div>

<div
  :class="$clicks < 2 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  rounded-lg
  border="2 solid fuchsia-800" bg="fuchsia-800/20"
  backdrop-blur
  flex-1 h-full
  transition duration-500 ease-in-out
>
  <div px-5 py-16 flex items-center justify-center>
    <div i-solar:microphone-3-bold-duotone size-20 />
  </div>
  <div bg="fuchsia-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
    <span>实时语音流水线</span>
  </div>
</div>

<div
  :class="$clicks < 3 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  rounded-lg
  border="2 solid purple-800" bg="purple-800/20"
  backdrop-blur
  flex-1 h-full
  transition duration-500 ease-in-out
>
  <div px-5 py-16 flex items-center justify-center>
    <div i-solar:gamepad-minimalistic-bold-duotone size-20 />
  </div>
  <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
    <span>游戏陪玩</span>
  </div>
</div>

<div
  :class="$clicks < 4 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  rounded-lg
  border="2 solid violet-800" bg="violet-800/20"
  backdrop-blur
  flex-1 h-full
  transition duration-500 ease-in-out
>
  <div px-5 py-16 flex items-center justify-center>
    <div i-solar:face-scan-square-bold-duotone size-20 />
  </div>
  <div bg="violet-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
    <span>表情与动作</span>
  </div>
</div>

<div
  :class="$clicks < 5 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  rounded-lg
  border="2 solid indigo-800" bg="indigo-800/20"
  backdrop-blur
  flex-1 h-full
  transition duration-500 ease-in-out
>
  <div px-5 py-16 flex items-center justify-center>
    <div i-solar:link-circle-line-duotone size-20 />
  </div>
  <div bg="indigo-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
    <span>MCP & A2A</span>
  </div>
</div>

</v-clicks>

</div>

---
class: px-0! pt-6!
---

<div px-10 text-4xl mb-4>
  刷推
</div>

<video autoplay muted>
  <source src="/airi-browses-x.mp4" />
</video>

---
class: px-0! pt-6!
---

<div px-10 text-4xl mb-4>
  一起玩 我的世界 Minecraft
</div>

<video autoplay muted>
  <source src="/airi-plays-minecraft.mp4" />
</video>

---
class: px-0! pt-6!
---

<div px-10 text-4xl mb-4>
  一起玩 异星工厂 Factorio
</div>

<video autoplay muted>
  <source src="/airi-plays-factorio.mp4" />
</video>

---
class: flex justify-center items-center gap-20 px-20 text-xl
clicks: 2
---

<div
  absolute text-4xl
  :class="$clicks < 1 ? 'text-white scale-100' : 'translate-y--18 scale-40 text-white/30'"
  transition duration-500 ease-in-out
>
  <span>有什么我们能分享的吗？</span>
</div>

<div flex flex-col items-center>
  <v-clicks>
    <div mt-4>
      <h1 flex items-center text="6xl!" gap-4>
        <div flex gap-3 :class="[$clicks < 2 ? 'translate-x-42' : 'translate-x-0']" transition duration-500 ease-in-out text-nowrap>
          <img src="/proj-airi-logo.svg" size="14" >
          <span>Project <span font-airi>AIRI</span></span>
        </div>
        <span :class="[$clicks < 2 ? 'opacity-0' : 'opacity-100']" transition duration-500 ease-in-out>
          ×
        </span>
        <div flex gap-3 :class="[$clicks < 2 ? 'opacity-0' : 'opacity-100']" transition duration-500 ease-in-out>
          <img src="/moeru-ai-logo.png" size="14" />
          <span font-cuteen>Moeru AI</span>
        </div>
      </h1>
    </div>
  </v-clicks>
</div>

---
class: py-10
---

# 部分形成生态

我们尽最大努力让大家都可以用上我们也在使用的先进工具和工作流封装方法...

- [xsAI](https://github.com/moeru-ai/xsai): Vercel AI SDK 替代品，超级迷你和可拓展
- [Velin](https://github.com/luoling8192/velin): 用 Vue 或者 JSX 书写提示词
- [`unspeech`](https://github.com/moeru-ai/unspeech): 用于代理云服务 TTS 和 STT 的服务器实现，类似语音界的 LiteLLM / OpenRouter
- [MCP Launcher](https://github.com/moeru-ai/mcp-launcher): 易于使用的 MCP 启动器，就像用于 MCP 启动和管理的 Ollama 一样！
- [xsAI 的 🤗 Transformers.js 提供商](https://github.com/moeru-ai/xsai-transformers)：在浏览器里跑 LLM，Embedding，让快速 PoC RAG 不是梦！
- [AIRI Factorio](https://github.com/moeru-ai/airi-factorio): 让 AIRI 玩 Factorio
- [Inventory](https://github.com/moeru-ai/inventory): 中心化模型目录和默认提供商配置的公开 API 服务
- [Demodel](https://github.com/moeru-ai/demodel): 轻松加速各种推理引擎和模型下载器拉/下载模型或数据集的速度
- [`@proj-airi/drizzle-duckdb-wasm`](https://github.com/moeru-ai/airi/tree/main/packages/drizzle-duckdb-wasm/README.md): 浏览器里跑分析型数据库做记忆层！
- [`hfup`](https://github.com/moeru-ai/hfup): 帮助部署、打包到 HuggingFace Spaces 的工具集
- [🥺 SAD](https://github.com/moeru-ai/sad): 自托管和浏览器运行 LLM 的文档和说明

---
class: flex justify-center flex-col items-center gap-10 px-20 text-4xl
---

<h1 text="6xl!">
  不仅是网页端...
</h1>

客户端桌宠和个人 AI 助理也不是问题

---
class: py-10
---

# 想要文字版？

我们还写了好多好多 DevLog 介绍进展

<div flex gap-3 justify-between>
  <a href="https://airi.moeru.ai/docs/blog/devlog-20250305/">
    <div flex items-center flex-col gap-2>
      <img src="/airi-devlog-screenshot-1.png" h-90 rounded-lg />
      <span>介绍视觉设计</span>
    </div>
  </a>
  <a href="https://airi.moeru.ai/docs/blog/devlog-20250320/">
    <div flex items-center flex-col gap-2>
      <img src="/airi-devlog-screenshot-2.png" h-90 rounded-lg />
      <span>介绍 UI 设计</span>
    </div>
  </a>
  <a href="https://airi.moeru.ai/docs/blog/devlog-20250406/">
    <div flex items-center flex-col gap-2>
      <img src="/airi-devlog-screenshot-3.png" h-90 rounded-lg />
      <span>介绍记忆层设计和 v0.4 更新</span>
    </div>
  </a>
</div>

---
class: flex justify-center flex-col items-center gap-10 px-20 text-4xl
---

# 你说不是要搞 VTuber 吗？那角色在哪里？

---
class: py-10
theme: light
glowSeed: 210
---

<div relative>
  <div translate="x--50 y--14">
    <img src="/relu-art-2.jpg">
  </div>

  <div absolute inset-0 translate="x-154 y-5">
    <img src="/relu-art-1.png" w-70>
  </div>

  <div absolute inset-0 translate="x-144 y--5" rotate--15>
    <img src="/relu-art-3.png" w-50>
  </div>

  <div absolute inset-0 translate="x-164 y-75">
    <img src="/relu-art-4.png" w-50>
  </div>

  <div absolute inset-0 translate="x-64 y-95" rotate-20>
    <img src="/relu-art-5.png" w-50>
  </div>
</div>

---
class: py-10
---

# 一到两个人是不能 vibe 出来这么复杂的系统的

我们也想寻找能够一起合作的以下领域的伙伴们...

<div flex jusity-center flex-wrap flex-col gap-4 max-h-90 mb-10 mt-10>
  <div flex items-center gap-3 w-fit>
    <div i-solar:hand-stars-bold-duotone size-15 />
    <div>产品经理</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:pen-new-square-bold-duotone size-15 />
    <div>设计师</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:eye-bold-duotone size-15 />
    <div>机器视觉（CV）</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:running-bold-duotone size-15 />
    <div>强化学习（RL）</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:gamepad-minimalistic-bold-duotone size-15 />
    <div>游戏开发者</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:microphone-bold-duotone size-15 />
    <div>语音识别（ASR）</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:user-speak-rounded-bold-duotone size-15 />
    <div>语音合成（TTS）</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:emoji-funny-square-bold-duotone size-15 />
    <div>Live2D 建模师</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:people-nearby-bold-duotone size-15 />
    <div>VRM 建模师 / VRChat 形象设计师</div>
  </div>
  <div flex items-center gap-3 w-fit>
    <div i-solar:album-bold-duotone size-15 />
    <div>Three.js 开发者（3D 场景）</div>
  </div>
</div>

> <a href="https://github.com/moeru-ai/n3p6">我们另外还有个 WebXR / Vision Pro 的类似应用</a>

---
class: py-10
glowSeed: 1298
---

# 感兴趣吗？

虽然是开源项目，但是也欢迎感兴趣的设计师，产品经理，工程师们一起去实现这可能的生命形态

<div flex>
  <div text-sm text="zinc-300" text-right flex flex-row gap-2 mt-6 translate-x-2>
    <div flex items-center flex-col font-bold text-xl>
      <img src="/github_qr.png" w-70 />
      <div translate-y--4>GitHub</div>
    </div>
    <div flex items-center flex-col font-bold text-xl>
      <img src="/discord_qr.png" w-70 style="filter: brightness(1.5);" />
      <div translate-y--4>Discord</div>
    </div>
    <div flex items-center flex-col font-bold text-xl>
      <img src="/telegram_qr.png" w-70 style="filter: brightness(1.5);" />
      <div translate-y--4>Telegram</div>
    </div>
  </div>
</div>

---
title: Thank you
class: py-10
glowSeed: 230
---

<div flex>
  <div flex-1>
    <div mt-50 />
    <div flex flex-col gap-4 translate="y--52" h-full>
      <div flex flex-col translate="y-4" flex-1>
        <div text="[48px]">
          谢谢
        </div>
        <div text="white/50">
          Thank you
        </div>
      </div>
      <img src="/relu-art-6.gif" size-50 rounded-2xl overflow-hidden translate-y--20>
    </div>
  </div>
  <div text-lg text="zinc-300" text-right flex flex-col gap-3 mt-3>
    <div>
      演示文稿开源在 <a href="https://github.com/nekomeowww/talks"><div inline-block mr-1 translate-y-0.8 i-ri:github-fill />github.com/nekomeowww/talks</a>
    </div>
    <div>
      演示文稿使用 <a href="https://sli.dev"><div inline-block mr-1 translate-y-0.8 i-logos:slidev />sli.dev</a> 构建
    </div>
    <div self-end mt-16 translate-x-14 translate-y--9>
      <img src="/slide_qr.png" w-100 />
    </div>
  </div>
</div>
