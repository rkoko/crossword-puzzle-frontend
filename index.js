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
  let acrossAnswer = json[0].answer
  let downAnswer = json[1].answer
  key.answers.push(acrossAnswer, downAnswer)
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
  let down = letters.splice(5)
  down.unshift(letters[0])
  down = down.join("")
  let across = letters.join("")
  let submitted = [down, across]
  key.input.push(across, down)
  matchAnswers(key)
}

function matchAnswers(key){
  if (key.answers.join("") === key.input.join("")) {
    alert("You Win!!!")
  } else {
    alert("Try Again")
  }
}

function start() {
  $('#generate').on('click', function(event) {
    document.querySelectorAll('input')
    event.stopPropagation()
    getWords()
  })
}

function display(json) {
  $('#clues').empty()
  console.log("hi")
  for (let i = 0; i<json.length; i++){
  $('#clues').append(`<li>${json[i].clue}</li>`)
}
return json
}
