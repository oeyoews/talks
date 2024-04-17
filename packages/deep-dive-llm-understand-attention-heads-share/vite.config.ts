import { defineConfig } from 'vite'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  // @ts-expect-error - Slidev options
  slidev: {
    vue: {
      ...templateCompilerOptions,
    },
  },
})
