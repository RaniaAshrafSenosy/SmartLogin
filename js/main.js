nameInput=document.getElementById("nameInput");
emailInput=document.getElementById("emailInput");
passInput=document.getElementById("passInput");
inputs=document.getElementsByClassName("form-control");
successMsg=document.getElementById("success-msg");
errorMsg = document.getElementById("error-msg");
signDirectBtn=document.getElementById("loginBtn-direct");
var users=[];
var loginBtn=document.getElementById("loginBtn");
var signBtn=document.getElementById("signBtn");

if(JSON.parse(localStorage.getItem("usersList"))!=null){
    users=JSON.parse(localStorage.getItem("usersList"));
  }

signBtn.addEventListener("click",function(){
    check();    
})
function check(){
    var store;
    if(JSON.parse(localStorage.getItem("usersList"))!=null){
        for(var i=0;i<users.length;i++){
            if(emailInput.value==users[i].email){
                errorMsg.classList.remove("d-none");
                successMsg.classList.add("d-none");
                store=true;
                break;
            }
        }
        if(!store){
            addUser();
            successMsg.classList.remove("d-none");
            errorMsg.classList.add("d-none");
            signDirectBtn.classList.remove("d-none");
        }
    }
    else {
        addUser();
        successMsg.classList.remove("d-none");
        errorMsg.classList.add("d-none");
        signDirectBtn.classList.remove("d-none");
       
    }

}
function addUser(){
    var user={
        name:nameInput.value,
        email:emailInput.value,
        password:passInput.value
    }
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users)); 
        signDirectBtn.classList.remove("d-none");
}

nameMsg=document.getElementById("name-msg");
emailMsg=document.getElementById("email-msg");
passMsg=document.getElementById("pass-msg");

nameInput.onkeyup=function(){
    var nameInputRejex=/^[A-z][a-z]{2,} ?[A-Z]?[a-z]*$/;
    if(nameInputRejex.test(nameInput.value)){
       nameInput.classList.add('is-valid');
       nameInput.classList.remove('is-invalid');
       nameMsg.classList.add('d-none')
    }
    else{
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameMsg.classList.remove('d-none');
    }
}

emailInput.onkeyup=function(){
    var emailInputRejex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if(emailInputRejex.test(emailInput.value)){
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        emailMsg.classList.add('d-none')
    }
    else{
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        emailMsg.classList.remove('d-none');
    }
}
passInput.onkeyup=function(){
    var passInputRejex=/^[A-Za-z0-9]{5,}$/;
    if(passInputRejex.test(passInput.value)){
        signBtn.removeAttribute('disabled');
        passInput.classList.add('is-valid');
        passInput.classList.remove('is-invalid');
        passMsg.classList.add('d-none')
    }
    else{
        signBtn.disabled=true;
        passInput.classList.add('is-invalid');
        passInput.classList.remove('is-valid');
        passMsg.classList.remove('d-none');
    }
}


