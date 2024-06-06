<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    size?: number;
  }>(),
  {
    size: 24,
  }
);
</script>

<template>
  <span
    class="material-symbols-rounded"
    :style="{ height: `${size}px`, width: `${size}px`, fontSize: `${size}px` }"
    v-html="icon"
  ></span>
</template>

<style scoped></style>
