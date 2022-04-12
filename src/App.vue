<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
:root {
  --white: #eef3f5;
  --green: #129a9f;
  --d-gray: #413a41;
  --l-gray: #595959;
  --gradient-1: linear-gradient(90deg,
    rgba(0,130,112,1) 0%,
    rgba(25,181,142,1) 50%,
    rgb(110, 213, 189) 100%);
  --gradient-2: linear-gradient(19deg, #80D0C7 0%, #0093E9 100%);
  --gradient-3: linear-gradient(19deg, #29e390 0%, #08AEEA 100%);
  --gradient-4: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  --gradient-5: linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%);
  --gradient-6: linear-gradient(19deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
  --gradient-7: linear-gradient(19deg, #74EBD5 0%, #9FACE6 100%);
  --gradient-8: linear-gradient(19deg, #FAACA8 0%, #c4bbde 100%);
  --gradient-9: linear-gradient(19deg, #F4D03F 0%, #16A085 100%);
  --gradient-10: linear-gradient(19deg, #FBAB7E 0%, #e9c059 100%);
  --gradient-11: linear-gradient(19deg, #9FACE6 0%, #FF9A8B 100%);
  --gradient-12: linear-gradient(19deg, #EE74E1 0%, #F4D03F 100%);
  --gradient-13: linear-gradient(19deg, #FF6A88 0%, #21D4FD 100%);
  --transition-f: all 0.3s ease-in-out;
  --transition-s: all 1s ease-in-out;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 1300px;
}

.highlight-d {
  color: var(--d-gray);
  text-shadow: none;
}

.highlight-l {
  color: var(--green);
}
</style>
