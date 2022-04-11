<template>
  <div class="details">
    <h3>Authors book list here</h3>
    <p @click="click()">hey</p>
  </div>
</template>

<script>
export default {
  name: 'AuthorDetails',
  props: ['id'],
  methods: {
    click() {
      console.log('this');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
