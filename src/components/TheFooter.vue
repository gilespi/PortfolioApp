<template>
  <footer class="w-full py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <a href="#" class="flex justify-center ">
          <img src="/images/logo.svg" class="flex justify-center w-12" alt="#"/>
        </a>
        <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
          <li>
            <RouterLink :to="Trans.i18nRoute({ name: 'home' })"
                        class="block py-2 px-3  rounded md:bg-transparent  md:p-0 dark:text-blue-300 md:dark:text-blue-500"
                        aria-current="page">{{ $t('nav.home') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="Trans.i18nRoute({ name: 'about' })"
                        class="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
              {{ $t('nav.about') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="Trans.i18nRoute({ name: 'portfolio' })"
                        class="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
              {{ $t('nav.portfolio') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="Trans.i18nRoute({ name: 'skills' })"
                        class="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
              {{ $t('nav.skills') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="Trans.i18nRoute({ name: 'contact' })"
                        class="block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500">
              {{ $t('nav.contact') }}
            </RouterLink>
          </li>
        </ul>
        <div class="flex space-x-10 justify-center items-center mb-14">
          <a href="https://linkedin.com/in/aleksandar-gigic-a544091a4" target="_blank"
             class="block  transition-all duration-500 hover:text-indigo-600">
            <svg class="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.801-1.75-1.732 0-.931.784-1.732 1.75-1.732s1.75.801 1.75 1.732c0 .931-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.5c0-3.089-4-2.853-4 0v5.5h-3v-10h3v1.631c1.396-2.586 7-2.777 7 2.476v5.893z"
                  fill="currentColor"/>
            </svg>
          </a>
          <a href="https://github.com/gilespi" target="_blank"
             class="block  transition-all duration-500 hover:text-indigo-600">
            <svg class="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.005.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.921.43.371.813 1.102.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.694.825.576 4.765-1.588 8.198-6.086 8.198-11.386 0-6.627-5.373-12-12-12z"
                  fill="currentColor"/>
            </svg>
          </a>
          <a href="https://x.com/AlexG1197660" target="_blank"
             class="block   transition-all duration-500 hover:text-indigo-600 ">
            <svg class="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="currentColor"/>
            </svg>
          </a>
          <a href="https://t.me/@Sasha7171" target="_blank"
             class="block transition-all duration-500 hover:text-indigo-600">
            <svg class="w-[1.688rem] h-[1.688rem]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <span class="text-lg  text-center block"><small>© {{ new Date().getFullYear() }}, {{
            $t('footer.rights')
          }}</small></span>
      </div>
    </div>
  </footer>
</template>

<script>
import Trans from "@/translation.js";

export default {
  setup() {
    return {Trans}
  },
};
</script>