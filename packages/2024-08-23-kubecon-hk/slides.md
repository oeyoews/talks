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

And greetings to everyone attended my session here.

In today's session, me, Fanshi Zhang, will introduce the amazing tool called Ollama to serve models, along with the associated operator to deploy and scale LLMs seamlessly.
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

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
Before we start, let's introduce where I am working now.

[click] I am from DaoCloud. We are primarily focusing on field where we will cohere Kubernetes and AI workloads together.
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
    <img src="/person/neko.jpeg" w-40 h-40 rounded-full object-cover mb-5>
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

<!--
I know it's kind of boring to listen the talks for three days.
I believe a quick demo will show you what we are talking about.

And... the potentials.

What we doing here is to quickly deploy a model with Ollama on a kind created cluster.

And be able to use ollama's official cli to interact with the deployed model.

...I... hope this will give you a better understanding of what we are talking about.
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
Let's get to the journey.

As being in the role of infra team as well as AI team, many of you may understand that deploying large language models involves complex setups and management.
-->

---
class: py-10
clicks: 2
transition: 'none'
---

# Machine Learning 101

<span>Let's start with the basics</span>

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
I know some of you may have seen this, but let's go through it again. From the basics. I will go through this really fast.

[click] So, In machine learning, model is basically a set of matrix and vectors, which is used to predict the output based on the input data.

Say, we have a set of vectors

[click] Apparently that's not the whole picture, so let's zoom out a little bit.
-->

---
class: py-10
---

# Machine Learning 101

<span>Let's start with the basics</span>

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
This is the "visualization" of fundamental building block of every models. (or Hinton diagram if you like).

With that, the concept of training, serving is just doing the work to split data into different slices and blocks (which we call batches), what to do? [click] we will then feed them into the [click] CPU or GPU hardware devices to do the computation as well as inference.

That's it, as simple as you may imagined.
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
      <div i-carbon:hexagon-outline h-30 w-30 />
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
      <div i-carbon:continuous-integration h-30 w-30 />
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
      <div i-carbon:ibm-z-cloud-mod-stack rotate-90 h-30 w-30 />
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
      <div i-carbon:pentagon-outline h-30 w-30 />
    </div>
    <div bg="purple-800/30" w-full px-4 py-2 h="5rem" flex items-center justify-center text-center>
      <span>Quantize</span>
    </div>
  </div>
</v-clicks>

</div>

<!--
Then let's talk about how to deploy and publish models, to understand why distributing models is challenging.

[click] Step one, will be training, obviously.

[click] Perhaps you may need a LoRA for fundamental models.

[click] When we have the LoRA, we will merge the weights.

[click] For running and performance on different devices, we will quantize the weights.
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
That's the steps to produce a model.

What do we do for mounting and deploying models?

There are actually two ways in practice.

[click] One is to mount the model with volumes.

[click] While another option is to bundle the model into images.

But that comes problems.
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

<!--
[click] Personally I think there is a limit, or boundaries.

[click] When distributing models, if we are gonna to bundle all of them into the images, what will happen? Models are large, if every node will pull the new 83GB of Llama 2 model separately, it will be a huge overhead, where to store them? Can Dragonfly handle this?

[click] No matter what method we use, how can we effectively to have every needed nodes to have the weights? Again, can Dragonfly do? Or we need to have a dedicated storage for this? How many storages are needed for control plane nodes?

[click] And, for serverless and edge scenarios, how can we handle the cold boot and caching? Rolling update models is a challenge, how can we do this?

Ok, that leaves questions.
-->

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

<!--
Is that the end? No! Absolutely not. Serving is waiting for us.

[click] Managing dependencies across environments can be tedious and error-prone.

[click] I bet many of you have experienced it already, is, setting up environments of Python, CUDA, conda, mamba, blah, blah are quite complex and time-consuming, more often, the installation process may take more times than just tweaking the codes and fixing the bugs.

[click] Last one is getting the model, which I've showed you already, there's still a lot work to do.
-->

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

<!--
That's the concepts, let's get into some real use cases.

A triton serving example is shown here, which is a popular model serving tool made by NVIDIA.

How many steps would it take?

Quite simple. But notice, it's ONLY one portion of the whole process, ONLY serves for the serving part.
-->

---
class: py-10
---

<h1 flex items-center>
  <span flex-1>Model Serving 101</span>
  <span text="[#f6432f]"><div inline-block mr-1 translate-y-0.8 i-devicon:pytorch />TorchServe</span>
</h1>

<span>Bringing models to production</span>

<div mt-10 />

This is how TorchServe can be used to serve models:

```shell
python ./ts_scripts/install_dependencies.py --cuda=cu121

conda install torchserve torch-model-archiver torch-workflow-archiver -c pytorch

git clone https://github.com/pytorch/serve.git

mkdir model_store

wget https://download.pytorch.org/models/densenet161-8d451a50.pth

torchserve --start --ncs --model-store model_store --models densenet161.mar

pip install -U grpcio protobuf grpcio-tools

python -m grpc_tools.protoc --proto_path=frontend/server/src/main/resources/proto/ --python_out=ts_scripts --grpc_python_out=ts_scripts frontend/server/src/main/resources/proto/inference.proto frontend/server/src/main/resources/proto/management.proto

python ts_scripts/torchserve_grpc_client.py infer densenet161 examples/image_classifier/kitten.jpg
```

<!--
Okay... what about torchserve?

That's a lot.

I know that's a framework, but still, there are so many steps that we can automate and simplify.

I know some of the companies internal tools are doing this, but what about the open source community? Not very much.

Hey, where is distributing and bundling?

But I'm here to introduce you a famously known tool called Ollama.
-->

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

<!--
A tool that simplifies the process of transforming, merging, composing, deploying and serving for large language models.

It's lightweighted enough to have single binary to ship, without literally no dependencies.

It's universal, works on pretty much every known platforms, so the boundaries of hardware and drivers are no longer a problem.
-->

---
class: py-10
---

# Ollama - LoRA, Customizing, Prompting

<span>Just easy as Dockerfile</span>

<div mt-10 />

<div>

```shell
# Modelfile with LoRA
FROM llama3
ADAPTER ./path/to/lora/weights.bin
```

```shell
# Modelfile with Parameters
FROM llama3
PARAMETER temperature 0.3
```

```shell
# Modelfile with Prompt
FROM llama3
SYSTEM """You are a helpful assistant that introduces Kubernetes and KubeCon events."""
```

</div>

<!--
This is how you can customize the model with Ollama.

You can add multiple layers of LoRA.

You can pre-configure the parameters.

And even prompt engineering, and pre-configure the system messages.
-->

---
class: py-10
---

# Ollama - `Dockerfile` like `Modelfile`

<span>All in one</span>

<div mt-10 />

<div>

```shell
FROM llama3

ADAPTER ./path/to/lora/weights.bin
PARAMETER temperature 0.3

SYSTEM """You are a helpful assistant that introduces Kubernetes and KubeCon events."""
MESSAGE system "Ollama Operator is made by nekomeowww"
```

<div mt-4 />

> build it the same as `docker`

<div mt-4 />

```shell
# Create a new model
ollama create mymodel -f ./Modelfile
```

</div>

<div text-xl flex items-center justify-center mt-10>

<div i-carbon:checkmark-filled text-green-400 inline-block mr-4 /><span>All compatible with OCI standards</span>

</div>

<!--
As you see, the structure of the file, and the syntax is the same as Dockerfile.

And yes, the way to build and bundle the images is the same as Docker.

While it's still compatible with OCI standards.

If it's compatible to OCI standards, can we re-use the registry?

The answer is yes.
-->

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

<!--
Just like Docker, Ollama can push and pull the models to the registry.

If you have Harbor, that's all you need. Push and pull. Distribution is done.
-->

---
class: py-10
---

# Ollama - Serving

<span>Just like Docker containers</span>

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

<!--
What about serving? Is it the same as Docker?

Hard to distinguish, a single run command, made it easy to serve across all platforms, environments.
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

<!--
Just forget about the downsides of Ollama and challenges, let's talk about the features that Ollama Operator brings.

We got [click] model caching, [click] model preloading, [click] scaling with replicas, [click] apply correct resource limit, and [click] achieve operator automation.

Why?

I do know that Ollama currently supported model pooling, preloading and swapping. But, actually, back in the days when I was working on Ollama Operator, they are not supported.

For the other problems, for general Ollama servers, there is no way to set the resource limit, and even assign GPUs to it. WHich makes it hard to control.

And what if you want to create a model mesh for the models? It is not possible for just Ollama, we here brought the power of Deployment and replicas to help to scale the models, and have multiple different models run simultaneously.
-->

---
class: py-10
---

# Any Kubernetes clusters

<span>No extra plugins, no extra CRDs, no worries!</span>

<div mt-10 />

<div class="flex items-stretched gap-4">
  <v-click>
    <div class="bg-sky-800/20 border-2 border-sky-600 rounded-lg p-4 flex flex-col items-center" w="[25%]">
      <div i-carbon:logo-kubernetes text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Kuberneted</h3>
      <p class="text-sm text-center">Works with any certified Kubernetes cluster, <code>kind</code>, <code>k3s</code>, <code>minikube</code>, k8s, all work the same</p>
    </div>
  </v-click>

  <v-click>
    <div class="bg-indigo-800/20 border-2 border-indigo-600 rounded-lg p-4 flex flex-col items-center" w="[25%]">
      <div i-carbon:cloud-app text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Cloud agnostic</h3>
      <p class="text-sm text-center">Deploy on any cloud provider or on-premises.<br>I have it in my homelab, for tons of models</p>
    </div>
  </v-click>

  <v-click>
    <div class="bg-indigo-800/20 border-2 border-indigo-600 rounded-lg p-4 flex flex-col items-center" w="[25%]">
      <div i-carbon:iot-platform text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">IoT friendly</h3>
      <p class="text-sm text-center">Deploy on any cloud provider or on-premises, even <span><div i-logos:raspberry-pi inline-block translate-y-0.5 /> <span text="[#e25773]">Raspberry Pi</span></span></p>
    </div>
  </v-click>

  <v-click>
    <div class="bg-purple-800/20 border-2 border-purple-600 rounded-lg p-4 flex flex-col items-center" w="[25%]">
      <div i-carbon:plug text-6xl my-4 />
      <h3 class="text-xl font-bold mb-2">Plug and Play</h3>
      <p class="text-sm text-center">No additional plugins or CRDs required. Dependency...free?</p>
    </div>
  </v-click>
</div>

<!--
Besides all of that.

[click] I made it "kuberneted", which means the Ollama Operator works with any certified Kubernetes cluster, kind, k3s, minikube, k8s, all work the same.

[click] It's cloud agnostic, deploy on any cloud provider or on-premises. I have it in my homelab, for tons of models.

[click] It's IoT friendly, deploy on any cloud provider or on-premises, even Raspberry Pi.

[click] Loads of the operators requires additional plugins or CRDs, but not Ollama Operator.

I made it as simple as possible, no additional plugins or CRDs required. Which is another zero-dependency design.
-->

---
class: py-10
---

# Get it, now

<span>Ready to use, easy to go</span>

<div mt-4 />

<v-click>

#### Install

```shell
kubectl apply -f https://raw.githubusercontent.com/nekomeowww/ollama-operator/main/dist/install.yaml
```

</v-click>

<div mt-4 />

<v-click>

#### Create

```shell
apiVersion: ollama.ayaka.io/v1
kind: Model
metadata:
  name: phi
spec:
  image: phi
```

</v-click>

<div mt-4 />

<v-click>

#### Connect

```shell
kubectl port-forward svc/ollama-model-phi ollama
OLLAMA_HOST="<node-ip>:11434" ollama run phi "Translate this to French: Hello, world!"
```

</v-click>

<!--
It's easy to use, install the operator controller, create the model CR, that's it.
-->

---
class: py-10
---

# New to Kubernetes YAML manifests?

<span>No worries, backup plans ready</span>

<div mt-4 />

<v-click>

#### Install

```shell
go install github.com/nekomeowww/ollama-operator/cmd/kollama@latest
```

</v-click>

<div mt-4 />

<v-click>

#### Create

```shell
kollama deploy phi --expose --node-port 30101
```

</v-click>

<div mt-4 />

<v-click>

#### Connect

```shell
OLLAMA_HOST=<Node ip>:30101 ollama run phi
```

</v-click>

<!--
Dislike the taste of Kubernetes YAML manifests?

I made a CLI called kollama to help you to deploy the models.

It's also a kubectl plugin too, so you can use it as a kubectl sub-command too.
-->

---
class: py-10
---

# Scaling with Ease

<span>Effortless scalability</span>

<div mt-10 />

Single one patch, scale to 5 replicas:

<v-click>

```yaml {|7}
apiVersion: ollama.ayaka.io/v1
kind: Model
metadata:
  name: llama2
spec:
  image: llama2
  replicas: 5  # Scale to 5 replicas
```

</v-click>

<!--
Scaling is easy too, just a single patch, you can scale the model to 5 replicas.
-->

---
class: py-10
---

# How It Works

<span>Deploying models with Ollama Operator</span>

<div scale-80 translate-x--20 translate-y--10>

<svg width="1094" height="436" viewBox="0 0 1094 436" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="270" y="370" width="669" height="65" rx="7" fill="#14532D" fill-opacity="0.4"/>
<rect x="270" y="370" width="669" height="65" rx="7" stroke="#22C55E" stroke-width="2"/>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="5.25" letter-spacing="0em"><tspan x="545.325" y="410.136">Shared PVC</tspan></text>
<g clip-path="url(#clip0_454_522)">
<rect y="436" width="427" height="67" rx="33.5" transform="rotate(-90 0 436)" fill="#581C87" fill-opacity="0.4"/>
<text transform="matrix(0 -1 1 0 21.5 436)" fill="white" xml:space="preserve" style="white-space: pre" font-size="5" letter-spacing="0em"><tspan x="109.906" y="19.2727">Kubernetes APIServer</tspan></text>
</g>
<rect x="1" y="435" width="425" height="65" rx="32.5" transform="rotate(-90 1 435)" stroke="#A855F7" stroke-width="2"/>
<rect x="116" y="10" width="61" height="425" rx="30.5" fill="#1E3A8A" fill-opacity="0.4"/>
<rect x="116" y="10" width="61" height="425" rx="30.5" stroke="#3B82F6" stroke-width="2"/>
<text transform="matrix(0 -1 1 0 132 278.5)" fill="white" xml:space="preserve" style="white-space: pre" font-size="6" letter-spacing="0em"><tspan x="0" y="23.2273">Controller</tspan></text>
<rect x="1032" y="10" width="61" height="425" rx="30.5" fill="#871C63" fill-opacity="0.4"/>
<rect x="1032" y="10" width="61" height="425" rx="30.5" stroke="#F755C0" stroke-width="2"/>
<text transform="matrix(0 1 -1 0 1077.5 152.5)" fill="white" xml:space="preserve" style="white-space: pre" font-size="6" letter-spacing="0em"><tspan x="0.449226" y="23.2273">Applications</tspan></text>
<rect x="270" y="10" width="228" height="329" rx="7" fill="#1E3A8A" fill-opacity="0.4"/>
<rect x="270" y="10" width="228" height="329" rx="7" stroke="#3B82F6" stroke-width="2"/>
<text transform="translate(320.5 143.5)" fill="white" xml:space="preserve" style="white-space: pre" font-size="6" letter-spacing="0em"><tspan x="0.289066" y="23.2273">Model Pool</tspan></text>
<text transform="translate(320.5 186.5)" fill="white" xml:space="preserve" style="white-space: pre" font-size="4.25" letter-spacing="0em"><tspan x="24.4063" y="15.3182">ollama run</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="4.5" letter-spacing="0em"><tspan x="290.109" y="47.5455">StatefulSet</tspan></text>
<rect x="637" y="250" width="302" height="89" rx="7" fill="#581C87" fill-opacity="0.4"/>
<rect x="637" y="250" width="302" height="89" rx="7" stroke="#A855F7" stroke-width="2"/>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="4.5" letter-spacing="0em"><tspan x="717.679" y="290.045">Inference Server</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="3" letter-spacing="0em"><tspan x="645.416" y="268.864">Deployment</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="2.5" letter-spacing="0em"><tspan x="732.487" y="314.136">ollama pull &#38; ollama run</tspan></text>
<rect x="637" y="10" width="302" height="89" rx="7" fill="#581C87" fill-opacity="0.4"/>
<rect x="637" y="10" width="302" height="89" rx="7" stroke="#A855F7" stroke-width="2"/>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="4.5" letter-spacing="0em"><tspan x="717.679" y="50.0455">Inference Server</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="2.5" letter-spacing="0em"><tspan x="732.487" y="74.1364">ollama pull &#38; ollama run</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="3" letter-spacing="0em"><tspan x="645.416" y="28.8636">Deployment</tspan></text>
<rect x="637" y="130" width="302" height="89" rx="7" fill="#581C87" fill-opacity="0.4"/>
<rect x="637" y="130" width="302" height="89" rx="7" stroke="#A855F7" stroke-width="2"/>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="4.5" letter-spacing="0em"><tspan x="717.679" y="170.045">Inference Server</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="3" letter-spacing="0em"><tspan x="645.416" y="148.864">Deployment</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="2.5" letter-spacing="0em"><tspan x="732.487" y="194.136">ollama pull &#38; ollama run</tspan></text>
<path d="M530.707 55.7071C531.098 55.3166 531.098 54.6834 530.707 54.2929L524.343 47.9289C523.953 47.5384 523.319 47.5384 522.929 47.9289C522.538 48.3195 522.538 48.9526 522.929 49.3431L528.586 55L522.929 60.6569C522.538 61.0474 522.538 61.6805 522.929 62.0711C523.319 62.4616 523.953 62.4616 524.343 62.0711L530.707 55.7071ZM508 56H509.833V54H508V56ZM513.5 56H517.167V54H513.5V56ZM520.833 56H524.5V54H520.833V56ZM528.167 56H530V54H528.167V56ZM530.707 55.7071C531.098 55.3166 531.098 54.6834 530.707 54.2929L524.343 47.9289C523.953 47.5384 523.319 47.5384 522.929 47.9289C522.538 48.3195 522.538 48.9526 522.929 49.3431L528.586 55L522.929 60.6569C522.538 61.0474 522.538 61.6805 522.929 62.0711C523.319 62.4616 523.953 62.4616 524.343 62.0711L530.707 55.7071ZM508 56H509.833V54H508V56ZM513.5 56H517.167V54H513.5V56ZM520.833 56H524.5V54H520.833V56ZM528.167 56H530V54H528.167V56Z" fill="white"/>
<path d="M604 54C603.448 54 603 54.4477 603 55C603 55.5523 603.448 56 604 56V54ZM626.707 55.7071C627.098 55.3166 627.098 54.6834 626.707 54.2929L620.343 47.9289C619.953 47.5384 619.319 47.5384 618.929 47.9289C618.538 48.3195 618.538 48.9526 618.929 49.3431L624.586 55L618.929 60.6569C618.538 61.0474 618.538 61.6805 618.929 62.0711C619.319 62.4616 619.953 62.4616 620.343 62.0711L626.707 55.7071ZM605.833 56C606.386 56 606.833 55.5523 606.833 55C606.833 54.4477 606.386 54 605.833 54V56ZM609.5 54C608.948 54 608.5 54.4477 608.5 55C608.5 55.5523 608.948 56 609.5 56V54ZM613.167 56C613.719 56 614.167 55.5523 614.167 55C614.167 54.4477 613.719 54 613.167 54V56ZM616.833 54C616.281 54 615.833 54.4477 615.833 55C615.833 55.5523 616.281 56 616.833 56V54ZM620.5 56C621.052 56 621.5 55.5523 621.5 55C621.5 54.4477 621.052 54 620.5 54V56ZM624.167 54C623.614 54 623.167 54.4477 623.167 55C623.167 55.5523 623.614 56 624.167 56V54ZM604 56H605.833V54H604V56ZM609.5 56H613.167V54H609.5V56ZM616.833 56H620.5V54H616.833V56ZM624.167 56H626V54H624.167V56ZM604 54C603.448 54 603 54.4477 603 55C603 55.5523 603.448 56 604 56V54ZM626.707 55.7071C627.098 55.3166 627.098 54.6834 626.707 54.2929L620.343 47.9289C619.953 47.5384 619.319 47.5384 618.929 47.9289C618.538 48.3195 618.538 48.9526 618.929 49.3431L624.586 55L618.929 60.6569C618.538 61.0474 618.538 61.6805 618.929 62.0711C619.319 62.4616 619.953 62.4616 620.343 62.0711L626.707 55.7071ZM605.833 56C606.386 56 606.833 55.5523 606.833 55C606.833 54.4477 606.386 54 605.833 54V56ZM609.5 54C608.948 54 608.5 54.4477 608.5 55C608.5 55.5523 608.948 56 609.5 56V54ZM613.167 56C613.719 56 614.167 55.5523 614.167 55C614.167 54.4477 613.719 54 613.167 54V56ZM616.833 54C616.281 54 615.833 54.4477 615.833 55C615.833 55.5523 616.281 56 616.833 56V54ZM620.5 56C621.052 56 621.5 55.5523 621.5 55C621.5 54.4477 621.052 54 620.5 54V56ZM624.167 54C623.614 54 623.167 54.4477 623.167 55C623.167 55.5523 623.614 56 624.167 56V54ZM604 56H605.833V54H604V56ZM609.5 56H613.167V54H609.5V56ZM616.833 56H620.5V54H616.833V56ZM624.167 56H626V54H624.167V56Z" fill="white"/>
<path d="M508 174C507.448 174 507 174.448 507 175C507 175.552 507.448 176 508 176V174ZM530.707 175.707C531.098 175.317 531.098 174.683 530.707 174.293L524.343 167.929C523.953 167.538 523.319 167.538 522.929 167.929C522.538 168.319 522.538 168.953 522.929 169.343L528.586 175L522.929 180.657C522.538 181.047 522.538 181.681 522.929 182.071C523.319 182.462 523.953 182.462 524.343 182.071L530.707 175.707ZM509.833 176C510.386 176 510.833 175.552 510.833 175C510.833 174.448 510.386 174 509.833 174V176ZM513.5 174C512.948 174 512.5 174.448 512.5 175C512.5 175.552 512.948 176 513.5 176V174ZM517.167 176C517.719 176 518.167 175.552 518.167 175C518.167 174.448 517.719 174 517.167 174V176ZM520.833 174C520.281 174 519.833 174.448 519.833 175C519.833 175.552 520.281 176 520.833 176V174ZM524.5 176C525.052 176 525.5 175.552 525.5 175C525.5 174.448 525.052 174 524.5 174V176ZM528.167 174C527.614 174 527.167 174.448 527.167 175C527.167 175.552 527.614 176 528.167 176V174ZM508 176H509.833V174H508V176ZM513.5 176H517.167V174H513.5V176ZM520.833 176H524.5V174H520.833V176ZM528.167 176H530V174H528.167V176ZM508 174C507.448 174 507 174.448 507 175C507 175.552 507.448 176 508 176V174ZM530.707 175.707C531.098 175.317 531.098 174.683 530.707 174.293L524.343 167.929C523.953 167.538 523.319 167.538 522.929 167.929C522.538 168.319 522.538 168.953 522.929 169.343L528.586 175L522.929 180.657C522.538 181.047 522.538 181.681 522.929 182.071C523.319 182.462 523.953 182.462 524.343 182.071L530.707 175.707ZM509.833 176C510.386 176 510.833 175.552 510.833 175C510.833 174.448 510.386 174 509.833 174V176ZM513.5 174C512.948 174 512.5 174.448 512.5 175C512.5 175.552 512.948 176 513.5 176V174ZM517.167 176C517.719 176 518.167 175.552 518.167 175C518.167 174.448 517.719 174 517.167 174V176ZM520.833 174C520.281 174 519.833 174.448 519.833 175C519.833 175.552 520.281 176 520.833 176V174ZM524.5 176C525.052 176 525.5 175.552 525.5 175C525.5 174.448 525.052 174 524.5 174V176ZM528.167 174C527.614 174 527.167 174.448 527.167 175C527.167 175.552 527.614 176 528.167 176V174ZM508 176H509.833V174H508V176ZM513.5 176H517.167V174H513.5V176ZM520.833 176H524.5V174H520.833V176ZM528.167 176H530V174H528.167V176Z" fill="white"/>
<path d="M626.707 175.707C627.098 175.317 627.098 174.683 626.707 174.293L620.343 167.929C619.953 167.538 619.319 167.538 618.929 167.929C618.538 168.319 618.538 168.953 618.929 169.343L624.586 175L618.929 180.657C618.538 181.047 618.538 181.681 618.929 182.071C619.319 182.462 619.953 182.462 620.343 182.071L626.707 175.707ZM604 176H605.833V174H604V176ZM609.5 176H613.167V174H609.5V176ZM616.833 176H620.5V174H616.833V176ZM624.167 176H626V174H624.167V176ZM626.707 175.707C627.098 175.317 627.098 174.683 626.707 174.293L620.343 167.929C619.953 167.538 619.319 167.538 618.929 167.929C618.538 168.319 618.538 168.953 618.929 169.343L624.586 175L618.929 180.657C618.538 181.047 618.538 181.681 618.929 182.071C619.319 182.462 619.953 182.462 620.343 182.071L626.707 175.707ZM604 176H605.833V174H604V176ZM609.5 176H613.167V174H609.5V176ZM616.833 176H620.5V174H616.833V176ZM624.167 176H626V174H624.167V176Z" fill="white"/>
<path d="M508 294C507.448 294 507 294.448 507 295C507 295.552 507.448 296 508 296V294ZM530.707 295.707C531.098 295.317 531.098 294.683 530.707 294.293L524.343 287.929C523.953 287.538 523.319 287.538 522.929 287.929C522.538 288.319 522.538 288.953 522.929 289.343L528.586 295L522.929 300.657C522.538 301.047 522.538 301.681 522.929 302.071C523.319 302.462 523.953 302.462 524.343 302.071L530.707 295.707ZM509.833 296C510.386 296 510.833 295.552 510.833 295C510.833 294.448 510.386 294 509.833 294V296ZM513.5 294C512.948 294 512.5 294.448 512.5 295C512.5 295.552 512.948 296 513.5 296V294ZM517.167 296C517.719 296 518.167 295.552 518.167 295C518.167 294.448 517.719 294 517.167 294V296ZM520.833 294C520.281 294 519.833 294.448 519.833 295C519.833 295.552 520.281 296 520.833 296V294ZM524.5 296C525.052 296 525.5 295.552 525.5 295C525.5 294.448 525.052 294 524.5 294V296ZM528.167 294C527.614 294 527.167 294.448 527.167 295C527.167 295.552 527.614 296 528.167 296V294ZM508 296H509.833V294H508V296ZM513.5 296H517.167V294H513.5V296ZM520.833 296H524.5V294H520.833V296ZM528.167 296H530V294H528.167V296ZM508 294C507.448 294 507 294.448 507 295C507 295.552 507.448 296 508 296V294ZM530.707 295.707C531.098 295.317 531.098 294.683 530.707 294.293L524.343 287.929C523.953 287.538 523.319 287.538 522.929 287.929C522.538 288.319 522.538 288.953 522.929 289.343L528.586 295L522.929 300.657C522.538 301.047 522.538 301.681 522.929 302.071C523.319 302.462 523.953 302.462 524.343 302.071L530.707 295.707ZM509.833 296C510.386 296 510.833 295.552 510.833 295C510.833 294.448 510.386 294 509.833 294V296ZM513.5 294C512.948 294 512.5 294.448 512.5 295C512.5 295.552 512.948 296 513.5 296V294ZM517.167 296C517.719 296 518.167 295.552 518.167 295C518.167 294.448 517.719 294 517.167 294V296ZM520.833 294C520.281 294 519.833 294.448 519.833 295C519.833 295.552 520.281 296 520.833 296V294ZM524.5 296C525.052 296 525.5 295.552 525.5 295C525.5 294.448 525.052 294 524.5 294V296ZM528.167 294C527.614 294 527.167 294.448 527.167 295C527.167 295.552 527.614 296 528.167 296V294ZM508 296H509.833V294H508V296ZM513.5 296H517.167V294H513.5V296ZM520.833 296H524.5V294H520.833V296ZM528.167 296H530V294H528.167V296Z" fill="white"/>
<path d="M604 294C603.448 294 603 294.448 603 295C603 295.552 603.448 296 604 296V294ZM626.707 295.707C627.098 295.317 627.098 294.683 626.707 294.293L620.343 287.929C619.953 287.538 619.319 287.538 618.929 287.929C618.538 288.319 618.538 288.953 618.929 289.343L624.586 295L618.929 300.657C618.538 301.047 618.538 301.681 618.929 302.071C619.319 302.462 619.953 302.462 620.343 302.071L626.707 295.707ZM605.833 296C606.386 296 606.833 295.552 606.833 295C606.833 294.448 606.386 294 605.833 294V296ZM609.5 294C608.948 294 608.5 294.448 608.5 295C608.5 295.552 608.948 296 609.5 296V294ZM613.167 296C613.719 296 614.167 295.552 614.167 295C614.167 294.448 613.719 294 613.167 294V296ZM616.833 294C616.281 294 615.833 294.448 615.833 295C615.833 295.552 616.281 296 616.833 296V294ZM620.5 296C621.052 296 621.5 295.552 621.5 295C621.5 294.448 621.052 294 620.5 294V296ZM624.167 294C623.614 294 623.167 294.448 623.167 295C623.167 295.552 623.614 296 624.167 296V294ZM604 296H605.833V294H604V296ZM609.5 296H613.167V294H609.5V296ZM616.833 296H620.5V294H616.833V296ZM624.167 296H626V294H624.167V296ZM604 294C603.448 294 603 294.448 603 295C603 295.552 603.448 296 604 296V294ZM626.707 295.707C627.098 295.317 627.098 294.683 626.707 294.293L620.343 287.929C619.953 287.538 619.319 287.538 618.929 287.929C618.538 288.319 618.538 288.953 618.929 289.343L624.586 295L618.929 300.657C618.538 301.047 618.538 301.681 618.929 302.071C619.319 302.462 619.953 302.462 620.343 302.071L626.707 295.707ZM605.833 296C606.386 296 606.833 295.552 606.833 295C606.833 294.448 606.386 294 605.833 294V296ZM609.5 294C608.948 294 608.5 294.448 608.5 295C608.5 295.552 608.948 296 609.5 296V294ZM613.167 296C613.719 296 614.167 295.552 614.167 295C614.167 294.448 613.719 294 613.167 294V296ZM616.833 294C616.281 294 615.833 294.448 615.833 295C615.833 295.552 616.281 296 616.833 296V294ZM620.5 296C621.052 296 621.5 295.552 621.5 295C621.5 294.448 621.052 294 620.5 294V296ZM624.167 294C623.614 294 623.167 294.448 623.167 295C623.167 295.552 623.614 296 624.167 296V294ZM604 296H605.833V294H604V296ZM609.5 296H613.167V294H609.5V296ZM616.833 296H620.5V294H616.833V296ZM624.167 296H626V294H624.167V296Z" fill="white"/>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="5" letter-spacing="0em"><tspan x="536.275" y="62.2727">Cache</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="5" letter-spacing="0em"><tspan x="536.275" y="181.273">Cache</tspan></text>
<text fill="white" xml:space="preserve" style="white-space: pre" font-size="5" letter-spacing="0em"><tspan x="536.275" y="302.273">Cache</tspan></text>
<path d="M256.707 223.707C257.098 223.317 257.098 222.683 256.707 222.293L250.343 215.929C249.953 215.538 249.319 215.538 248.929 215.929C248.538 216.319 248.538 216.953 248.929 217.343L254.586 223L248.929 228.657C248.538 229.047 248.538 229.681 248.929 230.071C249.319 230.462 249.953 230.462 250.343 230.071L256.707 223.707ZM192 224H256V222H192V224Z" fill="white"/>
<path d="M1018.71 55.7071C1019.1 55.3166 1019.1 54.6834 1018.71 54.2929L1012.34 47.9289C1011.95 47.5384 1011.32 47.5384 1010.93 47.9289C1010.54 48.3195 1010.54 48.9526 1010.93 49.3431L1016.59 55L1010.93 60.6569C1010.54 61.0474 1010.54 61.6805 1010.93 62.0711C1011.32 62.4616 1011.95 62.4616 1012.34 62.0711L1018.71 55.7071ZM954 56H1018V54H954V56Z" fill="white"/>
<path d="M1018.71 175.707C1019.1 175.317 1019.1 174.683 1018.71 174.293L1012.34 167.929C1011.95 167.538 1011.32 167.538 1010.93 167.929C1010.54 168.319 1010.54 168.953 1010.93 169.343L1016.59 175L1010.93 180.657C1010.54 181.047 1010.54 181.681 1010.93 182.071C1011.32 182.462 1011.95 182.462 1012.34 182.071L1018.71 175.707ZM954 176H1018V174H954V176Z" fill="white"/>
<path d="M1018.71 295.707C1019.1 295.317 1019.1 294.683 1018.71 294.293L1012.34 287.929C1011.95 287.538 1011.32 287.538 1010.93 287.929C1010.54 288.319 1010.54 288.953 1010.93 289.343L1016.59 295L1010.93 300.657C1010.54 301.047 1010.54 301.681 1010.93 302.071C1011.32 302.462 1011.95 302.462 1012.34 302.071L1018.71 295.707ZM954 296H1018V294H954V296Z" fill="white"/>
<defs>
<clipPath id="clip0_454_522">
<rect y="436" width="427" height="67" rx="33.5" transform="rotate(-90 0 436)" fill="white"/>
</clipPath>
</defs>
</svg>

</div>

<!--
This is the overview of architecture of Ollama Operator, and the corresponding components it will interact with.

The major parts are the Model Pooling, and the Inference Worker nodes.

Where they will share the same cache storage to read and write the models.
-->

---
class: py-10
glow: bottom
---

# How It Works

<span>Model pooling</span>

<v-clicks>

- Each time we call `ollama pull <image>`, a <span text-blue-300>OCI image</span> will be pulled from the registry
- <span text-blue-300>Ollama</span> server will <span text-pink-300>save</span> it without touching it
- <span text-blue-300>Ollama</span> server will <span text-pink-300>cache</span> the pulled images into storage
- When <span text-green-200>`POST /chat/completions`</span> comes in
  - <span text-blue-300>Ollama</span> server will <span text-pink-300>check</span> if the model is already cached
  - If not, it will <span text-pink-300>pull</span> the model from the registry and cache it
  - Then, it will <span text-pink-300>unpack</span> it, <span text-pink-300>preload</span> it into memories
  - Then bootstrap the <span text-blue-300>llama.cpp</span> server to <span text-pink-300>serve</span> the model

</v-clicks>

<!--
For inference server, you may wondering, how does this Model pool work to cache for the inference server?

Sure I will explain it.

For ollama servers, each time we call ollama pull <image>, a OCI image will be pulled from the registry, and the ollama server will save it without touching it. The pulled images will be cached in the storage.

When a request to perform /chat/completions comes in, the ollama server will check if the model is already cached in the storage, if not, it will pull the model from the registry and cache it in the storage. Then, it will unpack it, preload it into memories, and then bootstrap the llama.cpp server to serve the model.

In another word, the models will be check for existence before inference.
-->

---
class: flex justify-center items-center gap-20 px40 text-xl
clicks: 2
---

<div text-4xl absolute :class="$clicks < 1 ? 'text-white' : 'translate-y--18 scale-40 text-white/30'" transition duration-500 ease-in-out>
  <span>Aren't users of Ollama are non-kubernetes users?</span>
</div>

<div flex flex-col items-center>

<v-clicks>

<div text-4xl leading="[3rem]" transition duration-500 ease-in-out text-center>
  <span>Bring Ollama to Kubernetes, not to enforce Kubernetes to Ollama users</span>
</div>

</v-clicks>

</div>

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
There is stil much work to be done!
-->

---
class: py-10
---

# Let's Build Together

<span>Join us in shaping the future of LLM deployment</span>

<div flex justify-center gap-50>
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
  </div>
  <div
    v-click="1" flex items-start transition duration-500 ease-in-out gap-30
    :class="$clicks < 1 ? 'translate-x-20' : 'translate-x-0'"
  >
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

<v-clicks>

- Keep develop and improve the new up coming OCI volume features
- Perhaps, it's possible to bring Ollama's OCI content types to make it more Kubernetes native, or allow containerd or OCI volume handlers to read and orchestrate the model images of Ollama
- Pooling, how can we improve it?
- How can we use up Dragonfly to speed distributing and image caching for the models?
- Load balancing and routing, how can we improve it? How can we achieve the similar concurrent model serving as vLLM?

</v-clicks>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
We couldn't make it without any of the communties. We wanted to shout out to the community for the following improvements to discuss with.
-->

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

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.png" h-10>
    <img src="/CloudNativeCon.png" h="10.1">
    <img src="/OpenSourceSummit.png" h-9>
    <img src="/AI_dev.png" h-4>
  </div>
</div>

<!--
With all of that, that's the end of today's session.

I bet many of you may asking for how to make this PPT, we open sourced it, it built with codes.

We would like to ask you to give us some thumb ups on sched.

Any questions?
-->
