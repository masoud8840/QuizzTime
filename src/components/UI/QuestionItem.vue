<template>
  <li class="question-item">
    <h4>{{ questionTitle }}</h4>
    <ul>
      <li v-for="option in questionOptions" :key="option">
        <button
          :class="{ active: selectedAnswer == option.text }"
          @click="selectAnswer(option.text)"
        >
          {{ option.text }}
        </button>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["modelValue", "question-title", "questionOptions"],
  emits: ["update:modelValue"],
  data() {
    return {
      selectedAnswer: this.modelValue,
    };
  },
  methods: {
    selectAnswer(name) {
      this.selectedAnswer = name;
      this.$emit("update:modelValue", this.selectedAnswer);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-item {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
li {
  h4 {
    font: 400 15px "Montserrat";
  }
  ul {
    justify-content: space-evenly;
    margin: 20px 0 20px 0;
    li {
      list-style: none;
      button {
        height: 30px;
        padding: 0 15px;
        margin-bottom: 3px;
        border: 0;
        color: #777;
        border-radius: 0.2rem;
        cursor: pointer;
        font: 400 13px "Montserrat";
        transition: all 0.25s;
        &:hover {
          color: #000;
        }
      }
      .active {
        color: #000;
        border: 1px solid #444;
      }
    }
  }
}
</style>
