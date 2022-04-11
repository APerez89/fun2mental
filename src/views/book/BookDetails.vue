<template>
  <div class="details">
    <h3>book details in hurr</h3>
    <p>{{ book[this.id] }}</p>
  </div>
</template>

<script>
import books from '@/assets/Datastore.json';

export default {
  name: 'BookDetails',
  props: ['id'],
  data() {
    return {
      books: books.books,
      book: {},
    };
  },
  mounted() {
    console.log(this.book);
    this.book = this.books.find((book) => book.id === this.id);
  },
};
</script>

<style lang="scss" scoped>

</style>
