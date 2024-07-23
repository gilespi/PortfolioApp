<template>
  <div class="relative align-sub">
    <button @click="open = !open" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" :aria-expanded="open">
      <img :src="imagePath(currentLocale)" alt="Flag" class="border w-5 h-auto inline-block mr-0.2"> {{ t(`locale.${currentLocale}`) }}
    </button>
    <ul v-show="open" class="dropdown-menu absolute z-10 mt-1 w-28 shadow-lg rounded-md py-0.2" aria-labelledby="dropdownMenuButton">
      <li v-for="sLocale in supportedLocales" :key="sLocale">
        <a @click="setLocaleAndClose(sLocale)" href="#" class="block px-1 py-1 text-sm" role="menuitem">
          <img :src="imagePath(sLocale)" alt="Flag" class="border w-5 h-auto inline-block mr-0.2"> {{ t(`locale.${sLocale}`) }}
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import Trans from '@/translation.js';

export default {
  setup() {
    const { t, locale } = useI18n();
    const supportedLocales = Trans.supportedLocales;

    const router = useRouter();

    const currentLocale = computed(() => locale.value);
    const open = ref(false);

    const switchLanguage = async (newLocale) => {
      await Trans.switchLanguage(newLocale);

      try {
        await router.replace({ params: { locale: newLocale } });
      } catch (e) {
        console.log(e);
        router.push('/');
      }
    };

    const setLocaleAndClose = async (newLocale) => {
      await switchLanguage(newLocale);
      open.value = false;
    };

    const imagePath = (locale) => new URL(`/src/assets/images/${locale}.svg`, import.meta.url).href;

    return { t, locale, supportedLocales, switchLanguage, currentLocale, open, setLocaleAndClose, imagePath };
  }
};
</script>


