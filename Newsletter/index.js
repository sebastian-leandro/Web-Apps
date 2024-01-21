const elements = {
    messageSpan: document.getElementById("message"),
    submitBtn: document.getElementById("btn"),
    successWindow: document.querySelector(".success--window"),
    newsContainer: document.querySelector(".grid--container"),
    backBtn: document.getElementById("backNewsletter"),
    formInput: document.getElementById("formInput")
};

const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toLowerCase());

const resetMessage = () => { elements.messageSpan.innerText = ""; };

elements.submitBtn.addEventListener("click", function () {
    const inputVal = elements.formInput.value;
    if (!inputVal) {
        elements.messageSpan.innerText = "The field is empty";
    } else if (isValidEmail(inputVal)) {
        elements.newsContainer.classList.add("hide");
        elements.successWindow.classList.add("show");
        const email = document.getElementById("email");
        email.innerText = inputVal;
    } else {
        elements.messageSpan.innerText = "The email is wrong";
    }
    setTimeout(resetMessage, 3000);
});

elements.backBtn.addEventListener("click", () => {
    elements.successWindow.classList.remove("show");
    elements.newsContainer.classList.remove("hide");
});