---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'Deep Dive LLM 4: What makes DeepSeek so different and popular'
exportFilename: Deep Dive LLM 4 - What makes DeepSeek so different and popular
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 200
routerMode: hash
---

<div translate-x--15>

# 深入浅出 LLM 4：DeepSeek 为什么这么火？

Deep Dive LLM 4: What makes DeepSeek so different and popular

DaoCloud Neko

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
      rounded-lg overflow-hidden  h-fit
      transition="all duration-250 ease-in-out"
    >
      <div w-120 h-60 bg-neutral-500 opacity-30 backdrop-blur border="neutral-100 2 solid" rounded-lg />
    </div>
  </div>
</div>

---
layout: intro
class: px-24
glowSeed: 205
---

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <img src="/deepseek-color.svg" size-40 >
    </div>
  </div>
  <div
    v-after pl-15 pr-15 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'scale-80' : 'scale-100'"
  >
    <div i-carbon:add text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x-20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-carbon:machine-learning text-8xl />
    </div>
  </div>
</div>

<div v-click="2" mt-10 text-center>
  <div text-xl>"A tiny team @deepseek-ai pushing our limits in AGI exploration"</div>
  <div text-gray-400 mt-2 text-sm>- DeepSeek Open Infra (Feb 2025)</div>
</div>

<!--
让我们先来了解一下 DeepSeek 是谁。

[click] DeepSeek 的也叫做「深度求索」，是总部位于杭州的企业，由中资避险基金幻方量化创立于 2023 年 5 月。

[click] 有趣的是，他们并不把自己定位为行业巨头，而是称自己是「一个小团队，正在挑战 AGI 探索极限」。这种谦逊的态度在 AI 社区中引起了广泛的共鸣。
-->

---
class: py-10
clicks: 3
---

# DeepSeek 的崛起

<div flex items-center gap-10 translate-y-30>
  <div
    v-click="1"
    flex-1 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div flex items-center justify-center mb-5>
      <div i-carbon:machine-learning-model text-6xl text-purple-500 />
    </div>
    <div text-center font-bold mb-2>卓越的模型</div>
    <div text-sm text-center>
      DeepSeek-V3 / R1 在性能上媲美甚至超越了诸如 OpenAI 的闭源模型，而成本宣称只有大厂模型的 1/11
    </div>
  </div>
  <div
    v-click="2"
    flex-1 transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div flex items-center justify-center mb-5>
      <div i-carbon:code text-6xl text-blue-500 />
    </div>
    <div text-center font-bold mb-2>开源理念</div>
    <div text-sm text-center>
      以 Llama 都未曾选择的 MIT 协议发布了模型权重
    </div>
  </div>
  <div
    v-click="3"
    flex-1 transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div flex items-center justify-center mb-5>
      <div i-carbon:bare-metal-server-02 text-6xl text-green-500 />
    </div>
    <div text-center font-bold mb-2>Infra 创新</div>
    <div text-sm text-center>
      开源了许多高效的推理系统的关键技术
    </div>
  </div>
</div>

<!--
DeepSeek 的崛起主要靠以下几个关键点：

[click] 首先，他们的模型——特别是 DeepSeek-V3 和 R1——表现出色，性能媲美甚至超越了更大公司封闭的模型。

[click] 其次，他们对开源的承诺让这些强大的模型能被全球的研究人员和开发者轻松使用。

[click] 第三，他们公开了基础设施创新的细节，为整个 AI 社区提供了宝贵的参考。

[click] 他们最大的突破出现在 2025 年 1 月，DeepSeek-R1 展现出媲美 GPT-4o 的推理能力，同时开源且成本低得多。
-->

---
class: py-10
clicks: 6
---

# 两种 LLM 发展路径的对比

<div grid grid-cols-2 gap-8 mt-10>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
    class="border-2 border-blue-500/30 rounded-lg p-5 bg-blue-500/10"
  >
    <div text-xl font-bold mb-4 text-blue-300>封闭式模型</div>
    <div flex flex-col gap-3 text-sm>
      <div
        v-click="2"
        transition duration-300 ease-in-out
        :class="$clicks < 2 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:locked text-blue-400 mr-2 />
        <span>模型封闭，访问受限制</span>
      </div>
      <div
        v-click="3"
        transition duration-300 ease-in-out
        :class="$clicks < 3 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:currency-dollar text-blue-400 mr-2 />
        <span>API 成本昂贵（OpenAI o1：$60/百万输出 Token）</span>
      </div>
      <div
        v-click="4"
        transition duration-300 ease-in-out
        :class="$clicks < 4 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:ibm-quantum-safe-advisor text-blue-400 mr-2 />
        <span>数据隐私和主权问题</span>
      </div>
    </div>
  </div>

  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
    class="border-2 border-green-500/30 rounded-lg p-5 bg-green-500/10"
  >
    <div text-xl font-bold mb-4 text-green-300>DeepSeek 的路径</div>
    <div flex flex-col gap-3 text-sm>
      <div
        v-click="2"
        transition duration-300 ease-in-out
        :class="$clicks < 2 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:unlocked text-green-400 mr-2 />
        <span>模型权重开源，MIT 授权</span>
      </div>
      <div
        v-click="3"
        transition duration-300 ease-in-out
        :class="$clicks < 3 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:money text-green-400 mr-2 />
        <span>性价比高（R1：$2.19/百万输出 Token）</span>
      </div>
      <div
        v-click="4"
        transition duration-300 ease-in-out
        :class="$clicks < 4 ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'"
        flex items-center
      >
        <div i-carbon:security text-green-400 mr-2 />
        <span>可自部署，数据完全掌控</span>
      </div>
    </div>
  </div>
</div>

<div
  v-click="5"
  mt-8
  transition duration-500 ease-in-out
  :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
  class="border-2 border-purple-500/30 rounded-lg p-4 bg-purple-500/10"
>
  <div text-xl font-bold mb-2 text-purple-300 flex items-center>
    <div i-carbon:star text-yellow-400 mr-2 />核心差异
  </div>
  <div text-sm>
    与许多标榜「开源」但高度受限的模型不同，DeepSeek 提供了<span font-bold>真正开放且性能卓越</span>的模型 —— 性能媲美甚至超越闭源模型，且同时赋予科研人员和开发者真正的灵活性和透明度。
  </div>
</div>

<!--
要理解为什么 DeepSeek 如此受关注，我们需要对比两种 LLM 路径：

[click] 一边是封闭式路径，另一边是 DeepSeek 更开放的方法。

[click] 封闭式模型通常会对权重严格保密，而 DeepSeek 的模型权重是开源的，并采用 MIT 许可证。

[click] 成本差距极大——OpenAI o1 每百万输出 Token 收费 $60，而 DeepSeek-R1 只需 $2.19，相差 30 倍。

[click] 封闭模型可能带来数据隐私问题，而 DeepSeek 的模型是可自部署的，企业可以完全控制自己的数据。

[click] 核心差异在于 DeepSeek 提供了真正的开放性，同时在性能上没有妥协——这是许多其他“开源”模型难以实现的。
-->

---
class: py-10
---

# DeepSeek 的旗舰模型

<div flex items-center justify-center mt-15 h-75>
  <div flex flex-row items-center h-full gap-4>
    <div
      v-click="1"
      relative
      transition duration-500 ease-in-out h-full
      :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <div
        class="w-[250px] h-full border-2 border-blue-500/50 rounded-xl p-5 bg-blue-900/20 backdrop-blur flex flex-col"
      >
        <div flex-1 h-full>
          <div text-xl font-bold mb-2 text-blue-300 flex items-center>
            <div i-carbon:machine-learning text-blue-400 mr-2 />DeepSeek-V3
          </div>
          <div text-sm class="mb-4">
            基础模型，包含架构优化的创新
          </div>
        </div>
        <div class="border border-blue-500/30 rounded p-2 bg-blue-900/30 text-xs">
          <div mb-1 font-bold text-blue-200>关键创新：</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-blue-400 />多层注意力（MLA）机制</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-blue-400 />FP8 精度训练</div>
          <div flex items-center><div i-carbon:dot-mark mr-1 text-blue-400 />高效并行训练</div>
        </div>
      </div>
    </div>
    <div i-carbon:arrow-right text-4xl my-2 v-click="2" />
    <div
      v-click="3"
      relative
      transition duration-500 ease-in-out h-full
      :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <div
        class="w-[250px] h-full border-2 border-purple-500/50 rounded-xl p-5 bg-purple-900/20 backdrop-blur flex flex-col"
      >
        <div flex-1 h-full>
          <div text-xl font-bold mb-2 text-purple-300 flex items-center>
            <div i-carbon:machine-learning-model text-purple-400 mr-2 />DeepSeek-R1-Zero
          </div>
          <div text-sm class="mb-4">
            基于 V3 模型纯强化学习，无需监督微调
          </div>
        </div>
        <div class="border border-purple-500/30 rounded p-2 bg-purple-900/30 text-xs">
          <div mb-1 font-bold text-purple-200>独特能力：</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-purple-400 />自我发现的推理模式</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-purple-400 />解决问题时的“顿悟时刻”</div>
          <div flex items-center><div i-carbon:dot-mark mr-1 text-purple-400 />根据复杂性动态分配时间</div>
        </div>
      </div>
    </div>
    <div i-carbon:arrow-right text-4xl my-2 v-click="4" />
    <div
      v-click="5"
      relative
      transition duration-500 ease-in-out h-full
      :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <div
        class="w-[250px] h-full border-2 border-green-500/50 rounded-xl p-5 bg-green-900/20 backdrop-blur flex flex-col"
      >
        <div flex-1 h-full>
          <div text-xl font-bold mb-2 text-green-300 flex items-center>
            <div i-carbon:star-filled text-yellow-400 mr-2 />DeepSeek-R1
          </div>
          <div text-sm class="mb-4">
            最终产品：结合纯强化学习能力和人类可读格式
          </div>
        </div>
        <div class="border border-green-500/30 rounded p-2 bg-green-900/30 text-xs">
          <div mb-1 font-bold text-green-200>两全其美：</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-green-400 />R1-Zero 的卓越推理能力</div>
          <div flex items-center mb-1><div i-carbon:dot-mark mr-1 text-green-400 />人类可读的思维过程</div>
          <div flex items-center><div i-carbon:dot-mark mr-1 text-green-400 />以 1/30 的 API 成本媲美 GPT-4o1</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
让我们来看看 DeepSeek 的旗舰模型：

[click] 首先是 DeepSeek-V3，这是他们的基础架构模型，包含了多层注意力（MLA）、FP8 精度训练以及高效并行训练等创新技术。

[click] 在此基础上……

[click] DeepSeek-R1-Zero 是一个突破性的模型。他们基于 V3 模型，完全通过纯强化学习进行训练，没有监督微调。这种方法让模型能够自行发展出推理模式，包括“顿悟时刻”，即模型在解决问题时重新审视并调整自己的思路。此外，R1-Zero 还学会了根据问题的复杂性动态分配时间。

[click] 最终……

[click] DeepSeek-R1 结合了 R1-Zero 的卓越推理能力，并改进为人类可读的思维过程。这就是让 DeepSeek-R1 大获成功的原因——它以 1/30 的 API 成本，性能媲美 GPT-4o1。
-->

---
class: py-10
glow: bottom
glowSeed: 368
---

# R1 的魔力：强化学习，启动！

<div grid="~ cols-2" mt-5 gap-4>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-xl font-bold flex items-center gap-2 mb-4>
      <div i-carbon:machine-learning text-purple-400 />传统方法
    </div>
    <div class="border border-gray-500 rounded-lg p-4 bg-gray-800/30">
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:number-1 text-blue-400 />
        <div>预训练基础模型</div>
      </div>
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:arrow-down text-blue-400 />
      </div>
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:number-2 text-blue-400 />
        <div>监督微调 (SFT)</div>
        <div text-xs text-gray-400>(需要大量人工标注数据集)</div>
      </div>
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:arrow-down text-blue-400 />
      </div>
      <div flex items-center gap-2 text-sm>
        <div i-carbon:number-3 text-blue-400 />
        <div>强化学习</div>
        <div text-xs text-gray-400>(基于人类偏好优化)</div>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-xl font-bold flex items-center gap-2 mb-4>
      <div i-carbon:machine-learning-model text-green-400 />DeepSeek 的 R1-Zero 方法
    </div>
    <div class="border border-green-500/30 rounded-lg p-4 bg-green-900/20">
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:number-1 text-green-400 />
        <div>预训练 V3 基础模型</div>
      </div>
      <div flex items-center gap-2 text-sm mb-2>
        <div i-carbon:arrow-down text-green-400 />
      </div>
      <div flex items-center gap-2 text-sm>
        <div i-carbon:number-2 text-green-400 />
        <div>直接强化学习</div>
        <div
          v-click="3"
          transition duration-300 ease-in-out
          :class="$clicks < 3 ? 'opacity-0' : 'opacity-100'"
          class="border border-yellow-500/50 rounded px-1 text-yellow-400 text-xs ml-2"
        >
          革命性！
        </div>
      </div>
    </div>
  </div>

  <div
    v-click="4"
    transition duration-500 ease-in-out
    :class="$clicks < 4 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-xl font-bold flex items-center gap-2 mb-4>
      <div i-carbon:chart-line-smooth text-purple-400 />为什么重要
    </div>
    <div class="border border-purple-500/30 rounded-lg p-4 bg-purple-900/20">
      <div text-sm>
        纯强化学习方法消除了对昂贵标注数据集的依赖，使 DeepSeek 能够：
        <div mt-2 flex items-center><div i-carbon:checkmark-filled text-green-500 mr-2 />更高效地开发模型</div>
        <div flex items-center><div i-carbon:checkmark-filled text-green-500 mr-2 />无需人工标注即可扩展到新领域</div>
        <div flex items-center><div i-carbon:checkmark-filled text-green-500 mr-2 />生成更具创造性的推理模式</div>
      </div>
    </div>
  </div>

  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-xl font-bold flex items-center gap-2 mb-4>
      <div i-carbon:code text-blue-400 />他们是怎么做到的
    </div>
    <div class="border border-gray-500 rounded-lg p-4 bg-gray-800/30">
      <div text-xs mb-2 flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 />
        <div>使用简单的基于规则的奖励（正确性、格式）</div>
      </div>
      <div text-xs mb-2 flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 />
        <div>采用组相对策略优化 (GRPO)</div>
      </div>
      <div text-xs mb-2 flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 />
        <div>允许模型探索多种推理路径</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 />
        <div>无需人工标注中间步骤</div>
      </div>
    </div>
  </div>
</div>

<!--
DeepSeek 最革命性的地方就是它的纯强化学习方法：

[click] 传统方法训练高级 LLM 包含三个步骤：预训练、人工标注监督微调，以及最终的强化学习。

[click] DeepSeek-R1-Zero 采取了完全不同的方式：跳过监督微调，直接从预训练转入强化学习。

[click] 这种方法非常革命性！他们通过简单的基于规则的奖励（如回答正确性、格式）以及组相对策略优化，让模型探索多种推理路径，无需人工标注中间步骤。

[click] 为什么这很重要？这种方法消除了对昂贵标注数据集的依赖，使得模型开发更高效、更易扩展到新领域，同时能够生成更具创造性的推理模式。这标志着高级语言模型训练方式的重大进步。
-->

---
class: py-10
---

# 「啊哈！」时间

<div
  v-click="1"
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
  mt-5 mb-8
>
  <div text-lg font-bold>在 R1-Zero 的训练中，研究人员观察到了一些意想不到的现象：</div>
  <div text-sm text-gray-400 italic mt-1>模型经常在解题过程中主动修正思路：</div>
</div>

<div flex justify-between gap-10>
  <div
    v-click="2"
    class="border border-gray-600 rounded-lg bg-gray-800/50 w-500px"
    transition duration-500 ease-in-out p-4
    :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
  >
    <div font-mono text-sm text-amber-200>
      <span text-green-400>R1-Zero:</span> 让我来想想这个问题……
      要解决这个问题，我会尝试使用三角形面积公式。
      我知道 A = (1/2) × b × h，其中 b 是底边，h 是高。
      所以我会先计算……
      <span class="bg-yellow-400/20 px-2 py-0.5 rounded text-yellow-400">等等等等，这是一个顿悟时刻，我可以在这里标记它。</span> 实际上，我意识到有一个更简单的方法。
      而不是使用三角形公式，我可以利用……
    </div>
  </div>

  <div
    v-click="3"
    w-300px
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
  >
    <div text-sm font-bold mb-3 text-purple-300>这里发生了什么？</div>
    <div text-xs mb-3 flex items-start>
      <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
      <div>模型识别到自己犯了战略性错误</div>
    </div>
    <div text-xs mb-3 flex items-start>
      <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
      <div>主动标记“顿悟时刻”，并改变推理方向</div>
    </div>
    <div text-xs mb-3 flex items-start>
      <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
      <div>这种自我修正完全通过强化学习自然涌现</div>
    </div>
    <div text-xs flex items-start>
      <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
      <div>没有人教它如何实现这些“洞察”</div>
    </div>
  </div>
</div>

<div
  v-click="4"
  transition duration-500 ease-in-out
  :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
  class="mt-8 bg-purple-900/20 p-4 rounded-lg border border-purple-500/30"
>
  <div text-lg font-bold mb-2 flex items-center text-purple-300>
    <div i-carbon:idea text-yellow-400 mr-2 />为什么重要
  </div>
  <div text-sm>
    这种“顿悟时刻”的涌现表明，强化学习可以让模型发展出复杂的元认知能力——能够识别当前推理方式无效，并转向更有效的策略。这比以前的模型更接近人类的问题解决方式。
  </div>
</div>

<!--
在 R1-Zero 的训练中，研究人员观察到了一个非常有趣的现象——他们称之为“顿悟时刻”：

[click] 研究人员注意到，模型在训练过程中会出现一些意料之外的行为……

[click] 模型经常能识别到当前的推理方式行不通，主动标记一个“顿悟时刻”，然后改变推理策略。

[click] 值得注意的是，这种行为完全是通过强化学习自然涌现的——没有人特意教它如何实现这种洞察，也没有明确要求它标记这些时刻。

[click] 这很重要，因为它表明纯强化学习可以让模型发展出复杂的推理策略，甚至类似于人类的元认知能力。模型不仅仅在追求正确答案，还学会了监控自己的推理过程并进行战略性调整——这是向更人性化 AI 推理迈出的重要一步。
-->

---
class: py-10
glow: right
---

# R1-Zero 的推理涌现证据

<div grid grid-cols-2 gap-10 mt-5>
  <div>
    <div
      v-click="1"
      transition duration-500 ease-in-out
      :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <img src="/plot_aime_with_maj.png" class="rounded-lg border border-gray-700">
    </div>
    <div
      v-click="2"
      transition duration-500 ease-in-out
      :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      mt-4 text-sm text-center text-gray-300
    >
      DeepSeek-R1-Zero 在强化学习中准确率从 15.6% 提升到 71.0%（AIME 2024）
    </div>
  </div>

  <div flex flex-col>
    <div
      v-click="3"
      transition duration-500 ease-in-out
      :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-blue-500/30 rounded-lg p-4 bg-blue-900/20 mb-3"
    >
      <div text-sm font-bold mb-2 text-blue-300>响应长度与表现</div>
      <div text-xs>在强化学习中，R1-Zero 学会了：</div>
      <div text-xs mt-2 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>更复杂问题生成更长的回答</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>根据难度合理分配“思考时间”</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>从简单尝试发展为全面解决方案</div>
      </div>
    </div>
    <div
      v-click="4"
      transition duration-500 ease-in-out
      :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-green-500/30 rounded-lg p-4 bg-green-900/20 mb-3"
    >
      <div text-sm font-bold mb-2 text-green-300>自主发现的解决问题能力</div>
      <div text-xs mb-1>没有人为标注“正确”的解题思路</div>
      <div text-xs>相反，R1-Zero：</div>
      <div text-xs mt-2 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>探索多样化的推理策略</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>仅基于最终答案反馈</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-green-400 />
        <div>自主发现高效的推理模式</div>
      </div>
    </div>
    <div
      v-click="5"
      transition duration-500 ease-in-out
      :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-purple-500/30 rounded-lg p-4 bg-purple-900/20"
    >
      <div text-sm font-bold mb-2 text-purple-300>深远意义</div>
      <div text-xs>表明复杂推理能力可以来源于：</div>
      <div text-xs mt-2 flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-purple-400 />
        <div>基于简单奖励的强化学习</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-purple-400 />
        <div>无需人工标注推理过程</div>
      </div>
    </div>
  </div>
</div>

<!--
虽然 R1-Zero 展示了卓越的推理能力，但也存在一些问题：它的思维过程有时难以被人类理解。

[click] DeepSeek-R1-Zero 的问题包括：语言混杂、格式不规范，以及逻辑跳跃难以理解。DeepSeek-R1 的目标是保留这些强大的推理能力，同时让思维过程更易被人类理解，包括一致的语言使用、清晰的结构化格式，以及可读性更强的思维过程。

[click] 为了实现这一点，DeepSeek 采用了一个分阶段的方法：
- 阶段 1：使用少量高质量链式思维（CoT）数据进行冷启动
- 阶段 2：通过强化学习奖励语言一致性以强化推理能力
- 阶段 3：使用 80 万样本（60 万推理任务，20 万通用任务）进行监督微调，扩展能力
- 阶段 4：在所有能力上进行最终强化学习

[click] 最终结果是两全其美：DeepSeek-R1 保留了 R1-Zero 通过纯强化学习获得的强大推理能力，同时将其呈现为人类可读的结构化格式。此外，它还扩展了能力范围，成为一个更全面的助手。
-->

---
class: py-10
---

# 从 R1-Zero 到 R1：让推理更易读

<div flex mt-10 justify-center>
  <div w-800px>
    <div
      v-click="1"
      transition duration-500 ease-in-out
      :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      flex items-center justify-between mb-2
    >
      <div class="text-center p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg w-350px">
        <div text-sm font-bold mb-1 text-purple-300>DeepSeek-R1-Zero</div>
        <div text-xs>强大的推理能力，但有时：</div>
        <div text-xs mt-1 flex items-center justify-center>
          <div i-carbon:warning-alt text-yellow-400 mr-1 />
          <div>语言混杂</div>
        </div>
        <div text-xs flex items-center justify-center>
          <div i-carbon:warning-alt text-yellow-400 mr-1 />
          <div>格式不规范</div>
        </div>
        <div text-xs flex items-center justify-center>
          <div i-carbon:warning-alt text-yellow-400 mr-1 />
          <div>逻辑跳跃难以理解</div>
        </div>
      </div>
      <div i-carbon:arrow-right text-4xl />
      <div class="text-center p-3 bg-green-900/20 border border-green-500/30 rounded-lg w-350px">
        <div text-sm font-bold mb-1 text-green-300>DeepSeek-R1</div>
        <div text-xs>保留推理能力，同时新增：</div>
        <div text-xs mt-1 flex items-center justify-center>
          <div i-carbon:checkmark-filled text-green-400 mr-1 />
          <div>一致的语言使用</div>
        </div>
        <div text-xs flex items-center justify-center>
          <div i-carbon:checkmark-filled text-green-400 mr-1 />
          <div>清晰、结构化的格式</div>
        </div>
        <div text-xs flex items-center justify-center>
          <div i-carbon:checkmark-filled text-green-400 mr-1 />
          <div>人类可读的思维过程</div>
        </div>
      </div>
    </div>
    <div
      v-click="2"
      transition duration-500 ease-in-out
      :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-blue-500/30 rounded-lg p-4 bg-blue-900/20 mb-3"
    >
      <div text-sm font-bold mb-3 text-blue-300>DeepSeek 的多阶段方法</div>
      <div grid grid-cols-4 gap-2 text-xs>
        <div class="border border-blue-300/30 rounded p-2 bg-blue-800/20">
          <div font-bold mb-1 text-center>阶段 1：冷启动</div>
          <div>使用少量高质量链式思维数据进行初步微调</div>
        </div>
        <div class="border border-blue-300/30 rounded p-2 bg-blue-800/20">
          <div font-bold mb-1 text-center>阶段 2：推理强化学习</div>
          <div>通过语言一致性奖励强化推理能力</div>
        </div>
        <div class="border border-blue-300/30 rounded p-2 bg-blue-800/20">
          <div font-bold mb-1 text-center>阶段 3：监督微调</div>
          <div>使用 80 万样本（60 万推理，20 万通用）扩展能力</div>
        </div>
        <div class="border border-blue-300/30 rounded p-2 bg-blue-800/20">
          <div font-bold mb-1 text-center>阶段 4：通用强化学习</div>
          <div>在所有能力上进行最终强化</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
While R1-Zero demonstrated remarkable reasoning abilities, there was a challenge - its thought processes weren't always easy for humans to follow:

[click] DeepSeek-R1-Zero sometimes used mixed languages, unusual formats, and made hard-to-follow logic jumps. The goal with DeepSeek-R1 was to preserve this powerful reasoning ability while making it more human-readable, with consistent language, clear structure, and comprehensible thought processes.

[click] To achieve this, DeepSeek developed a multi-stage approach:
- Stage 1: A "cold start" with a small amount of high-quality chain-of-thought data
- Stage 2: Reinforcement learning focused on reasoning with a language consistency reward
- Stage 3: Supervised fine-tuning with 800,000 samples (600K reasoning, 200K general)
- Stage 4: Final reinforcement learning across all capabilities

[click] The result was the best of both worlds - DeepSeek-R1 retained the pure RL-discovered reasoning capabilities while presenting them in a human-readable, consistent format. It also expanded beyond pure reasoning to handle a broader range of capabilities, making it a more complete assistant.
-->

---
class: py-10
glow: bottom
---

# 知识蒸馏：让小模型也有大脑

<div grid grid-cols-2 gap-8 mt-10>
  <div>
    <div
      v-click="1"
      transition duration-500 ease-in-out
      :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
      mb-6
    >
      <div text-lg font-bold mb-3 flex items-center>
        <div i-carbon:reduce text-blue-400 />知识蒸馏
      </div>
      <div text-sm mb-4>
        DeepSeek 将 80 万高质量训练样本应用于各种小型模型架构：
      </div>
    </div>
    <div
      v-click="2"
      transition duration-500 ease-in-out
      :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-blue-500/30 rounded-lg bg-blue-900/20 mb-4 overflow-hidden"
    >
      <div class="text-sm font-bold p-3 bg-blue-900/50 text-blue-300">蒸馏模型家族</div>
      <div p-3>
        <div text-xs flex items-center mb-2>
          <div i-carbon:model-alt text-yellow-400 mr-2 />
          <div>DeepSeek-R1-Distill-Qwen-1.5B</div>
        </div>
        <div text-xs flex items-center mb-2>
          <div i-carbon:model-alt text-yellow-400 mr-2 />
          <div>DeepSeek-R1-Distill-Qwen-7B</div>
        </div>
        <div text-xs flex items-center mb-2>
          <div i-carbon:model-alt text-yellow-400 mr-2 />
          <div>DeepSeek-R1-Distill-Qwen-14B</div>
        </div>
        <div text-xs flex items-center mb-2>
          <div i-carbon:model-alt text-yellow-400 mr-2 />
          <div>DeepSeek-R1-Distill-Qwen-32B</div>
        </div>
        <div text-xs flex items-center>
          <div i-carbon:model-alt text-yellow-400 mr-2 />
          <div>DeepSeek-R1-Distill-Llama-70B</div>
        </div>
      </div>
    </div>
    <div
      v-click="3"
      transition duration-500 ease-in-out
      :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="border border-green-500/30 rounded-lg p-4 bg-green-900/20"
    >
      <div text-sm font-bold mb-2 text-green-300>移动端智能</div>
      <div text-xs mb-2>
        即使是最小的 1.5B 模型，其表现也优于之前同规模模型，使得高级推理能力可以在以下设备上实现：
      </div>
    </div>
  </div>
  <div>
    <div
      v-click="4"
      transition duration-500 ease-in-out
      :class="$clicks < 4 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
    >
      <img src="/distill.png" class="rounded-lg border border-gray-700">
    </div>
    <div
      v-click="5"
      transition duration-500 ease-in-out
      :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
      class="mt-5 border border-purple-500/30 rounded-lg p-4 bg-purple-900/20"
    >
      <div text-sm font-bold mb-2 text-purple-300>关键发现：蒸馏 > 直接强化学习</div>
      <div text-xs>
        DeepSeek 在 Qwen-32B 上对比了两种方法：
      </div>
      <div text-xs mt-2 flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div><span font-bold>直接强化学习：</span>超过 10,000 步强化学习</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div><span font-bold>蒸馏：</span>使用 R1 数据进行简单监督微调</div>
      </div>
      <div text-xs mt-2>
        <span font-bold text-green-400>结果：</span>蒸馏方法性能更好且计算成本更低，表明知识迁移比让每个模型从零开始学习更高效。
      </div>
    </div>
  </div>
</div>

<!--
DeepSeek 的一个实际贡献是他们的蒸馏模型家族：

[click] DeepSeek 应用了知识蒸馏技术，将 R1 大模型的知识迁移到更小的模型中，使其能够在资源受限的环境中运行。

[click] 他们发布了一系列蒸馏模型，从仅 1.5B 参数的小型模型扩展到 70B 参数的大型模型，基于 Qwen 和 Llama 等不同的基础架构。

[click] 这意味着高级推理能力现在不仅仅局限于云端部署，还可以在智能手机、笔记本电脑和边缘设备上运行。即使是最小的 1.5B 模型，其推理能力相较之前同规模模型也令人印象深刻。

[click] 性能结果非常显著——如图所示，他们的蒸馏模型在各种基准测试中都优于之前同规模模型。

[click] 更有趣的是，DeepSeek 发现蒸馏比直接强化学习更有效。在 Qwen-32B 上，直接强化学习需要超过 10,000 步，而通过简单的蒸馏（使用 R1 数据）实现的性能更好。这表明知识从大模型到小模型的迁移效率更高，而不是让每个模型从零开始学习推理能力。
-->

---
class: py-10
---

# 性能对比：R1 vs. 其他模型

<div grid grid-cols-5 gap-4 mt-10>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-5 border border-gray-600 rounded-lg p-3 bg-gray-800/50 mb-2"
  >
    <div text-sm font-bold mb-2>基准性能 - DeepSeek-R1 与主流模型对比</div>
    <img src="/r1-comparison.png" class="w-full">
  </div>
</div>

<div grid grid-cols-5 gap-4 mt-6>
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-2 border border-blue-500/30 rounded-lg p-4 bg-blue-900/20"
  >
    <div text-sm font-bold mb-2 text-blue-300>数学推理</div>
    <div text-xs flex items-start mb-1>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在 AIME 和 MATH 上与 OpenAI o1-1217 表现持平</div>
    </div>
    <div text-xs flex items-start>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>远超 GPT-4o 和 Claude-3.5-Sonnet</div>
    </div>
  </div>

  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-3 border border-purple-500/30 rounded-lg p-4 bg-purple-900/20"
  >
    <div text-sm font-bold mb-2 text-purple-300>编程性能</div>
    <div text-xs flex items-start mb-1>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在 LiveCodeBench 和 Codeforces 上表现优异</div>
    </div>
    <div text-xs flex items-start>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>几乎与 o1-1217 持平，同时完全开源</div>
    </div>
  </div>

  <div
    v-click="4"
    transition duration-500 ease-in-out
    :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-3 border border-green-500/30 rounded-lg p-4 bg-green-900/20"
  >
    <div text-sm font-bold mb-2 text-green-300>知识与通用能力</div>
    <div text-xs flex items-start mb-1>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在 MMLU 和 GPQA Diamond 上表现强劲</div>
    </div>
    <div text-xs flex items-start>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在事实问答和大学级知识测试中表现竞争力强</div>
    </div>
  </div>

  <div
    v-click="5"
    transition duration-500 ease-in-out
    :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-2 border border-yellow-500/30 rounded-lg p-4 bg-yellow-900/20"
  >
    <div text-sm font-bold mb-2 text-yellow-300>人类偏好</div>
    <div text-xs flex items-start mb-1>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在 AlpacaEval 和 ArenaHard 上表现优异</div>
    </div>
    <div text-xs flex items-start>
      <div i-carbon:checkmark-filled text-green-400 mr-1 />
      <div>在人类评估中的受欢迎程度很高</div>
    </div>
  </div>

  <div
    v-click="6"
    transition duration-500 ease-in-out
    :class="$clicks < 6 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-5 border border-sky-500/30 rounded-lg p-4 bg-sky-900/20"
  >
    <div text-sm font-bold mb-2 text-sky-300 flex items-center>
      <div i-carbon:chart-line-smooth mr-2 text-sky-400 />关键结论
    </div>
    <div text-sm>
      DeepSeek-R1 在大多数基准测试中与 OpenAI 的 o1-1217 表现相当，同时完全开源且成本仅为其 1/30。这种在性能和可访问性之间的结合在 AI 领域是前所未有的。
    </div>
  </div>
</div>

<!--
让我们来比较 DeepSeek-R1 和业界领先模型的性能：

这张基准性能图表展示了 DeepSeek-R1 与 OpenAI 的 o1、GPT-4o 和 Claude-3.5-Sonnet 在各种基准测试中的表现。

在数学推理任务上，DeepSeek-R1 在 AIME 和 MATH 等高难度基准测试上与 OpenAI o1-1217 表现相当，同时远超 GPT-4o 和 Claude。

在编程任务上，R1 在 LiveCodeBench 和 Codeforces 上的表现令人印象深刻，几乎与 o1-1217 持平，同时它是完全开源的。

在知识和通用能力测试（如 MMLU 和 GPQA Diamond）上，R1 表现出色，证明它不仅擅长推理，也具有扎实的事实知识。

在人类偏好评估中（如 AlpacaEval 和 ArenaHard），R1 的表现非常好，表明它的输出不仅技术上正确，还能满足人类的偏好。

关键结论：DeepSeek-R1 的表现与 OpenAI 的 o1-1217 在大多数基准测试中持平，同时完全开源且成本仅为其 1/30。这种性能与可访问性的结合在 AI 领域是前所未有的。
-->

---
class: py-10
---

# 绝密配方：DeepSeek 的 Infra 创新

> 2025 年 2 月，DeepSeek 发布了五个关键基础设施组件：

<div mt-8 grid grid-cols-5 gap-4>
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-1 border border-blue-500/30 rounded-lg p-3 bg-blue-900/20"
  >
    <div text-xs font-bold mb-2 text-blue-300 text-center>第一天</div>
    <div flex justify-center mb-2>
      <div i-carbon:machine-learning-model text-3xl text-blue-400 />
    </div>
    <div text-xs font-bold text-center mb-1>FlashMLA</div>
    <div class="text-[10px]" text-center>适用于 Hopper GPU 的高效 MLA 解码内核</div>
  </div>

  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-1 border border-purple-500/30 rounded-lg p-3 bg-purple-900/20"
  >
    <div text-xs font-bold mb-2 text-purple-300 text-center>第二天</div>
    <div flex justify-center mb-2>
      <div i-carbon:data-share text-3xl text-purple-400 />
    </div>
    <div text-xs font-bold text-center mb-1>DeepEP</div>
    <div class="text-[10px]" text-center>专家并行通信库</div>
  </div>

  <div
    v-click="4"
    transition duration-500 ease-in-out
    :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-1 border border-green-500/30 rounded-lg p-3 bg-green-900/20"
  >
    <div text-xs font-bold mb-2 text-green-300 text-center>第三天</div>
    <div flex justify-center mb-2>
      <div i-carbon:matrix text-3xl text-green-400 />
    </div>
    <div text-xs font-bold text-center mb-1>DeepGEMM</div>
    <div class="text-[10px]" text-center>高效 FP8 矩阵乘法内核</div>
  </div>

  <div
    v-click="5"
    transition duration-500 ease-in-out
    :class="$clicks < 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-1 border border-yellow-500/30 rounded-lg p-3 bg-yellow-900/20"
  >
    <div text-xs font-bold mb-2 text-yellow-300 text-center>第四天</div>
    <div flex justify-center mb-2>
      <div i-carbon:diagram text-3xl text-yellow-400 />
    </div>
    <div text-xs font-bold text-center mb-1>Parallelism</div>
    <div class="text-[10px]" text-center>DualPipe 和 EPLB 负载均衡器</div>
  </div>

  <div
    v-click="6"
    transition duration-500 ease-in-out
    :class="$clicks < 6 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-1 border border-sky-500/30 rounded-lg p-3 bg-sky-900/20"
  >
    <div text-xs font-bold mb-2 text-sky-300 text-center>第五天</div>
    <div flex justify-center mb-2>
      <div i-carbon:block-storage text-3xl text-sky-400 />
    </div>
    <div text-xs font-bold text-center mb-1>3FS</div>
    <div class="text-[10px]" text-center>高性能文件系统</div>
  </div>

  <div
    v-click="7"
    transition duration-500 ease-in-out
    :class="$clicks < 7 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="col-span-5 border border-red-500/30 rounded-lg p-4 bg-red-900/20"
  >
    <div text-sm font-bold mb-2 text-red-300 flex items-center>
      <div i-carbon:chart-line-smooth mr-2 text-red-400 />生产影响
    </div>
    <div text-sm>
      这些组件支持 DeepSeek 的 V3/R1 在线服务，每个 H800 节点每秒可处理 <span font-bold>73.7k/14.8k</span> 输入/输出 Token，同时实现 <span font-bold>545% 利润率</span>。
    </div>
  </div>
</div>

<!--
2025 年 2 月，DeepSeek 向 AI 社区做出了重要贡献，开源了其基础设施的关键组件：

[click] 在一周时间里，他们发布了五个核心基础设施组件：

[click] 第一天，他们发布了 FlashMLA——适用于 Hopper GPU 的高效多层注意力解码内核，优化了可变长度序列。

[click] 第二天，他们发布了 DeepEP——专家并行通信库，支持高效的全互通信，用于专家混合模型（MoE）。

[click] 第三天，他们发布了 DeepGEMM——干净高效的 FP8 矩阵乘法内核，支持精细缩放以实现最佳性能。

[click] 第四天，他们发布了并行工具——DualPipe 用于双向流水线并行，EPLB 用于专家并行负载均衡。

[click] 第五天，他们推出了 3FS——专为 AI 训练和推理工作负载设计的高性能分布式文件系统。

[click] 这些组件支持 DeepSeek 的生产服务，使其达到每个 H800 节点每秒 73.7k 输入和 14.8k 输出 Token，同时实现 545% 的利润率。
-->

---
class: py-10
glow: bottom
---

# 绝密配方和 DeepSeek 的开源周

<div mt-4 grid grid-cols-2 gap-8>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-lg font-bold mb-4 flex items-center>
      <div i-carbon:layers text-purple-400 mr-2 />训练创新
    </div>
    <div class="border border-purple-500/30 rounded-lg overflow-hidden mb-4">
      <div class="bg-purple-900/40 p-3 text-sm font-bold text-purple-300">MLA：多层注意力</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>动态合并相邻层的特征</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>在保持性能的同时减少计算量</div>
      </div>
    </div>
    <div class="border border-purple-500/30 rounded-lg overflow-hidden mb-4">
      <div class="bg-purple-900/40 p-3 text-sm font-bold text-purple-300">FP8 精度</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>用于矩阵乘法的 8 位浮点数</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>与 FP16/FP32 相比，内存更少，计算速度更快</div>
      </div>
    </div>
    <div class="border border-purple-500/30 rounded-lg overflow-hidden">
      <div class="bg-purple-900/40 p-3 text-sm font-bold text-purple-300">DualPipe 并行训练</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>双向流水线并行</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-purple-400 />
        <div>重叠计算与通信</div>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-lg font-bold mb-4 flex items-center>
      <div i-carbon:infrastructure text-green-400 mr-2 />工程卓越
    </div>
    <div class="border border-green-500/30 rounded-lg overflow-hidden mb-4">
      <div class="bg-green-900/40 p-3 text-sm font-bold text-green-300">DeepEP：专家并行</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>为 MoE 模型提供高效通信</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>高吞吐量，低延迟的全互通信内核</div>
      </div>
    </div>
    <div class="border border-green-500/30 rounded-lg overflow-hidden mb-4">
      <div class="bg-green-900/40 p-3 text-sm font-bold text-green-300">DeepGEMM：矩阵乘法</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>干净、高效的 FP8 矩阵乘法内核</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>细粒度缩放以实现最佳性能</div>
      </div>
    </div>
    <div class="border border-green-500/30 rounded-lg overflow-hidden">
      <div class="bg-green-900/40 p-3 text-sm font-bold text-green-300">3FS：高性能存储</div>
      <div p-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>专为 AI 工作负载设计的分布式文件系统</div>
      </div>
      <div px-3 pb-3 text-xs flex items-start>
        <div i-carbon:dot-mark mr-1 mt-0.5 text-green-400 />
        <div>利用现代 SSD 和 RDMA 网络</div>
      </div>
    </div>
  </div>
</div>

<div
  v-click="3"
  class="mt-6 border border-blue-500/30 rounded-lg p-4 bg-blue-900/20"
  transition duration-500 ease-in-out
  :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
>
  <div text-sm font-bold mb-2 text-blue-300 flex items-center>
    <div i-carbon:chart-line-smooth mr-2 text-blue-400 />成本效率结果
  </div>
  <div text-sm>
    DeepSeek 使用约 2,048 个 H800 GPU 训练了 V3，每万亿 Token 只需 18 万 GPU 小时。总训练成本约为 278 万 GPU 小时，仅为类似模型（如 Llama 3.1）成本的 <span font-bold>1/10</span>（Llama 3.1 使用了 16,384 个 H100 GPU，总耗时超过 2,100 万 GPU 小时）。
  </div>
</div>

<!--
DeepSeek 的卓越模型背后有一系列基础设施创新，使其效率更高：

[click] 训练创新包括：
- MLA（多层注意力）：动态合并相邻层的特征，减少计算量同时保持性能
- FP8 精度：使用 8 位浮点数进行矩阵乘法，减少内存占用并加快计算速度
- DualPipe 并行训练：双向流水线并行，重叠计算与通信，提高效率

[click] 工程卓越则体现在：
- DeepEP：专家并行通信库，为 MoE 模型提供高效通信
- DeepGEMM：干净高效的矩阵乘法内核，支持细粒度缩放以优化性能
- 3FS：专为 AI 工作负载设计的高性能分布式文件系统

[click] 这些创新带来了显著的成本效率：DeepSeek 使用约 2,048 个 H800 GPU 训练了其 V3 模型，每万亿 Token 只需 18 万 GPU 小时。总训练成本约为 278 万 GPU 小时，仅为 Llama 3.1 的 1/10（Llama 3.1 使用了 16,384 个 H100 GPU，总耗时超过 2,100 万 GPU 小时）。
-->

---
class: py-10
glow: right
---

# 社区影响与未来方向

<div grid grid-cols-2 gap-8 mt-8>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-lg font-bold mb-4 flex items-center>
      <div i-carbon:group text-blue-400 mr-2 />社区影响
    </div>
    <div class="border border-blue-500/30 rounded-lg bg-blue-900/20 p-4 mb-4">
      <div text-sm font-bold mb-2 text-blue-300>让先进 AI 普及化</div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>以开源模型实现 o1 级别的推理能力</div>
      </div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>支持在设备上运行的部署选项</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>帮助研究人员更好地理解推理能力的涌现</div>
      </div>
    </div>
    <div class="border border-blue-500/30 rounded-lg bg-blue-900/20 p-4">
      <div text-sm font-bold mb-2 text-blue-300>基础设施创新</div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>共享优化内核供更广泛使用</div>
      </div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>降低高性能模型训练的门槛</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark mr-1 mt-0.5 text-blue-400 />
        <div>为行业树立新的效率标杆</div>
      </div>
    </div>
  </div>
  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
  >
    <div text-lg font-bold mb-4 flex items-center>
      <div i-carbon:roadmap text-green-400 mr-2 />未来方向
    </div>
    <div class="border border-green-500/30 rounded-lg bg-green-900/20 p-4 mb-4">
      <div text-sm font-bold mb-2 text-green-300>研究前沿</div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>探索纯强化学习应对更复杂推理任务</div>
      </div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>研究超越 Token 的大概念模型（LCM）</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>开发更高效的小型模型以适配边缘设备</div>
      </div>
    </div>
    <div class="border border-green-500/30 rounded-lg bg-green-900/20 p-4">
      <div text-sm font-bold mb-2 text-green-300>应用领域</div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>结合推理与事实知识的研究型代理</div>
      </div>
      <div text-xs mb-1 flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>增强型语言特定 LLM，充分利用推理能力</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:arrow-right mr-1 mt-0.5 text-green-400 />
        <div>为科学、医学和教育开发专用模型</div>
      </div>
    </div>
  </div>
</div>

<div
  v-click="3"
  class="mt-6 border border-purple-500/30 rounded-lg p-4 bg-purple-900/20"
  transition duration-500 ease-in-out
  :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
>
  <div text-sm font-bold mb-2 text-purple-300 flex items-center>
    <div i-carbon:idea text-yellow-400 mr-2 />为什么 DeepSeek 意义重大
  </div>
  <div text-sm>
    DeepSeek 代表了 AI 领域的转变——证明了开放、高效的方法可以在性能上匹敌甚至超越封闭系统。通过展示高级推理能力可以通过相对简单的强化学习涌现，并将模型与基础设施开放共享，DeepSeek 加速了整个领域的进步。
  </div>
</div>

<!--
让我们来看看 DeepSeek 的广泛影响和未来方向：

[click] 社区影响方面，DeepSeek：
- 通过开源模型实现了 o1 级别的推理能力，让高级 AI 更加普及
- 通过蒸馏模型提供了设备端部署的选项
- 帮助研究人员更好地理解推理能力的涌现机制
- 共享了优化的基础设施组件，降低了高性能模型训练的门槛
- 为行业树立了新的效率标杆

[click] 展望未来，DeepSeek 的方向包括：
- 研究纯强化学习是否可以应对更复杂的推理任务
- 探索超越 Token 的大概念模型（LCM）
- 开发更高效的小型模型，适配边缘设备
- 在研究领域开发结合推理与事实知识的智能代理
- 为科学、医学和教育开发专用模型

[click] 为什么这很重要？DeepSeek 代表了 AI 领域的重大转变——证明了开放、高效的方法不仅可以在性能上匹敌甚至超越封闭系统，还能通过开放共享加速整个领域的进步，设立了新的行业标准。
-->

---
class: py-10
---

# 和其他开源模型相比呢

<div grid grid-cols-3 gap-6 mt-10>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="border border-blue-500/30 rounded-lg bg-blue-900/20 overflow-hidden"
  >
    <div class="p-3 bg-blue-900/40 text-blue-300 font-bold text-sm">Meta 的方法</div>
    <div p-3>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>Llama 系列，性能具有竞争力</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>以许可协议发布模型权重</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:warning-alt text-yellow-400 mr-1 />
        <div>训练细节和基础设施共享有限</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:warning-alt text-yellow-400 mr-1 />
        <div>相比封闭模型，发布速度较慢</div>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="border border-purple-500/30 rounded-lg bg-purple-900/20 overflow-hidden"
  >
    <div class="p-3 bg-purple-900/40 text-purple-300 font-bold text-sm">Qwen/Mistral 的方法</div>
    <div p-3>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>定期改进和发布模型</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>为研究开放模型权重</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:warning-alt text-yellow-400 mr-1 />
        <div>训练代码和基础设施未开放</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:warning-alt text-yellow-400 mr-1 />
        <div>与领先的封闭模型相比仍有性能差距</div>
      </div>
    </div>
  </div>

  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    class="border border-green-500/30 rounded-lg bg-green-900/20 overflow-hidden"
  >
    <div class="p-3 bg-green-900/40 text-green-300 font-bold text-sm">DeepSeek 的方法</div>
    <div p-3>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>性能与封闭源码领导者匹敌</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>采用 MIT 许可，灵活性更高</div>
      </div>
      <div text-xs mb-3 flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>开放核心基础设施组件</div>
      </div>
      <div text-xs flex items-start>
        <div i-carbon:checkmark-filled text-green-400 mr-1 />
        <div>发布详细技术论文解释创新点</div>
      </div>
    </div>
  </div>
</div>

<div
  v-click="4"
  class="mt-8 border border-green-500/30 rounded-lg p-4 bg-green-900/20"
  transition duration-500 ease-in-out
  :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
>
  <div text-sm font-bold mb-2 text-green-300 flex items-center>
    <div i-carbon:star text-yellow-400 mr-2 />DeepSeek 的独特贡献
  </div>
  <div text-sm>
    虽然其他开源项目也做出了宝贵贡献，但 DeepSeek 的独特之处在于结合了最先进的性能与前所未有的开放性——不仅开放模型权重，还开放了基础设施组件。他们选择了宽松的 MIT 许可协议，并详细分享了架构创新，为研究人员和开发者提供了最大程度的灵活性。
  </div>
</div>

<!--
让我们比较一下不同的开源 AI 方法：

[click] Meta 的方法主要集中在 Llama 系列：
- 提供了具有竞争力的模型性能
- 以许可协议的形式发布了模型权重
- 但训练细节和基础设施的共享相对有限
- 发布速度往往落后于封闭模型

[click] Qwen 和 Mistral 采取了稍有不同的方法：
- 定期发布和改进模型
- 为研究用途开放了模型权重
- 但与 Meta 类似，他们没有开放训练代码和基础设施
- 与领先封闭模型相比仍存在性能差距

[click] DeepSeek 的方法有几个显著优势：
- 模型性能可与封闭源码的领先者匹敌
- 采用 MIT 许可协议，为研究和开发提供了最大灵活性
- 开放了核心基础设施组件
- 发布了详细的技术论文，解释了背后的创新

[click] 这使得 DeepSeek 的贡献独一无二——他们结合了最先进的性能与前所未有的开放性，不仅开放模型权重，还开放了高效训练和推理所需的基础设施组件。他们选择宽松的 MIT 协议，并详细分享了架构创新，为研究人员和开发者提供了最大程度的灵活性。
-->

---
class: py-10
glowSeed: 368
---

# 所以？

<div mt-10 grid grid-cols-1 gap-6>
  <div
    v-click="1"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
    flex items-center
  >
    <div class="border border-blue-500/30 rounded-full p-4 bg-blue-900/20">
      <div i-carbon:machine-learning-model text-4xl text-blue-400 />
    </div>
    <div ml-6 flex-1>
      <div text-lg font-bold mb-1>革命性的强化学习方法</div>
      <div text-sm>
        证明了无需监督微调的纯强化学习可以实现最先进的推理能力，挑战了关于高级 AI 系统训练方式的传统认知。
      </div>
    </div>
  </div>

  <div
    v-click="2"
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
    flex items-center
  >
    <div class="border border-purple-500/30 rounded-full p-4 bg-purple-900/20">
      <div i-carbon:code text-4xl text-purple-400 />
    </div>
    <div ml-6 flex-1>
      <div text-lg font-bold mb-1>真正的开源哲学</div>
      <div text-sm>
        不仅开放模型权重，还开放了基础设施组件，并采用宽松的 MIT 许可，推动更广泛的创新。
      </div>
    </div>
  </div>

  <div
    v-click="3"
    transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
    flex items-center
  >
    <div class="border border-green-500/30 rounded-full p-4 bg-green-900/20">
      <div i-carbon:currency-dollar text-4xl text-green-400 />
    </div>
    <div ml-6 flex-1>
      <div text-lg font-bold mb-1>显著的成本效率</div>
      <div text-sm>
        以 1/10 的训练成本和 1/30 的推理成本实现了与领先封闭模型同等甚至更好的性能。
      </div>
    </div>
  </div>

  <div
    v-click="4"
    transition duration-500 ease-in-out
    :class="$clicks < 4 ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'"
    flex items-center
  >
    <div class="border border-yellow-500/30 rounded-full p-4 bg-yellow-900/20">
      <div i-carbon:share-knowledge text-4xl text-yellow-400 />
    </div>
    <div ml-6 flex-1>
      <div text-lg font-bold mb-1>知识普及化</div>
      <div text-sm>
        通过技术论文、开放代码和蒸馏模型，让高级 AI 推理能力惠及全球研究人员、开发者和学生。
      </div>
    </div>
  </div>
</div>

<!--
总结一下 DeepSeek 的独特之处：

[click] 首先，他们革命性的强化学习方法证明了无需监督微调的纯强化学习也可以实现最先进的推理能力，挑战了传统高级 AI 系统训练方式的认知。这为 AI 开发打开了更高效、可扩展的新路径。

[click] 第二，DeepSeek 秉持真正的开源哲学，不仅开放了模型权重，还开放了基础设施组件，并采用宽松的 MIT 许可。这种方式推动了更广泛的创新，让更多人能够自由构建和扩展他们的工作。

[click] 第三，他们在成本效率上表现出色——以 1/10 的训练成本和 1/30 的推理成本实现了与领先封闭模型同等甚至更好的性能。这使得高级 AI 对资源有限的组织也更加可及。

[click] 最后，通过技术论文、开放代码和蒸馏模型，DeepSeek 将高级 AI 推理能力普及化，让全球的研究人员、开发者和学生都能受益。这加速了整个领域的创新和发现。
-->

---
class: py-10
---

# 结束前的思考

<div
  v-click="1"
  class="mt-10 px-8 py-6 border-l-4 border-purple-500 bg-purple-900/10"
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
>
  <div text-lg italic>
    “DeepSeek 的 AI 开发方法代表了 AI 领域的重大转变——证明了开放、高效的模型不仅可以在性能上匹敌甚至超越闭源模型，是对 LeCun 对于 RL 无用论的有效反驳，对其他企业所谓的「开源就是死路一条」的有力驳斥
  </div>
  <div text-lg italic mt-4>
    通过结合架构创新、用于推理的纯强化学习以及透明的 AI Infra 共享，DeepSeek 加速了整个业界，并为真正意义上的 Open AI 设立了新的标杆。”
  </div>
</div>

<div
  v-click="2"
  mt-12 text-center
  transition duration-500 ease-in-out
  :class="$clicks < 2 ? 'opacity-0' : 'opacity-100'"
>
  <div text-sm opacity-70>
    想了解更多，请访问 DeepSeek 的开源仓库：
  </div>
  <div mt-2 flex items-center justify-center gap-3 text-xs>
    <a href="https://github.com/deepseek-ai/FlashMLA" target="_blank" class="flex items-center gap-1">
      <div i-ri:github-fill /> FlashMLA
    </a>
    <a href="https://github.com/deepseek-ai/DeepEP" target="_blank" class="flex items-center gap-1">
      <div i-ri:github-fill /> DeepEP
    </a>
    <a href="https://github.com/deepseek-ai/DeepGEMM" target="_blank" class="flex items-center gap-1">
      <div i-ri:github-fill /> DeepGEMM
    </a>
    <a href="https://github.com/deepseek-ai/DualPipe" target="_blank" class="flex items-center gap-1">
      <div i-ri:github-fill /> DualPipe
    </a>
    <a href="https://github.com/deepseek-ai/3FS" target="_blank" class="flex items-center gap-1">
      <div i-ri:github-fill /> 3FS
    </a>
  </div>
</div>

<!--
[click] DeepSeek 的 AI 开发方法代表了 AI 领域的重大转变——证明了开放、高效的模型不仅可以在性能上匹敌甚至超越封闭系统，同时还具备显著的可及性。

通过结合架构创新、用于推理的纯强化学习以及透明的基础设施共享，DeepSeek 加速了整个领域的进步，并为开放源码 AI 设立了新的标杆。

[click] 如果你有兴趣进一步探索，DeepSeek 已将其关键组件作为开源仓库发布在 GitHub 上。
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
