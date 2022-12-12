var logoutBtn=document.getElementById("logoutBtn");
function getCurrentUser(){
    var currentUser;
    currentUser=JSON.parse(localStorage.getItem("currentUser"));
    document.getElementById("welcome-msg").innerHTML=`Welcome  ${currentUser}`;
}
getCurrentUser();
logoutBtn.addEventListener("click",function(){
    logOut();
})
function logOut(){
    localStorage.setItem("currentUser", null);
    window.location.href="index.html";
}
