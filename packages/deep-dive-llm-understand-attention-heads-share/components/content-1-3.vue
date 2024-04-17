<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three'

const origin = new THREE.Vector3(0, 0, 0)
const dir = new THREE.Vector3(1, 1, -1)
const dir2 = new THREE.Vector3(1, 16, -2)
const dir3 = new THREE.Vector3(-16, 6, 1)
const dir4 = new THREE.Vector3(-16, 16, 7)

// normalize the direction vector (convert to vector of length 1)
dir.normalize()
dir2.normalize()
dir3.normalize()
dir4.normalize()

const length = 1
const length2 = 0.7
const length3 = 0.5

const hex = '#2dd4bf'
const hex2 = '#22d3ee'
const hex3 = '#f472b6'
const hex4 = '#fb7185'
</script>

<template>
  <div class="text-3xl" font-semibold pl="[3.5rem]" pr="[3.5rem]" pt="2.5rem">
    向量空间究竟代表了什么？
  </div>
  <div flex flex-col h-full>
    <div my-2 text-neutral-400 pl="[3.5rem]" pr="[3.5rem]">
      <span>
        层峦叠嶂般堆叠起来的各种特征就是向量空间的本质。
      </span>
    </div>
    <div
      class="flex flex-row mt-5 h-full" transition="all ease-in-out" duration-1500
      :class="[
        [0].includes($slidev.nav.clicks) ? 'opacity-0' : '',
        [1, 2].includes($slidev.nav.clicks) ? 'opacity-100' : '',
        [3].includes($slidev.nav.clicks) ? 'opacity-100' : '',
      ]"
    >
      <TresCanvas :alpha="true" :antialias="true">
        <TresGridHelper :args="[12, 12]" />
        <TresPerspectiveCamera
          :position="[4, 2, 4]"
          :look-at="[0, 0, 0]"
        />
        <OrbitControls />
        <TresAmbientLight :intensity="1" />
        <TresGroup>
          <TresArrowHelper :args="[dir, origin, length, hex, 0.2, 0.1]" />
          <TresArrowHelper :args="[dir2, dir.clone(), length3, hex2, 0.2, 0.1]" />
          <TresArrowHelper :args="[dir3, origin.clone(), length, hex3, 0.2, 0.1]" />
          <TresArrowHelper :args="[dir4, dir3.clone(), length2, hex4, 0.2, 0.1]" />
        </TresGroup>
      </TresCanvas>
    </div>
  </div>
</template>

<style>
.vertical-vector::before, .vertical-vector::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  border: 2px solid rgb(255, 255, 255);
}

.vertical-vector::before {
  left: -6px;
  border-right: none;
}

.vertical-vector::after {
  right: -6px;
  border-left: none;
}
</style>
