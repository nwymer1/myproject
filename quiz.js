
/*

IT 3203 Project
Main JavaScript File

Includes:
- Mobile navigation
- Quiz grading
- Quiz validation

*/



/* Mobile navigation */


const navToggle = document.getElementById("navToggle");

const mainNav = document.getElementById("mainNav");



if(navToggle && mainNav){


navToggle.addEventListener("click", function(){


mainNav.classList.toggle("active");


});


}






/* Quiz submission */


const quizForm = document.getElementById("quizForm");



if(quizForm){


quizForm.addEventListener("submit", function(event){


event.preventDefault();


gradeQuiz();


});


}






function gradeQuiz(){


let score = 0;


let results = "";





/* Question 1 */


let q1 = document.getElementById("q1").value.trim().toUpperCase();



if(q1 === "HTTPS"){


score++;


results += "<p class='correct'>Question 1: Correct</p>";


}

else{


results += "<p class='incorrect'>Question 1: Incorrect. Answer: HTTPS</p>";


}






/* Question 2 */


let q2 = document.querySelector("input[name='q2']:checked");



if(q2 && q2.value === "Tim Berners-Lee"){


score++;


results += "<p class='correct'>Question 2: Correct</p>";


}

else{


results += "<p class='incorrect'>Question 2: Incorrect. Answer: Tim Berners-Lee</p>";


}







/* Question 3 */


let q3 = document.querySelector("input[name='q3']:checked");



if(q3 && q3.value === "Nginx"){


score++;


results += "<p class='correct'>Question 3: Correct</p>";


}

else{


results += "<p class='incorrect'>Question 3: Incorrect. Answer: Nginx</p>";


}







/* Question 4 */


let q4 = document.querySelector("input[name='q4']:checked");



if(q4 && q4.value === "QUIC"){


score++;


results += "<p class='correct'>Question 4: Correct</p>";


}

else{


results += "<p class='incorrect'>Question 4: Incorrect. Answer: QUIC</p>";


}







/* Question 5 */


let selected = Array.from(

document.querySelectorAll("input[name='q5']:checked")

).map(item=>item.value).sort();



let answers = [

"Cloud Computing",

"Edge Computing",

"HTTP/3"

].sort();





if(JSON.stringify(selected) === JSON.stringify(answers)){


score++;


results += "<p class='correct'>Question 5: Correct</p>";


}

else{


results += "<p class='incorrect'>Question 5: Incorrect. Answers: Cloud Computing, HTTP/3, Edge Computing</p>";


}







let status;



if(score >=4){


status="<h2 class='correct'>PASS</h2>";


}

else{


status="<h2 class='incorrect'>FAIL</h2>";


}




document.getElementById("results").innerHTML =

status +

"<h3>Total Score: " + score + "/5</h3>" +

results;



}






function resetQuiz(){


let form=document.getElementById("quizForm");


if(form){

form.reset();

}



let results=document.getElementById("results");


if(results){

results.innerHTML="";

}


}
