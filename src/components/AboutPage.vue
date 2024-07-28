<template>
  <div class="container mx-auto mb-10 items-center">
    <hr class="bg-gray-200 h-px border-0 dark:bg-gray-700"/>
    <hr class="h-1 mx-auto mb-4 bg-gray-200 border-0 rounded md:my-1 dark:bg-gray-700"
    />
  </div>
  <div class="flex justify-center items-start p-4 md:p-8">
    <div class="w-full max-w-6xl flex flex-col md:flex-row">
      <div class="timeline w-full md:w-1/3 border-r border-gray-100 p-2">
        <div
            v-for="(item, index) in items"
            :key="index"
            @click="selectYear(item.year)"
            class="border my-5 py-5 cursor-pointer hover:shadow flex items-center justify-center"
        >
          <img :src="item.icon" class="w-10 mr-3" />
          <div class="text-xl font-semibold">{{ item.year }}</div>
        </div>
      </div>
      <transition name="slide" mode="out-in">
        <div v-if="selectedItem" class="card details w-full md:w-2/3 p-4 shadow-lg rounded-lg border text-center">
          <h2 class="text-2xl font-bold"><small class="font-extralight">{{ $t('about.year') }}</small>
            {{ selectedItem.year }}</h2>
          <h2 class="font-bold text-xl pb-3">{{ selectedItem.headline }}</h2>
          <img :src="selectedItem.image" class="w-full h-96 object-cover rounded-lg pb-3"/>
          <p class="mt-1 mb-5 font-extralight">{{ selectedItem.details }}</p>
        </div>
        <div v-else
             class="card details w-full md:w-2/3 p-4 shadow-lg rounded-lg flex flex-col justify-center items-center text-center">
          <p class="font-extralight mb-3">{{ $t('about.select') }}</p>
          <img src="/images/logo.svg" class="w-1/4"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import tools from '/images/tools.svg';
import bolt from '/images/bolt.svg';
import desktop from '/images/desktop.svg';
import graduation from '/images/graduationcap.svg';
import laptop from '/images/laptopcode.svg';
import employee from '/images/employee.svg';

export default {
  data() {
    return {
      items: [
        {
          year: 2017,
          details: this.$t('about.description.2017'),
          headline: this.$t('about.2017'),
          icon: tools,
          image: 'https://www.herzing.edu/sites/default/files/2021-08/it-support-technician_0.jpg'
        },
        {
          year: 2018,
          details: this.$t('about.description.2018'),
          headline: this.$t('about.2018'),
          icon: bolt,
          image: 'https://i0.wp.com/blog.ed2go.com/wp-content/uploads/2022/06/blog_electrician_1200x600.jpg?fit=1200%2C600&ssl=1'
        },
        {
          year: 2019,
          details: this.$t('about.description.2019'),
          headline: this.$t('about.2019'),
          icon: desktop,
          image: 'https://www.onlinedegree.com/wp-content/uploads/2016/11/computer_repair_technician.jpg'
        },
        {
          year: 2020,
          details: this.$t('about.description.2020'),
          headline: this.$t('about.2020'),
          icon: graduation,
          image: 'https://www.billboard.com/wp-content/uploads/2022/04/graduation-2022-billboard-1548.jpg'
        },
        {
          year: 2021,
          details: this.$t('about.description.2021'),
          headline: this.$t('about.2021'),
          icon: laptop,
          image: 'https://emeritus.org/wp-content/uploads/2023/01/4a.webp'
        },
        {
          year: 2024,
          details: this.$t('about.description.2024'),
          headline: this.$t('about.2024'),
          icon: employee,
          image: 'https://a.storyblok.com/f/86602/1290x668/8e49a37226/top-developers.jpg'
        },
      ],
      selectedItem: null,
    };
  },
  methods: {
    selectYear(year) {
      this.selectedItem = this.items.find(item => item.year === year);
    },
  },
};
</script>

<style scoped>
.timeline {
  max-height: 100vh;
  overflow-y: auto;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>




