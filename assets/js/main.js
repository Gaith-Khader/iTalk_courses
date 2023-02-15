
// Teacher Js start
var lang = document.getElementById("divLang");
var langChoices = document.getElementById("divLang").innerHTML;
var goal = document.getElementById("divGoal");
var goalChoices = document.getElementById("divGoal").innerHTML;



function addText(text){
    lang.innerHTML=`
    <a class="text-capitalize rounded-pill clicked" onclick="reverseText()">
    <i class="fa-solid fa-star text-white"></i>
    ${text.innerText}
    </a>`;
    
}

function reverseText(){
    lang.innerHTML=langChoices;
}

function addGoal(text){
   goal.innerHTML=`
    <a class="text-capitalize rounded-pill clicked" onclick="reverseGoal()">
    <i class="fa-solid fa-star text-white"></i>
    ${text.innerText}
    </a>`;
    
}

function reverseGoal(){
    goal.innerHTML=goalChoices;
}

// Teacher Js end