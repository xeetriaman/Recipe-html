let submitbutton= document.getElementById("submitbutton");
let errors={}


submitbutton.addEventListener("click",function(e){
    e.preventDefault();
let  signupform = document.forms["signupform"];
let firstnameinput =signupform.firstname;
let lastnameinput=signupform.lastname;

if(firstnameinput.value ==""){
    errors.firstname="First Name shouldnot be empty";
}
if(lastnameinput.value ==""){
    errors.lastname="Last Name shouldnot be empty"   
    }
console.log(errors);
    for (let error in errors){

    }
});
//errors.lastname="Last Name shouldnot be empty"
   // let lastnamegroup=document.getElementById('lastnamegroup');
    //let lastnamemessage=document.querySelector("#lastnamegroup .message");
    //lastnamegroup.classList.add("error");
    //lastnamemessage.textContent="Last