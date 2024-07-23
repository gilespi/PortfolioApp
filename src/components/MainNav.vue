<template>
  <header>
    <div class="flex justify-end mx-3">
      <LanguageSwitcher class="me-1"/>
      <button class="theme-switch mx-3" @click="toggleTheme">
        <span v-if="isDarkMode" class="w-5">
          <img src="/images/light.svg" class="w-7" alt="#">
        </span>
        <span v-else>
          <img src="/images/dark.svg" class="w-7" alt="#">
        </span>
      </button>
    </div>
    <nav class="border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/"
                    class="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-300 md:p-0 dark:text-blue-300 md:dark:text-blue-500"
                    aria-current="page">
          <img src="/images/logo.svg" class="w-10" alt="#"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </RouterLink>
        <button @click="toggleMenu"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="w-full md:block md:w-auto">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink :to="Trans.i18nRoute({ name: 'home' })"
                          class="block py-2 px-3  rounded md:bg-transparent hover:text-blue-300 md:p-0 dark:text-blue-300 md:dark:text-blue-500"
                          active-class="active-link">{{ $t('nav.home') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="Trans.i18nRoute({ name: 'about' })"
                          class="block py-2 px-3 rounded md:bg-transparent hover:text-blue-300 md:p-0 dark:text-white md:dark:text-blue-500"
                          active-class="active-link">{{ $t('nav.about') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="Trans.i18nRoute({ name: 'portfolio' })"
                          class="block py-2 px-3 rounded md:bg-transparent hover:text-blue-300 md:p-0 dark:text-white md:dark:text-blue-500"
                          active-class="active-link">{{ $t('nav.portfolio') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="Trans.i18nRoute({ name: 'skills' })"
                          class="block py-2 px-3 rounded md:bg-transparent hover:text-blue-300 md:p-0 dark:text-white md:dark:text-blue-500"
                          active-class="active-link">{{ $t('nav.skills') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="Trans.i18nRoute({ name: 'contact' })"
                          class="block py-2 px-3 rounded md:bg-transparent hover:text-blue-300 md:p-0 dark:text-white md:dark:text-blue-500"
                          active-class="active-link">{{ $t('nav.contact') }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import Trans from "@/translation.js";

export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      isMenuOpen: false,
      isDarkMode: false,
    }
  },
  setup() {
    return {Trans}
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    },
  }
};
</script>

<style scoped>
:root {
  --background-color: white;
  --text-color: black;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.2s, color 0.2s;
}

.dark select,
.dark input {
  background-color: #121212;
  color: #5BC9F4;
}

.dark select,
.dark textarea {
  background-color: #121212;
  color: #5BC9F4;
}

</style>