<template>
  <div class="details">
    <h1>{{ bookDetails.title }}</h1>
    <img :src="bookDetails.coverImageUrl" alt="" />
    <h2>{{ bookDetails.year }}</h2>
    <h2>{{ getAuthor.firstName }} {{ getAuthor.lastName }}</h2>
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
      authors: books.authors,
      author: {},
    };
  },
  computed: {
    routeId() {
      // eslint-disable-next-line
      return parseInt(this.$route.params.id);
    },
    bookDetails() {
      return books.books.find((book) => book.id === this.routeId);
    },
    getAuthor() {
      return books.authors.find((author) => author.id === this.routeId);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
