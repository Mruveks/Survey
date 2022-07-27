const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");
const ul_6 = document.querySelector(".option6");


const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");

const end = document.querySelector(".end")
const survey = document.querySelector(".survey");

const li = document.querySelectorAll("li");
const answers = [];

ul_1.addEventListener("click", function(){
    q1.style.display = "none";
    q2.style.display = "block";
});

ul_2.addEventListener("click", function(){
    q2.style.display = "none";
    q3.style.display = "block";
});

ul_3.addEventListener("click", function(){
    q3.style.display = "none";
    q4.style.display = "block";
});

ul_4.addEventListener("click", function(){
    q4.style.display = "none";
    q5.style.display = "block";
});

ul_5.addEventListener("click", function(){
    q5.style.display = "none";
    q6.style.display = "block";
});

ul_6.addEventListener("click", function(){
    q6.style.display = "none";
    survey.style.display = "none";
    end.style.display = "block";

    answers.forEach(function(data){
    document.getElementById("table_results").innerHTML+='<div>' + data  + '</div>';
    })
});

for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function modify(e){
        answers.push(e.target.innerHTML);
    })
}

