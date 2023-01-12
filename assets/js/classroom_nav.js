let lang_data1="";
let lang_data2="";
let tab_item="";
let tab_cont="";

let langs=[
    {
        name:"english",
        num:"51916"
    },
    {
        name:"french",
        num:"5194"
    },
    {
        name:"japanese",
        num:"3930"
    },
    {
        name:"chinese",
        num:"3623"
    },
    {
        name:"spanish",
        num:"51916"
    },
    {
        name:"german",
        num:"4900"
    },
    {
        name:"korean",
        num:"3078"
    },
    {
        name:"italian",
        num:"2785"
    }
]
let tabs=["assessment","podcast","articels","topics","prompt","quiz"]

function add_lang(i){
            let code=`
                        <a class="btn btn-primary bg-white border-0 text-dark-emphasis p-3 text-start d-inline-flex p-2 h-100" href="#" role="button">
                        <div class="flag">
                            <img src="./assets/img/classroom/assessment/flag_lang/${langs[i].name}.svg" alt="${langs[i].name} flag" class=" rounded-2">
                        </div>
                        <div class="desc-lang mx-3">
                            <p class="fs-6 fw-bold m-0">${langs[i].name}</p>
                            <p class="fs-sm fw-medium mt-1 mb-0">${langs[i].num} are participating</p>
                        </div>
                        </a> 
                        `
            return code;
}

langs.forEach((ele,i)=> {
    if(i>=langs.length/2) lang_data2+=add_lang(i);
     else lang_data1+=add_lang(i);
});

tabs.forEach((ele,i)=>{
    // console.log(ele);
    tab_item+=`
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="${ele}-tab" data-bs-toggle="tab" data-bs-target="#${ele}-tab-pane" type="button" role="tab" aria-controls="${ele}-tab-pane" aria-selected="true">${ele}</button>
  </li>
    `
    tab_cont=`
      <div class="tab-pane fade show active" id="${ele}-tab-pane" role="tabpanel" aria-labelledby="${ele}-tab" tabindex="0">
                    <div class="row">
                        <div class="col-md-4 my-4">
                            <div class="card rounded-bottom-0 border-0">
                                <img src="./assets/img/classroom/intro_${ele}.jpg" class="card-img-top" alt="intro_assesment classRoom image">
                                <div class="card-body p-4 bg-white rounded-end-5 rounded-bottom-3">
                                  <h5 class="card-title text-capitalize">${ele}</h5>
                                  <p class="card-text mb-5 mt-1">
                                    Test your level with a free language assessment
                                  </p>
                                  <a href="#" class="link-info">Test now 
                                    <span><i class="fa-solid fa-chevron-right"></i></span>
                                  </a>
                                </div>
                              </div>
                        </div>
                        <div class="col-md-4 my-4 d-grid gap-4" id="langs-1">
                        </div>
                        <div class="col-md-4 my-4 d-grid gap-4" id="langs-2">
                        </div>
                    </div>
                </div>`
})
document.getElementById("myTab")
.innerHTML=tab_item;
document.getElementById("myTabContent")
.innerHTML=tab_cont;
document.getElementById("langs-1")
.innerHTML=lang_data1;
document.getElementById("langs-2")
.innerHTML=lang_data2;

