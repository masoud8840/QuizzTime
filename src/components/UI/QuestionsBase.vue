<template>
  <h2>Questions List:</h2>
  <form @submit.prevent>
    <ol v-if="subject == 'html'">
      <question-item
        v-for="question in HTMLQuestions"
        :key="question"
        :question-title="question.questionTitle"
        :questionOptions="question.questionOptions"
        v-model="values[question.index]"
      ></question-item>
    </ol>
    <!-- For css -->
    <ol v-if="subject == 'css'">
      <question-item
        v-for="question in CSSQuestions"
        :key="question"
        :question-title="question.questionTitle"
        :questionOptions="question.questionOptions"
        v-model="values[question.index]"
      ></question-item>
    </ol>
    <p class="coming-soon" v-if="subject == 'js'">Coming Soon...</p>
    <button v-if="subject != 'js'" @click="submitForm" type="submit">
      submit
    </button>
  </form>
</template>

<script>
// data
import QuestionItem from "./QuestionItem.vue";
import HTMLQuestions from "../composition/htmlQ.js";
import HTMLAnswers from "../composition/htmlA.js";
import CSSQuestions from "../composition/cssQ.js";
import CSSAnswers from "../composition/cssA.js";

export default {
  props: ["subject"],
  components: {
    QuestionItem,
  },
  methods: {
    submitForm() {
      for (const index in this.values) {
        switch (this.subject) {
          case "html": {
            if (this.values[index] == this.HTMLAnswers[index]) {
              this.scroes[0]++;
            } else {
              console.log("Nothing earned");
            }
            break;
          }
          case "css": {
            if (this.values[index] == this.CSSAnswers[index]) {
              this.scroes[1]++;
            } else {
              console.log("Nothing earned");
            }
            break;
          }
          case "js": {
            break;
          }
        }
      }
      this.scroes[0] = 0;
      this.scroes[1] = 0;
      this.scroes[2] = 0;
    },
  },
  data() {
    return {
      values: [],
      scroes: [0, 0],
      HTMLQuestions: HTMLQuestions,
      HTMLAnswers: HTMLAnswers,
      CSSQuestions: CSSQuestions,
      CSSAnswers: CSSAnswers,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font: 500 18px "Montserrat";
  text-transform: uppercase;
}
ol {
  margin: 30px;
  list-style: decimal-leading-zero;
  font: 400 15px "Montserrat";
}
.coming-soon {
  font: 400 15px "Montserrat";
  margin: 20px
}
</style>
