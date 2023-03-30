let submitbutton= document.getElementById("submitbutton");
submitbutton.addEventListener("click",function(e){
    e.preventDefault();
let  signupform = document.forms["signupform"];
let firstnameinput =signupform.firstname;
let lastnameinput=signupform.lastname;

if(firstnameinput.value ==""){
let firstnamegroup=document.getElementById('firstnamegroup');
let firstnamemessage=document.querySelector("#firstnamegroup .message");
firstnamegroup.classList.add("error");
firstnamemessage.textContent="First Name Shoiuldnot be empty";
}
if(lastnameinput.value ==""){
    let lastnamegroup=document.getElementById('lastnamegroup');
    let lastnamemessage=document.querySelector("#lastnamegroup .message");
    lastnamegroup.classList.add("error");
    lastnamemessage.textContent="Last Name Shoiuldnot be empty";
    }
    
});