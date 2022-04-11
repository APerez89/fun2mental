<template>
  <div class="books__contain container p-5">
    <BookCard />
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';

export default {
  name: 'Books',
  components: {
    BookCard,
  },
};
</script>

<style lang="scss" scoped>
</style>
