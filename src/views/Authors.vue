<template>
  <div class="authors__contain container p-5">
    <AuthorCard />
  </div>
</template>

<script>
import AuthorCard from '@/components/AuthorCard.vue';

export default {
  name: 'Authors',
  components: {
    AuthorCard,
  },
};
</script>

<style lang="scss" scoped>
</style>
