<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/f2mlogo.png">
    <Welcome msg="Welcome to Your Vue.js App"/>
    <p
      v-for="(book, idx) in books"
      :key="idx"
    >{{ book.title }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
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
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
