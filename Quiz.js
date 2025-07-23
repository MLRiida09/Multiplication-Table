const questions = [];
let current = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const userAnswer = document.getElementById("userAnswer");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");
const scoreDisplay = document.getElementById("score");

function generateQuestions() {
  for (let i = 0; i < 10; i++) {
    const a = Math.floor(Math.random() * 12) + 1;
    const b = Math.floor(Math.random() * 12) + 1;
    questions.push({ a, b, answer: a * b });
  }
}

function showQuestion(index) {
  const q = questions[index];
  questionText.textContent = `${q.a} × ${q.b} = ?`;
  userAnswer.value = '';
  userAnswer.disabled = false;
  userAnswer.focus();
}

startBtn.addEventListener("click", () => {
  generateQuestions();
  startBtn.disabled = true;
  nextBtn.disabled = false;
  showQuestion(current);
});

nextBtn.addEventListener("click", () => {
  const userValue = parseInt(userAnswer.value);
  if (!isNaN(userValue)) {
    if (userValue === questions[current].answer) {
      score++;
    }
  }

  current++;

  if (current < questions.length) {
    showQuestion(current);
  } else {
    questionText.textContent = "Quiz Finished!";
    userAnswer.disabled = true;
    nextBtn.disabled = true;
    scoreBox.style.display = "block";
    scoreDisplay.textContent = score;
  }
});
