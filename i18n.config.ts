import en from "@/i18n/en.json";
import ja from "@/i18n/ja.json";
import zhTW from "@/i18n/zh-TW.json";

export default defineI18nConfig(() => ({
  legacy: false,
  availableLocales: ["en", "zh-TW"],
  fallbackLocale: "en",
  messages: {
    en,
    ja,
    "zh-TW": zhTW
  }
}));
