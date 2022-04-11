<template>
  <div class="details">
    <h3>book details in hurr</h3>
    <p @click="click()">hey</p>
  </div>
</template>

<script>export default {
  name: 'BookDetails',
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
