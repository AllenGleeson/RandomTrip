document.querySelector("form").addEventListener("submit", function(e){
    if(!isValid()){
        e.preventDefault();
    }
});

function isValid(){
    if (PasswordsMatch()) {
        return true;
    }
    return false;
}

function PasswordsMatch(){
    var password = document.querySelector("#password");
    var confirmPassword = document.querySelector("#confirm-password");

    if(password.value !== confirmPassword.value){
        document.querySelector(".error-message").textContent="The passwords do not match";
        return false;
    }

    return true;
}