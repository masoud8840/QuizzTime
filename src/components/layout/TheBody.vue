<template>
  <card-base>
    <h2 class="section-title">
      see how much you know about your favorite languages!
    </h2>

    <!-- Information form -->
    <form autocomplete="off">
      <h4 class="input-title">Your Name:</h4>
      <input v-model.trim="name" type="text" name="name" id="name" />
      <fieldset>
        <legend>Quiz Subject:</legend>
        <input
          type="radio"
          name="language"
          id="html"
          value="html"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'html' ? 'active' : '' }"
          for="html"
        >
          HTML
        </label>
        <input
          type="radio"
          name="language"
          id="css"
          value="css"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'css' ? 'active' : '' }"
          for="css"
        >
          CSS
        </label>
        <input
          type="radio"
          name="language"
          id="js"
          value="js"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'js' ? 'active' : '' }"
          for="js"
        >
          Javascript
        </label>
        <input
          type="radio"
          name="language"
          id="vue"
          value="vue"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'vue' ? 'active' : '' }"
          for="vue"
        >
          Vue.js
        </label>
        <input
          type="radio"
          name="language"
          id="react"
          value="react"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'react' ? 'active' : '' }"
          for="react"
        >
          React.js
        </label>
        <input
          type="radio"
          name="language"
          id="angular"
          value="angular"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'angular' ? 'active' : '' }"
          for="angular"
        >
          Angular.js
        </label>
        <input
          type="radio"
          name="language"
          id="node"
          value="node"
          v-model="currentSubject"
        />
        <label
          :class="{ active: currentSubject == 'node' ? 'active' : '' }"
          for="node"
        >
          Node.js
        </label>
      </fieldset>
    </form>
  </card-base>
  <card-base>
    <questions-base :subject="currentSubject" :name="name"></questions-base>
  </card-base>

  <card-base>
    <submitted-answers></submitted-answers>
  </card-base>
</template>

<script>
import CardBase from "./BaseCard.vue";
import QuestionsBase from "../UI/QuestionsBase.vue";
import SubmittedAnswers from "../UI/SubmittedAnswers.vue";

export default {
  components: {
    QuestionsBase,
    CardBase,
    SubmittedAnswers,
  },
  data() {
    return {
      name: "",
      currentSubject: "html",
    };
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  font: 500 18px "Montserrat";
  text-transform: uppercase;
}
form {
  margin: 20px;
  .input-title {
    font: 400 17px "Montserrat";
    margin-bottom: 7px;
  }
  input[type="text"] {
    width: 220px;
    height: 37px;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0 5px;
    font: 500 15px "Montserrat";
  }
  fieldset {
    padding: 20px;
    border: 1px solid #ccc;
    margin: 25px 0;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    legend {
      padding: 0 10px;
      font: 400 17px "Montserrat";
    }

    input[type="radio"] {
      outline: 0;
      margin-left: 25px;
      cursor: pointer;
    }
    label {
      font: 400 15px "Montserrat";
      padding-left: 5px;
      color: #777;
      cursor: pointer;
    }
    .active {
      color: #000;
      font-weight: 500;
    }
  }
}
</style>
