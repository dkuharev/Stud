// "use string"

let displayOut = "";
let val1 = "";
let isOperClicked = false;
let operator = "";
let val2 = "";

const tap = document.querySelectorAll(".numb");
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const display = document.getElementById("disp");
const clearBtn = document.getElementById('ac');


function isOperClick(event) {
    operator = event.target.value;
    isOperClicked = !!operator;
    console.log(operator);
}

equal.addEventListener("click", getEqual);
function getEqual(){
    // if (val1 != '' && val2 == ''){
    //     switchOper();
    // }
    val2 = +displayOut;
    display.value = getResult(operator);
}

function getNum(event) {
    if (!displayOut.includes('.')) {
        displayOut += event.target.value;
        display.value = displayOut;    
    }
}

function getOperator(event) {
    
    if (displayOut.indexOf('.') == displayOut.length - 1){
        displayOut = displayOut.substring(0, displayOut.length - 1);
    }
    if (val1 == '') {
        val1 = +displayOut;
        console.log(+val1);
    }
    else if (val2 == '' && isOperClicked) {
        val2 = +displayOut;
        console.log(+val2);
        displayOut = getResult(event);
    }
    operator = event.target.value;
    isOperClicked = true;
    displayOut = "";
}


for(let i = 0; i < tap.length; i++) {
    tap[i].addEventListener("click", getNum);
};
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", getOperator);
};


function plus(val1, val2) {
    return val1 + val2;
};

function minus(val1, val2) {
    return val1 - val2;
};

function multiply(val1, val2) {
    return val1 * val2;
};

function split(val1, val2) {
    return val1 / val2;
}


const clear = function() {        
    screen.value = '0';
    val1 = '';
    val2 = '';
    isOperClicked = false;
    operator = '';
    operatorInMemory = '';
    displayOut = '';
    document.getElementById("disp").value = '';
};
clearBtn.addEventListener('click', clear);


function getResult(operation) {
    val1 = +val1;
    val2 = +val2;
    let result;
    switch (operation) {
        case '+': {
            result = plus(val1, val2);
            break;
        }
        case "-": {
            result = minus(val1, val2);
            break;
        }
        case "x": {
            result = multiply(val1, val2);
            break;
        }
        case "/": {
            result = split(val1, val2);
            break;
        }
    }
    return result;
    // document.getElementById("disp").value = result;
}