console.log("Java Script File Connected")

function removeActiveClass(){
    const activeBtns = document.getElementsByClassName("active");
    for (let activeBtn of activeBtns){
      activeBtn.classList.remove("active");
    //    console.log(activeBtn);
    }
}

const hideSections = () =>{
    document.getElementById("header-section").classList.add("hidden");
    document.getElementById("learn-section").classList.add("hidden");
    document.getElementById("faq-section").classList.add("hidden");
    document.getElementById("footer-section").classList.add("hidden");
}


const showSections = () =>{
    document.getElementById("header-section").classList.remove("hidden");
    document.getElementById("learn-section").classList.remove("hidden");
    document.getElementById("faq-section").classList.remove("hidden");
    document.getElementById("footer-section").classList.remove("hidden");
}

const hideBanner = () =>  {
    document.getElementById("banner").classList.add("hidden");
}

const showBanner = () =>{
    document.getElementById("banner").classList.remove("hidden");
}
const showFooter = () =>{
    document.getElementById("footer-section").classList.remove("hidden");
}

document.getElementById("btn-login").addEventListener("click", function(event){
    event.preventDefault(); 
    const accountNumber  = document.getElementById("user-name").value;
    const pin = document.getElementById("pin").value;
    const convertedPIN = parseInt(pin);
    if(accountNumber != "")
    {
        if(convertedPIN === 123456)
        {             
            showSections();
            hideBanner(); 
            document.getElementById("my_modal").showModal();
            document.getElementById("user-name").value = '';
            document.getElementById("pin").value = '';
        }else{
            console.log(accountNumber, pin);
            alert("User Name or Password is invalid.");
        }
    }
    else{
        alert("Please provide user name.");
    }
    
})


const loadLessonName = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data)=>showLessonName(data.data))
    // console.log(name.nodeValue)
    // showSections();
}


const wordsByLevel = (level) => {
    const url = `https://openapi.programming-hero.com/api/level/${level}`
    fetch(url).then((res) => res.json())
    .then((data) => displayWordsCard(level, data.data) )
}

const loadWordDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    fetch(url).then((res) => res.json())
    .then((data) => displayWordDetails(data.data) )
}


// {
//     "id": 102,
//     "level_no": 2,
//     "lessonName": "Everyday Words"
// }

const showLessonName = (lessonData) =>{
    const lessonMenu = document.getElementById("lesson-menu");

    lessonData.forEach(element => {

        const lessonDiv = document.createElement("div")
        lessonDiv.innerHTML = `
                    <button id="btn-${element.level_no}" onclick="wordsByLevel(${element.level_no})" class="btn btn-outline btn-primary">
                        <img src="./assets/fa-book-open.png" alt="">
                        ${element.lessonName}
                    </button>
                `
        lessonMenu.append(lessonDiv);

        removeActiveClass();        
    });
}


// {
//     "id": 3,
//     "level": 2,
//     "word": "Cautious",
//     "meaning": "সতর্ক",
//     "pronunciation": "কশাস"
// }

const displayWordsCard = (level=0, wordsInfo) => {    
    const lessonCard =  document.getElementById("lesson-card");    
    const lessonCardContainer =  document.getElementById("lesson-card-container");
    lessonCardContainer.innerHTML = '';

    const activeBtnLesson =  document.getElementById(`btn-${level}`);
    removeActiveClass();
    activeBtnLesson.classList.add("active");

    const defaultCard =  document.getElementById("default-card");
    const noDataCard =  document.getElementById("no-data-card");
    defaultCard.classList.add("hidden");

    if(wordsInfo.length == 0){
        noDataCard.classList.remove("hidden");
        lessonCard.classList.remove("hidden"); 
    }else{
       noDataCard.classList.add("hidden"); 
       lessonCard.classList.add("hidden"); 
        wordsInfo.forEach(element => {
            const cardDiv = document.createElement("div");
            cardDiv.innerHTML = `
                <div class="card bg-base-100 card-md shadow-sm">
                        <div class="card-body">
                            <div class="p-3 border border-pink-100 items-center hover:bg-cyan-50">
                                <div class="flex flex-col justify-center items-center gap-4">
                                    <h1 class="font-bold text-3xl"> ${element.word} </h1>
                                    <h2 class="font-medium text-xl">Meaning /Pronounciation</h2>
                                    <h1 class="hind-siliguri-font font-semibold text-3xl">"${element.meaning==null?'অর্থ নেই':element.meaning} / ${element.pronunciation}"</h1>
                                </div>
                                <div class="flex justify-between">
                                    <div>
                                        <button id="btn-10" class="btn" onClick="loadWordDetails(${element.id})"><img src="https://img.icons8.com/?size=48&id=JJjDa0GHZLiS&format=png" alt=""></button>
                                    </div>
                                    <div>
                                        <button class="btn"><img src="https://img.icons8.com/?size=26&id=2500&format=png" alt=""></button>                                    
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
            `
            lessonCardContainer.append(cardDiv);
            console.log(cardDiv);
        });
    }
    
}

// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }
const displayWordDetails = (wordDetails) =>{
    console.log(wordDetails);
}

loadLessonName();

hideSections();