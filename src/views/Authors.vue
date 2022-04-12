<template>
  <div class="authors__contain container px-5 py-10">
    <div class="header-wrap mb-10 flex">
      <h3 class="text-left text-4xl pb-4 pr-6 highlight-d">
        Our
          <span class="highlight-l"><em>Best Selling</em></span>
        Authors
      </h3>
    </div>
    <AuthorCard />
  </div>
</template>

<script>
import AuthorCard from '@/components/AuthorCard.vue';

export default {
  name: 'Authors',
  components: {
    AuthorCard,
  },
};
</script>

<style lang="scss" scoped>
.authors__contain {
  .header-wrap {
    h3 {
      border-bottom: 2px solid var(--green);
    }
  }
}
</style>
