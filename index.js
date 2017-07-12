$(document).ready(function() {

  // start()
  // generate()
})

function start() {
  $('button').on('click', function(event) {
    event.stopPropagation()
    fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then(json => display(json))
  })
}

// fetch(`http://localhost:3000/home`).then(res => res.json()).then(console.log(json))

function display(json) {
  json.forEach(function(word) {
    $('#crossword').append(`<li> ${word.answer}, ${word.clue}`)
  })
}

function generate() {

  var arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ],
    arrText = '';

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arrText += `<input type="text" placeholder="letter">
      </input>`;
    }
    $('#crossword').append(`<div>${arrText}</div>`);
    arrText = '';
  }
  $('#crossword').append(`<input type='submit' placeholder='submit'>`)
}
