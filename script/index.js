console.log("Java Script File Connected")

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


document.getElementById("btn-login").addEventListener("click", function(event){
    event.preventDefault(); 
    const accountNumber  = document.getElementById("user-name").value;
    const pin = document.getElementById("pin").value;
    const convertedPIN = parseInt(pin);
    if(accountNumber != "")
    {
        if(convertedPIN === 123456)
        {
            // console.log(accountNumber, pin);
            // alert("Login Successful.");  
            showSections();
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

// {
//     "id": 102,
//     "level_no": 2,
//     "lessonName": "Everyday Words"
// }
// <button id="btn-${element.lessonName}" onClick = loadCategoryVideo(${element.category_id}) class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${element.category}</button>

const showLessonName = (lessonData) =>{
    const lessonMenu = document.getElementById("lesson-menu");
    
    console.log(lessonMenu);
    lessonData.forEach(element => {
        const lessonDiv = document.createElement("div")
        lessonDiv.innerHTML = `
                    <button id="btn-${element.id}" class="btn btn-outline btn-primary">
                        <img src="./assets/fa-book-open.png" alt="">
                        ${element.lessonName}
                    </button>
                `
        lessonMenu.append(lessonDiv);
        // console.log(element.lessonName);
    });
}
loadLessonName();

hideSections();