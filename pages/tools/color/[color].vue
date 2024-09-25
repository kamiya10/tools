<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  console.log(route.redirectedFrom);
});

</script>

<template>
  <div class="flex flex-col w-full">
    <div class="relative w-dvw h-dvh grid items-center justify-center"
      :style="{ backgroundColor: `#${route.params['color']}` }">
      <div
        class="text-lg tracking-widest leading-none select-all se p-2 border border-surface-0/20 dark:border-surface-950/20 rounded-md bg-surface-0/20 dark:bg-surface-950/20 text-surface-950 dark:text-surface-0">
        #{{ route.params['color'] }}
      </div>
    </div>
    <div class="w-full h-24 bg-gradient-to-b to-surface-0 from-[var(--color)] dark:to-surface-950"
      :style="`--color: #${route.params['color']};`"></div>
  </div>
</template>