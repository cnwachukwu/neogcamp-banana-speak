
//var username = prompt("Enter your name")
//var welcomeMessage = "this script works " + username
//alert(welcomeMessage)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "I am Paulson"



function clickHandler() {
    // console.log("clicked!");
    // console.log("input", txtInput.value);
    outputDiv.innerText = "banana language " + txtInput.value

};

btnTranslate.addEventListener("click", clickHandler)


