<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  sides: number
  radius: number
  width?: number
  height?: number
}>(), {
  width: 400,
  height: 400,
})

const canvasEl = ref<HTMLCanvasElement>()

function getPolygonPoints(numOfSides, radius) {
  if (numOfSides < 0 || radius < 0) {
    return false
  }

  const points = []

  for (let i = 0; i < numOfSides; i++) {
    const angle = Math.PI * 2 * i / numOfSides
    const x = radius * Math.cos(angle) + props.width / 2
    const y = radius * Math.sin(angle) + props.height / 2

    points.push({ x, y })
  }

  return points
}

function drawPolygon(points) {
  if (!points) {
    return
  }
  if (!canvasEl.value) {
    return
  }

  const ctx = canvasEl.value.getContext('2d')

  // Clear canvas
  ctx.clearRect(0, 0, props.width, props.height)

  // Fill colors
  ctx.fillStyle = '#FFFFFF'

  // Move to first point
  ctx.beginPath()
  ctx.moveTo(points[0].x, points[0].y)

  // Draw line between rest of polygon points
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y)
  }

  // Draw line between last point and first point to close the path
  ctx.closePath()
  ctx.fill()
}

watch([() => props.sides, () => props.radius], () => {
  drawPolygon(getPolygonPoints(props.sides, props.radius))
})

onMounted(() => {
  drawPolygon(getPolygonPoints(props.sides, props.radius))
})
</script>

<template>
  <div>
    <canvas ref="canvasEl" :width="`${props.width}px`" :height="`${props.height}`" />
  </div>
</template>
