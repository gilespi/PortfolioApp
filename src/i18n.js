import { createI18n } from "vue-i18n";

import en from "@/local/en.json";
import de from "@/local/de.json"
import sr from "@/local/sr.json";
import fr from "@/local/fr.json";
import es from "@/local/es.json";
import ua from "@/local/ua.json"
import ru from "@/local/ru.json"
const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages:{en, es, de, fr, ru, sr, ua},
})

export { i18n }