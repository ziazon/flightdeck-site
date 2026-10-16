<script setup lang="ts">
import { features } from './features'
</script>

<template>
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Built for running agents, not babysitting them</h2>
        <p class="section-description">
          Flightdeck sits beside the agents you already use, such as Claude Code, and keeps their work in view.
        </p>
      </div>
      <div class="row g-5">
        <div v-for="feature in features" :key="feature.title" class="col-md-6 col-lg-4">
          <div class="shape shape-md shape-primary mb-3">
            <component :is="feature.icon" :size="28" stroke-width="1.75" />
          </div>
          <span v-if="feature.status" class="badge bg-azure-lt mb-2">{{ feature.status }}</span>
          <h3 class="h2">{{ feature.title }}</h3>
          <p class="text-secondary">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
