<template>
  <div
    class="
      nav__contain
      container
      w-full
      flex
      flex-row
      justify-between
      items-center
      p-4
    ">
    <div class="logo__wrap">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/f2mlogo.png">
      </router-link>
    </div>
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
  .logo__wrap {
    img {
      width: 150px;
    }
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
