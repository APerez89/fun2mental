<template>
  <div class="
    book__details_contain
    flex
    flex-col
    justify-center
    container
    p-4"
  >
    <router-link
      to="/books"
      class="
        back
        self-start
        highlight-l
        flex"
    >
    <span class="mr-2 left-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
    </span>
      Back to Books list
    </router-link>
    <div class="
      book__info
      grid
      grid-cols-1
      lg:grid-cols-3
      md:grid-cols-3
      justify-items-center
      p-6"
    >
      <div class="info_left mb-3">
        <img :src="bookDetails.coverImageUrl" alt="" />
      </div>
      <div class="
        info_right
        md:col-span-2
        lg:col-span-2
        flex
        flex-col
        p-4
        md:p-7
        lg:p-7
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
  created() {
    // eslint-disable-next-line
    // const routeId = parseInt(this.$route.params.id);

    // const details = books.books.find((book) => book.id === routeId);

    // if (routeId !== details.id) {
    //   this.$router.push({ name: '404Resource', params: { resource: 'ID' } });
    //   console.log('did not match');
    // }
  },
  computed: {
    bookDetails() {
      // eslint-disable-next-line
      const routeId = parseInt(this.$route.params.id);
      return books.books.find((book) => book.id === routeId);
    },
    getAuthor() {
      return books.authors.find((author) => author.id === this.bookDetails.author);
    },
  },
};
</script>

<style lang="scss" scoped>
.book__details_contain {
  .back {
    .left-arrow {
      transition: var(--transition-f);
    }
    &:hover {
      text-decoration: underline;
      .left-arrow {
        transform: translateX(-3px);
      }
    }
  }
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
