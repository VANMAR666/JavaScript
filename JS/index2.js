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
function onButtonPlusClick(){
    var plus=getNumber1()+getNumber2();

    window.alert(plus);
}
function onButtonMinusClick(){
    var minus=getNumber1()-getNumber2();

    window.alert(minus);
}
function onButtonMultiplyClick(){
    var multipy=getNumber1()*getNumber2();

    window.alert(multipy);
}
function onButtonDivideClick(){
    var divide=getNumber1()/getNumber2();

    window.alert(divide);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click',onButtonMultiplyClick);
buttonDivide.addEventListener('click',onButtonDivideClick);