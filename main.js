const questions = [
  {
    question: "Which of the following is not a programming language?",
    options: ["HTML", "Java", "JavaScript", "Kotlin"],
    answer: "HTML",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Counter Style Sheet",
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Who invented Python?",
    options: [
      "Bjarne Stroustrup",
      "Guido van Rossum",
      "Dennis Ritchie",
      "James Gosling",
    ],
    answer: "Guido van Rossum",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Django", "React", "Laravel", "Flask"],
    answer: "React",
  },
  // Add 45 more questions...
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionEl = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const nextBtn = document.querySelector(".next_btn");
const timerEl = document.getElementById("time");
const resultContainer = document.querySelector(".quiz_result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart_btn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.querySelector(".quiz-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 5) timerEl.parentElement.classList.add("danger");
    if (timeLeft === 0) {
      clearInterval(timer);
      disableOptions();
      nextBtn.style.display = "block";
    }
  }, 1000);

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => checkAnswer(button, option);
    optionsContainer.appendChild(button);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(button, selectedAnswer) {
  clearInterval(timer);
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedAnswer === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    document.querySelectorAll(".option").forEach((btn) => {
      if (btn.textContent === correctAnswer) btn.classList.add("correct");
    });
  }
  disableOptions();
  nextBtn.style.display = "block";
}

function disableOptions() {
  document.querySelectorAll(".option").forEach((btn) => (btn.disabled = true));
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.querySelector(".quiz-container").style.display = "none";
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", startQuiz);

startQuiz();
