<template>
  <div
    class="
      footer__contain
      w-full
      flex
      justify-center
      items-center
      p-16
      "
    >
    <div class="footer__wrap container">
      <p class="tracking-wide leading-7">
        Made By Alex <span class="mx-3">|</span> &copy; {{ currentYear }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer__contain {
  background-color: #1b1e2c;
  color: var(--white);
}
</style>
