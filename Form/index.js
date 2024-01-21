const btn = document.querySelector(".btn__form");

btn.addEventListener("click", (e) => {e.preventDefault()})

function sendEmail() {

    const inputText = document.getElementById("to").value;
    const inputEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(inputText < 5){
        alert("The message must be send to someone");
    }
    if(inputEmail.endsWith("@gmail.com") || inputEmail.endsWith("@hotmail.com") || inputEmail.endsWith("@outlook.com") && message.lenght >5){
        const respond = document.querySelector(".respond");
        respond.classList.add("show");
    }else {
        alert("The email is wrong or the message is too short.");
    }
};