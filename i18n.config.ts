import en from "@/i18n/en.json";
import ja from "@/i18n/ja.json";
import tw from "@/i18n/zh-TW.json";

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "en",
  messages: {
    en,
    ja,
    tw
  }
}));
