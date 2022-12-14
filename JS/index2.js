var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDivide = document.getElementById('buttonDivide');

function onButtonPlusClick(){
    var input1=document.getElementById('number 1');
    var input2=document.getElementById('number 2');

    var number1=Number(input1.value);
    var number2=Number(input2.value);

    var plus=number1+number2;

    window.alert(plus);
}
function onButtonMinusClick(){
    var input1=document.getElementById('number 1');
    var input2=document.getElementById('number 2');

    var number1=Number(input1.value);
    var number2=Number(input2.value);

    var minus=number1-number2;

    window.alert(minus);
}
function onButtonMultiplyClick(){
    var input1=document.getElementById('number 1');
    var input2=document.getElementById('number 2');

    var number1=Number(input1.value);
    var number2=Number(input2.value);

    var multipy=number1*number2;

    window.alert(multipy);
}
function onButtonDivideClick(){
    var input1=document.getElementById('number 1');
    var input2=document.getElementById('number 2');

    var number1=Number(input1.value);
    var number2=Number(input2.value);

    var divide=number1/number2;

    window.alert(divide);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click',onButtonMultiplyClick);
buttonDivide.addEventListener('click',onButtonDivideClick);