<template>
  <div class="
    book__contain
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-9"
  >
    <router-link
      :to="{ name: 'BookDetails', params: { id: book.id } }"
      class="book rounded-md p-3.5 grid grid-cols-3 shadow-lg"
      :style="`background: var(--gradient-${book.author}`"
      v-for="(book, idx) in books"
      :key="idx"
    >
      <div class="img__wrap">
        <div
          data-testid="book-img"
          class="book-img rounded-md shadow-lg"
          :style="`background-image: url(${book.coverImageUrl})`"
        ></div>
      </div>
      <div class="book__info col-span-2 flex flex-col justify-between text-left ml-3 py-4">
        <div class="info__top">
          <h2 class="text-3xl font-medium">{{ book.title }}</h2>
          <p>by
            <router-link
              class="author__link highlight-d"
              :to="{ name: 'AuthorDetails', params: { id: book.author } }"
            >
              {{ getAuthor(book.author) }}
            </router-link>
          </p>
          <p class="mt-2.5">Year published: {{ book.year }}</p>
        </div>
        <div class="info__bottom justify-self-end self-end">
          <div class="arrows">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import { books, authors } from '@/assets/Datastore.json';

export default {
  name: 'BookCard',
  props: {
    id: books.id,
  },
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
        width: 100%;
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
      .info__top {
        .author__link {
          text-decoration: underline;
          &:hover {
            color: var(--white);
          }
        }
      }
      .info__bottom {
        .arrows {
          opacity: 0;
          transform: translateX(-20px);
          transition: var(--transition-f);
        }
      }
    }
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 30px -12px rgb(0 0 0 / 0.25);
      .img__wrap {
        .book-img {
          box-shadow: 0 20px 30px -10px rgb(0 0 0 / 0.35);
          transform: translateY(-25px);
        }
      }
      .info__bottom {
        .arrows {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    }
  }
}
</style>
