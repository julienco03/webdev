'use strict'

/**
 * HTML-Collection
 */
let html_collection = document.getElementsByClassName('jumbotron')

for (let i = 0; i < html_collection.length; i++) {
  console.log(html_collection[i])
}

for (const element of html_collection) {
  console.log(element)
}

/**
 * Node-List
 */
let node_list = document.querySelectorAll('li')

for (let i = 0; i < node_list.length; i++) {
  console.log(node_list[i])
}

for (const element of node_list) {
  console.log(element)
}

node_list.forEach((element) => {
  console.log(element)
})
