<script setup lang="ts">
// A download card for a build that does not exist yet.
import { IconBrandApple, IconDeviceMobile } from '@tabler/icons-vue'

defineProps<{ platform: 'mac' | 'iphone'; title: string }>()
</script>

<template>
  <div class="card card-lg mb-4">
    <div class="card-body d-flex gap-4 align-items-start">
      <div class="shape shape-lg shape-primary flex-shrink-0">
        <IconBrandApple v-if="platform === 'mac'" :size="32" stroke-width="1.5" />
        <IconDeviceMobile v-else :size="32" stroke-width="1.5" />
      </div>
      <div>
        <h3 class="card-title d-flex align-items-center gap-2 mb-2">
          {{ title }}
          <span class="badge bg-azure-lt">Coming soon</span>
        </h3>
        <div class="text-secondary"><slot /></div>
      </div>
    </div>
  </div>
</template>
