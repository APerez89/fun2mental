<template>
  <div class="about__content container px-5 py-10 min-h-screen">
    <div class="header-wrap flex mb-10">
      <h3 class="
        text-4xl
        text-left
        pb-4
        pr-6
        "
      >
        About
          <span class="highlight-l">Fun2Mental</span>
      </h3>
    </div>
    <div class="description mb-10">
      <p class="
          text-left
          text-lg
          "
        >
        <span class="highlight-l">Fun2Mental</span>
        is a demo website made by me (<span class="highlight-l">Alex</span>),
        as a coding challenge for
        <a href="https://www.tekpartners.com/" target="_blank"><span class="highlight-l">TekPartners</span></a>
        to showcase my capabilities as a front-end developer.
      </p>
      <p class="
          text-left
          text-lg
          "
      >
        For this website, I used <a href="https://www.vuejs.org" target="_blank"><span class="highlight-l">VueJS</span></a>
        coupled with <a href="https://tailwindcss.com/" target="_blank"><span class="highlight-l">Tailwind CSS</span></a>.
      </p>
    </div>
    <div class="requirements flex flex-col">
      <div class="requirements-head flex mb-10">
        <h3 class="
          text-4xl
          text-left
          pb-4
          pr-6
          "
        >
          Requirements
        </h3>
      </div>

      <div class="list-wrap text-left ml-5 md:ml-10 lg:ml-10">
        <ul class="list-disc highlight-d">
          <li>Simple landing page, links to the other routes</li>
          <li>/books - for requesting a list of all books in the dataset</li>
          <li>/books/(:id) - for request detailed information about a specific book</li>
          <li>The list at /books must contain the title of the book, the authors name,
            the cover images, and the year published</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContent',
};
</script>

<style lang="scss" scoped>
.about__content {
  .header-wrap {
    h3 {
      border-bottom: 2px solid var(--green);
    }
  }
  .description {
    p {
      padding: 5px 0px;
      a {
        border-bottom: 1px solid var(--green);
      }
    }
  }
  .requirements {
    .requirements-head {
      h3 {
        border-bottom: 2px solid var(--green);
      }
    }
    .list-wrap {
      ul {
        li {
          padding: 5px 0px;
          &::marker {
            color: var(--green);
          }
        }
      }
    }
  }
}
</style>
