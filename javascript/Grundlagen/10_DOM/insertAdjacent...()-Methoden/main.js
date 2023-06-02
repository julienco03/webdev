'use strict'

// <li id="mein-listenelement"></li>
let li = document.createElement('li')
li.setAttribute('id', 'mein-listenelement')

// <a id="mein-ankerelement" href="#"></a>
let a = document.createElement('a')
a.setAttribute('id', 'mein-ankerelement')
a.setAttribute('href', '#')

// <a id="mein-ankerelement" href="#">Element</a>
let text_node = document.createTextNode('Element')
a.appendChild(text_node)

// <li id="mein-listenelement"><a id="mein-ankerelement" href="#">Element</a></li>
li.appendChild(a)

/**
 * insertAdjacentElement()
 */
let ul = document.querySelector('#navigation > ul')
ul.insertAdjacentElement('beforebegin', li) // vor der ul
ul.insertAdjacentElement('afterbegin', li) // in ul, vor "Startseite"
ul.insertAdjacentElement('beforeend', li) // in ul, nach "JavaScript"
ul.insertAdjacentElement('afterend', li) // nach ul, links in der Nav

/**
 * insertAdjacentHTML()
 */
let dom_string = '<li id="mein-listenelement"><a id="mein-ankerelement" href="#">Element</a></li>'
ul.insertAdjacentHTML('beforebegin', dom_string) // vor der ul
ul.insertAdjacentHTML('afterbegin', dom_string) // in ul, vor "Startseite"
ul.insertAdjacentHTML('beforeend', dom_string) // in ul, nach "JavaScript"
ul.insertAdjacentHTML('afterend', dom_string) // nach ul, links in der Nav

/**
 * insertAdjacentText()
 */
let text = 'Lorem ipsum dolor sit amet.'
ul.insertAdjacentText('beforebegin', text) // vor der ul
ul.insertAdjacentText('afterbegin', text) // in ul, vor "Startseite"
ul.insertAdjacentText('beforeend', text) // in ul, nach "JavaScript"
ul.insertAdjacentText('afterend', text) // nach ul, links in der Nav
