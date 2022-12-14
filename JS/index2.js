var operationButton=document.getElementsByClassName('operation-button');

var resultElement=document.getElementById('result');

var input1 = document.getElementById('number 1');
var input2 = document.getElementById('number 2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === '+') {
        resultElement.innerHTML=number1 + number2;
    } else if (operationCode === '-') {
        resultElement.innerHTML=number1 - number2;
    } else if (operationCode === '*') {
        resultElement.innerHTML=number1 * number2;
    } else if (operationCode === '/') {
        resultElement.innerHTML=number1 / number2;
    }
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', onOperationButtonClick);
}