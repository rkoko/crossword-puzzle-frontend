$(document).ready(function() {
  // start()
  // generate()
  $('input').hide()
  clickListener()
  input()
  check()
})

function clickListener() {
  $('.empty').on('click', function() {
    let id = this.id
    $(`#in-${id}`).show()
    // inputListener(id)
  })
}

function inputListener(id) {
  $(`#${id}`).on('keyup', `#in-${id}`, function(id) {
    let char = $(`#${id.target.id}`).submit().val()
    $(`#${id.target.id}`).hide()
    $(`#p-${id.target.id.split("-")[1]}`).html(`${char.toUpperCase()}`)
  })
}

function check() {
  $('#submit').on('click', function() {
    debugger
  })
}

// function start() {
//   $('button').on('click', function(event) {
//     document.querySelectorAll('input')
//     event.stopPropagation()
//     fetch('http://localhost:3000/home')
//       .then(res => res.json())
//       .then(json => display(json))
//   })
// }
//
// // fetch(`http://localhost:3000/home`).then(res => res.json()).then(console.log(json))
//
// function display(json) {
//   json.forEach(function(word) {
//     $('#crossword').append(`<li> ${word.answer}, ${word.clue}`)
//   })
// }5
//
// function generate() {
//
//   var arr = [
//         [1, 2, 3, 4, 5],
//         [5, 6, 7, 8, 9],
//         [10, 11, 12, 13, 14],
//         [15, 16, 17, 18, 19],
//         [20, 21, 22, 23, 24]
//         ],
//     arrText = '';
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       arrText += `<input id=${i}-${j} type="text" placeholder="letter">
//       </input>`;
//     }
//     $('#crossword').append(`<div>${arrText}</div>`);
//     arrText = '';
//   }
//   $('#crossword').append(`<button type='submit'>Submit</button>`)
// }
//

function input() {
  $('button').on('click', function(event) {

    let userInput = $('input')
    let letters =[]
    for (var i = 0; i<userInput.length; i++){
      letters.push(userInput[i].value)
    }
debugger
  })
}
