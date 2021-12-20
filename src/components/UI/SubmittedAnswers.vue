<template>
  <h2>Submitted Answers:</h2>
  <submitted-answer-item
    v-for="answer in answersList"
    :key="answer"
    :name="answer.name"
    :score="answer.score"
    :subject="answer.subject"
  ></submitted-answer-item>
</template>

<script>
import SubmittedAnswerItem from "./SubmittedAnswerItem.vue";

export default {
  components: { SubmittedAnswerItem },
  data() {
    return {
      answersList: [],
    };
  },
  mounted() {
    fetch(
      "https://quizz-fdf90-default-rtdb.europe-west1.firebasedatabase.app/scores.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const result = [];
        for (const index in data) {
          result.push({
            name: data[index].name,
            score:
              data[index].subject == "css"
                ? data[index].score * 2
                : data[index].score,
            subject: data[index].subject,
          });
        }
        this.answersList = result;
      });
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font: 500 18px "Montserrat";
  text-transform: uppercase;
}
section {
  &:nth-child(2) {
    margin-top: 30px;
  }
}
</style>
