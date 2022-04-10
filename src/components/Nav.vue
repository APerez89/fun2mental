<template>
  <div class="nav__contain">
    <div class="nav__wrap">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/books">Books</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
.nav__contain {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
