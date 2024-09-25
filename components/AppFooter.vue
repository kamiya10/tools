<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.map((i) => ({
    label: i.name,
    value: i.code,
  }));
});

const changeLocale = () => {
  setLocale(locale.value);
};
</script>

<template>
  <footer class="flex flex-col sm:flex-row gap-4 items-center justify-center h-16">
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <NuxtLink to="/tools/json-formatter" noPrefetch>
        {{ $t("tools.json_formatter.title") }}
      </NuxtLink>
      <NuxtLink to="/tools/number-converter" noPrefetch>
        {{ $t("tools.number_converter.title") }}
      </NuxtLink>
      <NuxtLink to="/tools/phrase-checker" noPrefetch>Phrase Checker</NuxtLink>
    </div>
    <div class="sm:absolute sm:right-4">
      <Select v-model="locale" :options="availableLocales" option-label="label" option-value="value"
        @change="changeLocale" />
    </div>
  </footer>
</template>
