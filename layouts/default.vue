<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Body>
      <AppHeader />
      <main class="flex flex-col flex-1">
        <slot />
      </main>
      <AppFooter />
      <SpeedInsights />
    </Body>
  </Html>
</template>
