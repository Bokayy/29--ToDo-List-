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

           currentDiv.appendChild(newItem);
    
    const itemText = document.createElement("p");
        itemText.innerHTML = inputText;

           newItem.appendChild(itemText);

    const chkContainer = document.createElement("div");
        chkContainer.classList.add("checkbox-container");

            newItem.appendChild(chkContainer);

    const checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        checkBox.id = "chkbox"

            chkContainer.appendChild(checkBox);

    const trashcan = document.createElement("div");
        trashcan.classList.add("trashcan-container");

            newItem.appendChild(trashcan);
    
    const trashicon = document.createElement("i");
        trashicon.classList.add("far fa-trash-alt");
        trashicon['aria-hidden'] = true;

            trashcan.appendChild(trashicon);

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

    if(e.keyCode === 13){
        console.log("enter");
        addItem(inputField.value);
    }
})

inputButton.onclick = () => {
    console.log("uneseno");

    addItem(inputField.value);
}