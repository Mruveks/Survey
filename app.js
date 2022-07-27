const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const end = document.querySelector(".end")

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
    end.style.display = "block";

    answers.forEach(function(data){
    document.getElementById("result").innerHTML+='<div>' + data  + '</div>';
    })
});

for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function modify(e){
        answers.push(e.target.innerHTML);
        console.log(answers)
    })
}

