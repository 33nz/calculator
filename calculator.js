let numString = ''
let numArray = []
let display = document.getElementById('display')
let isPreviousResult = false

function listen() {
  document.addEventListener('click', getButtonValue)
}

function getButtonValue() {
  let button = event.target.value //retrieves the value of the button
  if (!NaN(button) || button === '.') {
  }
}

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

function allClear() {
  numString = ''
  numArray = []
  display.value = '0'
}

function clear() {
  numString = ''
  display.value = '0'
}

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
