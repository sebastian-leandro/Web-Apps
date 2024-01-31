// Calc 

const screen = document.querySelector(".screen");

let runningTotal = 0;
let buffer = 0;
let previousOperator;

function buttonClick(value){
  if(isNaN(value)) { handleSymbol(value) }
  else { handleNumber(value) }  
  screen.textContent = parseFloat(buffer)
}

function handleSymbol(symbol){
    switch(symbol) {
      case "C":
        buffer = 0;
        runningTotal = 0;
        break;

      case "=":
        if(previousOperator === null) return

        flushOperator(parseFloat(buffer));
        previousOperator = null;
        buffer = runningTotal;
        runningTotal = 0;
        break;

      case "←":
        if(buffer.length ===1) { buffer = 0 } 
        else { buffer = buffer.substring(0, buffer.length - 1) }
        break;

      case "+":
      case "−":
      case "×":
      case "÷":
        handleMath(symbol);
        break;
    }       
}

function handleMath(symbol){
    if(buffer === 0) return;

    const intBuffer = parseFloat(buffer);
    if(runningTotal === 0) { runningTotal = intBuffer } 
    else if (previousOperator) { flushOperator(intBuffer) }

    previousOperator = symbol;
    buffer = 0;
}

function flushOperator(intBuffer){
  switch (previousOperator) {
    case '+' :
      runningTotal += intBuffer;
      break;
    case '−' :
      runningTotal -= intBuffer;
      break;
    case '×' :
      runningTotal *= intBuffer;
      break;
    case '÷' :
      runningTotal /= intBuffer;
      break;
    default:
      break;
  }
}

function handleNumber(numberString){
  if(buffer === 0) buffer = numberString;
  else buffer += numberString;
}

function init(){
  document.querySelector(".calc-buttons").addEventListener("click", (event) => { 
    if(event.target.classList.contains("calc-button")) { buttonClick(event.target.innerText) } 
  }
)}

init();
