<template>
  <div class="home w-full p-0 m-0">
    <Welcome />
    <PopularBooks />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import PopularBooks from '@/components/PopularBooks.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    PopularBooks,
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: calc(100vh - 182px);
}
</style>
