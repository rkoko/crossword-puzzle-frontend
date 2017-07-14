function userClickListener() {
  $('#submitNewUser').on('click', function(event) {
    event.preventDefault()
    postUser()
  })
}


function postUser(){
  let usernameVal = $('#username').val()
  let ageVal = $('#age').val()
  const postData = {
    username: usernameVal,
    age: ageVal
  }
  fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(json => displayUser(json))
}

function displayUser(json){
  $('#userdisplay').hide()
  $('#usernamedisplay').show()
  $('#usernamedisplay').html(`Welcome ${json.username}`)
  $('#usernamedisplay').append('<button id="logout">Log Out</button>')
  logoutListener()
}

function logoutListener() {
  $('#logout').on('click', function() {
    $('#usernamedisplay').hide()
    $('#userdisplay').show()
    $('#usernamedisplay').empty()
    $('#username').val('')
    $('#age').val('')
  })
}
