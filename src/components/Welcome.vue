<template>
  <div class="welcome__contain container">
    <div class="bkg_img flex justify-center items-center">
      <div
        class="
          welcome_message
          px-14
          py-14"
      >
        <h2
          class="
            welcome_head
            text-6xl"
        >
          Premium Quality Books
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome__contain {
  width: 100%;
  height: 100%;
  .bkg_img {
    width: 100vw;
    min-height: calc(100vh - 182px);
    background-image: url('/img/books.jpg');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;

    .welcome_message {
      background-color: rgba(0,0,0,0.8);
      .welcome_head {
        color: var(--white);
      }
    }

  }
}
</style>
