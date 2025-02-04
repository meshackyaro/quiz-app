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
  {
    question: "What does JVM stand for in Java?",
    options: [
      "Java Virtual Machine",
      "Java Variable Method",
      "Java Vendor Module",
      "Java Verified Model",
    ],
    answer: "Java Virtual Machine",
  },
  {
    question: "Which HTTP method is used to send data to a server?",
    options: ["GET", "POST", "DELETE", "HEAD"],
    answer: "POST",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["21", "80", "443", "3306"],
    answer: "80",
  },
  {
    question: "Which data structure follows LIFO (Last In, First Out)?",
    options: ["Queue", "Stack", "Linked List", "Hash Table"],
    answer: "Stack",
  },
  {
    question: "What is the function of the git clone command?",
    options: [
      "Create a new repository",
      "Copy a remote repository",
      "Delete a branch",
      "Merge branches",
    ],
    answer: "Copy a remote repository",
  },
  {
    question: "In C, what is the size of int on a 64-bit system?",
    options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    answer: "4 bytes",
  },
  {
    question: "Which of the following is not an OOP concept?",
    options: ["Encapsulation", "Inheritance", "Recursion", "Polymorphism"],
    answer: "Recursion",
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "Which keyword is used to define an interface in Java?",
    options: ["class", "interface", "struct", "implements"],
    answer: "interface",
  },
  {
    question: "Which of the following is not a valid HTTP status code?",
    options: ["200", "301", "450", "500"],
    answer: "450",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "System Query Language",
      "Simple Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "Which is not a valid CSS property?",
    options: ["display", "align-items", "text-color", "border-radius"],
    answer: "text-color",
  },
  {
    question: "What is the extension of a Java bytecode file?",
    options: [".java", ".class", ".jar", ".exe"],
    answer: ".class",
  },
  {
    question: "Which company developed TypeScript?",
    options: ["Google", "Microsoft", "Facebook", "IBM"],
    answer: "Microsoft",
  },
  {
    question: "What does the super keyword do in Java?",
    options: [
      "Calls the parent class constructor",
      "Calls a static method",
      "Defines a superclass",
      "Creates an instance",
    ],
    answer: "Calls the parent class constructor",
  },
  {
    question:
      "Which of the following is used for dependency management in Maven?",
    options: ["Cbuild.xml", "package.json", "pom.xml", "config.xml"],
    answer: "pom.xml",
  },
  {
    question: "Which of the following is a front-end JavaScript framework?",
    options: ["Django", "Flask", "React", "Springboot"],
    answer: "React",
  },
  {
    question: "What is the primary purpose of Docker?",
    options: ["Virtualization", "Containerization", "Logging", "Debugging"],
    answer: "Containerization",
  },
  {
    question:
      "Which type of key uniquely identifies a row in a relational database?",
    options: ["Foreign Key", "Primary Key", "Composite Key", "Super Key"],
    answer: "Primary Key",
  },
  {
    question: "What is the default branch in Git?",
    options: ["develop", "release", "master", "main"],
    answer: "main",
  },
  {
    question: "What does the finally block do in Python?",
    options: [
      "Executes only if an exception occurs",
      "Executes only if no exception occurs",
      "Always executes, regardless of exceptions",
      "Terminates the program",
    ],
    answer: "Always executes, regardless of exceptions",
  },
  {
    question: "Which programming language is used for Android app development?",
    options: ["Java", "Python", "Swift", "PHP"],
    answer: "Java",
  },
  {
    question: "What does the break statement do in a loop?",
    options: [
      "Continues to the next iteration",
      "Terminates the loop",
      "Skips the next iteration",
      "Repeats the loop",
    ],
    answer: "Terminates the loop",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "Number", "Float", "Undefined"],
    answer: "Float",
  },
  {
    question: "What does AJAX stand for?",
    options: [
      "Asynchronous JavaScript And XML",
      "Advanced JavaScript And XHTML",
      "Automated JSON And XML",
      "pplication JavaScript and XML",
    ],
    answer: "Asynchronous JavaScript And XML",
  },
  {
    question: "What is the output of console.log(typeof null) in JavaScript?",
    options: ["null", "undefined", "object", "number"],
    answer: "object",
  },
  {
    question: "Which of the following is a relational database?",
    options: ["Redis", "MongoDB", "MySQL", "DynamoDB"],
    answer: "MySQL",
  },
  {
    question: "What is the purpose of the try block in exception handling?",
    options: [
      "To define code that might throw an exception",
      "To catch an exception",
      "To specify what happens if an exception occurs",
      "To skip code execution",
    ],
    answer: "To define code that might throw an exception",
  },
  {
    question: "Which programming paradigm does Python support?",
    options: [
      "Object-oriented",
      "Procedural",
      "Functional",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the public keyword in Java?",
    options: [
      "Makes a method accessible only within the class",
      "Makes a method accessible from other classes",
      "Declares a method as static",
      "Specifies that a method returns nothing",
    ],
    answer: "Makes a method accessible from other classes",
  },
  {
    question: "Which of these is a compiled language?",
    options: ["JavaScript", "Python", "Java", "PHP"],
    answer: "Java",
  },
  {
    question: "Which of the following is not a Linux command?",
    options: ["ls", "cd", "mkdir", "copy"],
    answer: "copy",
  },
  {
    question: "What is the purpose of the continue statement in a loop?",
    options: [
      "Terminates the loop",
      "Skips the current iteration and continues with the next one",
      "Exits the program",
      "Repeats the current iteration",
    ],
    answer: "Skips the current iteration and continues with the next one",
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
  resultContainer.style.display = "block";
  resultContainer.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  resultContainer.style.display = "none";
  resultContainer.classList.add("hidden");
  startQuiz();
});
