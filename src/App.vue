<template>
  <the-header></the-header>
  <the-body></the-body>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheBody from "./components/layout/TheBody.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheBody,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fafafa;
}
</style>
