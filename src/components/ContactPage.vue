<template>
  <div :class="{ 'dark': isDarkMode }" class="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
    <div>
      <h2 class="text-3xl font-extrabold">{{ $t('contact.headline')}}</h2>

      <form @submit.prevent="submitForm">
        <div class="space-y-3 mt-8">
          <input
              v-model="name"
              type="text"
              id="name"
              :placeholder="$t('contact.name')"
              class="px-2 py-3 w-full text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white outline-none"
              :class="{ 'border-red-500': nameError }"
          />
          <input
              v-model="phone"
              type="text"
              :placeholder="$t('contact.phoneNo')"
              class="px-2 py-3 w-full text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white outline-none"
          />
          <input
              v-model="email"
              type="email"
              :placeholder="$t('contact.email')"
              class="px-2 py-3 w-full text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white outline-none"
              :class="{ 'border-red-500': emailError }"
          />
          <textarea
              v-model="message"
              :placeholder="$t('contact.message')"
              class="px-2 pt-3 w-full h-32 text-sm border-b border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white outline-none"
          ></textarea>
        </div>

        <button
            type="submit"
            class="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-customBlue hover:bg-blue-500 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" class="mr-2" viewBox="0 0 548.244 548.244">
            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
          </svg>
          {{ $t('contact.sendMessage') }}
        </button>
      </form>

      <p v-if="errorMessage" class="rounded bg-red-600 text-white text-center mt-2 py-2.5">{{ errorMessage }}</p>
      <p v-if="successMessage" class="rounded bg-green-600 text-white text-center mt-2 py-2.5">{{ successMessage }}</p>

      <ul class="mt-4 flex flex-wrap justify-center gap-6">
        <li class="flex items-center text-customBlue">
          <a href="mailto:your-email@gmail.com" class="text-sm ml-4"><small>aleksandar12077171@gmail.com</small></a>
        </li>
        <li class="flex items-center text-customBlue">
          <a href="tel:+381637760940" class="text-sm ml-4"><small>+381 63 7760940</small></a>
        </li>
      </ul>
    </div>

    <div class="z-10 relative h-full max-md:min-h-[350px]">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11313.354445116423!2d20.354625212426747!3d44.855400991397836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1720355021579!5m2!1sen!2srs"
          class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      name: '',
      phone: '',
      email: '',
      message: '',
      errorMessage: '',
      successMessage: '',
      nameError: false,
      emailError: false,
      loading: false
    };
  },
  methods: {
    validateForm() {
      this.nameError = this.name.length < 3;
      this.emailError = !this.validEmail(this.email);
      return !this.nameError && !this.emailError;
    },
    validEmail(email) {
      // Simple email validation regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async submitForm() {
      if (!this.validateForm()) {
        this.errorMessage = this.$t('contact.errorMessage');
        return;
      }

      this.loading = true;

      try {
        const url = import.meta.env.VITE_API_URL + '/submit-form';
        console.log('API URL:', url);

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const data = await response.json();
        console.log('Data:', data);

        this.successMessage = data.message;
        this.errorMessage = '';

        this.resetForm();

      } catch (error) {
        console.error('Error submitting form:', error);
        this.errorMessage = this.$t('contact.errorMessage2');
        this.successMessage = '';
      } finally {
        this.loading = false;
      }
    },
    resetForm() {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.message = '';
      this.nameError = false;
      this.emailError = false;
    }
  }
};
</script>














