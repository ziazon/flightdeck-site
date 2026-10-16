<script setup lang="ts">
// An app screenshot inside a docs page: `<AppScreenshot name="jobs" alt="…" />`. It renders nothing until
// the name is listed in `home/screenshots.ts`, so a page never shows a broken image.
import ScreenshotFrame from './home/ScreenshotFrame.vue'
import { hasScreenshot } from './home/screenshots'

defineProps<{ name: string; alt: string }>()
</script>

<template>
  <ScreenshotFrame v-if="hasScreenshot(name)" :name="name" :alt="alt" compact />
</template>
