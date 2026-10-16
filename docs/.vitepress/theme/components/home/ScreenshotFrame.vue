<script setup lang="ts">
// An app screenshot in Tabler's browser frame. Screenshots come in a light and a dark copy
// (`/screenshots/<name>-light.png` and `-dark.png`), taken from sample data only; the copy shown
// follows the site's theme. `compact` drops the hero's wide margins, for a screenshot inside a docs page.
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const props = defineProps<{ name: string; alt: string; compact?: boolean }>()
const { isDark } = useData()

const src = computed(() => withBase(`/screenshots/${props.name}-${isDark.value ? 'dark' : 'light'}.png`))
</script>

<template>
  <div :class="compact ? 'my-4' : 'hero-img'">
    <div class="browser">
      <div class="browser-header">
        <div class="browser-dots browser-dots-colored">
          <div class="browser-dot" />
          <div class="browser-dot" />
          <div class="browser-dot" />
        </div>
      </div>
      <img :src="src" :alt="alt" class="img-fluid" width="1280" height="820" loading="lazy" />
    </div>
  </div>
</template>
