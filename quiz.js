function gradeQuiz() {
let score = 0;
let results = "";

//  Q1 Fill in the blank
let q1 = document.getElementById("q1").value.trim().toUpperCase();
if(q1=="HTTPS"){
score++;
results += "<p class='correct'>Question 1: Correct</p>";
}else{
results += "<p class='incorrect'>Question 1: Incorrect. Correct answer: HTTPS</p>";

}


// Q2 Multiple choice
let q2 = document.querySelector('input[name="q2"]:checked');
if(q2 && q2.value=="Tim Berners-Lee"){
score++;
results += "<p class='correct'>Question 2: Correct</p>";
}else{
results += "<p class='incorrect'>Question 2: Incorrect. Correct answer: Tim Berners-Lee</p>";

}


// Q3 Multiple Choice
// Q3 Multiple Choice
let q3 = document.querySelector('input[name="q3"]:checked');

if (q3 && q3.value == "Nginx") {
    score++;
    results += "<p class='correct'>Question 3: Correct</p>";
} else {
    results += "<p class='incorrect'>Question 3: Incorrect. Correct answer: Nginx</p>";
}


//Q4 multiple choice
let q4 = document.querySelector('input[name="q4"]:checked');
if(q4 && q4.value=="QUIC"){
score++;
results += "<p class='correct'>Question 4: Correct</p>";
}else{
results += "<p class='incorrect'>Question 4: Incorrect. Correct answer: QUIC</p>";

}


//Q5 multiple select, 
let boxes=document.querySelectorAll('input[name="q5"]:checked');
let answers=[];
boxes.forEach(function(box){
answers.push(box.value);
});
answers.sort();
let correct=["Cloud Computing","Edge Computing","HTTP/3"];
correct.sort();
if(JSON.stringify(answers)==JSON.stringify(correct)){
score++;
results += "<p class='correct'>Question 5: Correct</p>";
}else{
results += "<p class='incorrect'>Question 5: Incorrect. Correct answers: Cloud Computing, HTTP/3, Edge Computing</p>";

}


// Display user's final score pass/fail
let message="";
if(score>=4){
message="<h2 class='correct'>PASS</h2>";
}else{
message="<h2 class='incorrect'>FAIL</h2>";
}
document.getElementById("results").innerHTML=
message+
"<h2>Total Score: "+score+"/5</h2>"+
results;

}
//reset quiz
function resetQuiz(){
document.getElementById("results").innerHTML="";

}
