// document.addEventListener('DOMContentLoaded', () => {
//   askQuestion(questions)
// })



const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
 const askQuestion = (questions) => {
   return questions[0]
  // return questions[Math.floor ( Math.random() * questions.length )]
}
const questionContainer = document.querySelector('div.section.question-container')
const appendQuestion = (question) => {
  // const questionContainer = document.querySelector('div.section.question-container')
  questionContainer.innerText = question.questionText
}

const askQuestionThen = (time) => {
  question = askQuestion(questions)
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(question)
    }, time)
  })
}

const removeQuestion = () => {
  // const questionContainer = document.querySelector('div.section.question-container')
  while (questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
}

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion)
}

const trueAndFalseButtons = () => {
  const trueFalseSection = document.querySelector('div.section.center-align.true-false-list')
  const trueAndFalseDivs = trueFalseSection.querySelectorAll('div')
  return trueAndFalseDivs
  // const trueButton = trueFalseSection.querySelectorAll('div')[0]
  // const falseButton = trueFalseSection.querySelectorAll('div')[1]
} 

const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach((button) => {
    button.classList.toggle("hide")
  })
}

const displayQuestionOnClick = () => {
  const askButton = document.querySelector("body > div.container > div > div:nth-child(4) > div > a")
  askButton.addEventListener('click', (e) => {
    
  })
}
