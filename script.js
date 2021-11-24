let displayValue = 0; //display starts blank
const display = document.querySelector('#display');
let x = 0; //stored value
let firstValue = 0; //stores 1st value for operation
let y = ""; //stored operator for calc, cleared immediately
let stored = ""; //stored for later from y
let trigger = 0; //determines operation or new number
let secondValue = 0; //stores value for operations



//number button functionality

const numButton = document.querySelectorAll('.white');
for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", function() {
        x = numButton[i].innerHTML;
        updateDisplay(x);
        return x;
    })
}

//operator button functionality
const opButton = document.querySelectorAll('.red');
for (let j = 0; j<opButton.length; j++) {
    opButton[j].addEventListener("click", function() {
        y = opButton[j].innerHTML;
        if (y == '='){  //computes equation on button press
            secondValue = displayValue;
            displayValue = operate(firstValue, stored, secondValue);
            display.innerHTML = displayValue;
            y = 0;
            trigger = 0;
            return display.innerHTML;
        }
        if (y == 'ON/C') {   //clears all data stored
            displayValue = 0;
            x=0;
            trigger = 0;
            stored=0;
            firstValue = 0;
            secondValue = 0;
            display.innerHTML = displayValue;
            y=0;
        }
        if ((y == '+' || y=='-' || y=='*' || y=='/') && (trigger >0)) { //displays solution prior to equal sign
            secondValue = displayValue;
            displayValue = operate(firstValue, stored, secondValue);
            display.innerHTML = displayValue;
            trigger = 0;
            return display.innerHTML;
        }
        if (y == "+/-") { //changes negative and positive numbers
            displayValue = displayValue * -1;
            display.innerHTML = displayValue;
            return display.innerHTML;
        }
        return y; //returns operator for function
    })
}


function updateDisplay(x) { //updates display upon number input
    if (displayValue == 0){
        displayValue = x;
        display.innerHTML = displayValue;
        return display.innerHTML;
    }
    else if ((y == '+' || y=='-' || y=='*' || y=='/') && (trigger == 0)) {
        firstValue = displayValue;
        displayValue = x;
        stored = y;
        y = 0;
        trigger++;
        display.innerHTML = displayValue;
        return display.innerHTML;
    }
    else {
        displayValue += x;
        display.innerHTML = displayValue;
        return display.innerHTML;
    }
}

function operate(a, stored, b) {  //switch for operations
    switch(stored){
        case '+':
            displayValue = ((+a)+(+b));
            return displayValue;
        case '-':
            displayValue = ((+a)-(+b));
            return displayValue;
        case '*':
            displayValue = ((+a)*(+b));
            return displayValue;
        case "/":
            displayValue = ((+a)/(+b));
            if (b == 0) {
                displayValue = "Come On";
            }
            return displayValue;
    }
} 

