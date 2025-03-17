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

hideSections();


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
            alert("Login Successful.");  
            showSections();
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


const checkAuthentication = () => {
    const name = document.getElementById("name");
    console.log(name.nodeValue)
    // showSections();
}