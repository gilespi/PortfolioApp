<template>
  <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div
        class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg class="absolute left-0 hidden h-full transform -translate-x-1/2 lg:block svg-color" viewBox="0 0 100 100"
           fill="currentColor" preserveAspectRatio="none slice">
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/1920x1200-Futuristic-Wallpaper-HD.jpg"
          alt=""
      />
    </div>
    <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
          <TypeEffect/>
        </h2>
        <p class="pr-5 mb-5 text-base md:text-lg font-extralight">
          {{ $t('home.description') }}
        </p>
        <div class="flex items-center">
          <RouterLink
              to="contact"
              class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none"
          >
            {{ $t('home.contact') }}
          </RouterLink>
          <a href="https://drive.google.com/file/d/10EcTK8YFhcYnd6_st5nyjqB-EnDFug1p/view?usp=sharing" target="_blank"
             class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md 0 focus:shadow-outline focus:outline-none">
            {{ $t('home.getCV') }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-center p-4 my-16">
    <div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
      <div class="flex-1 p-4 m-2 rounded-md border-2 mx-6">
        <p class="font-light text-base">{{ $t('home.column1') }}</p>
      </div>
      <div class="flex-1 p-4 m-2 rounded-md border-2 mx-6">
        <p class="font-light text-base">{{ $t('home.column2') }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import {useI18n} from 'vue-i18n'
import TypeEffect from "@/components/TypeEffect.vue";

export default {
  components: {
    TypeEffect,
  },
  setup() {
    const {t} = useI18n()
    return {t}
  },
}
</script>

<style>
:root {
  --svg-color: white;
}

.dark {
  --svg-color: #121212;
}

.svg-color {
  color: var(--svg-color);
}
</style>

