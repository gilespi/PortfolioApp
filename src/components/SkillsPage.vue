<template>
  <div class="container mx-auto mb-10 items-center">
    <hr class="bg-gray-200 h-px border-0 dark:bg-gray-700"/>
    <hr class="h-1 mx-auto mb-4 bg-gray-200 border-0 rounded md:my-1 dark:bg-gray-700"/>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mx-auto mt-5">
    <div v-for="item in skills" :key="item.id"
         class="border hover:shadow-2xl flex flex-col items-center px-5 hover:shadow h-full">
      <button @click="updateProgress(item)" class="mb-4 p-2 text-white rounded-full">
        <div class="border p-2">
          <img :src="item.icon" class="w-20" alt="#">
        </div>
      </button>
      <div class="w-full bg-gray-200 rounded-full h-6">
        <div :style="{ width: `${item.progress}%` }"
             class="bg-customBlue h-6 rounded-full transition-all duration-300 ease-in-out"></div>
      </div>
      <div class="mt-2 text-customBlue">{{ item.progress }}%</div>
    </div>
  </div>
</template>

<script>
import vueIcon from '/images/vue.svg';
import jsIcon from '/images/js.svg';
import apiIcon from '/images/api.svg';
import html5Icon from '/images/html5.svg';
import tailwindIcon from '/images/tailwind.svg';
import nodeIcon from '/images/node.svg';
import cssIcon from '/images/css.svg';
import bootIcon from '/images/bootstrap.svg'
export default {
  data() {
    return {
      skills: [
        {id: 1, name: 'HTML', icon: html5Icon, progress: 0, maxProgress: 90},
        {id: 2, name: 'CSS', icon: cssIcon, progress: 0, maxProgress: 85},
        {id: 3, name: 'JavaScript', icon: jsIcon, progress: 0, maxProgress: 70},
        {id: 4, name: 'Vue', icon: vueIcon, progress: 0, maxProgress: 60},
        {id: 5, name: 'Node.js', icon: nodeIcon, progress: 0, maxProgress: 50},
        {id: 6, name: 'API', icon: apiIcon, progress: 0, maxProgress: 70},
        {id: 7, name: 'Bootstrap', icon: bootIcon, progress: 0, maxProgress: 80},
        {id: 8, name: 'Tailwind CSS', icon: tailwindIcon, progress: 0, maxProgress: 65},
      ]
    };
  },
  methods: {
    updateProgress(skill) {
      if (skill.progress === skill.maxProgress) {
        skill.progress = 0;
      }
      const interval = setInterval(() => {
        if (skill.progress >= skill.maxProgress) {
          clearInterval(interval);
        } else {
          skill.progress += 1;
        }
      });
    }
  }
};
</script>


