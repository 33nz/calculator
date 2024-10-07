let numString = ''
let numArray = []
let display = document.getElementById('display')
let isPreviousResult = false

listen()

// set up an event listener for clicks on the document to get button value
function listen() {
  document.addEventListener('click', getButtonValue)
}

// determine which button was clicked, handle the input and call the correct function based on input
function getButtonValue(event) {
  let button = event.target.value //retrieves the value of the button
  if (!isNaN(button) || button === '.') {
    number(button)
  } else if (button === 'AC') {
    allClear()
  } else if (button === 'CE') {
    clear()
  } else if (button === '=') {
    calculate()
  } else {
    storeNumber(button)
  }
}

// logic for inputting numbers into the calculator, preventing invalid entries and updating display.
function number(button) {
  if (button === '.' && numString.includes('.')) {
    return
  } else if (
    numString.charAt(0) === '0' &&
    numString.length === 1 &&
    button === '0'
  ) {
    return
  } else {
    if (isPreviousResult === true) {
      numString = ''
      isPreviousResult = false
    }
    numString += button
    display.value = numString
  }
}

// reset all variables
function allClear() {
  numString = ''
  numArray = []
  display.value = '0'
}

// reset current number and display
function clear() {
  numString = ''
  display.value = '0'
}

// add current number or operator into the array and handle scenario where input is empty or operator needs replacing
function storeNumber(button) {
  if (numString === '' && numArray.length === 0) {
    return
  } else if (numString === '') {
    numArray.length = numArray.length - 1
    numArray.push(button)
  } else {
    numArray.push(numString)
    numArray.push(button)
    numString = ''
  }
}

// perform the arithmetic on the numbers in the array, update the display and prepare for new input.
function calculate() {
  numArray.push(numString)
  let currentNumber = Number(numArray[0])
  for (let i = 0; i < numArray.length; i++) {
    let nextNumber = Number(numArray[i + 1])
    let symbol = numArray[i]
    if (symbol === '+') {
      currentNumber += nextNumber
    } else if (symbol === '-') {
      currentNumber -= nextNumber
    } else if (symbol === '*') {
      currentNumber *= nextNumber
    } else if (symbol === '/') {
      currentNumber /= nextNumber
    }
  }
  if (currentNumber < 0) {
    currentNumber = Math.abs(currentNumber) + '-'
  }

  display.value = currentNumber
  numString = JSON.stringify(currentNumber)
  isPreviousResult = true
  numArray = []
}
