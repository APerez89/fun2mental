<template>
  <div class="details">
    <h2>{{ authorDetails.firstName }}</h2>
    <h1>{{ authorDetails.lastName }}</h1>
    <h1>{{ authorDetails.id }}</h1>
    <!-- <img :src="bookDetails.coverImageUrl" alt="" /> -->
    <!-- <h3>{{ numAuthor }}</h3> -->
    <div
      class="book-card"
      v-for="(book, idx) in numAuthor"
      :key="idx"
    >
      {{ book.title }}
    </div>
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
      authors: books.authors,
    };
  },
  computed: {
    routeId() {
      // eslint-disable-next-line
      return parseInt(this.$route.params.id);
    },
    authorDetails() {
      return books.authors.find((author) => author.id === this.routeId);
    },
    bookDetails() {
      return books.books.find((book) => book.author === this.authorDetails.id);
    },
    numAuthor() {
      return books.books.filter((author) => author.author === this.bookDetails.author);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
