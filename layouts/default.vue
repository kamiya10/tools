<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<template>
  <div class="flex flex-col min-h-svh">
    <AppHeader />
    <main class="flex flex-col flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
  <SpeedInsights />
</template>
