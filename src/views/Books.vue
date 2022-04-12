<template>
  <div class="books__contain container px-5 py-10">
    <div class="header-wrap mb-10 flex">
      <h3 class="text-left text-4xl pb-4 pr-6 highlight-d">
        Our
          <span class="highlight-l"><em>Premium</em></span>
        list of Books
      </h3>
    </div>
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
.books__contain {
  .header-wrap {
    h3 {
      border-bottom: 2px solid var(--green);
    }
  }
}
</style>
