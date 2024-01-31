/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    let sum = number1 + number2;
    return sum;
}

function addNumbers(){
    let addNmuber1 = Number(document.querySelector("#add1".value));
    let addNmuber2 = Number(document.querySelector("#add2".value));
    document.querySelector("#sum").value = add(addNmuber1, addNmuber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;  
}

const subtractNumbers = function(){
    let subtractNmuber1 = Number(document.querySelector("#subtract1".value));
    let subtractNmuber2 = Number(document.querySelector("#subtract2".value));
    document.querySelector("#difference").value = add(subtractNmuber1, subtractNmuber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = function(number1, number2){
    return number1 * number2;  
}

const multiplyNumbers = () => {
    let multiplyNmuber1 = Number(document.querySelector("#factor1".value));
    let multiplyNmuber2 = Number(document.querySelector("#factor2".value));
    document.querySelector("#product").value = add(multiplyNmuber1, multiplyNmuber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let divideNmuber1 = Number(document.querySelector("#dividend".value));
    let divideNmuber2 = Number(document.querySelector("#divisor".value));
    document.querySelector("#quotient").value = add(divideNmuber1, divideNmuber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
document.addEventListener("DOMContentLoaded", function () {
    const subtotalInput = document.getElementById("subtotal");
    const memberCheckbox = document.getElementById("member");
    const getTotalButton = document.getElementById("getTotal");
    const totalSpan = document.getElementById("total");

    getTotalButton.addEventListener("click", function () {
        const subtotal = parseFloat(subtotalInput.value);

        const discount = memberCheckbox.checked ? 0.2 : 0;

        const total = subtotal - subtotal * discount;

        totalSpan.textContent = `$${total.toFixed(2)}`;
    });
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").value = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById("odds").textContent = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
