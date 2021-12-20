const CSSQuestions = [
  {
    questionTitle: "What does CSS stand for?",
    questionOptions: [
      {
        text: "Colorful Style Sheets",
      },
      {
        text: "Cascading Style Sheets",
      },
      {
        text: "Creative Style Sheets",
      },
      {
        text: "Computer Style Sheets",
      },
    ],
    index: 0,
  },
  {
    questionTitle:
      "What is the correct HTML for referring to an external style sheet?",
    questionOptions: [
      {
        text: '<link rel="stylesheet" src="mystyle.css">',
      },
      {
        text: '<style rel="stylesheet" src="mystyle.css">',
      },
      {
        text: '<link rel="stylesheet" href="mystyle.css">',
      },
      {
        text: '<style rel="stylesheet" href="mystyle.css">',
      },
    ],
    index: 1,
  },
  {
    questionTitle: "Which HTML tag is used to define an internal style sheet?",
    questionOptions: [
      {
        text: "<style>",
      },
      {
        text: "<stylesheet>",
      },
      {
        text: "<css>",
      },
      {
        text: "<script>",
      },
    ],
    index: 2,
  },
  {
    questionTitle: "Which is the correct CSS syntax?",
    questionOptions: [
      {
        text: "body: color=black;",
      },
      {
        text: "{body: color=black;}",
      },
      {
        text: "{body; color:black;}",
      },
      {
        text: "body {color: black;}",
      },
    ],
    index: 3,
  },
  {
    questionTitle: "How do you insert a comment in a CSS file?",
    questionOptions: [
      {
        text: "// this is a comment",
      },
      {
        text: "/* this is a comment */",
      },
      {
        text: "# this is a comment",
      },
      {
        text: "= this is a comment",
      },
    ],
    index: 4,
  },
  {
    questionTitle: "How do you add a background color for all <h1> elements?",
    questionOptions: [
      {
        text: "all.h1 {background-color: #FFFFFF;}",
      },
      {
        text: "h1 {background-color: #FFFFFF;}",
      },
      {
        text: "h1:all-child {background-color: #FFFFFF;}",
      },
      {
        text: ".h1 {background-color: #FFFFFF;}",
      },
    ],
    index: 5,
  },
  {
    questionTitle:
      "Which CSS property is used to change the text color of an element?",
    questionOptions: [
      {
        text: "text-color",
      },
      {
        text: "fore-color",
      },
      {
        text: "color",
      },
      {
        text: "color-text",
      },
    ],
    index: 6,
  },
  {
    questionTitle:
      "How do you make each word in a text start with a capital letter?",
    questionOptions: [
      {
        text: "text-style: capitalize;",
      },
      {
        text: "text-transform: capitalize;",
      },
      {
        text: "text-decoration: capitalize;",
      },
      {
        text: "you can't do that with CSS",
      },
    ],
    index: 7,
  },
  {
    questionTitle: `How do you display a border like this: The top border = 10 pixels,
    The bottom border = 5 pixels, The left border = 20 pixels, The right
    border = 1 pixel?`,
    questionOptions: [
      {
        text: "border-width: 10px 1px 5px 20px;",
      },
      {
        text: "border-width: 5px 20px 10px 1px;",
      },
      {
        text: "border-width: 10px 5px 20px 1px;",
      },
      {
        text: "border-width: 10px 20px 5px 1px;",
      },
    ],
    index: 8,
  },
  {
    questionTitle:
      "When using the padding property; are you allowed to use negative values?",
    questionOptions: [
      {
        text: "No",
      },
      {
        text: "Yes",
      },
    ],
    index: 9,
  },
];

export default CSSQuestions;
