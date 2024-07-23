<template>

  <MainNav />
  <div class="py-4">
    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
  <TheFooter />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    MainNav,
    TheFooter,
  }
};
</script>

<style>
:root {
  --background-color: white;
  --text-color: black;
}

.dark {
  --background-color: #121212;
  --text-color: #5BC9F4;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.2s, color 0.2s;
}
</style>