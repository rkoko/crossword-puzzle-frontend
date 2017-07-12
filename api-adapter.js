function getWords(){
  fetch('http://localhost:3000/home')
        .then(res => res.json())
        .then(json => display(json))

}
