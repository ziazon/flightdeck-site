<script setup lang="ts">
import { IconKey, IconLock, IconWorldOff } from '@tabler/icons-vue'

const points = [
  {
    icon: IconWorldOff,
    title: 'The app makes no network calls',
    text: 'The desktop app opens no port and calls no server. Jira, Slack and Trello go through one separate, allowlisted client, and pull-request status comes from your own GitHub CLI.',
  },
  {
    icon: IconKey,
    title: 'Credentials stay in your Keychain',
    text: 'Tokens for Jira, Slack and Trello live in the macOS Keychain, never in files or on a command line.',
  },
  {
    icon: IconLock,
    title: 'Your records are yours',
    text: 'Your workspace is a folder of markdown on your Mac. There is no Flightdeck account and no Flightdeck server.',
  },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Private by design</h2>
      </div>
      <div class="row g-5">
        <div v-for="point in points" :key="point.title" class="col-md-4">
          <div class="d-flex gap-3">
            <div class="shape shape-md shape-green flex-shrink-0">
              <component :is="point.icon" :size="24" stroke-width="1.75" />
            </div>
            <div>
              <h3 class="h3 mb-1">{{ point.title }}</h3>
              <p class="text-secondary mb-0">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
