let submitbutton= document.getElementById("submitbutton");
let errors={}


submitbutton.addEventListener("click",function(e){
     e.preventDefault();
     errors={};
let  signupform = document.forms["signupform"];
let firstnameinput =signupform.firstname;
let lastnameinput=signupform.lastname;
let emailinput=signupform.email;
let passwordinput=signupform.password;

if(firstnameinput.value ==""){
    errors.firstname="First Name shouldnot be empty";
}
if(lastnameinput.value ==""){
    errors.lastname="Last Name shouldnot be empty" ;  
    }
if(emailinput.value == ""){
        errors.email="Email shouldnot be empty";
}
if(passwordinput.value == ""){
    errors.password="Password should not be empty";
}
if(passwordinput.value.length<=5){
errors.password="Minimum 6 characters are needed";
}
console.log(errors);
    for (let error in errors){
        let lastnamegroup=document.getElementById(`${error}group`);
        let lastnamemessage=document.querySelector(`#${error}group .message`);
        lastnamegroup.classList.add("error");
        lastnamemessage.textContent= errors[error];
    };
    if(Object.keys(errors).length==0){
     signupform.submit();
    }
});
