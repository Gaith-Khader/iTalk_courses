// let lang_data1="";
// let lang_data2="";
let tab_item=``;
let tab_cont=``;

let tabs=[
    {
        name:"assessment",
        caption:"Test your level with a free language assessment",link:"Test now",
        select:true,
        data1:"",data2:"",
        active:"active",show:"show",height:"min",
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
        data1:"",data2:"",
        active:"",show:"",height:"max",
        classes:[
            {
                name:"English Nas Group Class Podcast January 2023-2 ELON MUSK ADVANCED",
                num:"51916",
                img:"p1.jpg"
            },
            {
                name:"English NAS says it's not Classy to Text after 10pm ",
                num:"5194",
                img:"p2.jpg"
            },
            {
                name:"Nas takes on Harry Windsor with 10 phrasal verbs about betrayal!",
                num:"3930",
                img:"p3.jpg"
            },
            {
                name:"Tip 10 - Jot down your progress in a journal",
                num:"3623",
                img:"p4.jpg"
            },
            {
                name:"Look For An Ideal Job!",
                num:"51916",
                img:"p5.jpg"
            },
            {
                name:"Speak Up with NAS - The most common Phrasal Verbs ",
                num:"4900",
                img:"p6.jpg"
            }
        ]
    },
    {
        name:"articles",
        caption:"Language learning articles, tips and guides written by expert language teachers",link:"Read now",
        select:false,
        data1:"",data2:"",
        active:"",show:"",height:"max",
        classes:[
            {
                name:"Learning Slang and Phrasal Verbs to Communicate With Native English Speakers",
                num:"51916",
                img:"a2.png"
            },
            {
                name:"Improve Your English by Reading Children’s Picture Books",
                num:"5194",
                img:"a3.png"
            },
            {
                name:"Supporting yourself and others in difficult times!",
                num:"3930",
                img:"a1.png"
            },
            {
                name:"Reading is the Best Exercise to Improve Your Language",
                num:"3623",
                img:"a5.png"
            },
            {
                name:"Everyone Loves Idioms, But Did You Know…",
                num:"51916",
                img:"a4.png"
            },
            {
                name:"Participate in the italki Community and Win italki Credits",
                num:"4900",
                img:"a6.jpg"
            },
        ]
    },
    {
        name:"topics",
        caption:"Meet, connect, and grow through language and culture discussions.",link:"Participate now",
        select:false,
        data1:"",data2:"",
        active:"",show:"",height:"max",
        classes:[
            {
                name:"# EnglishLeague",
                num:"3930",
                img:"t1.jpg"
            },
            {
                name:"# GroupClass",
                num:"3623",
                img:"t2.png"
            },
            {
                name:"# HelpMeCorrect",
                num:"51916",
                img:"t3.png"
            },
            {
                name:"# LanguagePartner",
                num:"4900",
                img:"t4.jpg"
            },
            {
                name:"# italkiLanguageChallenge",
                num:"3078",
                img:"t5.png"
            },
            {
                name:"# italkiRefresh",
                num:"2785",
                img:"t6.png"
            }
        ]
    },
    {
        name:"prompt",
        caption:"Don't know what to practice? Choose a prompt.",link:"Practice now!",
        select:false,
        data1:"",data2:"",
        active:"",show:"",height:"max",d_img:"d-none",
        classes:[
            
            {
                name:"Write about why you are learning a new language",
                num:"3930"
            },
            {
                name:"Write about the weather today",
                num:"3623"
            },
            {
                name:"Do you think it is reliable to find true love on social apps?",
                num:"51916"
            },
            {
                name:"What would you want to know most if you could predict the future?",
                num:"4900"
            },
            {
                name:"What can we do in the face of extreme weather?",
                num:"2785"
            },
            {
                name:"Have you ever chosen budget airlines? What are the pros and cons?",
                num:"3078"
            }
        ]
    },
    {name:"quiz",
    caption:"Put your knowledge into practice by taking language quizzes.", link:"Answer now",
    select:false,
    data1:"",data2:"",
    active:"",show:"",height:"max",d_img:"d-none",
    classes:[
        
        {
            name:"I'll eat some now and ______ some for tomorrow.",
            num:"4900"
        },
        {
            name:"She has ...... appointment with a client at 10.00.",
            num:"3078"
        },
        {
            name:"A dog is an animal.",
            num:"2785"
        },
        {
            name:"Sometimes I ___ by car.",
            num:"3930"
        },
        {
            name:"I am telling you the truth. I am not a ____.",
            num:"3623"
        },
        {
            name:"I ___ him last night.",
            num:"51916"
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
                            <p class="fs-sm fw-medium mb-1 mb-0">${ele.classes[i].num} are participating</p>
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
    <li class="nav-item" role="presentation">
    <button class="nav-link text-capitalize ${ele.active}" id="${ele.name}-tab" data-bs-toggle="tab" data-bs-target="#${ele.name}-tab-pane" type="button" role="tab" aria-controls="${ele.name}-tab-pane" aria-selected="${ele.select}">${ele.name}</button>
  </li>
    `
    tab_cont+=`    
     <div class="tab-pane fade ${ele.show} ${ele.active}" id="${ele.name}-tab-pane" role="tabpanel" aria-labelledby="${ele.name}-tab" tabindex="0">
    <div class="row">
        <div class="col-md-4 my-4">
            <div class="card rounded-bottom-0 border-0">
                <img src="./assets/img/classroom/${ele.name}/intro_${ele.name}.jpg" class="card-img-top" alt="intro_assesment classRoom image">
                <div class="card-body p-4 bg-white rounded-end-5 rounded-bottom-3">
                  <h5 class="card-title text-capitalize">${ele.name}</h5>
                  <p class="card-text mb-5 mt-1">
                   ${ele.caption}
                  </p>
                  <a href="#" class="link-info">${ele.link}
                    <span><i class="fa-solid fa-chevron-right"></i></span>
                  </a>
                </div>
              </div>
        </div>
        <div class="col-md-4 my-4 d-grid gap-4" id="${ele.name}-1">
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

