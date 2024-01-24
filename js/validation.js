function validateEmptyFiels(input){

    if(!input.value || input.value.length <3 ){
        addErrors(input);
    }else {
       removeErrors(input);
    }
}
function isEmailValid(input){
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     /*::::::::::::::: VALIDAÇÃO DE EMAIL REQUISITOS::::::::::::*/

    if(!regex.test(input.value)){
        addErrors(input);
    }else {
       removeErrors(input);
    }
    }
