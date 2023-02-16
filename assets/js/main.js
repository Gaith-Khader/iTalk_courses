
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
// nav bar animation
let navBar=document.getElementById("navBar");
window.addEventListener("scroll",function(){
    if(window.scrollY>100){
        navBar.classList.add("shadow-sm");
        navBar.classList.replace("bg-transparent","bg-white");
    }else if(this.window.scrollY<50){
        navBar.classList.replace("bg-white","bg-transparent");
        navBar.classList.remove("shadow-sm");
    }
    navBar.style.transition='0.5s';
})



// slick slider for language section
$('.slider').slick({
    dots: false,
    infinite: false,
    nextArrow: '<span class="prev_arrow"><i class="fa-solid fa-chevron-right"></i></span>',
    prevArrow: '<span class="next_arrow"><i class="fa-solid fa-chevron-left"></i></span>',
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
    {
    breakpoint: 1024,
    settings: "unslick"
    },
    ]
});

