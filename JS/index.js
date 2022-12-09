function alertValue(element) {
    window.alert(element.value);
}

function logValue(element) {
    console.log(element.value);
}

function getValue(element) {
    return element.value;
}

function color(element) {
    element.className = 'normal';
}

function funButton() {
    color(messageEL);
    color(message0EL);
}

function inputKeyup() {
    window.alert(message0EL.value);
}

var messageID = 'text';
var messageEL = document.getElementById(messageID);
var image1ID = 'ss';
var image1EL = document.getElementById(image1ID);
var image2ID = 'dd';
var image2EL = document.getElementById(image2ID);
var listID = 'list';
var listEL = document.getElementById(listID);
var avatarID = 'avatar';
var avatarEL = document.getElementById(avatarID);
var message0ID = 'text0';
var message0EL = document.getElementById(message0ID);
var buttonID = 'button';
var buttonEL = document.getElementById(buttonID);

//alertValue(messageEL);
logValue(messageEL);
messageEL.setAttribute('value', 'WHAT?');
messageEL.className = 'error-normal';
image1EL.src = 'https://klike.net/uploads/posts/2019-12/1576743171_1.jpg';
image1EL.title = 'Я вторая картинка';
image2EL.title = 'Я первая картинка';
listEL.value = 'Белки';
avatarEL.innerHTML = '<ul id="ss"><li>1</li><li>2</li></ul>';
//alertValue(message0EL);
//alertValue(messageEL);
logValue(message0EL);
logValue(messageEL);
message0EL.value = getValue(messageEL);

buttonEL.addEventListener("click", funButton);
message0EL.addEventListener('keyup', inputKeyup);