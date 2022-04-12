<template>
  <div class="welcome__contain container">
    <div class="bkg_img flex md:h-screen lg:h-screen">
      <div
        class="
          welcome_message
          px-14
          py-14
          flex
          justify-center
          md:h-screen
          lg:h-screen
          "
      >
        <div class="message-wrap w-full flex flex-row justify-between max-w-5xl">
          <div class="left"></div>
          <div class="right flex flex-col justify-center max-w-lg">
            <h2
              class="
                welcome_head
                text-5xl
                mb-4
                text-left
                "
            >
              Premium Quality Books
            </h2>
            <p class="
              text-base
              tracking-wide
              leading-7
              text-left
              text-2xl
              highlight-l
              "
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div class="btn-wrap mt-8 p-4">
              <router-link
                class="book-btn px-10 py-3 rounded-full text-lg"
                to="/books"
              >
                View all books
              </router-link>
            </div>
          </div>
        </div>
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
    background-image: url('/img/books.jpg');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;

    .welcome_message {
      width: 100%;
      background-color: rgba(0,0,0,0.6);
      .right {
        .welcome_head {
          color: var(--white);
        }
        .btn-wrap {
          position: relative;
          transition: var(--transition-f);
          .book-btn {
            background-color: var(--green);
            color: var(--white);
          }
          &:hover {
            transform: translateY(-5px);
          }
        }
      }
    }

  }
}
</style>
