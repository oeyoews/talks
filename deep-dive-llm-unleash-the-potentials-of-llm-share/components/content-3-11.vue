<template>
  <div class="text-3xl" font-semibold>
    如何利用这种规律智能？
  </div>

  <div h-full flex flex-col>
    <div my-2 text-neutral-400>
      <span transition="all ease-in-out" duration-1500>
        提示词工程就是提问的艺术
      </span>
    </div>
    <div
      transition="all ease-in-out" mt-4 h-full flex flex-col gap-4 duration-1500
      :class="[
        $slidev.nav.clicks === 0 ? 'opacity-0' : '',
        $slidev.nav.clicks > 0 && $slidev.nav.clicks <= 1 ? 'opacity-100' : '',
        $slidev.nav.clicks === 2 ? 'opacity-0' : '',
      ]"
    >
      <div flex flex-col gap-2 transition="all ease-in-out" duration-1500>
        <div text-xl>
          <div>
            <span>
              绝大多数 LLM 原生擅长的事情
            </span>
          </div>
        </div>
        <div flex gap-4>
          <div w="[50%]" flex flex-col gap-4>
            <div rounded-lg px-4 py-4 bg="green-900 opacity-50" border="2 solid green-600" text-sm>
              <div mb-2>
                <span text-lg>
                  扩增 Expansion：跟随规则生成
                </span>
              </div>
              <div>
                <span>
                  创意续写，代码补全，单测补全，扩写，发散，关联
                </span>
              </div>
            </div>
            <div rounded-lg px-4 py-4 bg="sky-900 opacity-50" border="2 solid sky-600" text-sm>
              <div mb-2>
                <span text-lg>
                  编码 Encoding：结构化转非结构化数据
                </span>
              </div>
              <div>
                <span>
                  将自然语言转写为程序化语言，比如翻译为 K8s 资源文件
                </span>
              </div>
            </div>
            <div rounded-lg px-4 py-4 bg="purple-900 opacity-50" border="2 solid purple-600" text-sm>
              <div mb-2>
                <span text-lg>
                  转译 Translate：非结构化转非结构化
                </span>
              </div>
              <div>
                <span>
                  翻译，转写，洗稿，润色，去查重率，去处重复代码
                </span>
              </div>
            </div>
          </div>
          <div w="[50%]" flex flex-col gap-4>
            <div rounded-lg px-4 py-4 bg="green-900 opacity-50" border="2 solid green-600" text-sm>
              <div mb-2>
                <span text-lg>
                  原语 Primitive：一切与语言有关的知识
                </span>
              </div>
              <div>
                <span>
                  英语教学，日语教学，教用命令行，教写代码
                </span>
              </div>
            </div>
            <div rounded-lg px-4 py-4 bg="sky-900 opacity-50" border="2 solid sky-600" text-sm>
              <div mb-2>
                <span text-lg>
                  解码 Decoding：非结构化转结构化数据
                </span>
              </div>
              <div>
                <span>
                  对大量文本的总结，摘要，提炼，找出文本中的关键特征
                </span>
              </div>
            </div>
            <div rounded-lg px-4 py-4 bg="purple-900 opacity-50" border="2 solid purple-600" text-sm>
              <div mb-2>
                <span text-lg>
                  变换 Transform：结构化转结构化数据
                </span>
              </div>
              <div>
                <span>
                  重构代码，重新编排 Excel，重新编排 K8s 资源
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
