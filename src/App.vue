<template>
  <the-header></the-header>
  <base-card>
    <the-body></the-body>
  </base-card>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheBody from "./components/layout/TheBody.vue";

import BaseCard from "./components/layout/BaseCard.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheBody,

    BaseCard,
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
