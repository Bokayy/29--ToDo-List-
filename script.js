"use strict"

const chkbox = document.querySelector("#chkbox");
const chkContainer = document.querySelector(".checkbox-container");
let isChecked = false;

const inputField = document.querySelector("#text");
const inputButton = document.getElementById("unesi");

// functions /////////////////////////////////////
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function addItem(inputText){

    const currentDiv = document.querySelector(".to-do-items");


    const newItem = document.createElement("div");
        newItem.classList.add("item");

           insertAfter(newItem,currentDiv);
    
    const itemText = document.createElement("p");
        itemText.innerHTML = inputText;

           insertAfter(itemText,newItem);

    const chkContainer = document.createElement("div");
        chkContainer.classList.add("checkbox-container");

            insertAfter(chkContainer,itemText);

    const checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        checkBox.id = "chkbox"

            insertAfter(checkBox,chkContainer);

    const trashcan = document.createElement("div");
        trashcan.classList.add("trashcan-container");

            insertAfter(trashcan,checkBox);
    
    const trashicon = document.createElement("i");
        trashicon.classList.add("far fa-trash-alt");

            insertAfter(trashicon,trashcan);

    /* insertAfter(trashicon,trashcan); */
}

// functions /////////////////////////////////////

chkbox.onclick = () => {
    isChecked = !isChecked;
    console.log(isChecked);
    chkContainer.style.backgroundColor = isChecked ? "rgb(0,117,255)" : "transparent";
    chkContainer.style.border = isChecked ? "1px solid rgb(0,117,255)" : "transparent";
};


//debug
inputField.addEventListener("keyup",function(e) {
    console.log(inputField.value);

    if(e.keyCode === "13"){
        console.log("enter");
    }
})

inputButton.onclick = () => {
    console.log("uneseno");

    addItem(inputField.value);
}