const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

function initApp(){
addEventInElements(firstName);
addEventInElements(lastName);
addEventInElements(password);
addEventInElements(email);
};



function addEventInElements(element){

element.addEventListener ('blur',  function() {
if(element.type === 'text' || element.type ==='password'){
    validateEmptyFiels(element);
}
else{
    isEmailValid(email);
}

})
}
initApp();