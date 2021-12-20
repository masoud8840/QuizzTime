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

    <p class="error-text" v-if="error != ''">
      Something went wrong! {{ error }}
    </p>
    <button
      v-if="subject == 'html' || subject == 'css'"
      @click="submitForm"
      type="submit"
    ></button>
    <p class="coming-soon" v-if="subject != 'html' && subject != 'css'">
      Coming Soon...
    </p>
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
  props: ["name", "subject"],
  components: {
    QuestionItem,
  },
  methods: {
    submitForm() {
      for (const index in this.values) {
        switch (this.subject) {
          case "html": {
            if (this.values[index] == this.HTMLAnswers[index]) {
              this.HTMLScore++;
            }
            break;
          }
          case "css": {
            if (this.values[index] == this.CSSAnswers[index]) {
              this.CSSScore++;
            }
            break;
          }
          case "js": {
            break;
          }
        }
      }
      // validate name input and fetch
      if (this.name == null || this.name == "") {
        this.error = "please enter you'r name";
      } else {
        this.error = "";
        fetch(
          `https://quizz-fdf90-default-rtdb.europe-west1.firebasedatabase.app/scores.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.name,
              subject: this.subject,
              score:
                this.subject == "html"
                  ? this.HTMLScore
                  : this.subject == "css"
                  ? this.CSSScore
                  : "",
            }),
          }
        );
      }
      this.HTMLScore = 0;
      this.CSSScore = 0;
      console.log(this.name);
    },
  },
  data() {
    return {
      error: "",
      values: [],
      HTMLScore: 0,
      CSSScore: 0,
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
  margin: 20px;
}
button[type="submit"] {
  width: 120px;
  height: 35px;
  margin: 0 30px;
  background-color: transparent;
  border: 1px solid #9d9d9d;
  color: #9d9d9d;
  font: 500 13px "Montserrat";
  cursor: pointer;
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
  outline: 0;
  transition: all 0.3s;
  &::after {
    content: "Submit";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  &::before {
    content: "Submit";
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;
  }
  &:hover {
    color: #000;
    border: 1px solid #000;
    &::after {
      top: 150%;
      transform: translate(-50%, 0);
    }
    &::before {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.error-text {
  margin: 30px;
  color: #dd4a48;
  font: 500 15px "Montserrat";
}
</style>
