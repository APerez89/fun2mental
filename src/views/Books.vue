<template>
  <div class="books__contain container p-5">
    <Book />
  </div>
</template>

<script>
import Book from '@/components/Book.vue';

export default {
  name: 'Books',
  components: {
    Book,
  },
};
</script>

<style lang="scss" scoped>
.books__contain {
}
</style>
