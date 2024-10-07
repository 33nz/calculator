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
  if (numString === '' && numArray.lenght === 0) {
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
