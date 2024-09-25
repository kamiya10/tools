<script setup lang="ts">
const router = useRouter();
router.replace(`/tools/color/${Math.round(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`);
</script>

<template>

</template>