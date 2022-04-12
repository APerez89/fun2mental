<template>
  <div class="
    author__details_contain
    container
    flex
    flex-col
    justify-center
    container
    p-4">
    <router-link
      to="/authors"
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
      Back to Authors list
    </router-link>
    <div class="
      author__info
      flex
      flex-col
      p-6"
    >
      <div class="info__top lg:mb-9 md:mb-9 mb-7">
        <h2 class="text-6xl lg:mb-9 md:mb-9 mb-7 highlight-l">
          {{ authorDetails.firstName }} {{ authorDetails.lastName }}
        </h2>
        <p class="text-base tracking-wide leading-7 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis
          voluptatibus placeat culpa. Quia reprehenderit aut maiores
          ipsa mollitia? Totam enim unde praesentium eius corrupti dolorum mollitia
          ad harum aliquid!
          Voluptatibus placeat culpa. Totam enim unde praesentium eius corrupti dolorum mollitia
          ad harum aliquid! Quia reprehenderit aut maiores
          ipsa mollitia?
        </p>
        <br />
        <p class="text-base tracking-wide leading-7 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam enim unde praesentium eius corrupti dolorum mollitia
          ad harum aliquid Iste veritatis
          voluptatibus placeat culpa. Quia reprehenderit aut maiores
          ipsa mollitia?!
          Voluptatibus placeat culpa. Totam enim unde praesentium eius corrupti dolorum mollitia
          ad harum aliquid!
        </p>
        <br />
        <p class="text-base tracking-wide leading-7 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam enim unde praesentium eius corrupti dolorum mollitia
          ad harum aliquid! Voluptatibus placeat culpa.
          Iste veritatis voluptatibus placeat culpa. Quia reprehenderit aut maiores
          ipsa mollitia?
        </p>
      </div>
      <div class="info__bottom">
        <div class="bottom_1 lg:mb-6 md:mb-6 mb-4">
          <h2 class="text-2xl">
            Books by
            <span class="highlight-l">
              {{ authorDetails.firstName }} {{ authorDetails.lastName }}
            </span>
          </h2>
        </div>
        <div class="
          bottom_2
          flex
          flex-col
          md:flex-row
          lg:flex-row
          justify-center
          items-center"
        >
          <router-link
            :to="{ name: 'BookDetails', params: { id: book.id } }"
            class="book_card p-4 rounded-md lg:mx-4 md:mx-4 my-4 shadow-lg"
            :style="`background: var(--gradient-${book.id}`"
            v-for="(book, idx) in numAuthor"
            :key="idx"
          >
            <div class="img_wrap mb-4">
              <div
                class="book-img rounded-md shadow-lg"
                :style="`background-image: url(${book.coverImageUrl})`"
              ></div>
            </div>
            <div class="card_bottom flex justify-between">
              <h3 class="text-xl text-left">
                {{ book.title }}
              </h3>
              <div class="arrows self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </router-link>
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
.author__details_contain {
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
  .author__info {
    color: var(--l-gray);
    .info__bottom {
      .bottom_2 {
        .book_card {
          transition: var(--transition-f);
          .img_wrap {
            width: 100%;
            min-width: 250px;
            .book-img {
              width: 100%;
              height: 300px;
              background-size: cover;
              background-position: 50%;
              background-repeat: no-repeat;
              transition: var(--transition-f);
            }
          }
          .card_bottom {
            color: var(--white);
            h3 {
              max-width: 250px;
              text-shadow: 0px 1px 4px rgba(0,0,0,0.3);
            }
            .arrows {
              opacity: 0;
              transform: translateX(-20px);
              transition: var(--transition-f);
            }
          }
          &:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 30px -12px rgb(0 0 0 / 0.25);
            .img_wrap {
              .book-img {
                box-shadow: 0 20px 30px -10px rgb(0 0 0 / 0.35);
                transform: translateY(-25px);
              }
            }
            .card_bottom {
              .arrows {
                opacity: 1;
                transform: translateX(0px);
              }
            }

          }
        }
      }
    }
  }
}
</style>
