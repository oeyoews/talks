---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: No More Runtime Setup! Let's Bundle, Distribute, Deploy, Scale LLMs Seamlessly with Ollama Operator
exportFilename: KubeCon HK 2024.08 - Ollama Operator
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 458
---

<div translate-x--30>

# No More Runtime Setup!

Let's Bundle, Distribute, Deploy, Scale LLMs Seamlessly with Ollama Operator

DaoCloud Fanshi Zhang

</div>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
Hi!

And greetings to everyone attended our session here.

In today's session, me, Fanshi Zhang, with another amazing software engineer Kebe Liu here will be presenting our work on some of the works we have done so far on distributed training of AI and workloads.

But, don't worry if you are not familiar with machine learning or distribution training , we will get you covered when introducing the concepts.
-->

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
      <img src="/DaoCloud.svg" h-40 />
    </div>
  </div>
  <div
    v-after pl-15 pr-15 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'scale-80' : 'scale-100'"
  >
    <div i-carbon:close text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x-20' : 'translate-x-0'"
  >
    <div flex items-center gap-6>
      <div i-devicon:kubernetes inline-block text-6xl /> <span text-4xl text="[#5791f7]">Kubernetes</span>
    </div>
  </div>
</div>

<!--
Before we start, let's introduce ourselves.

[click] We are the software engineers come from DaoCloud. We are primarily focusing on field where we will cohere [click] Kubernetes and AI workloads together.
-->

---
layout: intro
class: px-35
glowSeed: 205
---

<div flex>
  <div
    v-click="1" flex flex-col items-start transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <img src="/person/neko.jpeg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Fanshi Zhang</span>
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
  <div
    v-click="2" flex flex-col items-end transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-x-20' : 'translate-x-0'"
  >

  </div>
</div>

<!--
As background, [click] Kebe Liu is one of the member of Istio Steering Committee, while working on AI stuff, he is also focusing on cloud-native and Istio, eBPF and other areas in recent years.

[click] Me, Fanshi Zhang, I am a software engineer at DaoCloud, focusing on AI and Kubernetes. I am also a contributor to the Kubernetes community.
-->

---
layout: intro
class: px-35
glowSeed: 205
---

<div flex>
  <div flex-1>
    <h1 mb="0!">The Challenge</h1>
    <span text="sm white/50 nowrap">Deploying and scaling LLMs is complex</span>
  </div>
</div>

<!--
Deploying large language models involves complex setups and management.
-->

---
class: py-10
---

# Model Distributing 101

<span>Overview of steps</span>

<div mt-10 />

<div flex items-center gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid sky-800/30" bg="sky-900/10"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-12 flex items-center justify-center>
      <div i-carbon:number-1 h-30 w-30 />
    </div>
    <div bg="sky-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-sm>
      <span>Train pre-trained models</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid blue-800/30" bg="blue-900/10"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-12 flex items-center justify-center>
      <div i-carbon:number-2 h-30 w-30 />
    </div>
    <div bg="blue-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Train LoRA</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid indigo-800/30" bg="indigo-900/10"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-12 flex items-center justify-center>
      <div i-carbon:number-3 h-30 w-30 />
    </div>
    <div bg="indigo-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Merge weights</span>
    </div>
  </div>
  <div
    :class="$clicks < 4 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid purple-800/30" bg="purple-900/10"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-12 flex items-center justify-center>
      <div i-carbon:number-4 h-30 w-30 />
    </div>
    <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Quantize</span>
    </div>
  </div>
</v-clicks>

</div>

<!--
Discuss why distributing models is challenging, including dependencies and environment setup.
-->

---
class: py-10
glow: bottom
glowSeed: 368
---

# Model Distributing 101

<span>Ways to deploy models</span>

<div mt-24 />

<div flex items-center gap-30 justify-center>

<v-clicks>
  <div flex flex-col items-center gap-2>
    <div i-carbon:folder-details-reference text-8xl text-white />
    <span>Mount with Volumes</span>
  </div>
  <div flex flex-col items-center gap-2>
    <div i-carbon:data-categorical text-8xl text-white />
    <span>Bundle into images</span>
  </div>
</v-clicks>

</div>

<!--
So, why do failures occur?

Before we get into the rabbit hole any further, let's take a look at the common [click] hardware failures, [click] network issues, [click] or even software bugs.
-->

---
class: py-10
---

# Model Distributing 101

<span>Challenges and complexities</span>

<div mt-10 />

<div flex>

<div flex items-center justify-center flex-col>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out mt-2
    :class="$clicks < 1 ? 'translate-y--20' : 'translate-y-0'"
  >
    <div flex items-center gap-2 flex-col>
      <div i-carbon:cics-system-group text-7xl /><span text-xl>Weights</span>
    </div>
  </div>
  <div
    v-after pl-20 pr-20 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-y--20' : 'translate-y-0'"  delay-250
    my-4
  >
    <div i-carbon:arrow-down text-4xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-y--20' : 'translate-y-0'" delay-500
  >
    <div flex items-center gap-2 flex-col>
      <div i-carbon:chart-relationship text-7xl /><span text-xl>Nodes</span>
    </div>
  </div>
</div>

<div flex flex-col gap-3 mt-3>

<v-clicks>

<div bg="indigo-800/20" border="2 solid indigo-600" rounded-lg flex-1 px-3 py-2 flex flex-col justify-center>
  <div><span>Weights are large</span></div>
  <div text-zinc-400 text-sm><span>LLAMA 2 has roughly 83GB of weight & parameter files</span></div>
</div>

<div bg="indigo-800/20" border="2 solid indigo-600" rounded-lg flex-1 px-3 py-2 flex flex-col justify-center>
  <div><span>Distribute weights across deploying worker nodes</span></div>
  <div text-zinc-400 text-sm><span>Inference server is distributed, each of worker node requires dedicated copy of weights</span></div>
</div>

<div bg="indigo-800/20" border="2 solid indigo-600" rounded-lg flex-1 px-3 py-2 flex flex-col justify-center>
  <div><span>Caching and cold boot for serverless and edge scenarios</span></div>
  <div text-zinc-400 text-sm><span>For serverless scenarios like WasmEdge, IoT, Ray, rolling update models is a challenge</span></div>
</div>

</v-clicks>

</div>

</div>

---
class: py-10
---

# Model Serving 101

<span>Bringing models to production</span>

<div mt-10 />

<div class="flex gap-6 text-gray-300">

<v-clicks>
  <div
    class="relative overflow-hidden flex flex-col border-2 border-solid border-black/5 rounded-xl bg-black/50 p-8 shadow-lg w-[33%]"
    transition-all duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <h3 class="mb-2 font-semibold text-pink-400">Complex dependencies</h3>
    <p class="m-0! flex-1">Managing dependencies across environments can be tedious and error-prone.</p>
    <div class="relative mt-10">
      <div i-twemoji:face-with-spiral-eyes h-20 w-20 relative z-2 />
    </div>
    <div class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/80"></div>
  </div>

  <div
    class="relative overflow-hidden flex flex-col border-2 border-solid border-black/5 rounded-xl bg-black/50 p-8 shadow-lg w-[33%]"
    transition-all duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
  >
    <h3 class="mb-2 font-semibold text-rose-400">Environment setup</h3>
    <p class="m-0! flex-1">Setting up environments with Python, CUDA, and more is complex and time-consuming.</p>
    <div class="relative mt-10">
      <div i-twemoji:face-screaming-in-fear h-20 w-20 relative z-2 />
    </div>
    <div class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/80"></div>
  </div>

  <div
    class="relative overflow-hidden flex flex-col border-2 border-solid border-black/5 rounded-xl bg-black/50 p-8 shadow-lg w-[33%]"
    transition-all duration-500 ease-in-out
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
  >
    <h3 class="mb-2 font-semibold text-orange-400">Distribution overhead</h3>
    <p class="m-0! flex-1">Distributing large models efficiently remains a significant challenge.</p>
    <div class="relative mt-10">
      <div i-twemoji:pleading-face h-20 w-20 text-orange-300 relative z-2 />
    </div>
    <div class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/80"></div>
  </div>
</v-clicks>

</div>

---
class: py-10
---

<h1 flex items-center>
  <span flex-1>Model Serving 101</span>
  <span text="[#64b023]"><div inline-block translate-y-1.2 mr-2 i-bi:nvidia />NVIDIA Triton</span>
</h1>

<span>Bringing models to production</span>

<div mt-10 />

This is how Triton Inference Server can be used to serve models:

```shell {|7,11-12}
# Step 1: Create the example model repository
git clone -b r24.07 https://github.com/triton-inference-server/server.git
cd server/docs/examples
./fetch_models.sh

# Step 2: Launch triton from the NGC Triton container
docker run --gpus=1 --rm --net=host -v ${PWD}/model_repository:/models nvcr.io/nvidia/tritonserver:24.07-py3 tritonserver --model-repository=/models

# Step 3: Sending an Inference Request
# In a separate console, launch the image_client example from the NGC Triton SDK container
docker run -it --rm --net=host nvcr.io/nvidia/tritonserver:24.07-py3-sdk
/workspace/install/bin/image_client -m densenet_onnx -c 3 -s INCEPTION /workspace/images/mug.jpg
```

---
class: py-10
---

<h1 flex items-center>
  <span flex-1>Model Serving 101</span>
  <span text="[#f6432f]"><div inline-block mr-1 translate-y-0.8 i-devicon:pytorch />TorchServe</span>
</h1>

<span>Bringing models to production</span>

<div mt-10 />

This is how Triton Inference Server can be used to serve models:

```shell {|7,11-12}
# Step 1: Create the example model repository
git clone -b r24.07 https://github.com/triton-inference-server/server.git
cd server/docs/examples
./fetch_models.sh

# Step 2: Launch triton from the NGC Triton container
docker run --gpus=1 --rm --net=host -v ${PWD}/model_repository:/models nvcr.io/nvidia/tritonserver:24.07-py3 tritonserver --model-repository=/models

# Step 3: Sending an Inference Request
# In a separate console, launch the image_client example from the NGC Triton SDK container
docker run -it --rm --net=host nvcr.io/nvidia/tritonserver:24.07-py3-sdk
/workspace/install/bin/image_client -m densenet_onnx -c 3 -s INCEPTION /workspace/images/mug.jpg
```

---
layout: intro
class: px-35
glowSeed: 205
---

<div flex gap-4 mt-4>

<div flex>
  <div flex-1>
    <h1 mb="0!">Ollama</h1>
    <span text="sm white/50 nowrap">Universal solution to model bundling, distributing, serving, etc.</span>
  </div>
</div>

<!--
Deploying large language models involves complex setups and management.
-->

<div flex flex-col gap-4>

<v-clicks>
  <div
    :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
    rounded-lg
    border="2 solid purple-800/30" bg="purple-900/30"
    shadow-lg
    transition duration-500 ease-in-out
    flex
    h-12
  >
    <div px-2 py-2 flex items-center justify-center>
      <div i-carbon:plane h-6 w-6 />
    </div>
    <div bg="purple-800/30" w-full px-3 py-2 flex items-center justify-center text-center font-bold>
      <span>Lightweight</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'opacity-0' : 'opacity-100'"
    rounded-lg
    border="2 solid indigo-800/30" bg="indigo-900/30"
    shadow-lg
    transition duration-500 ease-in-out
    flex
    h-12
  >
    <div px-2 py-2 flex items-center justify-center>
      <div i-carbon:globe h-4 w-6 />
    </div>
    <div bg="indigo-800/30" w-full px-3 py-2 flex items-center justify-center text-center font-bold>
      <span>Universal & Compatible</span>
    </div>
  </div>
</v-clicks>

</div>

</div>

---
class: py-10
---

# Ollama - Bundling Models

<span>Universal bundling</span>

<div mt-10 />

```shell
# Create a new model
ollama create mymodel -f ./Modelfile

# Pull an existing model
ollama pull llama2

# List available models
ollama list

# Run a model
ollama run llama2 "Tell me a joke about programming"
```

---
class: py-10
---

# Ollam- LoRA, Customizing, Prompting

<span>Integrating LoRA for training</span>

<div mt-10 />

```shell
# Modelfile with LoRA
FROM llama2
ADAPTER ./path/to/lora/weights.bin

# Create the model with LoRA
ollama create mylora -f ./Modelfile

# Run the model with custom prompts
ollama run mylora "Translate this to French: Hello, world!"
```

---
class: py-10
glowSeed: 128
---

# Ollama - Distributing

<span>Just like OCI images</span>

<div mt-20 />

<div flex items-center justify-center gap-5>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div flex items-center gap-6 flex-col>
      <div i-carbon:cloud-upload text-5xl />
      <div px-2 py-2 backdrop-blur bg="black/20" rounded-lg w-fit text-sm>
        <pre>ollama push [model name]</pre>
      </div>
    </div>
  </div>
  <div
    v-after transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-5xl />
  </div>
  <div
    v-after transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div flex items-center gap-6 flex-col>
      <img src="/harbor-horizontal-color.png" h-14 w-auto />
      <div px-2 py-2 w-fit text-sm translate-y--1>
        OCI Registry
      </div>
    </div>
  </div>
  <div
    v-after transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"  delay-500
  >
    <div i-carbon:arrow-right text-5xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'" delay-1000
  >
    <div flex items-center gap-6 flex-col>
      <div i-carbon:cloud-download text-5xl />
      <div px-2 py-2 backdrop-blur bg="black/20" rounded-lg w-fit text-sm>
        <pre>ollama push [model name]</pre>
      </div>
    </div>
  </div>
</div>

<div
  v-click="1" transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'translate-y-20' : 'translate-y-0'" delay-1000
  border="2 solid violet-800/50" rounded-lg mt-10
>
  <div flex items-center bg="violet-800/30" px-3 py-2 text-violet-300>
    <div i-carbon:container-software text-sm mr-1 />
    <div text-xs>
      <em>OCI ready</em>
    </div>
  </div>
  <div bg="violet-800/10" px-4 py-3>
    <div>
      <span>
        OCI-Compatible Distribution
      </span>
    </div>
    <div text-xs flex gap-2 mt-1 text-zinc-400>
      Ollama uses OCI-compatible formats for easy integration with existing container workflows
    </div>
  </div>
</div>

---
class: py-10
---

# Ollama - Serving

<span>Just like OCI images</span>

<div mt-10 />

<div flex flex-col items-center gap-12 mt-4>
  <span>One simple command, across all platforms, environments.</span>
  <div px-6 py-3 backdrop-blur bg="black/20" rounded-lg w-fit>
    <pre>ollama run [model name]</pre>
  </div>
</div>

<div mt-16 flex justify-center items-center gap-8>
  <div flex flex-col items-center>
    <div class="i-simple-icons:linux" text-5xl text-white />
    <span mt-2 text-sm>Linux</span>
  </div>
  <div flex flex-col items-center>
    <div class="i-devicon:apple?mask" text-5xl text-white />
    <span mt-2 text-sm>macOS</span>
  </div>
  <div flex flex-col items-center>
    <div class="i-devicon:windows11?mask" text-5xl text-white />
    <span mt-2 text-sm>Windows</span>
  </div>
  <div flex flex-col items-center>
    <div i-carbon:chip text-5xl />
    <span mt-2 text-sm>CPU</span>
  </div>
  <div flex flex-col items-center>
    <div i-carbon:iot-platform text-5xl />
    <span mt-2 text-sm>IoT</span>
  </div>
  <div flex flex-col items-center>
    <div i-bi:gpu-card text-5xl />
    <span mt-2 text-sm>GPU</span>
  </div>
</div>

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
  <img src="/OllamaOperator.png" w-18 mr-5 />
  <span>Ollama Operator</span>
</h1>

</div>

<div text-xs mt-20>
  <span>One simple intall-to-go plugin solution that brings Ollama to your Kubernetes clusters</span>
</div>

</v-clicks>

</div>

<!--
Since we have spent our time on layering concepts and knowledges, let's see what we have done so far.

[click] Introducing Ollama Operator.

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
    border="2 solid purple-800" bg="purple-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:carbon-for-ibm-product h-20 w-20 />
    </div>
    <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Model caching</span>
    </div>
  </div>
  <div
    :class="$clicks < 2 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid violet-800" bg="violet-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:circle-packing h-20 w-20 />
    </div>
    <div bg="violet-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Model Preloading</span>
    </div>
  </div>
  <div
    :class="$clicks < 3 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid indigo-800" bg="indigo-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:category-new-each h-20 w-20 />
    </div>
    <div bg="indigo-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Distributed replicas</span>
    </div>
  </div>
  <div
    :class="$clicks < 4 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid blue-800" bg="blue-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:data-backup h-20 w-20 />
    </div>
    <div bg="blue-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center text-base>
      <span>Resource limit</span>
    </div>
  </div>
  <div
    :class="$clicks < 5 ? 'translate-x--20' : 'translate-x-0'"
    rounded-lg
    border="2 solid sky-800" bg="sky-800/20"
    backdrop-blur
    flex-1 h-full
    transition duration-500 ease-in-out
  >
    <div px-5 py-16 flex items-center justify-center>
      <div i-carbon:kubernetes-operator h-20 w-20 />
    </div>
    <div bg="sky-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Operator automation</span>
    </div>
  </div>
</v-clicks>

</div>

---
class: py-10
---

# Any Kubernetes clusters

<span>No extra plugins, no extra CRDs, no worries!</span>

<div mt-10 />

<div class="grid grid-cols-3 gap-4">
  <v-click>
    <div class="bg-blue-800/20 border-2 border-blue-600 rounded-lg p-4 flex flex-col items-center">
      <div i-carbon:logo-kubernetes text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Kuberneted</h3>
      <p class="text-sm text-center">Works with any certified Kubernetes cluster</p>
    </div>
  </v-click>

  <v-click>
    <div class="bg-indigo-800/20 border-2 border-indigo-600 rounded-lg p-4 flex flex-col items-center">
      <div i-carbon:cloud-app text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Cloud Agnostic</h3>
      <p class="text-sm text-center">Deploy on any cloud provider or on-premises, even Raspberry Pi</p>
    </div>
  </v-click>

  <v-click>
    <div class="bg-purple-800/20 border-2 border-purple-600 rounded-lg p-4 flex flex-col items-center">
      <div i-carbon:plug text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Plug and Play</h3>
      <p class="text-sm text-center">No additional plugins or CRDs required. Dependency...free?</p>
    </div>
  </v-click>
</div>

---
class: py-10
---

# How It Works

<span>Deploying models with Ollama Operator</span>

<img src="/architecture-theme-night.png" h-100 translate-x--2 />

---
class: py-10
---

# Watch it in live

<span>Light! Shot! Action!</span>

<NuAsciinemaPlayer
  src="/asciinema/demo.cast"
  :controls="'auto'"
  :rows="18"
  :speed="3"
  w-full
/>

---
class: py-10
---

# Scaling with Ease

<span>Effortless scalability</span>

<div mt-10 />

<v-clicks>

1. Update the `replicas` field in the Model CRD
2. Automatic load balancing
3. Resource optimization
4. Horizontal Pod Autoscaler (HPA) support

</v-clicks>

<v-click>

```yaml
apiVersion: ollama.ayaka.io/v1
kind: Model
metadata:
  name: llama2
spec:
  image: llama2
  replicas: 5  # Scale to 5 replicas
```

</v-click>

---
class: py-10
---

# Future

<span>Foresight from our perspective</span>

<div flex gap-4>

<div border="2 solid blue-600" bg="blue-800/40" rounded-lg min-h-70 w="[33%]">

<div rounded-t-lg bg="blue-800" px-4 py-3 flex items-center gap-2><div i-carbon:number-1 text-2xl />Documentations & CLI</div>

<div px-4 py-3 text-sm>

- Use cases
- Explain how to configure for advanced use cases
- Improve CLI to directly interact with `ollama`

</div>

</div>

<div border="2 solid indigo-600" bg="indigo-800/40" rounded-lg min-h-70 w="[33%]">

<div rounded-t-lg bg="indigo-800" px-4 py-3 flex items-center gap-2><div i-carbon:number-2 text-2xl />Automation</div>

<div px-4 py-3 text-sm>

- Better model pooling
- Predictive maintenance for model performance
- Real-time model health monitoring

</div>

</div>

<div border="2 solid purple-600" bg="purple-800/40" rounded-lg min-h-70 w="[33%]">

<div rounded-t-lg bg="purple-800" px-4 py-3 flex items-center gap-2><div i-carbon:number-3 text-2xl />Beyond</div>

<div px-4 py-3 text-sm>

- Seamless integration with popular ML frameworks
- Gateway, routing and load balancing support
- Cluster inference

</div>

</div>

</div>

<!--
TODO
-->

---
class: py-10
---

# Let's Build Together

<span>Join us in shaping the future of LLM deployment</span>

<div flex justify-center>
  <div
    v-click="1" flex items-start transition duration-500 ease-in-out gap-30
    :class="$clicks < 1 ? 'translate-x--20' : 'translate-x-0'"
  >
    <div mt-4 flex flex-col items-center>
      <img src="/ollama-operator-repository-qr.png" w-60 />
      <div text-2xl flex items-center gap-2>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>GitHub</span>
      </div>
    </div>
    <div mt-4 flex flex-col items-center>
      <img src="/ollama-operator-docs-qr.png" w-60 />
      <div text-2xl flex items-center gap-2>
        <div i-carbon:book /><span underline decoration-dashed font-mono decoration-zinc-300>Documentation</span>
      </div>
    </div>
  </div>
</div>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
TODO
-->

---
class: py-10
---

# To community

<span>Let's improve it together</span>

<!--
TODO
-->

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

---
class: py-10
glowSeed: 230
---

# Thank You!

<span>Let's revolutionize LLM deployment together</span>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
Thank you for joining us. Let's work together to make LLM deployment seamless!
-->
