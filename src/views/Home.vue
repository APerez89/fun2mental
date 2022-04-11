<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }
}
</style>
