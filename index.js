$(document).ready(function() {
  start()
  $('input').hide()
  clickListener()
  submitInput()
  // matchAnswers(submitInput, answer)
})

function clickListener() {
  $('.empty').on('click', function() {
    let id = this.id
    $(`#in-${id}`).show()
    inputListener(id)
  })
}

function inputListener(id) {
  $(`#${id}`).on('keyup', `#in-${id}`, function(id) {
    let char = $(`#${id.target.id}`).submit().val()
    $(`#${id.target.id}`).hide()

    $(`#p-${id.target.id.split("-")[1]}`).html(`${char.toUpperCase()}`)
  })
}


function getWords(){
  fetch('http://localhost:3000/home')
        .then(res => res.json())
        .then(json => display(json))
        .then(json => answerKey(json))
}

var key = new AnswerKey()

function answerKey(json){
  for(let i = 0; i < json.length; i++){
    key.answers.push(json[i])
  }
  // debugger
}

function submitInput() {
  $('#submit').on('click', function(event) {
    let userInput = $('input')
    let letters =[]
    for (var i = 0; i<userInput.length; i++){
      letters.push(userInput[i].value)
    }
    submittedAnswer(letters)
  })

}

function submittedAnswer(letters){
  debugger
  let oneAccross = letters.slice(0, 5)
  let twoDown = letters.slice(4, 8)
  twoDown.push(letters[10])
  let threeAcross = letters.slice(8, 11)
  let threeDown = letters.slice(11, 15)
  threeDown.unshift(letters[8])
  let fourAcross = letters.slice(14, 19)
  let fiveDown = letters.slice(18, 20)
  fiveDown.push(letters[22])
  let sixAcross = letters.slice(20, 23)
  let sixDown = letters.slice(23, 26)
  sixDown.unshift(letters[20])
  sixDown.push(letters[30])
  let sevenAcross = letters.slice(26, letters.length)

  key.input.push(
    oneAccross.join(""),
    twoDown.join(""),
    threeAcross.join(""),
    threeDown.join(""),
    fourAcross.join(""),
    fiveDown.join(""),
    sixAcross.join(""),
    sixDown.join(""),
    sevenAcross.join("")
  )
  matchAnswers(key)
}

function matchAnswers(key){
  let answers = key.answers.map(function(answer) {
    return answer.answer
  })

  if (answers.join("").toLowerCase() === key.input.join("").toLowerCase()) {
    alert("You Win!!!")
    reset()///we need to check if this works
  } else {
    alert("Try Again")
  }
}

function start() {
  $('#generate').on('click', function(event) {
    document.querySelectorAll('input')
    event.stopPropagation()
    getWords()
    startPause()
  })
}

function display(json) {
  $('#across').empty()
  $('#down').empty()

  $('#across').append(`<li><p><strong>1.</strong> ${json[0].clue}</p></li><br>`)
  $('#across').append(`<li><p><strong>3.</strong> ${json[2].clue}</p></li><br>`)
  $('#across').append(`<li><p><strong>4.</strong> ${json[4].clue}</p></li><br>`)
  $('#across').append(`<li><p><strong>6.</strong> ${json[6].clue}</p></li><br>`)
  $('#across').append(`<li><p><strong>7.</strong> ${json[8].clue}</p></li><br>`)

  $('#down').append(`<li><p><strong>2.</strong> ${json[1].clue}</p></li><br>`)
  $('#down').append(`<li><p><strong>3.</strong> ${json[3].clue}</p></li><br>`)
  $('#down').append(`<li><p><strong>5.</strong> ${json[5].clue}</p></li><br>`)
  $('#down').append(`<li><p><strong>6.</strong> ${json[7].clue}</p></li><br>`)
  return json
}
