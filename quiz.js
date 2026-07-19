function gradeQuiz() {

let answer = document.getElementById("q1");

if(answer.value.trim() === ""){
alert("Please answer Question 1.");
answer.focus();
return;
}
    
let score = 0;
let results = "";

let q1 = document.getElementById("q1").value.trim().toUpperCase();

if(q1 === "HTTPS"){
    score++;
    results += "<p class='correct'>Question 1: Correct (1/1)</p>";
}else{
    results += "<p class='incorrect'>Question 1: Incorrect (0/1)<br>Correct Answer: HTTPS</p>";
}

let q2 = document.querySelector("input[name='q2']:checked");

if(q2 && q2.value === "Tim Berners-Lee"){
    score++;
    results += "<p class='correct'>Question 2: Correct (1/1)</p>";
}else{
    results += "<p class='incorrect'>Question 2: Incorrect (0/1)<br>Correct Answer: Tim Berners-Lee</p>";
}

let q3 = document.querySelector("input[name='q3']:checked");

if(q3 && q3.value === "Nginx"){
    score++;
    results += "<p class='correct'>Question 3: Correct (1/1)</p>";
}else{
    results += "<p class='incorrect'>Question 3: Incorrect (0/1)<br>Correct Answer: Nginx</p>";
}

let q4 = document.querySelector("input[name='q4']:checked");

if(q4 && q4.value === "QUIC"){
    score++;
    results += "<p class='correct'>Question 4: Correct (1/1)</p>";
}else{
    results += "<p class='incorrect'>Question 4: Incorrect (0/1)<br>Correct Answer: QUIC</p>";
}

let checked = document.querySelectorAll("input[name='q5']:checked");
let answers = [];

checked.forEach(function(box){
    answers.push(box.value);
});

answers.sort();

let correct = ["Cloud Computing","Edge Computing","HTTP/3"];
correct.sort();

if(JSON.stringify(answers) === JSON.stringify(correct)){
    score++;
    results += "<p class='correct'>Question 5: Correct (1/1)</p>";
}else{
    results += "<p class='incorrect'>Question 5: Incorrect (0/1)<br>Correct Answers: Cloud Computing, HTTP/3, Edge Computing</p>";
}

let finalResult = "";

if(score >= 4){
    finalResult = "<h2 class='correct'>PASS</h2>";
}else{
    finalResult = "<h2 class='incorrect'>FAIL</h2>";
}

document.getElementById("results").innerHTML =
    finalResult +
    "<h2>Total Score: " + score + " / 5</h2>" +
    results;

}

function resetQuiz(){
    document.getElementById("results").innerHTML = "";
}
