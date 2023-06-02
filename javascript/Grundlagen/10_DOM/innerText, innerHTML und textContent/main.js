'use strict'

let jumbotron = document.querySelector('.jumbotron')
let jumbotron_header = document.querySelector('.jumbotron > header')

/*
    <h2 style="display: none">Vaporware kinfolk snackwave</h2>
    <p>Raclette tattooed poutine tofu hexagon selvage four dollar toast.</p>
    <hr>
*/
console.log(jumbotron_header.innerHTML)

/*
    Raclette tattooed poutine tofu hexagon selvage four dollar toast.
*/
console.log(jumbotron_header.innerText)

/*
    Vaporware kinfolk snackwave
    Raclette tattooed poutine tofu hexagon selvage four dollar toast.
*/
console.log(jumbotron_header.textContent)

let string_1 = ''
let string_2 = '<header><h2>Lorem ipsum dolor sit amet.</h2></header>'
let string_3 = '<p>Lorem ipsum dolor sit amet.</p>'
let string_4 = 'Lorem ipsum dolor sit amet.'

jumbotron.innerHTML = string_1 // article wird mit "" überschrieben
jumbotron.innerHTML = string_2 // article hat header mit h2
jumbotron.innerHTML += string_3 // article bekommt einen zusätzlichen paragraphen

jumbotron.innerText = string_1 // article wird mit "" überschrieben
jumbotron.innerText = string_2 // article hat den html-code als rohen text

jumbotron.textContent = string_1 // article wird mit "" überschrieben
jumbotron.textContent = string_2 // wie innerText
