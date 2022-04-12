<template>
  <div class="home p-0">
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
  width: 100%;
  min-height: calc(100vh - 182px);
}
</style>
