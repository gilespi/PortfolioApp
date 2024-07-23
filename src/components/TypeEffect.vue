<template>
  <div>
    <span ref="typedElement"></span>
  </div>
</template>

<script>
import Typed from 'typed.js';

export default {
  name: 'TypeEffect',
  mounted() {
    const options = {
      strings: [
        this.$t('home.webDeveloper'),
        this.$t('home.frontendDeveloper'),
        this.$t('home.webDesigner')
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    this.typed = new Typed(this.$refs.typedElement, options);
  },
  beforeDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  },
};
</script>