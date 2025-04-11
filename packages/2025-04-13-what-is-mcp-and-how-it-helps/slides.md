---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'MCP 是什么？机遇以及可能的未来'
exportFilename: MCP 是什么？机遇以及可能的未来r
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 200
routerMode: hash
---

<div translate-x--35>

# MCP 是什么？机遇以及可能的未来

What is MCP? Opportunities and Possibilities

DaoCloud Neko

</div>

<!-- 大家好，今天我将与大家分享Model Context Protocol（MCP）的相关内容，包括它的基本概念、现状、未来机遇以及对我们不同角色的影响。-->

---
class: py-10
---

# 今日议程

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 border border-violet-800/60 rounded-lg bg-violet-800/20 backdrop-blur">
    <div class="font-bold text-lg mb-2">第一部分：基础认知</div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <div>MCP 是什么？</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <div>为什么需要MCP？</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <div>MCP解决了哪些问题？</div>
      </li>
    </ul>
  </div>
  <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
    <div class="font-bold text-lg mb-2">第二部分：深入理解</div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>MCP 的工作原理</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>MCP 的现状与局限</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>MCP 与其他协议的比较</div>
      </li>
    </ul>
  </div>
  <div class="p-4 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur">
    <div class="font-bold text-lg mb-2">第三部分：机遇与展望</div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div>对普通用户的意义</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div>对 AI 重度用户的影响</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div>对基础设施开发者的机遇</div>
      </li>
    </ul>
  </div>
  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
    <div class="font-bold text-lg mb-2">第四部分：未来可能性</div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>LLM 生态的演进趋势</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>MCP vs A2A: 协议竞争与互补</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>未来的"AI 原生 API"展望</div>
      </li>
    </ul>
  </div>
</div>

<!--
今天的分享分为四个部分：首先介绍MCP的基本概念；然后深入理解其工作原理和局限；接着探讨MCP带来的机遇；最后展望未来可能性，特别是与谷歌新发布的A2A协议的关系。说实话，这个主题可以讲好几天，但我们会尽量在一小时内提炼出最核心的内容。
-->

---
class: py-10
---

# 我们对 LLM 的期望

<div mt-20 />

<div flex items-center gap-4>
  <div class="p-4 backdrop-blur flex-1">
  <div class="font-bold text-2xl mb-5">期望</div>
    <div class="space-y-4">
      <div class="flex items-center">
        <div class="i-carbon:document text-3xl mr-4 text-blue-400"></div>
        <div>访问私有内容（文件、数据库、私有笔记）</div>
      </div>
      <div class="flex items-center">
        <div class="i-carbon:api text-3xl mr-4 text-blue-400"></div>
        <div>获取实时信息（股价、天气、新闻）</div>
      </div>
      <div class="flex items-center">
        <div class="i-carbon:function text-3xl mr-4 text-blue-400"></div>
        <div>执行精确操作（调用API、比较大小、计数）</div>
      </div>
    </div>
  </div>

  <div class="p-4 rounded-lg backdrop-blur flex-1">
    <div class="font-bold text-2xl mb-5">现实</div>
    <div class="space-y-4 mt-2">
      <div class="flex items-center">
        <div class="i-carbon:warning text-3xl mr-4 text-yellow-500"></div>
        <div>模型无法直接访问你的私有数据</div>
      </div>
      <div class="flex items-center">
        <div class="i-carbon:warning text-3xl mr-4 text-yellow-500"></div>
        <div>训练数据有截止日期，无法获取最新信息</div>
      </div>
      <div class="flex items-center">
        <div class="i-carbon:warning text-3xl mr-4 text-yellow-500"></div>
        <div>基于概率生成，无法保证精确计算</div>
      </div>
    </div>
  </div>
</div>

<!--
在深入MCP之前，先思考我们对LLM的期望与现实。我们希望AI能访问私有数据、获取实时信息并执行精确操作。但现实是，它不能直接访问私有数据，训练数据有截止日期，而且基于概率生成的特性使其在精确计算上存在局限。这些差距正是MCP试图弥补的。

是的，通过Function Calling已经可以实现一些功能，如查询天气，但如我们接下来要看到的，MCP与Function Calling有本质区别，解决了更深层次的问题。
-->

---
class: py-10
---

# LLM的计算能力局限

<div mt-10 />

<div class="grid grid-cols-2 gap-8">
  <div v-click class="border border-black/40 dark:border-violet-800/60 rounded-lg p-4 bg-violet-800/20 backdrop-blur">
    <svg width="100%" height="250" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <!-- 对话框背景 -->
      <rect x="10" y="10" width="480" height="280" rx="10" ry="10" fill="#1E1E1E" stroke="#444444" stroke-width="2" />
      <!-- 用户提问 -->
      <rect x="20" y="20" width="460" height="60" rx="5" ry="5" fill="#2D2D63" stroke="#3B3B8C" stroke-width="1" />
      <text x="40" y="50" font-family="Arial" font-size="14px" fill="#FFFFFF">用户: 哪个数字更大: 9.8 还是 9.11?</text>
      <!-- AI回答 -->
      <rect x="20" y="90" width="460" height="180" rx="5" ry="5" fill="#1E1E1E" stroke="#444444" stroke-width="1" />
      <text x="40" y="120" font-family="Arial" font-size="14px" fill="#FFFFFF">AI: 9.11 比 9.8 大。</text>
      <text x="40" y="150" font-family="Arial" font-size="14px" fill="#FFFFFF">因为在小数点后，11 大于 8，所以 9.11</text>
      <text x="40" y="180" font-family="Arial" font-size="14px" fill="#FFFFFF">比 9.8 大。</text>
      <text x="450" y="125" font-family="Arial" font-size="16" fill="#f44336" text-anchor="middle">✗</text>
    </svg>
    <div class="text-center mt-2 text-sm">简单数字比较也可能出错 (9.8 其实大于 9.11)</div>
  </div>

  <div v-click class="border border-black/40 dark:border-purple-800/60 rounded-lg p-4 bg-purple-800/20 backdrop-blur">
    <svg width="100%" height="250" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <!-- 对话框背景 -->
      <rect x="10" y="10" width="480" height="280" rx="10" ry="10" fill="#1E1E1E" stroke="#444444" stroke-width="2" />
      <!-- 用户提问 -->
      <rect x="20" y="20" width="460" height="60" rx="5" ry="5" fill="#2D2D63" stroke="#3B3B8C" stroke-width="1" />
      <text x="40" y="50" font-family="Arial" font-size="14px" fill="#FFFFFF">用户: "Strawberry"这个单词中有几个字母r?</text>
      <!-- AI回答 -->
      <rect x="20" y="90" width="460" height="180" rx="5" ry="5" fill="#1E1E1E" stroke="#444444" stroke-width="1" />
      <text x="40" y="120" font-family="Arial" font-size="14px" fill="#FFFFFF">AI: "Strawberry"中有1个字母r。</text>
      <text x="40" y="150" font-family="Arial" font-size="14px" fill="#FFFFFF">字母r出现在单词的第三个位置，即</text>
      <text x="40" y="180" font-family="Arial" font-size="14px" fill="#FFFFFF">"Str"的最后一个字母。</text>
      <text x="450" y="125" font-family="Arial" font-size="16" fill="#f44336" text-anchor="middle">✗</text>
      <!-- 正确答案提示 -->
      <text x="40" y="220" font-family="Arial" font-size="14px" fill="#4caf50">正确答案: 2个r (Strawberry)</text>
    </svg>
    <div class="text-center mt-2 text-sm">基本字母计数也不精确</div>
  </div>
</div>

<!--
这些例子直观地展示了LLM的局限 - 比较9.8和9.11哪个大，或者计算"Strawberry"中有几个r，看似简单的任务对LLM来说却可能出错。这不是因为模型"不聪明"，而是由于它的工作原理决定的。

这些例子可能看起来简单，但它们揭示了一个关键问题：即使是最先进的AI模型，在某些基础操作上也会犯错。为什么会这样？因为LLM本质上是预测下一个词的概率分布，不是执行精确的符号计算。Function Calling虽然可以解决一些问题，但需要开发者预先定义好函数，而MCP提供了一个更灵活、更开放的解决方案。
-->

---
class: flex justify-center items-center gap-20 px40 text-xl overflow-hidden
clicks: 3
---

<div text-4xl absolute :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'" transition duration-500 ease-in-out>
  <span>MCP是什么？</span>
</div>

<div flex flex-col items-center relative>

<div
  mt-15
  :class="[
    $clicks === 0 ? 'opacity-0' : '',
    $clicks === 1 ? 'opacity-100' : '',
    $clicks > 1 ? 'opacity-30 blur-sm' : ''
  ]"
  transition duration-500
>

<h1 flex items-center text="5xl!">
  <div i-carbon:api mr-3 text-blue-400 />
  <span>Model Context Protocol</span>
</h1>

</div>

<div
  text-2xl flex items-center gap-2
  :class="[
    $clicks === 0 ? 'opacity-0' : '',
    $clicks === 1 ? 'opacity-100' : '',
    $clicks > 1 ? 'opacity-30 blur-sm' : ''
  ]"
  transition duration-500
>
  <div i-carbon:ibm-cloud-direct-link class="text-blue-400" />
  <span>模型上下文协议</span>
</div>

<div
  absolute
  class="inset-0 flex items-center justify-center"
  :class="$clicks < 2 ? 'opacity-0 translate-y-0 scale-90' : 'backdrop-blur-md bg-black/30'"
  transition duration-800 ease-in-out
  v-click
>
  <div
    mt-4
    flex flex-col gap-4
    max-w-500 text-2xl
    p-8 rounded-xl
    shadow-xl text-nowrap
    class="z-20 bg-black/50"
  >
    <div flex items-center gap-3>
      <div>由 <div i-simple-icons:anthropic class="text-white inline-block translate-y-1" /> Anthropic 于<span class="text-blue-400 font-bold"> 2024 年初</span>推出的开放协议</div>
    </div>
    <div flex items-start gap-3>
      <div i-carbon:connect class="text-blue-400 mt-1" />
      <div>提供标准化接口，实现<span class="text-blue-400 font-bold"> LLM 与外部数据源及工具的无缝集成</span></div>
    </div>
    <div flex items-start gap-3>
      <div i-carbon:application-web class="text-green-400 mt-1" />
      <div>已获得多个 AI 编辑器支持：Cursor、Windsurf、Cline 等</div>
    </div>
    <div flex items-start gap-3>
      <div i-carbon:earth-filled class="text-cyan-400 mt-1" />
      <div>正逐渐成为连接 LLM 与外部世界的<span class="text-cyan-400 font-bold">事实标准</span></div>
    </div>
  </div>
</div>

</div>

<!--
[点击] 让我们来了解MCP是什么。

[点击] Model Context Protocol，即模型上下文协议。

[点击] 这是由Anthropic在2024年初推出的开放协议，提供标准化接口，使LLM能够与外部数据源和工具无缝集成。从最初仅支持Claude桌面应用，现已获得多个AI编辑器支持，并正在成为连接LLM与外部世界的事实标准。
-->

---
class: py-10
---

# Function Calling vs MCP：关键区别

<div mt-8 />

<div class="grid grid-cols-2 gap-6">
  <div v-click class="border border-orange-800/60 rounded-lg p-4 bg-orange-800/20 backdrop-blur">
    <div class="flex items-center gap-2 mb-4">
      <div class="i-carbon:function text-3xl text-orange-400"></div>
      <div class="text-lg font-bold">Function Calling</div>
    </div>
    <div class="space-y-3 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-orange-400 mt-1 flex-shrink-0"></div>
        <div>由API提供商（如OpenAI）定义接口标准</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-orange-400 mt-1 flex-shrink-0"></div>
        <div>函数需预先定义，每种能力需单独集成</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-orange-400 mt-1 flex-shrink-0"></div>
        <div>通常在模型服务端执行，数据隐私风险</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-orange-400 mt-1 flex-shrink-0"></div>
        <div>每个模型API有自己的调用方式</div>
      </div>
    </div>
  </div>

  <div v-click class="border border-blue-800/60 rounded-lg p-4 bg-blue-800/20 backdrop-blur">
    <div class="flex items-center gap-2 mb-4">
      <div class="i-carbon:usb text-3xl text-blue-400"></div>
      <div class="text-lg font-bold">MCP</div>
    </div>
    <div class="space-y-3 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>开放协议标准，任何人可实现和扩展</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>本地运行，数据不离开用户设备</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>工具生态可互操作，一次构建多处使用</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>标准USB接口，支持"即插即用"扩展</div>
      </div>
    </div>
  </div>
</div>

<div v-click class="mt-6 bg-gradient-to-r from-orange-800/20 to-blue-800/20 rounded-lg p-4 backdrop-blur">
  <div class="font-bold">为什么 MCP 比直接实现 Function Calling 更好？</div>
  <div class="text-sm mt-2">
    就像Web标准让所有浏览器都能访问同一个网站，MCP让所有支持该协议的AI模型都能使用同一套工具生态，而不必为每个模型单独开发接口。开发者一次构建，随处可用。
  </div>
</div>

<!--
Function Calling和MCP有几个根本性区别：

Function Calling由各家API提供商定义接口标准，函数需预先定义，每种能力需单独集成，通常在模型服务端执行，数据隐私存在风险，且每个模型API有自己的调用方式。

而MCP是开放协议标准，任何人可实现和扩展，本地运行保证数据不离开用户设备，工具生态可互操作，一次构建多处使用，且像USB接口一样支持"即插即用"扩展。

为什么MCP比直接实现Function Calling更好？这就像Web标准让所有浏览器都能访问同一个网站，MCP让所有支持该协议的AI模型都能使用同一套工具生态，而不必为每个模型单独开发接口。开发者一次构建，随处可用。这大大降低了生态系统的碎片化风险。
-->

---
class: py-10
---

# MCP解决什么问题？

<div mt-10 />

<div class="grid grid-cols-3 gap-4 h-70">
  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur flex flex-col items-center">
      <div class="font-bold mb-2 text-2xl">访问私有数据</div>
    <div class="i-carbon:password size-20 mb-4 text-blue-500 flex-1"></div>
    <div class="text-center">
      <div class="text-sm">允许 LLM 安全地读取本地文件、数据库和私有笔记</div>
    </div>
  </div>

  <div class="p-4 border border-green-800/60 rounded-lg bg-green-800/20 backdrop-blur flex flex-col items-center">
      <div class="font-bold mb-2 text-2xl">连接外部服务</div>
    <div class="i-carbon:connect size-20 mb-4 text-green-500 flex-1"></div>
    <div class="text-center">
      <div class="text-sm">使 LLM 能够获取实时信息，如股价、天气预报和新闻</div>
    </div>
  </div>

  <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur flex flex-col items-center">
      <div class="font-bold mb-2 text-2xl">执行精确操作</div>
    <div class="i-carbon:function size-20 mb-4 text-purple-500 flex-1"></div>
    <div class="text-center">
      <div class="text-sm">允许 LLM调 用外部工具进行精确计算和执行具体任务</div>
    </div>
  </div>
</div>

<div v-click class="mt-4 px-4 py-3 bg-gradient-to-r from-blue-800/20 to-green-800/20 rounded-lg border border-blue-500/30 backdrop-blur text-sm">
  虽然Function Calling也能实现部分功能（如查询天气），但 MCP 的开放标准、本地运行、隐私保护和生态互操作性带来了质的飞跃
</div>

<div v-click class="mt-6 text-center text-lg">
  MCP提供了一个标准框架，使 LLM 能够<span class="font-bold text-blue-400">超越自身固有局限</span>
</div>

<!--
MCP主要解决了三大问题：首先，它让LLM可以安全访问私有数据，如本地文件和数据库；其次，它能连接外部服务，获取实时信息；最后，它允许LLM调用外部工具进行精确操作。简而言之，MCP提供了一个标准框架，让LLM能够突破自身的固有局限。

虽然Function Calling也能实现部分功能（如查询天气），但MCP的开放标准、本地运行、隐私保护和生态互操作性带来了质的飞跃。这就像是从闭源的专有软件转向了开放的Web标准——影响深远而广泛。

真正的创新不仅在于功能，更在于架构和生态系统的设计理念。
-->

---
class: py-10
---

# MCP实现方式

<div class="grid grid-cols-2 gap-8">
  <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
    <h3 class="font-bold text-lg mb-4 pb-2 border-b border-gray-600">Server 实现</h3>
    <div class="pl-4 space-y-2 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>通常是一段运行在<span class="text-green-500 font-mono">本地</span>的 Python 或 JavaScript 代码</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>可执行本地操作（如浏览文件系统）</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>可通过网络访问 API（包括第三方 API 或远程数据库）</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>可提供预定义的功能工具集</div>
      </div>
      <div class="pt-2">当前主要支持语言：</div>
      <div class="flex gap-2 pt-1">
        <div class="i-logos:python text-2xl"></div>
        <div class="i-logos:javascript text-2xl"></div>
        <div class="i-logos:typescript-icon text-2xl"></div>
        <div class="i-logos:go text-2xl"></div>
      </div>
    </div>
  </div>

  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
    <h3 class="font-bold text-lg mb-4 pb-2 border-b border-gray-600">Client 实现</h3>
    <div class="pl-4 space-y-2 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>已实现 MCP 的应用：</div>
      </div>
      <div class="space-y-1 pl-8">
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>Claude 桌面应用（最初支持）</div>
        </div>
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>Cursor（AI 编辑器）</div>
        </div>
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>Windsurf（AI 编辑器）</div>
        </div>
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>Cline（Claude 插件）</div>
        </div>
      </div>
      <div class="pt-2 flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>客户端负责：</div>
      </div>
      <div class="space-y-1 pl-8">
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>连接MCP服务器</div>
        </div>
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>在用户和 LLM 之间中转信息</div>
        </div>
        <div class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>按 LLM 指示调用工具</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click class="mt-6 text-center text-sm">
  <a href="https://modelcontextprotocol.io/" class="text-blue-500 hover:underline flex items-center justify-center">
    <div class="i-carbon:link mr-1"></div>官方文档: https://modelcontextprotocol.io/
  </a>
</div>

<!--
MCP的实现分为服务端和客户端两部分。服务端通常是运行在本地的Python或JavaScript代码，可以执行本地操作或网络访问，提供预定义的功能工具集。客户端包括Claude桌面应用、Cursor和Windsurf等已实现MCP的应用，负责连接服务器、在用户和LLM之间中转信息，并按LLM指示调用工具。

关键是，服务器在本地运行，这与Function Calling通常在云端执行不同。这种设计既保护了隐私，又提高了性能。同时，由于开放标准，任何人都可以编写自己的MCP服务器，并且可以被任何支持MCP的客户端使用。

这种设计使MCP具有USB接口般的普适性——插上就能用，不需要复杂的配置或集成过程。如果你想深入了解，官方文档提供了详细的指南和示例。
-->

---
class: py-10
---

# MCP 基本工作流程

<div flex="row ~" w-full justify-between>
  <div class="pb-4" w-90>
    <img src="/mcp-flow-dark.svg" />
  </div>
  <div>
  <div text-right w-full h-full flex="~ col justify-center">
    <div class="font-bold text-3xl mb-8">基本流程</div>
      <div class="space-y-2 list-decimal pl-4">
        <div v-click>客户端启动，读取 MCP 配置</div>
        <div v-click>连接 MCP Server</div>
        <div v-click>获取工具列表</div>
        <div v-click>发送用户问题时，同时提供可用工具列表</div>
        <div v-click>LLM 判断是否需要调用工具</div>
        <div v-click>客户端按照 LLM 指示调用 Server 上的工具</div>
        <div v-click>将调用结果返回给 LLM，组织最终答案</div>
      </div>
    </div>
  </div>
</div>

<!--
MCP的工作流程涉及四个主要组件：用户、MCP客户端、MCP服务器和支持MCP的LLM。

工作流程是：
1. 客户端启动后连接服务器获取工具列表
2. 用户提问时，客户端将问题和工具列表发送给LLM
3. LLM自主判断是否需要调用工具
4. 如需调用，客户端按指示联系服务器执行工具操作
5. 结果返回给LLM，生成最终答案

这里有个重要的设计理念：LLM自己决定何时调用工具，而不是由开发者硬编码规则。这为AI提供了极大的灵活性，使其能够根据上下文和任务需求动态选择合适的工具。

这种"USB接口"设计使工具集能够无缝扩展，新工具可以随时"插入"系统，而无需修改核心逻辑。
-->

---
class: py-10
---

# MCP 生态现状

<div class="grid grid-cols-3 gap-4">
  <div class="p-4 border border-violet-800/60 rounded-lg bg-violet-800/20 backdrop-blur">
    <div class="font-bold mb-2 pb-1 border-b border-violet-500/30">社区资源</div>
    <ul class="text-sm space-y-2 mt-3">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <a href="https://github.com/punkpeye/awesome-mcp-servers" class="text-blue-500 hover:underline">awesome-mcp-servers</a>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <a href="https://mcp.so/" class="text-blue-500 hover:underline">MCP Directory</a>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-violet-400 mt-1 flex-shrink-0"></div>
        <a href="https://github.com/cline/mcp-marketplace" class="text-blue-500 hover:underline">Cline - MCP Marketplace</a>
      </li>
    </ul>
  </div>

  <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
    <div class="font-bold mb-2 pb-1 border-b border-purple-500/30">流行应用场景</div>
    <ul class="text-sm space-y-2 mt-3">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>文件系统访问</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>代码分析与生成</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>知识库检索</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>API调用与数据可视化</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-purple-400 mt-1 flex-shrink-0"></div>
        <div>本地数据库查询</div>
      </li>
    </ul>
  </div>

  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
    <div class="font-bold mb-2 pb-1 border-b border-blue-500/30">最新进展</div>
    <ul class="text-sm space-y-2 mt-3">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>Cloudflare 提供<a href="https://developers.cloudflare.com/agents/capabilities/mcp-server/" class="text-blue-500 hover:underline">远程部署 MCP</a></div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>多种语言 SDK 支持</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>Cline 提供一键部署"应用商店"</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div>开发者社区迅速扩大</div>
      </li>
    </ul>
  </div>
</div>

<!--
MCP生态系统正在快速发展。社区已建立多个资源，如awesome-mcp-servers、MCP Directory和Cline的MCP Marketplace，方便开发者查找和使用MCP服务器。

流行应用场景包括文件系统访问、代码分析、知识库检索等。这些应用场景解决了实际工作中的痛点，特别是处理本地或私有数据的场景。

最新进展包括Cloudflare提供远程部署MCP的能力，以及多种语言SDK的支持。Cline还提供了类似应用商店的一键部署体验，大大降低了使用门槛。

目前主要支持Claude系列模型，但未来有望扩展到更多模型。生态系统的扩展速度表明，MCP正在成为连接AI与外部世界的关键桥梁。
-->

---
class: py-10
---

# MCP 生态：从工具到智能网络

<span>USB接口还是智能生态系统？</span>

<div mt-4 />

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-10 flex items-center justify-center>
      <div i-carbon:enterprise text-8xl />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="3rem" flex items-center justify-center text-center>
      <span>70+ 企业加入</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-10 flex items-center justify-center>
      <div i-carbon:group text-8xl />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="3rem" flex items-center justify-center text-center>
      <span>150+ 社区项目</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid emerald-800" bg="emerald-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-10 flex items-center justify-center>
      <div i-carbon:application-mobile text-8xl />
    </div>
    <div bg="emerald-800/30" w-full px-4 py-2 h="3rem" flex items-center justify-center text-center>
      <span>跨越设备边界</span>
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
    <div px-5 py-10 flex items-center justify-center>
      <div i-carbon:asset text-8xl />
    </div>
    <div bg="teal-800/30" w-full px-4 py-2 h="3rem" flex items-center justify-center text-center>
      <span>A2A潜在融合</span>
    </div>
  </div>
</v-clicks>

</div>

<div v-click mt-4>
  <div border="2 solid cyan-600/50" rounded-lg>
    <div flex items-center bg="cyan-600/30" px-3 py-2 text-cyan-300>
      <div i-carbon:idea text-sm mr-1 />
      <div text-xs>
        <em>从"扳手"到"工程师团队"</em>
      </div>
    </div>
    <div bg="cyan-600/10" px-4 py-3 grid grid-cols-3 gap-4>
      <div>
        <span class="font-bold">新玩家入场</span>
        <div text-xs flex flex-col gap-1 mt-1 text-zinc-400>
          <div>本地/开源模型支持</div>
          <div>互联网巨头加入</div>
        </div>
      </div>
      <div>
        <span class="font-bold">使用门槛消失</span>
        <div text-xs flex flex-col gap-1 mt-1 text-zinc-400>
          <div>傻瓜式一键安装</div>
          <div>可视化界面管理</div>
        </div>
      </div>
      <div>
        <span class="font-bold">协作智能涌现</span>
        <div text-xs flex flex-col gap-1 mt-1 text-zinc-400>
          <div>工具→代理→网络</div>
          <div>专业垂直生态</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
让我们看看MCP生态现状和未来趋势。MCP最初只是AI的"USB接口"，但它正在迅速发展成为一个智能生态系统。

[点击] 首先，70多家企业已加入生态，从最初的几家到现在包括Stripe、GitHub、Cloudflare等巨头都推出了官方MCP服务器。这种增长速度远超预期！

[点击] 社区贡献更加惊人——150多个开源项目覆盖从区块链到3D设计的各种领域。有趣的是，这些项目大多是个人开发者出于兴趣创建的，甚至有人因此获得了工作机会。

[点击] MCP正在跨越设备边界——从桌面应用扩展到移动设备、网页应用，甚至有人尝试将其集成到智能家居设备中。想象一下，你家的智能音箱能调用本地文件系统，这将是怎样的体验？

[点击] 也许最令人兴奋的是与Google A2A的潜在融合。如果MCP处理工具调用，而A2A处理代理协作，两者结合将创造一个前所未有的AI能力网络。

[点击] 这一切意味着MCP正在从简单的"工具"转变为"智能团队"。我们将看到更多新玩家入场，使用门槛几乎消失，最终形成真正的协作智能网络。就像早期互联网从简单的文档共享发展成今天的全球生态系统一样，MCP可能正经历类似的演变。
-->

---
class: py-10
---

# 安全性与易用性

<div class="grid grid-cols-2 gap-6">
  <div class="space-y-4 pr-4">
    <div class="p-3 bg-red-900/30 rounded-lg border border-red-500/30 backdrop-blur">
      <div class="font-bold">设计初衷：本地运行保障安全</div>
      <div class="text-sm mt-1">避免将敏感信息直接发送给LLM</div>
    </div>
    <div class="p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/30 backdrop-blur">
      <div class="font-bold">现实挑战：权限范围广泛</div>
      <div class="text-sm mt-1">非沙盒化访问文件系统可能成为安全隐患</div>
    </div>
    <div class="p-3 bg-orange-900/30 rounded-lg border border-orange-500/30 backdrop-blur">
      <div class="font-bold">用户认知障碍</div>
      <div class="text-sm mt-1">普通用户难以判断MCP服务器的安全性</div>
    </div>
  </div>
  <div class="space-y-4 pl-4">
    <div class="p-3 bg-green-900/30 rounded-lg border border-green-500/30 backdrop-blur">
      <div class="font-bold">当前标准：手动部署</div>
      <div class="text-sm mt-1">克隆仓库、安装依赖、手动运行代码</div>
    </div>
    <div class="p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 backdrop-blur">
      <div class="font-bold">新兴方案：一键部署</div>
      <div class="text-sm mt-1">Cline的MCP Market提供"应用商店"式体验</div>
    </div>
    <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 backdrop-blur">
      <div class="font-bold">双刃剑效应</div>
      <div class="text-sm mt-1">便利性提高的同时，安全风险可能增加</div>
    </div>
  </div>
</div>
<div class="mt-4 text-center p-2 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30 backdrop-blur">
  <div class="text-sm">如何在安全与易用间取得平衡？</div>
</div>

<!--
MCP面临的首要挑战是安全性与易用性的平衡。

在安全性方面，MCP的设计初衷是通过本地运行来保障安全，避免将敏感信息直接发送给LLM。但现实挑战是服务器权限范围广泛，非沙盒化访问可能成为安全隐患，而普通用户难以判断服务器的安全性。

在易用性方面，当前标准要求手动部署，需要克隆仓库、安装依赖等技术操作。新兴的一键部署方案如Cline的MCP Market提供了更便捷的体验，但这种便利性提高的同时，也可能增加安全风险。

这是个经典的双刃剑问题：太注重安全会影响采用率，太注重易用可能引入安全隐患。如何在两者间取得平衡，是MCP面临的重要挑战。

这个问题没有简单的答案，可能需要行业共同制定标准和最佳实践，类似于早期Web安全标准的演进过程。
-->

---
class: py-10
---

# 开放标准 vs AI 竞争

<div class="grid grid-cols-2 gap-10">
  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
    <div class="flex items-center gap-3 mb-4">
      <div class="i-carbon:collaborate text-3xl text-blue-500"></div>
      <div class="font-bold">理想：统一标准</div>
    </div>
    <div class="space-y-2 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
        <div>所有LLM共享同一套工具生态</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
        <div>开发者一次开发，随处使用</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
        <div>用户无需学习多套系统</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
        <div>行业创新集中，避免重复建设</div>
      </div>
    </div>
    <div class="mt-4 text-sm text-blue-500 italic text-center p-2 bg-blue-800/10 rounded-lg">
      "开放标准为所有人创造价值"
    </div>
  </div>

  <div class="p-4 border border-yellow-800/60 rounded-lg bg-yellow-800/20 backdrop-blur">
    <div class="flex items-center gap-3 mb-4">
      <div class="i-carbon:warning-alt text-3xl text-yellow-500"></div>
      <div class="font-bold">现实：战略竞争</div>
    </div>
    <div class="space-y-2 text-sm">
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div>Anthropic作为MCP定义者也是模型厂商</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div>其他厂商倾向于推广自己的解决方案</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div>商业利益促使生态壁垒形成</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div>Anthropic CEO的<a href="https://darioamodei.com/on-deepseek-and-export-controls" class="text-blue-500 hover:underline">政治立场</a>引发担忧</div>
      </div>
    </div>
    <div class="mt-4 text-sm text-yellow-500 italic text-center p-2 bg-yellow-800/10 rounded-lg">
      "封闭生态系统可能更有利可图"
    </div>
  </div>
</div>

<div class="mt-6 text-center p-2 bg-gradient-to-r from-blue-900/20 to-yellow-900/20 rounded-lg border border-blue-500/30 backdrop-blur">
  <div class="text-sm">开放标准能否在商业竞争中生存？谁将成为真正的赢家？</div>
</div>

<!--
在开放标准与AI竞争的维度上，MCP也面临挑战。

理想情况是建立统一标准，让所有LLM共享同一套工具生态，开发者一次开发随处使用，用户无需学习多套系统，行业创新集中而非重复建设。这就像Web标准让所有浏览器都能访问同一网站一样。

但现实是，Anthropic作为MCP定义者也是模型厂商，其他厂商如OpenAI、Google倾向于推广自己的解决方案，商业利益促使生态壁垒形成。此外，Anthropic CEO的某些政治立场也引发了一些担忧。

这与早期互联网浏览器大战有相似之处——各家公司都想通过专有技术获取竞争优势。问题是：开放标准能否在激烈的商业竞争中生存？谁将成为真正的赢家？

历史表明，长期来看开放标准通常会胜出，但过程可能曲折。这也是为什么社区参与和多方支持对MCP的发展至关重要。
-->

---
class: py-10
---

# MCP 当前局限性

<div class="flex flex-col gap-2">
  <div v-click class="p-4 border-l-4 border-purple-500 bg-purple-900/20 rounded-r-lg backdrop-blur mb-3 transform transition-all duration-300">
    <div class="font-bold text-white">客户端生态不足</div>
    <div class="text-sm mt-1 text-white/80">支持MCP的应用数量有限，主流Chat应用和Web应用尚未大规模集成</div>
  </div>

  <div v-click class="p-4 border-l-4 border-green-500 bg-green-900/20 rounded-r-lg backdrop-blur mb-3 transform transition-all duration-300">
    <div class="font-bold text-white">部署与管理复杂</div>
    <div class="text-sm mt-1 text-white/80">普通用户需要一定技术知识才能使用，部署和维护门槛较高</div>
  </div>

  <div v-click class="p-4 border-l-4 border-orange-500 bg-orange-900/20 rounded-r-lg backdrop-blur mb-3 transform transition-all duration-300">
    <div class="font-bold text-white">安全审核机制不完善</div>
    <div class="text-sm mt-1 text-white/80">缺乏标准化的安全审核流程，用户难以判断工具安全性</div>
  </div>

  <div v-click class="p-4 border-l-4 border-red-500 bg-red-900/20 rounded-r-lg backdrop-blur transform transition-all duration-300">
    <div class="font-bold text-white">产品化程度不高</div>
    <div class="text-sm mt-1 text-white/80">当前更偏向开发者工具，对终端用户的产品体验有待提升</div>
  </div>
</div>

<!--
MCP目前仍存在多方面局限：客户端生态不足，支持的应用数量有限；部署与管理复杂，普通用户需要一定技术知识；安全审核机制不完善，缺乏标准化流程；产品化程度不高，更偏向开发者工具。

这些局限大多是MCP作为新兴技术的成长痛，而非根本缺陷。我们可以看到社区和企业正在积极解决这些问题：模型支持在扩展，客户端生态在丰富，一键部署工具在简化使用流程，安全审核机制在建立，产品体验在优化。

从技术发展规律看，这些问题都会随着时间逐步解决。关键是MCP的核心价值主张——开放标准、本地运行、隐私保护——依然强大且独特，这为它克服当前局限提供了强大动力。
-->

---
class: py-10
glowSeed: 100
---

# 对普通用户的意义

<span>MCP为普通用户带来的价值与体验</span>

<div mt-6 />

<div flex flex-col gap-4>

<v-clicks>

<div border="2 solid blue-800/50" rounded-lg>
  <div flex items-center bg="blue-800/30" px-3 py-2 text-blue-300>
    <div i-carbon:person text-sm mr-1 />
    <div text-xs>
      <em>私人 AI 助手</em>
    </div>
  </div>
  <div bg="blue-800/10" px-4 py-3>
    <div>
      <span>
        让 AI 能够访问和处理个人数据，真正成为个性化助手，同时保持数据隐私
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>个性化体验</div>
      <div>数据隐私保护</div>
      <div>本地处理</div>
    </div>
  </div>
</div>

<div border="2 solid teal-800/50" rounded-lg>
  <div flex items-center bg="teal-800/30" px-3 py-2 text-teal-300>
    <div i-carbon:document text-sm mr-1 />
    <div text-xs>
      <em>本地文档智能</em>
    </div>
  </div>
  <div bg="teal-800/10" px-4 py-3>
    <div>
      <span>
        AI 可以直接访问和理解本地文档，不需要上传到云端，保持数据控制权
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>无需上传</div>
      <div>保持控制权</div>
      <div>快速处理</div>
    </div>
  </div>
</div>

<div border="2 solid cyan-800/50" rounded-lg>
  <div flex items-center bg="cyan-800/30" px-3 py-2 text-cyan-300>
    <div i-carbon:application-web text-sm mr-1 />
    <div text-xs>
      <em>实时网络能力</em>
    </div>
  </div>
  <div bg="cyan-800/10" px-4 py-3>
    <div>
      <span>
        让 AI 能够获取最新信息，例如实时新闻、股市数据或天气预报
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>实时信息</div>
      <div>最新数据</div>
      <div>更精准回答</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

<!--
对普通用户而言，MCP带来了四个关键价值：

首先，它使AI成为真正的私人助手，能访问和处理个人数据同时保持隐私。想象一下，AI可以帮你分析个人财务数据，但这些数据从不离开你的设备。

其次，它实现了本地文档智能，AI可以直接访问和理解本地文档，无需上传云端。这对处理敏感文档的用户尤为重要。

第三，它赋予AI实时网络能力，能获取最新信息。虽然Function Calling也能实现这点，但MCP的开放性意味着任何人都可以为AI添加新的信息源。

最后，它有望实现应用整合，让AI直接操作本地和网络应用。这开启了全新的自动化可能性，从简单的任务到复杂的工作流程。

总的来说，MCP为普通用户提供了更私密、更强大、更个性化的AI体验，让AI从信息提供者转变为真正的个人助手。
-->

---
class: py-10
---

# 对AI重度用户的意义

<div mt-10 />

<div class="grid grid-cols-3 gap-4">
  <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur flex flex-col">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:code text-3xl text-blue-500"></div>
      <div class="font-bold">开发者</div>
    </div>
    <div class="text-sm flex-1">
      <ul class="space-y-1 pl-4">
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>代码库智能分析</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>集成开发环境增强</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>本地代码搜索和理解</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-blue-400 mt-1 flex-shrink-0"></div>
          <div>自动化测试生成</div>
        </li>
      </ul>
    </div>
    <div class="text-xs text-gray-500 mt-3 text-center p-1 bg-blue-900/20 rounded-lg">
      "让 AI 真正理解我的代码库"
    </div>
  </div>

  <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur flex flex-col">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:pen text-3xl text-purple-500"></div>
      <div class="font-bold">创作者</div>
    </div>
    <div class="text-sm flex-1">
      <ul class="space-y-1 pl-4">
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-purple-400 mt-1 flex-shrink-0"></div>
          <div>本地素材智能处理</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-purple-400 mt-1 flex-shrink-0"></div>
          <div>参考资料实时获取</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-purple-400 mt-1 flex-shrink-0"></div>
          <div>多媒体内容生成</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-purple-400 mt-1 flex-shrink-0"></div>
          <div>个人知识库深度访问</div>
        </li>
      </ul>
    </div>
    <div class="text-xs text-gray-500 mt-3 text-center p-1 bg-purple-900/20 rounded-lg">
      "AI能理解我的所有创作素材"
    </div>
  </div>

  <div class="p-4 border border-green-800/60 rounded-lg bg-green-800/20 backdrop-blur flex flex-col">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:research text-3xl text-green-500"></div>
      <div class="font-bold">研究人员</div>
    </div>
    <div class="text-sm flex-1">
      <ul class="space-y-1 pl-4">
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
          <div>专业数据集分析</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
          <div>科研文献深度理解</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
          <div>实验数据可视化</div>
        </li>
        <li class="flex items-start gap-2">
          <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
          <div>研究结果验证与推断</div>
        </li>
      </ul>
    </div>
    <div class="text-xs text-gray-500 mt-3 text-center p-1 bg-green-900/20 rounded-lg">
      "AI能直接处理我的研究数据"
    </div>
  </div>
</div>

<div class="mt-6 p-4 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur">
  <div class="font-bold mb-2">工作流程革命</div>
  <div class="text-sm">
    MCP 允许 AI 重度用户构建定制化工作流，将 AI 无缝集成到专业工具链中，无需在多个系统间切换或重复操作。AI 不再是独立的对话框，而是融入到专业工作环境的智能助手。
  </div>
</div>

<!--
对AI重度用户，如开发者、创作者和研究人员，MCP带来了更专业化的价值。

开发者可以获得代码库智能分析和IDE增强，让AI真正理解他们的代码库。与传统代码辅助不同，MCP允许AI访问整个代码库，理解项目结构和依赖关系。

创作者能够实现本地素材智能处理和多媒体内容生成。比如，AI可以直接分析你电脑中的设计素材、参考图片或历史作品，提供更精准的创意建议。

研究人员则能进行专业数据集分析和科研文献深度理解。想象AI能直接处理研究数据、生成可视化，并将结果与最新文献关联。

更重要的是，MCP带来了工作流程的革命，让AI重度用户能构建定制化工作流，将AI无缝集成到专业工具链中。AI不再是独立的对话框，而是融入到专业工作环境中的智能助手。

这种深度集成将显著提高专业工作效率，让AI成为真正的"思维伙伴"而非简单的工具。
-->

---
class: py-10
---

# 对基础设施开发者的意义

<div class="grid grid-cols-12 gap-4">
  <!-- 左侧：新机遇 -->
  <div class="col-span-6">
    <div class="font-bold text-lg mb-3 text-white/80 pb-1 border-b border-blue-500/30">新机遇</div>
    <div v-click class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30 backdrop-blur mb-3 transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:cloud-service-management text-xl text-blue-400"></div>
        工具生态建设
      </div>
      <div class="text-sm mt-1 text-white/80">开发标准化 MCP 服务器，连接 Kubernetes、监控系统、日志分析等基础设施</div>
    </div>
    <div v-click class="p-3 bg-green-900/20 rounded-lg border border-green-500/30 backdrop-blur mb-3 transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:model-alt text-xl text-green-400"></div>
        领域特化集成
      </div>
      <div class="text-sm mt-1 text-white/80">为特定领域（如云原生、容器编排、微服务治理）开发专业 MCP 工具集</div>
    </div>
    <div v-click class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30 backdrop-blur transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:ai-status text-xl text-purple-400"></div>
        AI 辅助运维
      </div>
      <div class="text-sm mt-1 text-white/80">构建基于 MCP 的智能运维系统，实现自动化故障诊断和修复</div>
    </div>
  </div>
  <!-- 右侧：实践案例 -->
  <div class="col-span-6">
    <div class="font-bold text-lg mb-3 text-white/80 pb-1 border-b border-indigo-500/30">实践案例</div>
    <div v-click class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur mb-3 transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:kubernetes text-xl text-indigo-400"></div>
        Kubernetes 控制器分析
      </div>
      <div class="text-sm mt-1 text-white/80">MCP 允许 LLM 理解集群状态，分析控制器行为，提供优化建议</div>
    </div>
    <div v-click class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur mb-3 transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:chart-line-data text-xl text-indigo-400"></div>
        日志/指标智能分析
      </div>
      <div class="text-sm mt-1 text-white/80">连接监控和日志系统，实时分析系统异常，预测潜在问题</div>
    </div>
    <div v-click class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur transform transition-all duration-500">
      <div class="font-bold text-white flex items-center gap-2">
        <div class="i-carbon:network-4 text-xl text-indigo-400"></div>
        服务网格配置优化
      </div>
      <div class="text-sm mt-1 text-white/80">基于实际流量和性能数据，自动推荐服务网格配置优化方案</div>
    </div>
  </div>
</div>

<!--
对基础设施开发者而言，MCP创造了新的机遇：

工具生态建设方面，可以开发标准化MCP服务器，连接Kubernetes、监控系统等基础设施。这让AI能够"看懂"复杂的基础设施状态，提供更智能的管理和决策支持。

领域特化集成方面，可以为云原生、容器编排等领域开发专业工具集。云原生环境的复杂性和动态性使其成为AI辅助的理想场景。

AI辅助运维方面，可以构建基于MCP的智能运维系统，实现自动化故障诊断和修复。这不仅提高效率，还能减少人为错误。

实践案例包括Kubernetes控制器分析、日志/指标智能分析和服务网格配置优化等。这些应用展示了MCP如何将AI的理解能力与基础设施管理的专业需求结合。

从战略角度看，基础设施开发者不仅是MCP的使用者，更可以成为生态建设者。通过构建专业化工具链，提升AI在基础设施管理中的应用深度，为用户创造差异化价值。这是一个将专业领域知识转化为AI能力的关键机会。
-->

---
class: py-10
---

# Google 的 A2A 协议概览

A2A (Agent2Agent): Google 提出的开放协议，使不同 AI 代理能够互相通信协作

<div class="grid grid-cols-2 gap-8">
  <div v-click class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur transform transition-all duration-500">
    <div class="font-bold pb-2 mb-2 border-b border-blue-500/30 text-white">
      <div class="flex items-center gap-2">
        <div class="i-carbon:idea text-xl text-blue-400"></div>
        A2A 核心理念
      </div>
    </div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">代理发现：通过 Agent Cards 发现能力</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">任务生命周期：标准化任务状态管理</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-blue-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">内容交换：文本、文件、结构化数据</div>
      </li>
    </ul>
  </div>

  <div v-click class="p-4 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur transform transition-all duration-500">
    <div class="font-bold pb-2 mb-2 border-b border-indigo-500/30 text-white">
      <div class="flex items-center gap-2">
        <div class="i-carbon:code text-xl text-indigo-400"></div>
        A2A技术实现
      </div>
    </div>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">基于JSON-RPC 2.0，通过HTTP(S)通信</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">支持标准请求/响应和服务器发送事件(SSE)</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:arrow-right text-indigo-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/80">基于角色的消息结构（用户/代理）</div>
      </li>
    </ul>
  </div>
</div>

<div v-click class="mt-6 p-4 rounded-lg bg-gray-800/30 backdrop-blur transform transition-all duration-700">
  <div class="font-bold mb-3 text-white flex items-center gap-2">
    <div class="i-carbon:compare text-xl text-blue-400"></div>
    A2A 与 MCP 对比的核心区别
  </div>
  <div class="grid grid-cols-2 gap-4 text-sm">
    <div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
      <div class="font-bold text-blue-400 mb-1">A2A专注于</div>
      <div class="text-white/80">Agent 间协作与通信，创建任务委派网络</div>
    </div>
    <div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
      <div class="font-bold text-green-400 mb-1">MCP专注于</div>
      <div class="text-white/80">Tool 集成与环境访问，扩展单一模型能力</div>
    </div>
  </div>
</div>

<!--
Google最近提出的A2A（Agent2Agent）协议是一个值得关注的发展。A2A是一个开放协议，使不同AI代理能够互相通信协作。

A2A的核心理念包括代理发现、任务生命周期管理、内容交换、实时更新和企业就绪特性。它已经与LangGraph、CrewAI等框架集成，展示了广泛的应用潜力。

技术实现上，A2A基于JSON-RPC 2.0，通过HTTP(S)通信，支持标准请求/响应和服务器发送事件。它定义了完整的任务状态流程和基于角色的消息结构。

与MCP相比，A2A有三个核心区别：A2A专注于代理间协作，而MCP专注于工具集成；A2A设计用于跨服务器通信，MCP主要用于本地环境；A2A侧重任务委派与协调，MCP侧重能力扩展。

这些区别反映了两种协议的不同设计理念和目标应用场景。有趣的是，它们在很多方面是互补的，而非竞争关系。
-->

---
class: py-10
---

# 直接能力对比

MCP 和 Function Calling 的异同

<div class="grid grid-cols-2 gap-6">
  <div class="space-y-4 pr-4">
    <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:tools text-3xl text-purple-500"></div>
        <div class="font-bold">功能扩展</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        赋予LLM新的能力，通过工具和资源访问扩展模型功能
      </div>
    </div>
    <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:laptop text-3xl text-purple-500"></div>
        <div class="font-bold">本地优先</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        设计用于在本地环境运行，保障数据安全和隐私
      </div>
    </div>
    <div class="p-4 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:user-profile text-3xl text-purple-500"></div>
        <div class="font-bold">单用户视角</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        侧重单个用户与增强LLM之间的交互
      </div>
    </div>
    <div class="p-3 mt-4 bg-purple-900/20 rounded-lg border border-purple-500/30 backdrop-blur text-sm">
      MCP像是给LLM装上了一套<span class="font-bold">工具箱</span>，扩展其能力范围
    </div>
  </div>

  <div class="space-y-4 pl-4">
    <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:collaborate text-3xl text-blue-500"></div>
        <div class="font-bold">代理协作</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        使不同的AI代理能够互相发现、通信和协作完成任务
      </div>
    </div>
    <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:network-4 text-3xl text-blue-500"></div>
        <div class="font-bold">分布式设计</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        适用于跨网络、跨服务的代理协作场景
      </div>
    </div>
    <div class="p-4 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="i-carbon:group text-3xl text-blue-500"></div>
        <div class="font-bold">多代理生态</div>
      </div>
      <div class="text-sm mt-2 pl-9">
        构建能力各异的代理网络，形成协作生态系统
      </div>
    </div>
    <div class="p-3 mt-4 bg-blue-900/20 rounded-lg border border-blue-500/30 backdrop-blur text-sm">
      A2A像是搭建了一个AI代理<span class="font-bold">协作网络</span>，让专业代理相互配合
    </div>
  </div>
</div>

<!--
深入比较MCP和A2A的设计理念：

MCP专注于工具与环境，侧重功能扩展、本地优先和单用户视角。它像是给LLM装上了一套工具箱，扩展其能力范围。MCP的价值在于将LLM从信息孤岛转变为能与现实世界交互的系统。

A2A则聚焦于合作与分布式，侧重代理协作、分布式设计和多代理生态。它像是搭建了一个AI代理协作网络，让专业代理相互配合。A2A的价值在于创建能自主协作的代理生态系统，分工合作解决复杂问题。

这种设计理念的差异反映了两种协议的不同切入点：MCP从单体模型能力扩展出发，A2A从多代理协作网络出发。有趣的是，这两种方式并不冲突，而是从不同维度解决AI能力扩展的问题。

可以说，MCP让单个AI更强大，而A2A则让多个AI协同工作。未来的AI系统很可能同时采用这两种协议，共同构建更强大的AI生态系统。
-->

---
class: py-10
---

# MCP与A2A的互补性

<div mt-5 />

<div class="grid grid-cols-3 gap-4 text-sm" h="80">
  <div class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur">
    <div class="font-bold text-center pb-2 mb-2 border-b border-indigo-500/30 flex flex-col items-center">
      <div i-carbon:road class="text-2xl text-indigo-400 mb-12 size-25 mt-20"></div>
      现在: 并行发展
    </div>
    <div>
      MCP和A2A目前处于并行发展阶段，各自解决不同问题域，积累各自的生态系统
    </div>
  </div>

  <div class="p-3 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
    <div class="font-bold text-center pb-2 mb-2 border-b border-blue-500/30 flex flex-col items-center">
      <div i-carbon:merge class="text-2xl text-blue-400 mb-12 size-25 mt-20"></div>
      未来: 潜在融合
    </div>
    <div>
      随着生态成熟，两种协议可能出现融合趋势，MCP工具可成为A2A代理的能力支撑
    </div>
  </div>

  <div class="p-3 border border-cyan-800/60 rounded-lg bg-cyan-800/20 backdrop-blur">
    <div class="font-bold text-center pb-2 mb-2 border-b border-cyan-500/30 flex flex-col items-center">
      <div i-carbon:network-4 class="text-2xl text-cyan-400 mb-12 size-25 mt-20"></div>
      远景: 协议统一
    </div>
    <div>
      长期来看，可能出现统一的AI交互协议，整合工具扩展与代理协作的优势
    </div>
  </div>
</div>

<div class="mt-6 text-center p-3 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-lg border border-blue-500/30 backdrop-blur">
  MCP与A2A不是竞争关系，而是<span class="font-bold text-blue-500">互补的生态组件</span>，共同构建更强大的AI基础设施
</div>

<!--
MCP与A2A实际上具有很强的互补性。从这张图可以看出，它们解决的是AI能力扩展的不同维度。

从时间线来看，目前它们处于并行发展阶段，各自解决不同问题域。MCP专注于单体模型能力扩展，A2A专注于多代理协作。两者都在积累自己的生态系统和最佳实践。

未来随着生态成熟，两种协议可能出现融合趋势。MCP工具可成为A2A代理的能力支撑，让每个专业代理都能通过MCP获得特定工具能力。这种组合将创造出既专业又灵活的AI系统。

长远来看，可能出现统一的AI交互协议，整合工具扩展与代理协作的优势。就像Web标准最终统一了不同浏览器的实现一样，AI交互协议也可能经历类似的演进和整合过程。

因此，MCP与A2A不是竞争关系，而是互补的生态组件，共同构建更强大的AI基础设施。了解并参与这两种协议的发展，对于想要在AI领域保持竞争力的组织和个人都至关重要。
-->

---
class: py-10
---

# API演进的历史视角

<div class="relative w-full h-[400px] mt-8">
  <!-- 中央时间轴 -->
  <div class="absolute top-[200px] left-0 w-full h-2 bg-gray-700"></div>

  <!-- 时间节点 -->
  <div v-click class="absolute top-[200px] left-[10%] transform -translate-y-1/2 transition-all duration-500">
    <div class="h-4 w-4 rounded-full bg-green-500"></div>
  </div>

  <div v-click class="absolute top-[200px] left-[40%] transform -translate-y-1/2 transition-all duration-500">
    <div class="h-4 w-4 rounded-full bg-indigo-500"></div>
  </div>

  <div v-click class="absolute top-[200px] left-[70%] transform -translate-y-1/2 transition-all duration-500">
    <div class="h-4 w-4 rounded-full bg-blue-500"></div>
  </div>

  <div v-click class="absolute top-[200px] left-[90%] transform -translate-y-1/2 transition-all duration-500">
    <div class="h-4 w-4 rounded-full bg-indigo-500"></div>
  </div>

  <!-- 卡片 - 上下交错排布 -->
  <div v-click class="absolute top-[40px] left-[10%] transform -translate-x-1/2 w-56 p-3 border border-green-800/60 rounded-lg bg-green-800/20 backdrop-blur transition-all duration-700">
    <div class="font-bold text-white">传统API (1990s-2010s)</div>
    <div class="text-sm mt-1 text-white/80">
      - 严格的结构化接口<br>
      - 固定参数和返回值<br>
      - 人工设计和维护<br>
      - SOAP, REST, GraphQL
    </div>
  </div>

  <div v-click class="absolute top-[230px] left-[42%] transform -translate-x-1/2 w-56 p-3 border border-teal-800/60 rounded-lg bg-teal-800/20 backdrop-blur transition-all duration-700">
    <div class="font-bold text-white">Function Calling (2022+)</div>
    <div class="text-sm mt-1 text-white/80">
      - API调用的AI友好层<br>
      - 自然语言→结构化调用<br>
      - 降低API使用复杂度<br>
      - OpenAI, Claude等实现
    </div>
  </div>

  <div v-click class="absolute top-[40px] left-[70%] transform -translate-x-1/2 w-56 p-3 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur transition-all duration-700">
    <div class="font-bold text-white">MCP/A2A (2024+)</div>
    <div class="text-sm mt-1 text-white/80">
      - 标准化AI交互协议<br>
      - 规范化工具/代理生态<br>
      - 解耦模型与能力扩展<br>
      - 促进生态多样性
    </div>
  </div>

  <div v-click class="absolute top-[230px] left-[90%] transform -translate-x-1/2 w-56 p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur transition-all duration-700">
    <div class="font-bold text-white">AI原生API (未来)</div>
    <div class="text-sm mt-1 text-white/80">
      - 模型间直接交互<br>
      - 自主协商数据交换<br>
      - 动态服务链组合<br>
      - API设计的范式转换
    </div>
  </div>
</div>

<!--
从历史视角看，API设计一直在演进：

传统API（1990s-2010s）是严格结构化的接口，固定参数和返回值，完全由人工设计和维护。SOAP、REST、GraphQL都属于这个阶段。接口的设计和使用都需要专业开发者参与。

Function Calling（2022+）增加了API调用的AI友好层，实现了从自然语言到结构化调用的转换，大大降低了API使用的复杂度。OpenAI和Claude等都提供了这种能力。这是AI与API融合的第一步。

MCP/A2A（2024+）提供了标准化的AI交互协议，规范化工具/代理生态，实现了模型与能力扩展的解耦，促进了生态多样性。这一阶段的特点是开放性和互操作性。

未来的AI原生API可能实现模型间直接交互，自主协商数据交换，动态服务链组合，带来API设计的范式转换。这将是与人类设计的API完全不同的新范式。

我们正处于API演进的关键时刻，从人工定义向AI原生交互过渡。从每个阶段的特征可以看出，API设计正在变得越来越智能、越来越灵活，从"人为AI设计"转向"AI为AI设计"。
-->

---
class: py-10
---

# 未来的「AI Native API」

<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="font-bold text-lg mb-4 pb-1 border-b border-purple-500/30">从 MCP 到 AI 原生 API</div>
    <div class="space-y-3 text-sm">
      <div class="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30 backdrop-blur">
        <div class="font-bold">超越结构化调用</div>
        <div class="mt-1">模型间通过自然语言或直接 token 交换进行通信，无需严格结构定义</div>
      </div>
      <div class="p-3 bg-green-900/20 rounded-lg border border-green-500/30 backdrop-blur">
        <div class="font-bold">模型自组织能力</div>
        <div class="mt-1">各模型理解自身能力边界，自主选择合适模型协作完成任务</div>
      </div>
      <div class="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30 backdrop-blur">
        <div class="font-bold">去中介化交互</div>
        <div class="mt-1">无需人类定义 API 结构，模型间自主协商交互方式和数据格式</div>
      </div>
      <div class="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30 backdrop-blur">
        <div class="font-bold">分布式专家网络</div>
        <div class="mt-1">专精不同任务的多个模型构成协作网络，类似 MoE 但跨服务跨模型</div>
      </div>
    </div>
  </div>

  <div>
    <div class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur h-full flex flex-col">
      <div class="flex-grow mb-4 flex items-center justify-center">
        <div class="i-carbon:network-enterprise text-9xl text-indigo-400 opacity-60"></div>
      </div>
      <div>
        <div class="text-sm bg-gray-900/50 p-3 rounded-lg border border-gray-700">
          <div class="italic text-gray-300">
            "...我愿意把这种未来形态叫做「AI Native API」：各个模型理解自己擅长的能力范围，人类在使用模型时，呈现的形态同时接触分布式的多个模型，人类与一个通用模型对话，然后通用模型再选择具体的擅长该任务的'专用'模型直接进行对话或者Token交换。"
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
未来的"原生AI API"可能超越当前的MCP和A2A，实现更深层次的AI系统交互。

首先是超越结构化调用，模型间可以通过自然语言或直接token交换进行通信，无需严格的结构定义。这将大大简化模型间交互的复杂性。

其次是模型自组织能力，各模型理解自身能力边界，自主选择合适的其他模型协作完成任务。这就像人类专家知道何时该咨询其他领域的专家一样。

第三是去中介化交互，无需人类定义API结构，模型间能自主协商交互方式和数据格式。这将极大地减少人类在API设计和维护上的工作量。

最后是分布式专家网络，专精不同任务的多个模型构成协作网络，类似混合专家模型（MoE）但跨服务跨模型实现。这将创造出更加灵活、强大的AI系统。

正如王巍所展望的："我愿意把这种未来形态叫做'原生的AI API'：各个模型理解自己擅长的能力范围，人类与一个通用模型对话，然后通用模型再选择具体的擅长该任务的'专用'模型直接进行对话或者Token交换。"

MCP可能只是通往AI原生API的第一步，但这一步可能是最关键的一步，因为它开始建立起标准化的AI交互协议。
-->

---
class: py-10
---

# 采用 MCP 的价值评估

<div class="grid grid-cols-2 gap-6">
  <div class="space-y-4 pr-4">
    <div class="p-3 border-l-4 border-green-500 bg-green-900/20 rounded-r-lg backdrop-blur">
      <div class="font-bold">业务价值</div>
      <div class="text-sm mt-1">MCP 能为您的使用场景带来多大的实际增益？是否有更简单的替代方案？</div>
    </div>
    <div class="p-3 border-l-4 border-blue-500 bg-blue-900/20 rounded-r-lg backdrop-blur">
      <div class="font-bold">技术就绪度</div>
      <div class="text-sm mt-1">您的团队是否具备开发和维护 MCP 服务器的技术能力？是否有资源投入？</div>
    </div>
    <div class="p-3 border-l-4 border-purple-500 bg-purple-900/20 rounded-r-lg backdrop-blur">
      <div class="font-bold">集成成本</div>
      <div class="text-sm mt-1">将 MCP 集成到现有工作流需要多少时间和资源？投资回报比如何？</div>
    </div>
  </div>

  <div class="space-y-4 pl-4">
    <div class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur">
      <div class="font-bold">从小规模试点开始</div>
      <div class="text-sm mt-1">选择单一、高价值场景进行试点，积累经验后再扩展</div>
    </div>
    <div class="p-3 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur">
      <div class="font-bold">关注标准化与可移植性</div>
      <div class="text-sm mt-1">设计 MCP 服务器时考虑跨客户端兼容性，避免锁定单一生态</div>
    </div>
    <div class="p-3 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur">
      <div class="font-bold">安全优先原则</div>
      <div class="text-sm mt-1">谨慎评估 MCP 服务器的权限需求，采用最小权限原则</div>
    </div>
    <div class="p-3 border border-cyan-800/60 rounded-lg bg-cyan-800/20 backdrop-blur">
      <div class="font-bold">持续关注生态发展</div>
      <div class="text-sm mt-1">同时跟踪 MCP 和 A2A 的发展，及时调整策略适应变化</div>
    </div>
  </div>
</div>

<!--
在考虑采用MCP时，需要评估几个关键因素：

业务价值方面，要考虑MCP能为特定使用场景带来多大的实际增益，是否有更简单的替代方案。不是所有场景都需要MCP，有些简单需求可能用Function Calling就足够了。

技术就绪度方面，要评估团队是否具备开发和维护MCP服务器的技术能力，是否有足够的资源投入。MCP虽然设计简洁，但仍需一定的开发和维护工作。

集成成本方面，要计算将MCP集成到现有工作流需要的时间和资源，以及投资回报比。有些情况下，集成成本可能超过短期收益。

基于这些考量，有几点战略建议：从小规模试点开始，选择单一、高价值场景进行试验；关注标准化与可移植性，避免锁定单一生态；坚持安全优先原则，采用最小权限设计；持续关注生态发展，灵活调整策略。

这种渐进式的采用策略可以降低风险，最大化收益，同时为未来的发展保留灵活性。
-->

---
class: py-10
---

# MCP 适用场景判断

<div class="grid grid-cols-3 gap-4" h="80">
  <div v-click class="px-4 pt-12 pb-4 border border-green-800/60 rounded-lg bg-green-800/20 backdrop-blur flex flex-col items-center transform transition-all duration-500">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:checkmark-filled text-2xl text-green-500"></div>
      <div class="text-green-500 font-bold text-lg">高度适合</div>
    </div>
    <ul class="text-sm space-y-2 w-full">
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要访问本地文件/数据</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要保护数据隐私的敏感场景</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">开发者和专业 AI 使用场景</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要执行精确操作的场景</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-green-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">代码和文档相关工作流</div>
      </li>
    </ul>
  </div>

  <div v-click class="px-4 pt-12 pb-4 border border-yellow-800/60 rounded-lg bg-yellow-800/20 backdrop-blur flex flex-col items-center transform transition-all duration-500">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:warning text-2xl text-yellow-500"></div>
      <div class="text-yellow-500 font-bold text-lg">中等适合</div>
    </div>
    <ul class="text-sm space-y-2 w-full">
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要简单外部资源访问的聊天</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">轻量级创意协作</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要少量特定工具的垂直应用</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">教育和学习辅助工具</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-yellow-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">简单的信息汇总和分析</div>
      </li>
    </ul>
  </div>

  <div v-click class="px-4 pt-12 pb-4 border border-red-800/60 rounded-lg bg-red-800/20 backdrop-blur flex flex-col items-center transform transition-all duration-500">
    <div class="flex items-center gap-2 mb-3">
      <div class="i-carbon:close-filled text-2xl text-red-500"></div>
      <div class="text-red-500 font-bold text-lg">暂不适合</div>
    </div>
    <ul class="text-sm space-y-2 w-full">
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-red-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">纯对话式聊天体验</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-red-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">对安全性要求极高的场景</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-red-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要跨代理协作的复杂任务</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-red-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">面向非技术用户的消费级产品</div>
      </li>
      <li class="flex items-start gap-2">
        <div class="i-carbon:dot-mark text-red-400 mt-1 flex-shrink-0"></div>
        <div class="text-white/90">需要多种模型支持的应用</div>
      </li>
    </ul>
  </div>
</div>

<div v-click class="mt-6 text-center p-2 rounded-lg backdrop-blur transform transition-all duration-700">
  根据具体场景特点和需求权衡，选择合适的技术路径
</div>

<!--
MCP并非适用于所有场景，需要根据具体需求判断适用性：

高度适合的场景包括：需要访问本地文件/数据的AI应用，这是MCP的核心优势；需要保护数据隐私的敏感场景，比如处理财务或医疗数据；开发者和专业AI使用场景，如代码分析和生成；需要执行精确操作的场景，如复杂计算或数据处理；代码和文档相关工作流，这是当前MCP应用最成熟的领域。

中等适合的场景包括：需要简单外部资源访问的聊天，如查询天气或股价；轻量级创意协作，如辅助内容创作；需要少量特定工具的垂直应用；教育和学习辅助工具；简单的信息汇总和分析。这些场景虽然能从MCP获益，但收益可能不够显著。

暂不适合的场景包括：纯对话式聊天体验，这类场景可能不需要外部工具；对安全性要求极高的场景，当前MCP的安全机制可能不够完善；需要跨代理协作的复杂任务，这更适合A2A协议；面向非技术用户的消费级产品，由于部署复杂性；需要多种模型支持的应用，因为当前主要是Claude支持MCP。

根据具体场景特点和需求权衡，选择合适的技术路径，这才是明智的策略。技术选择应该服务于业务目标，而不是为了技术而技术。
-->

---
class: py-10
---

<div class="grid grid-cols-12 gap-6">
  <!-- 学习路径建议 -->
  <div class="col-span-7">
    <div class="font-bold text-lg mb-3 pb-1 border-b border-indigo-500/30 text-white/80">
      学习路径建议
    </div>
    <div class="space-y-4">
      <div v-click class="p-3 border border-blue-800/60 rounded-lg bg-blue-800/20 backdrop-blur transform transition-all duration-500">
        <div class="font-bold text-white flex items-center gap-2">
          <div class="i-carbon:user-avatar text-xl text-blue-400"></div>
          入门阶段
        </div>
        <ol class="text-sm mt-2 space-y-1 list-decimal pl-4 text-white/80">
          <li>阅读MCP官方文档概述</li>
          <li>尝试使用已有的MCP服务器</li>
          <li>配置Claude桌面应用或Cursor体验MCP</li>
        </ol>
      </div>
      <div v-click class="p-3 border border-purple-800/60 rounded-lg bg-purple-800/20 backdrop-blur transform transition-all duration-500">
        <div class="font-bold text-white flex items-center gap-2">
          <div class="i-carbon:code text-xl text-purple-400"></div>
          进阶开发
        </div>
        <ol class="text-sm mt-2 space-y-1 list-decimal pl-4 text-white/80">
          <li>按照快速入门指南开发简单MCP服务器</li>
          <li>学习MCP协议规范</li>
          <li>了解工具定义和资源调用机制</li>
        </ol>
      </div>
      <div v-click class="p-3 border border-indigo-800/60 rounded-lg bg-indigo-800/20 backdrop-blur transform transition-all duration-500">
        <div class="font-bold text-white flex items-center gap-2">
          <div class="i-carbon:chart-network text-xl text-indigo-400"></div>
          高级应用
        </div>
        <ol class="text-sm mt-2 space-y-1 list-decimal pl-4 text-white/80">
          <li>学习安全最佳实践</li>
          <li>开发特定领域的专业MCP工具</li>
          <li>探索与现有系统的深度集成</li>
        </ol>
      </div>
    </div>
  </div>
  <!-- 官方文档与资源 -->
  <div class="col-span-5">
    <div class="font-bold text-lg mb-3 pb-1 border-b border-blue-500/30 text-white/80">
      官方文档与资源
    </div>
    <ul class="space-y-2 text-sm">
      <li v-click class="transform transition-all duration-300">
        <a href="https://modelcontextprotocol.io/" class="text-blue-400 hover:underline flex items-center">
          <div class="i-carbon:link text-lg mr-1"></div> MCP官方网站
        </a>
      </li>
      <li v-click class="transform transition-all duration-300">
        <a href="https://modelcontextprotocol.io/quickstart/server" class="text-blue-400 hover:underline flex items-center">
          <div class="i-carbon:link text-lg mr-1"></div> 快速入门指南：Server开发
        </a>
      </li>
      <li v-click class="transform transition-all duration-300">
        <a href="https://mcp.so/" class="text-blue-400 hover:underline flex items-center">
          <div class="i-carbon:link text-lg mr-1"></div> MCP Directory
        </a>
      </li>
      <li v-click class="transform transition-all duration-300">
        <a href="https://github.com/google/agent2agent" class="text-blue-400 hover:underline flex items-center">
          <div class="i-carbon:link text-lg mr-1"></div> Google A2A GitHub仓库
        </a>
      </li>
    </ul>
  </div>
</div>

<!--
这里是一些重要的参考资源和学习路径。官方文档包括MCP官网、快速入门指南，以及社区资源如Awesome MCP Servers和MCP Directory。A2A相关资源则包括Google的GitHub仓库和介绍博客。学习路径建议分为三个阶段：入门阶段，从阅读文档到体验MCP；进阶开发，开发简单服务器并学习协议规范；高级应用，学习安全最佳实践并开发专业工具。这些资源会持续更新，建议关注官方文档和社区动态获取最新信息。
-->

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
