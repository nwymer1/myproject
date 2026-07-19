
/* Grade the quiz and display results */
function gradeQuiz() {
  let score = 0;
  let results = "";

  // Q1: text input (case-insensitive)
  const q1Input = document.getElementById('q1');
  const q1 = (q1Input && q1Input.value) ? q1Input.value.trim().toUpperCase() : "";
  if (q1 === "HTTPS") {
    score++;
    results += "<p class='correct'>Question 1: Correct (1/1)</p>";
  } else {
    results += "<p class='incorrect'>Question 1: Incorrect (0/1) — Correct Answer: HTTPS</p>";
  }

  // Q2: radio buttons
  const q2 = document.querySelector("input[name='q2']:checked");
  if (q2 && q2.value === "Tim Berners-Lee") {
    score++;
    results += "<p class='correct'>Question 2: Correct (1/1)</p>";
  } else {
    results += "<p class='incorrect'>Question 2: Incorrect (0/1) — Correct Answer: Tim Berners-Lee</p>";
  }

  // Q3: radio buttons
  const q3 = document.querySelector("input[name='q3']:checked");
  if (q3 && q3.value === "Nginx") {
    score++;
    results += "<p class='correct'>Question 3: Correct (1/1)</p>";
  } else {
    results += "<p class='incorrect'>Question 3: Incorrect (0/1) — Correct Answer: Nginx</p>";
  }

  // Q4: radio buttons
  const q4 = document.querySelector("input[name='q4']:checked");
  if (q4 && q4.value === "QUIC") {
    score++;
    results += "<p class='correct'>Question 4: Correct (1/1)</p>";
  } else {
    results += "<p class='incorrect'>Question 4: Incorrect (0/1) — Correct Answer: QUIC</p>";
  }

  // Q5: checkboxes (order-insensitive)
  const checked = Array.from(document.querySelectorAll("input[name='q5']:checked")).map(cb => cb.value).sort();
  const correct = ["Cloud Computing", "Edge Computing", "HTTP/3"].sort();
  if (JSON.stringify(checked) === JSON.stringify(correct)) {
    score++;
    results += "<p class='correct'>Question 5: Correct (1/1)</p>";
  } else {
    results += "<p class='incorrect'>Question 5: Incorrect (0/1) — Correct Answers: Cloud Computing, HTTP/3, Edge Computing</p>";
  }

  // Final pass/fail and display
  const passFail = (score >= 4) ? "<h2 class='correct'>PASS</h2>" : "<h2 class='incorrect'>FAIL</h2>";
  const output = passFail + "<h3>Total Score: " + score + " / 5</h3>" + results;

  const resultsDiv = document.getElementById('results');
  if (resultsDiv) resultsDiv.innerHTML = output;
}

/* Reset the quiz form and clear results */
function resetQuiz() {
  const form = document.getElementById('quizForm');
  if (form) form.reset();
  const resultsDiv = document.getElementById('results');
  if (resultsDiv) resultsDiv.innerHTML = "";
}
