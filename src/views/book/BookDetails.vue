<template>
  <div class="book__details_contain container">
    <div class="
      book__info
      grid
      grid-cols-3
      p-6"
    >
      <div class="info_left">
        <img :src="bookDetails.coverImageUrl" alt="" />
      </div>
      <div class="info_right col-span-2">
        <h1 class="text-6xl">{{ bookDetails.title }}</h1>
        <h2>{{ bookDetails.year }}</h2>
        <router-link :to="{ name: 'AuthorDetails', params: { id: bookDetails.author } }">
          {{ getAuthor.firstName }} {{ getAuthor.lastName }}
        </router-link>
      </div>
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
* {
  border: 1px solid red;
}
.book__details_contain {
  .book__info {
    .info_left {
      max-width: 350px;
      img {
        width: 100%;
      }
    }
    .info_right {}
  }
}
</style>
