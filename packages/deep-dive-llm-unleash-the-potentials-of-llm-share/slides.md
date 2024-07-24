---
theme: ./theme
background: /backgrounds/cover.png
highlighter: shikiji
lineNumbers: false
drawings:
  persist: false
title: 深入浅出：大语言模型
mdc: true
layout: cover
preload: false
clicks: 0
---

<h1 class="text-left font-semibold text-4xl">
  深入浅出：大语言模型
</h1>

<p text-left class="mt-5!">
  DaoCloud 张凡石
</p>

<!--
Hello，大家好～

简单介绍一下我自己，一般在网络上大家都称呼我 Neko，读作「呢扣」就可以了；我是 DaoCloud 开源团队的成员之一，主要是担任软件工程师的角色做 Kubernetes 相关的开源开发工作。

很高兴到在场的各位和线上会议的大家能来听我在 DaoCloud 做的第一次的晨会技术分享，那今天呢，我想站在科普和浅层技术上来和大家聊一聊，什么是 LLM，它怎么工作的，我们应该怎么样和 LLM 相处好。

预计时间：1min
点击：0
-->

---
title: 目录
layout: contents-toc
background: /backgrounds/2.png
preload: false
clicks: 1
sections:
  - 洪水猛兽
  - 随机鹦鹉
  - 原初智能
  - 我们并无二致
  - Now What？
---

<!--
这次的分享将会以这么几个部分展开。

我简要介绍一下：

1. 第一章节，我会带大家一起回顾一下我们现在正在经历的 AI 热潮，我在这里把它比喻成洪水猛兽，讲一讲发生了什么，让我们先预热预热，回顾一下历史；
2. 第二章节，我会带大家一起，从最表层的 GPT 行为开始，剖析 GPT 和 LLM 的底层原理，让我们来看看这只极致昂贵和炙手可热的鹦鹉是如何被训练出来的，它又是怎么学会说话的；
3. 第三章节，我们已经有了随机鹦鹉了，这个时候它为什么被称之为人工智能呢？是吧？鹦鹉怎么会有智能呢？在原初智能这个章节里面我会带大家探索 GPT3.5 是如何被训练出来的，它核心的能力都有什么？这些能力又从哪里获得？我们应该如何利用这些能力，这个应该是本次分享最核心的部分；
4. 第四章节，因为 GPT 和 LLM 与我们人类有很多相似点，我会在这里说一说 LLM 的缺陷；
5. 最后一章节，普通人肯定觉得很难接触到 ChatGPT，我会推荐和建议一些工具，顺便开放式地聊聊，然后介绍前沿的研究和实践，最后展望一下未来。

OK，那我们现在正式开始。

预计时间：2min
点击：
  1. 点击之后播放章节 1 标题动画，然后再点一下切换到章节 1
-->

---
title: Part 01 洪水猛兽 - 标题
layout: section
sectionNumber: 1
sectionTitle: 洪水猛兽
background: /backgrounds/2.png
preload: false
---

<!--
我相信已经有很多人已经感受到了，从去年 ChatGPT 发布至今，大家都开始聊 AI，聊 LLM，也就是大语言模型，聊 ChatGPT，聊 OpenAI。甚至很多原本不做 AI 的公司，也开始做 AI 了，希望做自己的大语言模型，希望加入到这个赛道里面去。那这么突然而然的袭击，就像是毫无预警的洪水一样，让很多人都感到了恐慌，也让很多人都感到了兴奋。但我相信很多人还是以因为未知所以恐惧为主，所以这里起了个名字，叫洪水猛兽。

预计时间：45s
点击：0
-->

---
title: 什么洪水猛兽？- 标题
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-1-2 />

<!--
那么究竟是何方神圣呢？能造成这样的洪水。

预计时间：5s
点击：
  1. 点击之后播放章节 1.1 标题动画，然后再点一下切换到章节 1.1
-->

---
title: 什么洪水猛兽？
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-1-3 />

<!--
我在这里准备了一个小小的短片能给大家一个有关大语言模型的进化路线的概览，涵盖了从最早的 GPT 依赖的 Transformer 开始，一直到现在的 ChatGPT 和 GPT-4 时代的大企业做的大模型。

值得一提的是，这个短片是比较早的时间点由网友制作的，这里面还没有国内现在的这么多的大语言模型，所以实际上只会比这更多。

好的，那现在我们看着视频的最后一帧，可以看到在 2020 年的 GPT3 之后大语言模型就开始发生技术爆炸了，可以从图里直观地感受到，大模型出现的速度越来越快，越来越多，还越来越大，而这就是洪水猛兽的本体。

点击：1
-->

---
title: 过去一年里都发生了什么？
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-1-4 />

<!--
让我们在开始深浅之前，最后看看这一年里都发生了什么。

点击：0
-->

---
title: 时间线
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-1-5 />

<!--
实际上发生的事件远比我能在这里展示得多，看大家反馈，我可能也可以在另外的技术分享中展开讲解发展历程和为什么是现在的发展状况。

那回到 Keynote 上，可以看到 ChatGPT 现在有接近 2 亿的日活用户。真的有这么好用吗？大家都用它做什么呢？

点击：1
-->

---
title: Part 02 随机鹦鹉
layout: section
sectionNumber: 2
sectionTitle: 随机鹦鹉
background: /backgrounds/2.png
preload: false
---

<!--
那就得来到「随机鹦鹉」这个章节，一起深潜到 GPT 和 LLM 的大脑内部一窥究竟。

点击：0
-->

---
title: 第一印象 - 标题
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-2 />

<!--
今天我想要从 ChatGPT 为什么会犯蠢和 ChatGPT 为什么总是满足不了我们开始说起，我想先聊一聊用过 ChatGPT 的人对 ChatGPT 的第一印象。

作为用户，包括之前的我在内，都会对 ChatGPT 有着非常高的预期，指望 ChatGPT 能回答很多对于 ChatGPT 而言不可能的和回答不好的问题，更别提还指望当时微软 Bing 所津津乐道的「**搜索引擎**」能力给出的回答是否准确了。

这也是我在这里使用这个捂脸 Emoji 的原因啊，就是觉得 GPT 和 LLM 给出的回答根本不能看。

点击：1
-->

---
title: 第一印象
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-3 />

<!--
那这样的预期就会造成我们对 ChatGPT 经常有这么一些印象。

- 犯蠢
- 胡编乱造
- 不听话
- 不会数学运算
- 更不会逻辑推理

为什么会这样？这就涉及到 GPT 和 LLM 的底层原理了。

点击：1
-->

---
title: 大语言模型的小宇宙：字与词
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-4 />

<!--
在直接开始理解 LLM 之前，让我们先来做一些铺垫的知识介绍以及实现推演。

我们来讲一讲什么是 Token。

我不知道大家有没有想过这样的一个问题，当我们与 LLM 聊天的时候，为什么 LLM 只能一个字一个字输出呢？平常我们都说的 Token 很贵，要消耗很多 Token，这个「Token」它是什么？

这个时候就要介绍到大语言模型宇宙的基本粒子，字和词。

点击：1
-->

---
title: 大语言模型的小宇宙：字与词 - 理解语言的最小单位
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-5 />

<!--
这是自然语言处理领域中最基本也是最简单的部分，让我们先从语言层面开始。

我们的母语「中文」，最小的单位是字，而英语的最小单位是字母，这个大家都知道。

所以，按照我们人类的理解，它拆开来看是这样的。

点击：2
-->

---
title: 大语言模型的小宇宙：字与词 - 理解语言的最小单位
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-6 />

<!--
好的，那我们放大到句子上来看，当我们输入和说出这样的一个句子的时候，其实可以把这句话拆成这么小的单位来看待。

有意思的是，LLM 也有类似的机制，他们也会通过将语句拆成最小单元，也就是我们现在在说的字词来进行处理，那要理解 LLM 都是怎么看到和理解这些拆分的字词的，我们就得先从这拆开的第一个字开始看起。

点击：2
-->

---
title: 大语言模型宇宙的基本粒子：字与词 - 一句话
clicks: 4
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-7 />

<!--
「深」这个字，我们自己似乎连自己都说不出来是如何理解的，对吧？我们对这个字的理解就是很直观的灵光乍现一般就能理解它代表了「深度」，「深邃」，那这个时候要让以数学计算为主的 LLM 逐字逐句计算的话我们不能这么做，如果这么做了，我们就得再去让 LLM 理解什么是「深度」和「深邃」，那样的话就会无限循环了，并不是我们要的结果。

点击：4
-->

---
title: 大语言模型宇宙的基本粒子：字与词 - 找到字典对应值
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-8 />

<!--
这个时候很好办，我们可以把整个宇宙里我们人类发明创造过的所有语言都编写成一个「元素周期表」，在代码里叫「字典」，或者叫「Encoding（编码）」，这样我们就可以把「深」这个字对应到一个数值上，这个数值就是「深」这个字的「编码」。

就像现实里用字典一样，我们想要查找哪个词哪个字的时候，就去找字典找对应的字，然后找到页码，最终找到这个字的意思，这个过程就是「编码」，而这个过程的结果就是「编码」的值。在这里，「深」的 GPT3 和 GPT4 所使用的字典对应的结果是「85315，109」。

点击：1
-->

---
title: 字词在一种「元素周期表」中的表达：Token - 标题
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-9 />

<!--
很不错，这个时候我们就找到了一种字词在一种「元素周期表」中的表达方式，这个表达方式就是「Token」，也就是我们在前面提到的「Token」。

点击：1
-->

---
title: 字词在一种「元素周期表」中的表达：Token
clicks: 3
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-10 />

<!--
那，字典和元素周期表也是需要有人编写的对吧，一般情况下如何计算出来什么字应该在字典的什么页码上，什么元素对应了几号元素，有多少的原子质量，这些都是需要人工编写的。

接下来就让我来介绍一下如何获得这个字典和元素周期表。

和我们之前推演的一样，我们可以通过枚举和列举出人类发明创造过的所有语言的字母字词到一个超级大的字典中，这叫做 One-hot 编码。

它就像这样。在很多基础的 Transformer 和 GPT 教学视频中，也都会教大家用这样的方式编码 26 个英文字母然后做一些基本的 GPT 训练来尝试自己搭建一个 GPT。但是事实上我们人类创造出来的语言和字词真的非常之多，光是中文就有多达 8 万多个字符，这个时候再去编码的时候，不仅会把很多不常用的字符编码进去，还会很耗费人力，更别提我们还有名为 Emoji 的表情符号系统作为语言，这就变成了一个挑战，于是有了另一种方法，叫做 Word Embedding。

点击：3
-->

---
title: 字词在一种「元素周期表」中的表达：Token
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-2-11 />

<!--
点击：2
-->

---
title: 「像人一样思考」- 标题
clicks: 2
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-12 />

<!--
好的，我们现在已经知道了语言学意义上，LLM 是如何逐字解析和理解的语言了，但是我们还是不能解答之前提出来的问题，现在得再深入一些，探寻这个 Token 的用途是什么。

这就要来到振奋人心的 LLM 底层原理讲解环节了。

点击：2
-->

---
title: 「像人一样思考」- 单字接龙 - 标题
clicks: 2
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-13 />

<!--
你可能在许多科普视频或者论文解析中已经听过了 GPT 和 LLM 的底层原理，大家都会把 Transformer 架构下的 GPT 和 LLM 的行为看作是一种「单字接龙」游戏。
所谓单字接龙，也叫「自回归生成」

什么是「单字接龙」？GPT 和 LLM 玩「单字接龙」游戏和这一切的能力又有什么关系呢。

点击：2
-->

---
title: 「像人一样思考」- 思维实验：我们平时是如何思考的？
clicks: 3
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-14 />

<!--
我们不妨想象一下，我们作为人类，是如何理解一句话的。

接下来，我现在希望大家先和我一起做一个思想实验。

我想请问各位，当我们在

- 写考试这样紧张的环境下书写自由答题类题目的答案的时候
- 和别人打电话的时候
- 在进行临时的即兴演讲的时候

都是如何组织语言和造句的？

点击：3
-->

---
title: 「像人一样思考」- 我们平时的思维模式
clicks: 2
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-15 />

<!--
我自己是感觉是这样的一个思维模式。

OK，那不论如何，我们记住这个范式，然后继续前进，看看所谓和人一样思考的 GPT 和 LLM 是如何思考的。

点击：3
-->

---
title: 「像人一样思考」- GPT 玩耍的「单字接龙」
clicks: 6
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-16 />

<!--
这个东西在我们的生活中有一个我们非常熟悉的存在，就是输入法。

那这个竖排文本是什么意思呢？

点击：6
-->

---
title: 「像人一样思考」- GPT 玩耍的「单字接龙」- 在语言的海洋里漂流
clicks: 6
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-17 />

<!--
这就是它在输出的时候的一个可视化表达，就是一个概率模型。

我们可以试着想象出一个从低到高的概率分布图像，然后把这个图像倒置过来，那么原本数值越高的那些选择，GPT 就更容易滑落到这个陷阱里，也就是命中了概率。

所以我们其实完全可以形象地把 LLM 的输出过程看作是一个在倒置的高山上滑雪的人，它会不断地滑落到概率最高的那个地方，然后再从那个地方开始。

或者再换一种说法，就是它实际上是在寻路，是常识在多个可能的出口中寻找最佳方案。

点击：6
-->

---
title: 「像人一样思考」- GPT 玩耍的「单字接龙」- 在语言的海洋里漂流
clicks: 4
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-18 />

<!--
但这可能依然不够理解，为什么它就能知道字词的意思了。

点击：4
-->

---
title: 「像人一样思考」- GPT 玩耍的「单字接龙」- 在语言的海洋里漂流
clicks: 2
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-19 />

<!--
只要一件任务可以被转写成文本，那就可以用类似于 Instruction Fine-tune 的规范化的、模板的对话范文来要求 GPT 听话

这种矫正的过程，或者说这种 Instruction Fine-tune 的过程可能会导致 GPT 遭遇灾难性遗忘，或者说过拟合，只会学习规范化和模板化的单字接龙

点击：2
-->

---
title: 「像人一样思考」- GPT 玩耍的「单字接龙」- 在语言的海洋里漂流
clicks: 17
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-20 />

<!--
点击：17
-->

---
title: 「像人一样思考」- 学会知识
clicks: 3
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-24 />

<!--
根据给定的预料学习，让模型在海量的语料中学习，接下来生成的「字」应该是什么。

开卷有益

点击：3
-->

---
title: 「像人一样思考」- 学会能力
clicks: 2
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-25 />

<!--
规范模板 和 创意引导

学习提问和回答的通用规律。

这样的举一反三的现象，也叫做「泛化」。

它看起来仿佛掌握了通过规范的范文中学习学习和泛化这种能力的能力，或者说，学习套娃

点击：2
-->

---
title: 「像人一样思考」- 当我们说微调的时候是在做什么？ - 标题
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-26 />

<!--
点击：1
-->

---
title: 「像人一样思考」- 当我们说微调的时候是在做什么？ - 流动的神经元
clicks: 3
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-27 />

<!--
点击：3
-->

---
title: 「像人一样思考」- 当我们说微调的时候是在做什么？ - 空间扭曲
clicks: 3
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-28 />

<!--
点击：3
-->

---
title: 「像人一样思考」- 真的很大 - 标题
clicks: 1
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-29 />

<!--
点击：1
-->

---
title: 「像人一样思考」- 真的很大
clicks: 5
layout: page
background: /backgrounds/3.png
preload: false
---

<Content-2-30 />

<!--
点击：5
-->

---
title: Part 03 原初智能
layout: section
sectionNumber: 3
sectionTitle: 原初智能
background: /backgrounds/2.png
preload: false
---

<!--
点击：0
-->

---
title: Part 03 原初智能 - 活在幻觉里的，患有虚谈症的尸体 - 标题
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-1 />

<!--
点击：1
-->

---
title: Part 03 原初智能 - 活在幻觉里的，患有虚谈症的尸体
clicks: 3
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-2 />

<!--
所以究竟有什么用呢？

点击：3
-->

---
title: Part 03 原初智能 - 如何利用这种规律智能？- 标题
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-9 />

<!--
点击：1
-->

---
title: Part 03 原初智能 - 如何利用这种规律智能？
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-10 />

<!--
点击：1
-->

---
title: Part 03 原初智能 - 如何利用这种规律智能？
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-11 />

<!--
点击：2
-->

---
title: Part 03 原初智能 - 提示词工程
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-18 />

<!--
点击：2
-->

---
title: Part 03 原初智能 - 提示词工程
clicks: 6
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-19 />

<!--
点击：6
-->

---
title: Part 03 原初智能 - 提示词工程
clicks: 5
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-20 />

<!--
点击：5
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能 - 标题
clicks: 1
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-21 />

<!--
点击：1
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-22 />

<!--
那接下来我要介绍的就是能改变我们和 LLM 相处方式的概念，Agent，我也叫它智能体

点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-23 />

<!--
斯坦福的人机交互小组用大语言模型做了一个有二十五个自由自在生活的 AI 的小镇。

> 在评估中，这些生成代理产生可信度高且涌现性的社会行为：例如仅从单个用户指定一个想要举办情人节派对的概念开始，该派对自主地传播邀请两天后结识新朋友，互相邀请参加派对，并协调在正确的时间一起出现。
> 我们通过消融实验表明，代理架构的组成部分——观察、规划和反思——每个都对代理行为的可信度做出了重要贡献。
> 通过将大型语言模型与计算交互代理相融合，这项工作引入了架构和交互模式，以实现对人类行为的可信模拟。
>

点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-24 />

<!--
对，多模态也可以是由一个 LLM 调用多个 LLM 实现。

点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-25 />

<!--
点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-26 />

<!--
点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-27 />

<!--
点击：2
-->

---
title: Part 03 原初智能 - 用搭积木的方式构建和延展智能
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-3-28 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致
layout: section
sectionNumber: 4
sectionTitle: 我们并无二致
background: /backgrounds/2.png
preload: false
---

<!--
点击：0
-->

---
title: Part 04 我们并无二致 - Prompt Attack - 标题
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-1 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致 - Prompt Attack
clicks: 9
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-2 />

<!--
点击：9
-->

---
title: Part 04 我们并无二致 - Prompt Attack
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-3 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致 - 阿谀奉承
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-4 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致 - 阿谀奉承
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-5 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致 - 阿谀奉承
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-6 />

<!--
点击：2
-->

---
title: Part 04 我们并无二致 - 阿谀奉承
clicks: 2
layout: page
background: /backgrounds/1.png
preload: false
---

<Content-4-7 />

<!--
Greg Kamradt 对 GPT-4 (128K) 与 Claude 2.1 (200K) 进行了名为「大海捞针」的长上下文精度测试。实验了两个 AI 在接收不同长度的上下文时，对文档中不同位置的内容，有何记忆上的差异。

- AI 更容易记住（无论长度）: 文本后半部分。
- AI 更不容易记住（90K 长文时）: 文本前半部分。
- AI 近乎 100% 记住（无论长度) : 文本开头 & 文本结尾。
- 越少的上下文 = 越高的准确性。
- 测试的 API 调用成本约为 1016 美元。

点击：2
-->

---
title: Part 05 Now What？
layout: section
sectionNumber: 5
sectionTitle: Now What？
background: /backgrounds/2.png
preload: false
---

<!--
知识的创造，知识的继承，知识的应用

影响教培行业。挑战我们现在的教育体系，因为我们现在依然在遵循「传授既有知识」的模式，如果我们继续按照现在的教育方式，未来 5 到 10 年，随着现在的知识递进速度越来越快，需要学习的知识越来越多的时候，孩子应该如何学习？我们应该如何终生学习？我们需要更合适的理论框架。因为大语言模型也会创新，单纯的说我们「要培养创新型人才」是没有指导意义的。必须对「知识的层级」进行更精细地划分，将「更高层次的创新」和「大语言模型的创新」区分，明确指出「什么样的创新人才」值得培养，如何培养，提供工具，提供更易于实施的方案。5 年后，如果学校传授的知识，大语言模型直接就能传授，那学校的意义是什么？

GPT/Bot 聚合平台：[poe.com](https://poe.com/)
有引用的搜索引擎 GPT：[www.perlexity.ai/](https://www.perplexity.ai/)
国内的 GPT API，OpenAI-SB：[openai-sb.om/](https://openai-sb.com/)
国外的 GPT API，OpenRouter：[openrouter.ai/(https://openrouter.ai/)

点击：0
-->

---
title: Thanks
layout: end
background: /backgrounds/ending.png
preload: false
---
