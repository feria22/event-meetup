'use strict'
let signForm=document.querySelector('#signEvent');
let signFormName=document.querySelector('#signEvent #inputName');
let signFormEmail=document.querySelector('#signEvent #inputEmail');
let signFormPhone=document.querySelector('#signEvent #inputPhone');
let signFormUserName=document.querySelector('#signEvent #inputUserName');
let kontaktFormEmail=document.querySelector('#inputKonatktEmail');
let kontaktFormText=document.querySelector('#inputKontaktText')
signFormName.onchange=function(){
    formValid(event,this);
    !this.classList.contains("invalid") ? this.style.textTransform='capitalize':false;
}
signFormEmail.onchange=function(){formValid(event,this)}
signFormPhone.onchange=function(){formValid(event,this)}
signFormUserName.onchange=function(){formValid(event,this)}
kontaktFormEmail.onchange=function(){formValid(event,this)}

function formValid (event,elem) {
    if ((elem.validity.patternMismatch)||(elem.validity.typeMismatch)) {
        noValid(elem);
    } else {
        elem.classList.remove("invalid");
        elem.value.toLowerCase();
    }
}
function noValid(elem){
elem.style.textTransform='none';
elem.value='';
elem.placeholder=`Please, take correctly ${elem.dataset.key}`;
elem.classList.add("invalid");
}
