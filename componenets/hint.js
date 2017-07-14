let hintCount = 0

function displayHint() {
  hintCount = 0
  $('#controls').append('<button id="hint" onclick="hint()">Hint</button>')
}

function hint() {
  if (hintCount === 0) {
    let firstLetter = key.answers[0].answer.split("")[0]
    $('p#p-1').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 1) {
    let firstLetter = key.answers[1].answer.split("")[0]
    $('p#p-5').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 2) {
    let firstLetter = key.answers[2].answer.split("")[0]
    $('p#p-35').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 3) {
    let firstLetter = key.answers[4].answer.split("")[0]
    $('p#p-67').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 4) {
    let firstLetter = key.answers[5].answer.split("")[0]
    $('p#p-71').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 5) {
    let firstLetter = key.answers[6].answer.split("")[0]
    $('p#p-85').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else if (hintCount === 6) {
    let firstLetter = key.answers[8].answer.split("")[0]
    $('p#p-113').html(`${firstLetter.toUpperCase()}`)
    hintCount++
  } else {
    alert('Sorry no more hints!')
  }
}
