function submitPoll() {
  const choice = document.querySelector('input[name="character"]:checked');
  const result = document.getElementById("pollResult");
  if (choice) {
    result.textContent = `You voted for ${choice.value}!`;
  } else {
    result.textContent = "Please select an option before voting.";
  }
}
function checkAnswer(button, isCorrect) {
  const optionsContainer = button.parentElement;
  
  // Check if this question has already been answered
  if (optionsContainer.classList.contains('answered')) return;

  // Mark the container as answered
  optionsContainer.classList.add('answered');

  const buttons = optionsContainer.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.disabled = true; // Disable all buttons for that question
    if (btn === button && isCorrect) {
      btn.style.backgroundColor = 'green';
      btn.style.color = 'white';
    } else if (btn === button && !isCorrect) {
      btn.style.backgroundColor = 'red';
      btn.style.color = 'white';
    }
  });

  // Also highlight the correct one if wrong answer was chosen
  if (!isCorrect) {
    buttons.forEach(btn => {
      if (btn.getAttribute('onclick')?.includes('true')) {
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
      }
    });
  }
}
  button.classList.add(isCorrect ? "correct" : "wrong");
  const feedback = document.getElementById("quizFeedback");
  feedback.textContent = isCorrect
    ? "Correct! Vibranium is the right answer."
    : "Oops! That's not right.";
const feedbacks = document.querySelectorAll('.quizFeedback');

