<template>
  <div class="author__contain grid grid-cols-3 gap-9">
    <router-link
      :to="{ name: 'AuthorDetails', params: { id: author.id } }"
      class="author rounded-md p-3.5 grid grid-cols-3 shadow-lg"
      :style="`background: var(--gradient-${author.id}`"
      v-for="(author, idx) in authors"
      :key="idx"
    >
      <div class="img__wrap">
        <div
          class="author-img rounded-md shadow-lg"
          :style="`background-image: url(${author.imageUrl})`"
        ></div>
      </div>
      <div class="author__info col-span-2 flex flex-col justify-between text-left ml-3 py-4">
        <div class="info__top">
          <h2 class="text-3xl font-medium">{{ author.firstName }}</h2>
          <h2 class="text-3xl font-medium">{{ author.lastName }}</h2>
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
  name: 'AuthorCard',
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
  },
};
</script>

<style lang="scss" scoped>
.author__contain {
  width: 100%;
  .author {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: var(--transition-f);
    .img__wrap {
      width: 100%;
      position: relative;
      .author-img {
        width: 100%;
        height: 220px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        transition: var(--transition-f);
      }
    }

    .author__info {
      color: var(--white);
      text-shadow: 0px 1px 4px rgba(0,0,0,0.3);
      .info__top {
        .author__link {
          text-decoration: underline;
          &:hover {
            color: var(--white);
          }
        }
        .book-img {
          width: 100%;
          height: 220px;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          transition: var(--transition-f);
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
        .author-img {
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
