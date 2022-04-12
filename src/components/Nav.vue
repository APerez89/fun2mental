<template>
  <div
    class="
      nav__contain
      container
      w-full
      flex
      flex-row
      lg:justify-end
      items-center
    ">
    <div
      class="
        nav__wrap
        flex
        md:flex-row
        lg:flex-row
        hidden
        md:block
        lg:block
        "
      >
      <router-link class="p-4" to="/">Home</router-link>
      <router-link class="p-4" to="/about">About</router-link>
      <router-link class="p-4" to="/books">Books</router-link>
      <router-link class="p-4" to="/authors">Authors</router-link>
    </div>

    <div
      class="hamburger block lg:hidden md:hidden"
      @click="openNav"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </div>
    <div
      class="
        mobile_nav
        block
        lg:hidden
        md:hidden
        "
      :class="`${navOpen === false ? 'closed' : 'open'}`"
    >
      <div class="
        m_nav_items
        text-lg
        grid
        grid-cols-1
        gap-9
        h-3/4
        content-center
        "
      >
        <router-link @click="openNav" to="/">Home</router-link>
        <router-link @click="openNav" to="/about">About</router-link>
        <router-link @click="openNav" to="/books">Books</router-link>
        <router-link @click="openNav" to="/authors">Authors</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navOpen: false,
    };
  },
  computed: {
    showHamburger() {
      const hamburger = document.querySelector('.hamburger');
      const isShowing = hamburger.classList.contains('hidden') ? this.navOpen === false : this.navOpen === true;
      return isShowing;
    },
  },
  methods: {
    openNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav__contain {
  position: relative;
  .hamburger {
    position: absolute;
    right: 0;
    z-index: 3;
  }
  .mobile_nav {
    width: 75%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: var(--white);
    position: fixed;
    transform: translateX(130%);
    transition: var(--transition-f);
    z-index: 2;
    &.open {
      transform: translateX(0);
    }
  }
  a {
    font-weight: bold;
    color: var(--d-gray);
    transition: var(--transition-f);

    &.router-link-exact-active {
      color: var(--green);
    }
    &:hover {
      color: var(--d-green);
      border-bottom: 2px solid var(--d-green);
    }
  }
}
</style>
