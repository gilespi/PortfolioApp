<template>
  <div class="container mx-auto">
    <div class="filters mb-3 flex justify-center">
      <button
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
          :class="{ active: selectedCategory === '' }"
          @click="filterCards('')">
        {{ $t('portfolio.displayAll') }}
      </button>
      <button
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
          :class="{ active: selectedCategory === 'webApp' }"
          @click="filterCards('webApp')">
        {{ $t('portfolio.webApp') }}
      </button>
      <button
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
          :class="{ active: selectedCategory === 'webSite' }"
          @click="filterCards('webSite')">
        {{ $t('portfolio.webSite') }}
      </button>

    </div>

    <div class="container mx-auto mb-10 items-center">
      <hr class="bg-gray-200 h-px border-0 dark:bg-gray-700"/>
      <hr class="h-1 mx-auto mb-4 bg-gray-200 border-0 rounded md:my-1 dark:bg-gray-700"
      />
    </div>

    <div class="flex flex-wrap justify-center">


      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div
            class="max-w-sm border rounded hover:shadow-gray mx-5 mb-4"
            v-for="card in filteredCards"
            :key="card.id">
          <img :src="card.image" class="w-full rounded-2xl p-2" :alt="card.title"/>
          <div class="card-body px-6 py-3">
            <h5 class="font-bold text-xl mb-2">{{ card.title }}</h5>
            <p class="text-base"><small>{{ card.description }}</small></p>
            <hr class="bg-gray-200 h-px border-0 dark:bg-gray-700"/>
          </div>
          <div class="flex justify-between mb-2 mx-3">
            <div class="mx-2">
              <a :href="card.url" target="_blank" rel="noopener noreferrer">
                <button type="button"
                        class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center">
                  {{ $t('portfolio.view') }}
                </button>
              </a>
            </div>
            <div class="flex">
              <img v-for="icon in card.icons" :src="icon" class="w-6 h-6 mx-1" :key="icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import portfolio4 from '/images/portfolio-4.jpg';
import storeLocator from '/images/store-locator.png';
import portfolio9 from '/images/portfolio-9.png';
import portfolio2 from '/images/portfolio-2.jpg';
import portfolio10 from '/images/portfolio-10.png';
import portfolio3 from '/images/portfolio-3.png';
import portfolio7 from '/images/portfolio-7.jpg';
import portfolio8 from '/images/portfolio-8.jpg';
import vueIcon from '/images/vue.svg';
import jsIcon from '/images/js.svg';
import apiIcon from '/images/api.svg';
import html5Icon from '/images/html5.svg';
import tailwindIcon from '/images/tailwind.svg';
import nodeIcon from '/images/node.svg';
import cssIcon from '/images/css.svg';

export default {
  data() {
    return {
      selectedCategory: '',
      cards: [
        {
          id: 1,
          title: this.$t('portfolio.realEstate'),
          description: this.$t('portfolio.realEstate.description'),
          category: 'webApp',
          image: portfolio4,
          icons: [vueIcon, jsIcon, apiIcon, html5Icon, tailwindIcon],
          url: 'https://gilespi.github.io/RealEstateApp/'
        },
        {
          id: 2,
          title: this.$t('portfolio.storeLocator'),
          description: this.$t('portfolio.storeLocator.description'),
          category: 'webApp',
          image: storeLocator,
          icons: [vueIcon, jsIcon, apiIcon, html5Icon, tailwindIcon],
          url: 'https://gilespi.github.io/StoreLocatorApp/'
        },
        {
          id: 3,
          title: this.$t('portfolio.weatherApp'),
          description: this.$t('portfolio.weatherApp.description'),
          category: 'webApp',
          image: portfolio9,
          icons: [nodeIcon, jsIcon, apiIcon, html5Icon, cssIcon],
          url: 'https://weatherapp-fwaa.onrender.com/'
        },
        {
          id: 4,
          title: this.$t('portfolio.realEstateWeb'),
          description: this.$t('portfolio.realEstateWeb.description'),
          category: 'webSite',
          image: portfolio2,
          icons: [html5Icon, cssIcon, jsIcon],
          url: 'https://gilespi.github.io/Real-estate/'
        },
        {
          id: 5,
          title: this.$t('portfolio.portfolio'),
          description: this.$t('portfolio.portfolio.description'),
          category: 'webSite',
          image: portfolio10,
          icons: [vueIcon, html5Icon, cssIcon, jsIcon],
          url: 'https://gilespi.github.io/newPortfolio/'
        },
        {
          id: 6,
          title: this.$t('portfolio.portfolio1'),
          description: this.$t('portfolio.portfolio1.description'),
          category: 'webSite',
          image: portfolio3,
          icons: [html5Icon, cssIcon, jsIcon],
          url: 'https://gilespi.github.io/Portfolio/'
        },
        {
          id: 7,
          title: this.$t('portfolio.indonesia'),
          description: this.$t('portfolio.indonesia.description'),
          category: 'website',
          image: portfolio7,
          icons: [html5Icon, cssIcon, jsIcon],
          url: 'https://gilespi.github.io/Indonesia/'
        },
        {
          id: 8,
          title: this.$t('portfolio.rentAcar'),
          description: this.$t('portfolio.rentAcar.description'),
          category: 'webSite',
          image: portfolio8,
          icons: [html5Icon, cssIcon, jsIcon],
          url: "https://gilespi.github.io/Rent-a-car/"
        },
      ],
    };
  },
  computed: {
    filteredCards() {
      if (this.selectedCategory) {
        return this.cards.filter(card => card.category === this.selectedCategory);
      }
      return this.cards;
    }
  },
  methods: {
    filterCards(category) {
      this.selectedCategory = category;
    },
  }
};
</script>
