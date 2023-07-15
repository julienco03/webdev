'use strict'

/* <nav id="navigationsleiste">
    <a href="index.html"><span id="markenname">Liqui-Planner</span></a>
</nav> */

class Navigationsleiste {
  constructor() {
    this._html = this._html_generieren()
  }

  _html_generieren() {
    let nav = document.createElement('nav')
    nav.id = 'navigationsleiste'
    nav.innerHTML = '<a href="#"><span id="markenname">Liqui-Planner</span></a>'
    return nav
  }

  anzeigen() {
    let body = document.querySelector('body')
    if (body != null) {
      body.insertAdjacentElement('afterbegin', this._html)
    }
  }
}
