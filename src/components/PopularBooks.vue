<template>
  <div class="popular__contain w-full flex justify-center p-5 my-6">
    <div class="popular_book container flex flex-col items-center">
      <h3 class="
        popular-head
        text-3xl
        mb-9
        pl-3
        pr-3
        pb-3
        tracking-wide
        leading-7
        highlight-d"
      >
        Now Trending
      </h3>
      <div class="
        book_wrap
        grid
        gid-cols-1
        md:grid-cols-3
        lg:grid-cols-3
        max-w-4xl
        gap-8
        justify-items-center
        "
      >
        <router-link
          :to="{ name: 'BookDetails', params: { id: book.id } }"
          class="book rounded-md shadow-lg"
          v-for="(book, idx) in popularBooks"
          :key="idx">
          <div class="img-wrap">
            <div
              class="book_img rounded-md"
              :style="`background-image: url(${book.coverImageUrl})`"
            ></div>
          </div>
          <h3 class="text-left text-xl px-4 py-2 mt-2 highlight-d">{{ book.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import books from '@/assets/Datastore.json';

export default {
  name: 'PopularBooks',
  data() {
    return {
      books: books.books,
      popularBooks: [],
    };
  },
  mounted() {
    // eslint-disable-next-line
    for (let id = 0; id < 3; id++) {
      const random = Math.floor(Math.random() * 10);
      const randomBook = books.books.find((book, idx) => idx === random);
      this.popularBooks.push(randomBook);
    }
  },
};
</script>

<style lang="scss" scoped>
.popular__contain {
  .popular_book {
    .popular-head {
      border-bottom: 2px solid var(--green);
    }
    .book_wrap {
      .book {
        background-color: var(--white);
        transition: var(--transition-f);
        .img-wrap {
          width: 100%;
          position: relative;
          .book_img {
            width: 220px;
            height: 275px;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            transition: var(--transition-f);
          }
        }
        &:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 30px -12px rgb(0 0 0 / 0.25);
          .img-wrap {
            .book_img {
              box-shadow: 0 10px 20px -10px rgb(0 0 0 / 0.35);
              transform: translateY(-8px);
            }
          }
        }
      }
    }
  }
}
</style>
