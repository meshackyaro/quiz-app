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
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;

const questionEl = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const nextBtn = document.querySelector(".next_btn");
const timerEl = document.getElementById("time");
const resultContainer = document.querySelector(".quiz_result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart_btn");

document.querySelector(".start_btn").addEventListener("click", function () {
  document.querySelector(".start").style.display = "none";
  document.querySelector(".quiz-container").style.display = "block";

  startQuiz();
});

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerEl.textContent = timeLeft;

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
      disableOptions();
      document.querySelector(".next_btn").style.display = "block";
    }

    if (timeLeft <= 5) timerEl.parentElement.classList.add("danger");
  }, 1000);
  nextBtn.style.display = "none";
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.querySelector(".quiz-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  clearInterval(timerInterval);
  startTimer();

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
  clearInterval(timerInterval);

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
  loadQuestion();
});

function endQuiz() {
  clearInterval(timerInterval);
  document.querySelector(".quiz-container").style.display = "none";
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", startQuiz);
