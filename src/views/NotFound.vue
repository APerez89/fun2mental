<template>
  <div class="not_found container flex flex-col">
    <div class="text-wrap mt-20">
      <h2 class="
          text-4xl
          text-center
          pb-4
          pr-6
          highlight-d
          "
        >
          Sorry, the {{ resource }} you are looking for doesn't exist.
      </h2>
      <div class="btn-wrap mt-10">
        <router-link
          to="/"
          class="home-btn px-10 py-3 rounded-full text-lg"
        >
          Back to home page
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
};
</script>

<style lang="scss" scoped>
.not_found {
  min-height: calc(100vh - 300px);
  .text-wrap {
    .btn-wrap {
      position: relative;
      transition: var(--transition-f);
      .home-btn {
        background-color: var(--green);
        color: var(--white);
        transition: var(--transition-f);
      }
      &:hover {
        transform: translateY(-5px);
        .home-btn {
          box-shadow: 0 10px 20px -10px rgb(0 0 0 / 0.35);
        }
      }
    }
  }
}
</style>
