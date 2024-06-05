<script setup lang="ts">
import type { MaterialSymbol } from "material-symbols";

defineProps<{
  icon: MaterialSymbol;
}>();
</script>

<template>
  <span class="material-symbols-rounded" v-html="icon"></span>
</template>

<style scoped></style>
