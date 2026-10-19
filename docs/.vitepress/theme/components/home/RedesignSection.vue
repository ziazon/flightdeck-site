<script setup lang="ts">
import { withBase } from 'vitepress'
import { IconCommand, IconLayoutDashboard, IconMicrophone, IconServer2 } from '@tabler/icons-vue'

const highlights = [
  {
    icon: IconLayoutDashboard,
    title: 'One page to watch',
    text: 'Overview shows the board for the work you pick. Select several Flights to follow them together, and save the selection as a group.',
  },
  {
    icon: IconServer2,
    title: 'A fleet bar',
    text: 'A thin bar on every page sums up all your machines and your agent accounts\' usage. Hover or open it for the detail.',
  },
  {
    icon: IconCommand,
    title: '⌘K everywhere',
    text: 'Find a Flight, plan, ticket or skill, or run an action, from any page without leaving the keyboard.',
  },
  {
    icon: IconMicrophone,
    title: 'Your phone, with voice',
    text: 'The companion follows the same work, answers questions, and lets you hold a button to ask about it by voice.',
  },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="badge bg-azure-lt mb-2">In development</span>
        <h2 class="section-title">A redesign is on the way</h2>
        <p class="section-description">
          Every page of the app has been redesigned for watching a lot of agent work at once, across more than one
          machine.
        </p>
      </div>
      <div class="row g-5">
        <div v-for="item in highlights" :key="item.title" class="col-md-6 col-lg-3">
          <div class="shape shape-md shape-primary mb-3">
            <component :is="item.icon" :size="28" stroke-width="1.75" />
          </div>
          <h3 class="h3">{{ item.title }}</h3>
          <p class="text-secondary">{{ item.text }}</p>
        </div>
      </div>
      <div class="text-center mt-4">
        <a :href="withBase('/whats-coming')" class="btn">See what's coming</a>
      </div>
    </div>
  </section>
</template>
