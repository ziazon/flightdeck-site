<script setup lang="ts">
import { withBase } from 'vitepress'
import { IconDeviceMobile } from '@tabler/icons-vue'
</script>

<template>
  <section class="section section-light">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-2 text-center">
          <div class="shape shape-xl shape-primary mx-auto">
            <IconDeviceMobile :size="48" stroke-width="1.5" />
          </div>
        </div>
        <div class="col-lg-10">
          <span class="badge bg-azure-lt mb-2">Coming soon</span>
          <h2 class="h1">Your agents, from your phone</h2>
          <p class="text-secondary fs-3">
            The Flightdeck iPhone companion will show the same Monitor and Needs You, let you answer an agent's
            question and start or stop a job, all through your own iCloud with nothing in between.
          </p>
          <a :href="withBase('/guide/companion')" class="btn">About the companion</a>
        </div>
      </div>
    </div>
  </section>
</template>
