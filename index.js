$(document).ready(function() {

start()
})

function start(){
  $('button').on('click', function(event){
    event.stopPropagation()
    fetch('http://localhost:3000/home')
    .then(res => res.json())
    .then(json => display(json))
  })
}

// fetch(`http://localhost:3000/home`).then(res => res.json()).then(console.log(json))

function display(json){
  json.forEach(function(word){
    $('#crossword').append(`<li> ${word.answer}, ${word.clue}`)
  })
}
