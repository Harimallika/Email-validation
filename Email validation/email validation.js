const input = document.querySelector("input");
const emailIcon = document.querySelector(".envelope-icon");


input.addEventListener("keyup", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if(input.value === ""){
       emailIcon.classList.replace("fa-check-circle","fa-envelope");
       return emailIcon.style.color = "#b4b4b4";
    }

    if(input.value.match(pattern)){
        emailIcon.classList.replace("fa-envelope", "fa-check-circle");
        return emailIcon.style.color = "#4bb543"
    }
    
    emailIcon.classList.replace("fa-check-circle", "fa-envelope");
    emailIcon.style.color = "#de0611";
})