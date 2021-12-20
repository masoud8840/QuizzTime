<template>
  <section>
    <h5>
      <span class="name">{{ name }} </span>
      scored
      <span :style="checkScore" class="score">{{ score }}/20 </span>
      in
      <span class="language">{{ subject }} </span>
    </h5>
  </section>
</template>

<script>
export default {
  props: ["name", "subject", "score"],
  computed: {
    checkScore() {
      if (this.score >= 0 && this.score < 10) {
        return { color: "#CD1818" };
      } else if (this.score >= 10 && this.score < 15) {
        return { color: "#FFBD35" };
      } else if (this.score >= 15 && this.score < 17) {
        return { color: "#B1D0E0" };
      } else if (this.score >= 17 && this.score <= 20) {
        return { color: "#57CC99" };
      } else {
        return { color: "transparent" };
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
section {
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 0.2rem;
  transition: border 0.2s;
  &:hover {
    border: 1px solid #9d9d9d;
  }
  h5 {
    font: 400 15px "Montserrat";
  }
  .special-text {
    text-transform: capitalize;
    font-weight: 500;
  }
  .name,
  .language,
  .score {
    text-transform: capitalize;
    font: 500 15px "Montserrat";
  }
  .language {
    text-transform: uppercase;
  }
  .score {
    letter-spacing: 1px;
  }
}
</style>
