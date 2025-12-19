const defaultResult = 0;
let currentResult = defaultResult;
let logEtries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createNumberDescription(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createNumberDescription('+', initialResult, enteredNumber);
    logEtries.push(enteredNumber)
    console.log(logEtries);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createNumberDescription('-', initialResult, enteredNumber);
    
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createNumberDescription('*', initialResult, enteredNumber);
    
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createNumberDescription('/', initialResult, enteredNumber);
    
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
