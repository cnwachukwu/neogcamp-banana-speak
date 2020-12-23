
//var username = prompt("Enter your name")
//var welcomeMessage = "this script works " + username
//alert(welcomeMessage)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

console.log(txtInput)

function clickHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)


