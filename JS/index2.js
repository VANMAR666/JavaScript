var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDivide = document.getElementById('buttonDivide');

var input1=document.getElementById('number 1');
var input2=document.getElementById('number 2');

function getNumber1(){
    return Number(input1.value);
}
function getNumber2(){
    return Number(input2.value);
}
function makeOperation(operationCode){
    if (operationCode==='+') {
        return getNumber1()+getNumber2();
    } else if (operationCode==='-'){
        return getNumber1()-getNumber2();
    } else if (operationCode==='*'){
        return getNumber1()*getNumber2();
    } else if (operationCode==='/') {
        return getNumber1()/getNumber2();
    }
}
function onButtonPlusClick(){
    window.alert(makeOperation('+'));
}
function onButtonMinusClick(){
    window.alert(makeOperation('-'));
}
function onButtonMultiplyClick(){
    window.alert(makeOperation('*'));
}
function onButtonDivideClick(){
    window.alert(makeOperation('/'));
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click',onButtonMultiplyClick);
buttonDivide.addEventListener('click',onButtonDivideClick);