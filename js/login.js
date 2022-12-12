
emailInput=document.getElementById("emailInput");
passInput=document.getElementById("passInput");
inputs=document.getElementsByClassName("form-control");
errorMsg=document.getElementById("msg-error");

var users=[];
var loginBtn=document.getElementById("loginBtn");


loginBtn.addEventListener("click",function(){

    searchUsers();
  
})
function getData(){
   
    if(JSON.parse(localStorage.getItem("usersList"))!=null){
        users=JSON.parse(localStorage.getItem("usersList")); 
        return true;
      }
    

}
function searchUsers(){
var right;
if(getData()){
    for(var i=0;i<users.length;i++){
        if(emailInput.value==users[i].email && passInput.value==users[i].password){
            right=true;
         localStorage.setItem("currentUser",JSON.stringify(users[i].name));
         window.location.href="welcome.html";
         
          }
        
    }
    if(!right){
        errorMsg.classList.remove("d-none");
    }
   
}
else{
    errorMsg.classList.remove("d-none");

}
    
}
