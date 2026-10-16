<script setup lang="ts">
import { withBase } from 'vitepress'
import ScreenshotFrame from './ScreenshotFrame.vue'
import { hasScreenshot } from './screenshots'
</script>

<template>
  <header class="hero">
    <div class="container">
      <img :src="withBase('/logo.png')" alt="" class="hero-logo d-block mx-auto mb-4" width="96" height="96" />
      <h1 class="hero-title">A control room for your AI coding agents</h1>
      <p class="hero-description mt-4">
        Flightdeck is a Mac app that shows what every agent is doing, gathers what needs you in one place,
        and runs your agents' jobs, so you can step away and come back to answers instead of a pile of terminals.
      </p>
      <div class="my-5">
        <div class="row g-3 justify-content-center">
          <div class="col-auto">
            <a :href="withBase('/guide/getting-started')" class="btn btn-lg">Read the guide</a>
          </div>
          <div class="col-auto">
            <a :href="withBase('/download')" class="btn btn-lg btn-primary">Download (coming soon)</a>
          </div>
        </div>
      </div>
      <ScreenshotFrame v-if="hasScreenshot('overview')" name="overview" alt="The Flightdeck overview with sample data" />
    </div>
  </header>
</template>

<style scoped>
.hero-logo {
  border-radius: 22%;
}
</style>
