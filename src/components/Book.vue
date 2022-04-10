<template>
  <div class="book__contain">
    <div
      class="book"
      v-for="(book, idx) in books"
      :key="idx"
    >
      <div class="book__img">
        <img :src="book.coverImageUrl" alt="">
      </div>
      <div class="book__info">
        <h3>{{ book.title }}</h3>
        <p> {{ getAuthor(book.author) }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { books, authors } from '@/assets/Datastore.json';

export default {
  name: 'Book',
  data() {
    return {
      books,
      authors,
    };
  },
  methods: {
    getAuthor(id) {
      const author = authors.find((a) => a.id === id);
      return `${author.firstName} ${author.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.book__contain {
  width: 100%;
  .book {
    max-width: 300px;
    border: 1px solid red;
    .book__img {
      img {
        width: 100px;
      }
    }

    .book__info {
      h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }
}
</style>
