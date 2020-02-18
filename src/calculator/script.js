var globalAnswer //declaring global variable here... this is bad practice
function storeAnswer(value) {
  console.log('xxx. storeAnswer is:::', value)
  globalAnswer = value //bad practice
  return value
}
function getCurrentValue() {
  var currentValue = document.getElementById("currentValue").innerHTML
  currentValue = parseInt(currentValue, 10) //remove leading 0, make number
    //console.log('0. typeof currentValue is now: ', typeof currentValue)
    //console.log('0. currentValue is: ', currentValue)
  return currentValue //returning currentValue will be a number
}
//getCurrentValue()
function clearCurrentValue(event) {
  $("#clear").click(function(event) {
    console.log('calling clearCurrentValue... currentValue === 0')
    $("#currentValue").html(0)
    getCurrentValue()
  })
}
clearCurrentValue(event)
function equals(event) {
  $("#equals").click(function(event) {
    console.log('=== equals btn pressed!!!')
    var answer = globalAnswer //bad practice!!! fix this.
    $("#currentValue").html(answer) //set currentValue to answer
    console.log('answer is:::', answer)
    return answer
  })
}
equals(event)
function addition(event, num1) {
  $(".btn").click(function(event) {
    var thingClicked = this.innerHTML
if ($(this).hasClass("num")) {
      var nextNum = parseInt(thingClicked)
      console.log('nextNum is: ', nextNum)
      $("#currentValue").html(nextNum) //set currentValue to nextNum
      var result = num1 + nextNum
      console.log('result of addition is: ', result)
      storeAnswer(result) //pass result to storeAnswer
      return result
    } else {
      console.log('forget it, a non-num was pressed!')
        //return thingClicked
    }
    return thingClicked
  })
}
function subtraction(event, num1) {
  $(".btn").click(function(event) {
    var thingClicked = this.innerHTML
if ($(this).hasClass("num")) {
      var nextNum = parseInt(thingClicked)
      console.log('nextNum is: ', nextNum)
      $("#currentValue").html(nextNum) //set currentValue to nextNum
      var result = num1 - nextNum
      console.log('result of subtraction is: ', result)
      storeAnswer(result) //pass result to storeAnswer
      return result
    } else {
      console.log('forget it, a non-num was pressed!')
        //return thingClicked
    }
    return thingClicked
  })
}
function clickButton(event) {
  $(".btn").click(function(event) {
    var thingClicked = this.innerHTML
    console.log("1. you clicked: ", thingClicked)
    console.log('1. typeof thingClicked is: ', typeof thingClicked)
if ($(this).hasClass("add")) {
      var num1 = getCurrentValue()
      console.log('add button clicked!!!!')
      console.log('num1 is: ', num1)
      console.log('calling addition, awaiting nextNum....')
      addition(event, num1)
    }
if ($(this).hasClass("subtract")) {
      var num1 = getCurrentValue()
      console.log('subtract button clicked!!!!')
      console.log('num1 is: ', num1)
      console.log('calling subtraction, awaiting nextNum....')
      subtraction(event, num1)
    }
if ($(this).hasClass("num")) {
      console.log(`2. ${thingClicked} is a num class!`)
      var currentValue = getCurrentValue()
        //console.log('2. typeof currentValue is: ', typeof currentValue)
      currentValue = currentValue.toString() //make number a string
      var newString = currentValue + thingClicked //add into newString
      var newNumber = parseInt(newString, 10) //remove leading 0, make number
      console.log('2. replace currentValue with newNumber: ', newNumber)
      $("#currentValue").html(newNumber)
    }
  })
  return thingClicked
}
clickButton(event)