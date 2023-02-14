// let lang_data1="";
// let lang_data2="";
let tab_item=``;
let tab_cont=``;

let tabs=[
    {
        name:"assessment",
        caption:"Test your level with a free language assessment",link:"Test now",
        select:true,
        data1:"",data2:"",icon1:"hidden",icons:"hidden",
        active:"active",show:"show",height:"min",num_sub:"are participating",
        classes:[
            {
                name:"english",
                num:"51916",
                img:"english.svg"
            },
            {
                name:"french",
                num:"5194",
                img:"french.svg"
            },
            {
                name:"japanese",
                num:"3930",
                img:"japanese.svg"
            },
            {
                name:"chinese",
                num:"3623",
                img:"chinese.svg"
            },
            {
                name:"spanish",
                num:"51916",
                img:"spanish.svg"
            },
            {
                name:"german",
                num:"4900",
                img:"german.svg"
            },
            {
                name:"korean",
                num:"3078",
                img:"korean.svg"
            },
            {
                name:"italian",
                num:"2785",
                img:"italian.svg"
            }
        ]
    },
    {
        name:"podcast",
        caption:"Listen to locals talk about a language. Play a podcast!",link:"Listen now",
        select:false,
        data1:"",data2:"",icon1:"hidden",icons:"hidden",
        active:"",show:"",height:"max",num_sub:"",
        classes:[
            {
                name:"English Nas Group Class Podcast January 2023-2 ELON MUSK ADVANCED",
                num:"00:01:18",
                img:"p1.jpg"
            },
            {
                name:"English NAS says it's not Classy to Text after 10pm ",
                num:"00:02:05",
                img:"p2.jpg"
            },
            {
                name:"Nas takes on Harry Windsor with 10 phrasal verbs about betrayal!",
                num:"00:01:13",
                img:"p3.jpg"
            },
            {
                name:"Tip 10 - Jot down your progress in a journal",
                num:"00:03:30",
                img:"p4.jpg"
            },
            {
                name:"Look For An Ideal Job!",
                num:"00:06:49",
                img:"p5.jpg"
            },
            {
                name:"Speak Up with NAS - The most common Phrasal Verbs ",
                num:"00:03:35",
                img:"p6.jpg"
            }
        ]
    },
    {
        name:"articles",
        caption:"Language learning articles, tips and guides written by expert language teachers",link:"Read now",
        select:false,
        data1:"",data2:"",icon1:"hidden",icons:"hidden",
        active:"",show:"",height:"max",num_sub:"",
        classes:[
            {
                name:"Learning Slang and Phrasal Verbs to Communicate With Native English Speakers",
                num:"66",
                img:"a2.png"
            },
            {
                name:"Improve Your English by Reading Children’s Picture Books",
                num:"114",
                img:"a3.png"
            },
            {
                name:"Supporting yourself and others in difficult times!",
                num:"215",
                img:"a1.png"
            },
            {
                name:"Reading is the Best Exercise to Improve Your Language",
                num:"362",
                img:"a5.png"
            },
            {
                name:"Everyone Loves Idioms, But Did You Know…",
                num:"64",
                img:"a4.png"
            },
            {
                name:"Participate in the italki Community and Win italki Credits",
                num:"103",
                img:"a6.jpg"
            },
        ]
    },
    {
        name:"topics",
        caption:"Meet, connect, and grow through language and culture discussions.",link:"Participate now",
        select:false,
        data1:"",data2:"",
        active:"",show:"",height:"max",num_sub:"participating",
        classes:[
            {
                name:"# EnglishLeague",
                num:"16157",
                img:"t1.jpg",
                icon1:"11.jpg",icon2:"12.jpg",icon3:"00.png",
            },
            {
                name:"# GroupClass",
                num:"3135",
                img:"t2.png",
                icon1:"21.jpg",icon2:"22.jpg",icon3:"23.jpg"
            },
            {
                name:"# HelpMeCorrect",
                num:"7349",
                img:"t3.png",
                icon1:"00.png",icon2:"32.jpg",icon3:"33.jpg"
            },
            {
                name:"# LanguagePartner",
                num:"37741",
                img:"t4.jpg",
                icon1:"41.jpg",icon2:"42.jpg",icon3:"43.jpg"
            },
            {
                name:"# italkiLanguageChallenge",
                num:"12279",
                img:"t5.png",
                icon1:"51.jpg",icon2:"52.jpg",icon3:"53.jpg"
            },
            {
                name:"# italkiRefresh",
                num:"754",
                img:"t6.png",
                icon1:"61.jpg",icon2:"00.png",icon3:"63.jpg"
            }
        ]
    },
    {
        name:"prompt",
        caption:"Don't know what to practice? Choose a prompt.",link:"Practice now!",
        select:false,
        data1:"",data2:"",
        active:"",show:"",height:"max",d_img:"d-none",num_sub:"participating",
        classes:[
            
            {
                name:"Write about why you are learning a new language",
                num:"6983",
                icon1:"icon11.jpg",icon2:"icon12.jpg",icon3:"icon13.jpg",
            },
            {
                name:"Write about the weather today",
                num:"5460",
                icon1:"icon21.jpg",icon2:"icon22.jpg",icon3:"icon23.png",
            },
            {
                name:"Do you think it is reliable to find true love on social apps?",
                num:"384",
                icon1:"icon31.jpg",icon2:"icon32.jpg",icon3:"icon33.jpg",
            },
            {
                name:"What would you want to know most if you could predict the future?",
                num:"469",
                icon1:"41.jpg",icon2:"42.jpg",icon3:"icon23.png",
            },
            {
                name:"What can we do in the face of extreme weather?",
                num:"1153",
                icon1:"51.jpg",icon2:"52.jpg",icon3:"53.jpg"
            },
            {
                name:"Have you ever chosen budget airlines? What are the pros and cons?",
                num:"159",
                icon1:"61.jpg",icon2:"icon23.png",icon3:"63.jpg"
            }
        ]
    },
    {name:"quiz",
    caption:"Put your knowledge into practice by taking language quizzes.", link:"Answer now",
    select:false,
    data1:"",data2:"",icons:"hidden",
    active:"",show:"",height:"max",d_img:"d-none",num_sub:"quizzed",
    classes:[
        
        {
            name:"I'll eat some now and ______ some for tomorrow.",
            num:"186",icon1:"icon1.jpg"
        },
        {
            name:"She has ...... appointment with a client at 10.00.",
            num:"395",icon1:"icon2.jpg"
        },
        {
            name:"A dog is an animal.",
            num:"224",icon1:"icon3.jpg"
        },
        {
            name:"Sometimes I ___ by car.",
            num:"355",icon1:"icon2.jpg"
        },
        {
            name:"I am telling you the truth. I am not a ____.",
            num:"612",icon1:"icon5.jpg"
        },
        {
            name:"I ___ him last night.",
            num:"399",icon1:"icon6.jpg"
        }
    ]
    }
]

function add_lang(ele,i){
            let code=`
                        <a class=" ${ele.height}-height btn btn-primary bg-white border-0 text-dark-emphasis p-3 text-start d-inline-flex " href="#" role="button">
                        <div  class="img-div h-100 ${ele.d_img}">
                            <img src="./assets/img/classroom/${ele.name}/${ele.classes[i].img}" alt="${ele.classes[i].name} class" class=" rounded-2 w-100 h-100 object-fit-cover" >
                        </div>
                        <div class=" d-flex flex-column justify-content-between">
                            <p class="fs-6 fw-bold m-0 p-description">${ele.classes[i].name}</p>
                            <p class="fs-sm fw-medium mb-1 mb-0 ${ele.name} ">
                            <img class ="${ele.icon1} icon1" src="./assets/img/classroom/${ele.name}/${ele.classes[i].icon1}">
                            <span class="${ele.icons}"> 
                             <img class ="icon" src="./assets/img/classroom/${ele.name}/${ele.classes[i].icon2}">
                            <img class ="icon" src="./assets/img/classroom/${ele.name}/${ele.classes[i].icon3}"> </span>
                          
                           <span> ${ele.classes[i].num} ${ele.num_sub}</span </p>
                        </div>
                        </a> 
                        `
            return code;
}

// tabs.forEach((ele) =>{
//     // (ele.classes).forEach((c,i)=> {if(i>= (ele.classes).length/2) ele.data2+=add_lang(ele,i);
//     // else ele.data1+=add_lang(ele,i);})
// })

tabs.forEach((ele,i)=>{
    (ele.classes).forEach((c,i)=> {if(i>= (ele.classes).length/2) ele.data2+=add_lang(ele,i);
    else ele.data1+=add_lang(ele,i);})

    tab_item+=`
    <li class=" flex nav-item" role="presentation">
    <button class="bg-white rounded-1 nav-link  ${ele.active}" id="${ele.name}-tab" data-bs-toggle="tab" data-bs-target="#${ele.name}-tab-pane" type="button" role="tab" aria-controls="${ele.name}-tab-pane" aria-selected="${ele.select}">
    <img src="./assets/img/classroom/tabs/${ele.name}.svg" class="tab-icon"/>
   <span> ${ele.name}</span>
    </button>
  </li>
    `
    tab_cont+=`    
     <div class="tab-pane fade ${ele.show} ${ele.active}" id="${ele.name}-tab-pane" role="tabpanel" aria-labelledby="${ele.name}-tab" tabindex="0">
    <div class="row">
        <div class="col-md-4 my-4">
            <div class="card rounded-bottom-0 border-0 ">
                <img src="./assets/img/classroom/${ele.name}/intro_${ele.name}.jpg" class="card-img-top" alt="intro_assesment classRoom image">
                <div class="card-body p-4 bg-white rounded-end-5 rounded-bottom-3">
                  <h5 class="card-title text-capitalize">${ele.name}</h5>
                  <p class="card-text mb-5 mt-1">
                   ${ele.caption}
                  </p>
                  <a href="#" class="link-info  ">${ele.link}
                    <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
        </div>
        <div class="col-md-4 my-4 d-grid gap-4 resp" id="${ele.name}-1">
        </div>
        <div class="col-md-4 my-4 d-grid gap-4" id="${ele.name}-2">
        </div>
    </div>
</div>
                `
    // }
});
// console.log(tab_cont,tab_item);
document.getElementById("myTab")
.innerHTML=tab_item;
document.getElementById("myTabContent")
.innerHTML=tab_cont;
tabs.forEach((ele)=>{
    // console.log(ele.data1);
    document.getElementById(`${ele.name}-1`)
    .innerHTML=ele.data1;
    document.getElementById(`${ele.name}-2`)
    .innerHTML=ele.data2;
})

