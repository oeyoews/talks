---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'Deep Dive LLM 3: The Era of Post Training'
exportFilename: DaocCloud 2024.11 - Deep Dive LLM
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 200
routerMode: hash
poweredBy: true
---

<div translate-x--30>

# 深入浅出 LLM 3：训练后范式的开启

Deep Dive LLM 3: The Era of Post Training

DaoCloud Neko

</div>

---
title: The previous ones
glowSeed: 203
---

<div text-xl mb-6>
  先前的故事
</div>

<div>
  <div flex gap-4>
    <div flex flex-col items-center>
      <img src="/session-1.png" rounded-lg overflow-hidden>
      <img src="/session-1-qr.png" w-40>
    </div>
    <div flex flex-col items-center>
      <img src="/session-2.png" rounded-lg overflow-hidden>
      <img src="/session-2-qr.png" w-40>
    </div>
  </div>
</div>

---
class: py-10
clicks: 2
glowSeed: 120
transition: 'none'
---

# 机器学习导论

<span>让我们从基础开始</span>

<div
  v-if="$clicks <= 2"
  transition duration-500 ease-in-out
  :class="[
    $clicks <= 1 ? '' : 'scale-0 opacity-0 translate-x--100 translate-y--20'
  ]"
>
  <Vectors />
</div>
<div
  v-if="$clicks >= 1"
  absolute top-0 left-0
  transition duration-500 ease-in-out translate-x-14 translate-y-44
  grid grid-cols-3
>
  <div
    i-carbon:hinton-plot
    text-8xl
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 scale-150' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-250
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-500
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-250
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-500
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-750
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-500
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-750
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
  <div
    i-carbon:hinton-plot
    text-8xl delay-1000
    transition duration-500 ease-in-out
    :class="[
      $clicks <= 1 ? 'opacity-0 text-zinc-500' : ''
    ]"
  />
</div>

<!--
To recap for everyone what is distributed training. Let's start with the basics.

[click] In machine learning field, model is basically a set of matrix and vectors, which is used to predict the output based on the input data. Say, we have a set of vectors

[click] That's not the whole picture, so let's zoom out a little bit.
-->

---
class: py-10
---

# 机器学习导论

<span>让我们从基础开始</span>

<div mt-16 />

<div flex items-center>
  <div
    grid grid-cols-3 gap-0 w-fit
  >
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
    <div i-carbon:hinton-plot text-8xl />
  </div>
  <div v-click pl-20 pr-30 transition duration-500 ease-in-out>
    <div i-carbon:arrow-right text-8xl />
  </div>
  <div v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out>
    <div flex items-center gap-6>
      <div i-bi:gpu-card text-8xl /><span text-2xl>GPU</span>
    </div>
    <div flex items-center gap-6>
      <div i-carbon:chip text-8xl /><span text-2xl>CPU</span>
    </div>
  </div>
</div>

<!--
Where this is the "visualization" of fundamental building block of every machine learning models. (or Hinton diagram if you like).

With that, the concept of training is just splitting data into different slices and blocks (which we call batches), what do we do next? [click] we will then feed them into the [click] CPU or GPU hardware devices to perform computation as well as inference.
-->

---
class: py-10
glowSeed: 20
---

# 为什么这么花时间？

<span>原因、理由和可能的解决方案</span>

<div mt-6 />

<div flex flex-col gap-4>

<v-clicks>

<div border="2 solid lime-800/50" rounded-lg>
  <div flex items-center bg="lime-800/30" px-3 py-2 text-lime-300>
    <div i-carbon:web-services-container text-sm mr-1 />
    <div text-xs>
      <em>参数套娃</em>
    </div>
  </div>
  <div bg="lime-800/10" px-4 py-3>
    <div>
      <span>
        真的有太多参数了：Llama 3.1 最大号模型有 4050 亿参数
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>超级大的矩阵，每一次计算，都是在遍历一个超大的网格</div>
    </div>
  </div>
</div>

<div border="2 solid green-800/50" rounded-lg>
  <div flex items-center bg="green-800/30" px-3 py-2 text-green-300>
    <div i-carbon:sysplex-distributor text-sm mr-1 />
    <div text-xs>
      <em>线性计算</em>
    </div>
  </div>
  <div bg="green-800/10" px-4 py-3>
    <div>
      <span>
        <b>每一次的推理运算</b>，都需要把先前已经计算过一次的 Token 再进行自回归运算
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>重复，冗余，前后相互依赖</div>
    </div>
  </div>
</div>

<div border="2 solid emerald-800/50" rounded-lg>
  <div flex items-center bg="emerald-800/30" px-3 py-2 text-emerald-300>
    <div i-carbon:name-space text-sm mr-1 />
    <div text-xs>
      <em>0 可复制性，0 可拓展性</em>
    </div>
  </div>
  <div bg="emerald-800/10" px-4 py-3>
    <div>
      <span>
        每次模型训练和微调结束后，将不会再动态获得任何额外更新的能力和知识
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      <div>一次性的，不可持续的</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-10
---

# 改进和加速

<span>有什么是我们可以改进的吗？</span>

<div mt-10 />

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-y--20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-down h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>压缩和量化参数</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-y--20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-down h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>减少重复计算</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid cyan-800" bg="cyan-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="cyan-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>并行推理</span>
    </div>
  </div>
</v-clicks>

</div>

---
class: py-10
---

# 压缩和量化参数

<span>减少模型的体积和计算量</span>

<div mt-16 />

<div flex>

<div flex flex-col gap-4>

<v-clicks>

<div>
通过参数剪枝，去除冗余参数，减少模型的参数数量
</div>

<div>
通过低秩分解，对向量进行降维操作，减少模型的计算量
</div>

<div>
通过混合精度，减少内存占用，提高计算效率
</div>

<div>
通过模型蒸馏，比如大模型训练小模型，压缩模型的体积
</div>

<div>
通过参数共享，通过结构化矩阵和聚类，减少模型的参数数量
</div>

<div>
通过紧凑网络，优化和精简模型架构，减少模型的计算量
</div>

</v-clicks>

</div>

<Polygon :sides="50 - ($clicks * 5 + 14)" :radius="100 - ($clicks * 8)" w-50 h-50 ml-20 class="translate-y--20 translate-x--15" />

</div>

---
class: py-10
---

# 压缩和量化参数的副作用

<img src="/quantization-chart.webp" h-100>

<div mt-2 />

> [LLM Quantization evaluation— leave no bits behind | by Ricciuti Federico | Medium](https://ricciuti-federico.medium.com/llm-quantization-evaluation-leave-not-bits-behind-0777e23b9f91)

---
class: py-10
---

# 压缩和量化参数

<span>减少模型的体积和计算量</span>

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-y--20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-down h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>FTT 减少 8.5%</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>输出速度提高了 33%</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid emerald-800" bg="emerald-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="emerald-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>吞吐量增加了 31%</span>
    </div>
  </div>
  <div
    :class="$clicks < 4 ? 'translate-y--20' : 'translate-y-0'"
    rounded-lg
    border="2 solid teal-800" bg="teal-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-down h-20 w-20 />
    </div>
    <div bg="teal-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>TPM 成本降低 24%</span>
    </div>
  </div>
</v-clicks>

</div>

<div mt-4 />

> [33% faster LLM inference with FP8 quantization](https://www.baseten.co/blog/33-faster-llm-inference-with-fp8-quantization/)

---
class: py-10
---

# KV Cache

<span>复习 QKV</span>

<div flex flex-col gap-4>

<v-clicks>

<img src="/attention-1.png" h-100 rounded-lg />

</v-clicks>

</div>

---
class: py-10
---

# KV Cache

<span>复习 QKV - 注意力</span>

<div flex flex-col gap-4>

<v-clicks>

<img src="/attention-2.png" h-100 rounded-lg />

</v-clicks>

</div>

---
class: py-10
---

# KV Cache

<span>复习 QKV - Mask</span>

<div flex flex-col gap-4>

<v-clicks>

<img src="/attention-3.png" h-100 rounded-lg />

</v-clicks>

</div>

---
class: py-10
---

# KV Cache

<span>空间换时间</span>

<div mt-8 />

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-carbon:hinton-plot text-8xl /><span text-2xl>KV 矩阵求值</span>
    </div>
  </div>
  <div
    v-after pl-14 pr-14 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'" delay-1000
  >
    <div flex items-center gap-6>
      <div i-carbon:time-plot text-8xl /><span text-2xl>内存中复用</span>
    </div>
  </div>
</div>

<div flex flex-col gap-3 mt-6>

<v-clicks>

<div bg="teal-800/20" border="2 solid teal-600" rounded-lg flex-1 px-3 py-2>
  <div><span>减少不必要的 GPU 计算</span></div>
  <div text="white/65" text-sm><span>把原本遍历若干次的无状态输入转化成有缓存辅助的计算求值</span></div>
</div>

<div bg="teal-800/20" border="2 solid teal-600" rounded-lg flex-1 px-3 py-2>
  <div><span>一次计算，多次复用</span></div>
  <div text="white/65" text-sm><span>虽然不能减少 FTT，但是在整次推理过程中都可以发挥效用</span></div>
</div>

<div bg="teal-800/20" border="2 solid teal-600" rounded-lg flex-1 px-3 py-2>
  <div><span>无感集成，推理精度和能力零影响</span></div>
  <div text="white/65" text-sm><span>模型架构相同即可使用，不干预精度，不劣化推理效果</span></div>
</div>

</v-clicks>

</div>

---
class: py-10
---

# KV Cache

<span>空间换时间</span>

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>相比 transformers 提高 24 倍</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>相比 TGI 提高了 4 倍</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid emerald-800" bg="emerald-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="emerald-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>内存消耗只增加 43%</span>
    </div>
  </div>
</v-clicks>

</div>

<div mt-8 />

> [vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention | vLLM Blog](https://blog.vllm.ai/2023/06/20/vllm.html)

---
class: py-10
---

# 预测输出 / 投机采样

<div flex flex-col gap-4>

<v-clicks>

<video src="/speculative-decoding.mov" controls loop rounded-lg overflow-hidden />

</v-clicks>

</div>

> [Assisted Generation: a new direction toward low-latency text generation](https://huggingface.co/blog/assisted-generation)

---
class: py-10
---

# 预测输出 / 投机采样

<span>并行的力量！</span>

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>GPT-4o 推理速度提高 37%</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>OpenAI 推理费用增加 72%</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid emerald-800" bg="emerald-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="emerald-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Phi 级别小模型速度提高 4 倍</span>
    </div>
  </div>
</v-clicks>

</div>

<div mt-8 />

> [New OpenAI feature: Predicted Outputs](https://simonwillison.net/2024/Nov/4/predicted-outputs/)

---
class: py-10
---

# 预测输出 / 投机采样

<span>并行的力量！</span>

<div flex flex-col items-center>

<div flex space-between w-full mt-16>

<div flex-1 w-full flex flex-col items-center gap-3>
  <img src="/OpenAI-logo.png" w-15 >
  <span>OpenAI</span>
</div>

<div flex-1 w-full flex flex-col items-center gap-3>
  <img src="/HuggingFace-logo.png" w-15 >
  <span>HuggingFace</span>
</div>

<div flex-1 w-full flex flex-col items-center gap-3>
  <img src="/Claude-logo.png" w-15 >
  <span>Anthropic</span>
</div>

</div>

<div mt-14 text-center w-fit bg="teal-500/20" rounded-lg p-4>
vLLM
</div>

</div>

---
class: py-10
---

# 语义化缓存

<span>如果我们把过去互联网时代的 CDN 概念放到 LLM 上会是什么？</span>

<div mt-16 />

<div flex flex-col gap-12>

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-carbon:data-blob text-8xl /><span text-2xl>传输字节流数据</span>
    </div>
  </div>
  <div
    v-after pl-14 pr-14 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'" delay-1000
  >
    <div flex items-center gap-6>
      <div i-carbon:ibm-cloud-event-notification text-8xl /><span text-2xl>就近节点缓存</span>
    </div>
  </div>
</div>

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-carbon:chat-bot text-8xl /><span text-2xl>传输 Token 数据</span>
    </div>
  </div>
  <div
    v-after pl-14 pr-14 transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'" delay-1000
  >
    <div flex items-center gap-6>
      <div i-carbon:chart-bubble-packed text-8xl /><span text-2xl>就近节点缓存</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 语义化缓存

<span>如果我们把过去互联网时代的 CDN 概念放到 LLM 上会是什么？</span>

<div mt-6 />

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-carbon:barcode text-8xl /><span text-2xl>基于 Hash</span>
    </div>
  </div>
  <div
    v-after pl-14 pr-14 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'" delay-1000
  >
    <div flex items-center gap-6>
      <div i-carbon:function-math text-8xl /><span text-2xl>基于 语义向量</span>
    </div>
  </div>
</div>

<div flex flex-col gap-3 mt-6>

<v-clicks>

<div bg="emerald-800/20" border="2 solid emerald-600" rounded-lg flex-1 px-3 py-2>
  <div><span>如果命中哈希，则可完全抹平推理消耗时间</span></div>
  <div text="white/65" text-sm><span>不再需要进入 GPU 推理了</span></div>
</div>

<div bg="emerald-800/20" border="2 solid emerald-600" rounded-lg flex-1 px-3 py-2>
  <div><span>无状态分布式部署和计算</span></div>
  <div text="white/65" text-sm><span>可以应用在超大规模的推理集群上</span></div>
</div>

<div bg="emerald-800/20" border="2 solid emerald-600" rounded-lg flex-1 px-3 py-2>
  <div><span>无感集成</span></div>
  <div text="white/65" text-sm><span>在网关层可以实现，可以兼容任意上游模型，用户无需修改代码</span></div>
</div>

</v-clicks>

</div>

---
class: py-10
---

# 语义化缓存

<span>如果我们把过去互联网时代的 CDN 概念放到 LLM 上会是什么？</span>

在缓存命中率 20% 基准上：

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid lime-800" bg="lime-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-up h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>重复对话场景提速 99%</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-y-20' : 'translate-y-0'"
    rounded-lg
    border="2 solid green-800" bg="green-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:chevron-down h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>节约推理开销 95%</span>
    </div>
  </div>
</v-clicks>

</div>

<div mt-8 />

> [Reducing LLM costs and latency with semantic cache](https://portkey.ai/blog/reducing-llm-costs-and-latency-semantic-cache/)

---
class: py-10
---

# 语义化缓存

<span>如果我们把过去互联网时代的 CDN 概念放到 LLM 上会是什么？</span>

<v-clicks>

- 无需复杂的向量数据库部署，使用 Redis 即可实现
- 无需 GPU 硬件，向量搜索前的 embedding 可以使用 CPU 即可运行的模型
- 在 IoT 场景、客服场景、QA 帮助、文档解答等场景都可以广泛使用
- 无需修改现有模型，只需在网关层增加一层缓存即可
- 不依赖于特定的模型，可以适用于任何模型
- 所带来的性能提升和成本降低是最为显著的

</v-clicks>

---
class: py-10
---

# 命令式提示词 / Codebook

<span>LLM 负责决策，我们负责在现实世界中实现</span>

<div mt-36 />

<p text-center text="40px">
  具身智能
</p>

---
class: py-10
---

# 命令式提示词 / Codebook

<span>LLM 负责决策，我们负责在现实世界中实现</span>

命令机器人帮忙拿取杯子：

```json
{
  "action": "find_object",
  "object": "cup"
}
```

```json
{
  "action": "plot_path",
  "coordinates": [
    [0, 0, 0],
    [0, 0, 10]
  ]
}
```

```json
{
  "action": "move_forward",
  "vector": [0, 0, 10],
  "speed": 5
}
```

---
class: py-10
---

# 命令式提示词 / Codebook

<span>LLM 负责决策，我们负责在现实世界中实现</span>

<div mt-36 />

<p text-center text="40px">
  设计和实现 Codebook
</p>

<p text-center v-click text="white/50" text-sm>
  Codebook 就是 技能列表 和 对应的能力实现，也叫做 Code as policy
</p>

---
class: py-10
---

# 命令式提示词 / Codebook

<span>LLM 负责决策，我们负责在现实世界中实现</span>

可以指示 LLM 输出下列格式的命令：

```
find_object, cup
```

我们会知道 `find_object` 是一个能在我们预先定义好的 Codebook 中的动作，而 `cup` 是参数。
而接下来，我们就可以在 Codebook 中找到对应的实现，比如：

- 调用其他模型，比如 YOLOv5 检测物体
- 调用路径规划模型，规划路径
- 调用机器人控制模型，控制机器人移动

<div mt-6 />

> 拓展得更开一些，我们可以说
>
> - 通过强化学习，令另一个 LLM 和另一个数字孪生的机器人在上亿次的模拟环境中学习，然后生成 Codebook
> - 无需重复微调和训练，只需要给其他相同架构和相似能力的 LLM 配备可更新的 Codebook 即可

---
class: py-10
---

# 这和 Function calling 有何区别？

<span>为什么要用所谓 Codebook？</span>

- 在实体（具身智能）和虚拟模型控制（游戏）的场景中，没有足够运行超大模型的计算资源
- 因此 Function Calling 这样的结构化的能力很困难，相比于它而言，Codebook 只需要简单的文本能力
- 和 Function Calling 一样，同样的能力，对现实世界实时感知的能力，Codebook 是等价可以做到的
- Codebook 可以是
  - 一段代码
  - 一个指令映射
  - 另一个模型的输入
  - 一个机器人的控制指令

使用 Codebook 可以超脱于现在不受控的 LLM 输出会出现幻觉的问题，我们可以通过更加透明的外部代码来控制最终的结果

---
class: py-10
---

# Sum up

<span>如何提速？如何改进？如何热更新？</span>

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
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:intent-request-scale-in h-20 w-20 />
    </div>
    <div bg="lime-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>压缩量化</span>
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
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:drag-horizontal h-20 w-20 />
    </div>
    <div bg="green-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>KV Cache</span>
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
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:radar h-20 w-20 />
    </div>
    <div bg="emerald-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>预测输出</span>
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
      <div i-carbon:chart-parallel h-20 w-20 />
    </div>
    <div bg="teal-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>语义化缓存</span>
    </div>
  </div>
  <div
    :class="$clicks < 5 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid cyan-800" bg="cyan-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:character-patterns h-20 w-20 />
    </div>
    <div bg="cyan-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Codebook</span>
    </div>
  </div>
</v-clicks>

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
