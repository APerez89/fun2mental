<template>
  <div class="book__contain grid grid-cols-3 gap-9">
    <div
      class="book rounded-md p-3.5 flex shadow-lg"
      :style="`background: var(--gradient-${book.author}`"
      v-for="(book, idx) in books"
      :key="idx"
    >
      <div class="img__wrap flex-1">
        <div
          class="book-img rounded-md shadow-lg"
          :style="`background-image: url(${book.coverImageUrl})`"
        ></div>
      </div>
      <div class="book__info flex-1 text-left">
        <div class="info__top">
          <h3>{{ book.title }}</h3>
          <p>by {{ getAuthor(book.author) }} </p>
        </div>
        <div class="info__bottom">
          <p>published in {{ book.year }} </p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

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
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: var(--transition-f);
    .img__wrap {
      width: 100%;
      position: relative;
      .book-img {
        width: 75%;
        height: 220px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        transition: var(--transition-f);
      }
    }

    .book__info {
      color: var(--white);
      text-shadow: 0px 1px 4px rgba(0,0,0,0.3);
      h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 30px -12px rgb(0 0 0 / 0.25);
      .img__wrap {
        .book-img {
          transform: translateY(-25px);
        }
      }
    }
  }
}
</style>
