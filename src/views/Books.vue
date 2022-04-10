<template>
  <div class="books__contain">
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

</style>
