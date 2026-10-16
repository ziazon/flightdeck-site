<script setup lang="ts">
// VitePress owns the light/dark switch (the `dark` class on <html>); Tabler reads `data-bs-theme`.
// This keeps the two in step so Tabler components follow the toggle.
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watchEffect } from 'vue'

const { isDark } = useData()

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
