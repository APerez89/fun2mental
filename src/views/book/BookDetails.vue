<template>
  <div class="book__details_contain container">
    <div class="book__info">
      <div class="info_left">
        <img :src="bookDetails.coverImageUrl" alt="" />
      </div>
    </div>
    <div class="info-right">
      <h1>{{ bookDetails.title }}</h1>
      <h2>{{ bookDetails.year }}</h2>
      <router-link :to="{ name: 'AuthorDetails', params: { id: bookDetails.author } }">
        {{ getAuthor.firstName }} {{ getAuthor.lastName }}
      </router-link>
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
    bookDetails() {
      return books.books.find((book) => book.id === this.routeId);
    },
    getAuthor() {
      return books.authors.find((author) => author.id === this.bookDetails.author);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
