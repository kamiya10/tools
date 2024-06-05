<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <AppHeader />
  <main class="flex flex-col flex-1">
    <slot />
  </main>
  <AppFooter />
  <SpeedInsights />
</template>
