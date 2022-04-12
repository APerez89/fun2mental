<template>
  <div class="book__details_contain flex justify-center container">
    <div class="
      book__info
      grid
      lg:grid-cols-3
      p-6"
    >
      <div class="info_left mb-3">
        <img :src="bookDetails.coverImageUrl" alt="" />
      </div>
      <div class="
        info_right
        lg:col-span-2
        flex
        flex-col
        p-7
        justify-evenly"
      >
        <div class="right_top mb-5">
          <h1 class="text-6xl mb-3">{{ bookDetails.title }}</h1>
          <p class="text-lg">By
            <router-link
              class="author__link highlight-l font-medium"
              :to="{ name: 'AuthorDetails', params: { id: bookDetails.author } }"
            >
              {{ getAuthor.firstName }} {{ getAuthor.lastName }}
            </router-link>
          </p>
          <p>Published in the year {{ bookDetails.year }}</p>
        </div>
        <div class="right_bottom">
          <p class="text-base tracking-wide leading-7 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis
            voluptatibus placeat culpa. Quia reprehenderit aut maiores
            ipsa mollitia? Totam enim unde praesentium eius corrupti dolorum mollitia
            ad harum aliquid!
            Voluptatibus placeat culpa. Totam enim unde praesentium eius corrupti dolorum mollitia
            ad harum aliquid! Quia reprehenderit aut maiores
            ipsa mollitia?
          </p>
        </div>
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
/* * {
  border: 1px solid red;
} */
.book__details_contain {
  .book__info {
    .info_left {
      max-width: 350px;
      img {
        width: 100%;
      }
    }
    .info_right {
      color: var(--l-gray);

      .right_top {
        .author__link {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
