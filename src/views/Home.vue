<template>
  <div class="home">
    <Welcome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import { books, authors } from '@/assets/Datastore.json';

export default {
  name: 'Home',
  components: {
    Welcome,
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
.home {
  h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }
}
</style>
