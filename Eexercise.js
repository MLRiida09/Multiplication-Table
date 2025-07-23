function generateTable() {
  const input = document.getElementById("tableNumber");
  const container = document.getElementById("tableContainer");
  const num = parseInt(input.value);
  container.innerHTML = "";

  if (!isNaN(num) && num >= 1 && num <= 12) {
    for (let i = 1; i <= 12; i++) {
      const card = document.createElement("div");
      card.className = "card";

      const answerInput = document.createElement("input");
      answerInput.type = "number";
      answerInput.placeholder = `${num} × ${i} = ?`;
      answerInput.dataset.correct = num * i;

      card.appendChild(answerInput);
      container.appendChild(card);
    }
  } else {
    container.innerHTML = "<p>Please enter a number from 1 to 12.</p>";
  }
}

function checkAnswers() {
  const inputs = document.querySelectorAll("#tableContainer input");
  inputs.forEach((input) => {
    const correctAnswer = parseInt(input.dataset.correct);
    const userAnswer = parseInt(input.value);

    input.classList.remove("correct", "wrong");

    if (userAnswer === correctAnswer) {
      input.classList.add("correct");
    } else {
      input.classList.add("wrong");
    }
  });
}
