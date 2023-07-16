'use strict'

/* === COOKIES SETZEN === */

// Syntax: document.cookie = "cookie_name=[cookie_value][;max-age=][;path=][;domain=][;secure][;samesite]"
document.cookie = 'vorname=Max'
document.cookie = 'nachname=Mustermann'
document.cookie = '10_sekunden_cookie=1234;max-age=10'

// Liefert Cookie mit "" als Name und "ein key" als Wert
document.cookie = 'ein key;value-paar=key=value'
// Liefert "ein key; ein%20key%3Bvalue-paar=key%3Dvalue"
document.cookie = encodeURIComponent('ein key;value-paar') + '=' + encodeURIComponent('key=value')

// Elegante Lösung mit einer Funktion
const set_cookie = function (name, value, max_age) {
  let cookie = encodeURIComponent(name)
  if (value) {
    cookie += '=' + encodeURIComponent(value)
  }
  if (max_age) {
    cookie += ';max-age=' + max_age
  }
  document.cookie = cookie
}
set_cookie('ein cookie namens .!~=,;', 'der wert ist !!!')
set_cookie('cookie_name', '') // Name: "", Wert: "cookie_name"
set_cookie('password', '[}]{/)!/§$%?)=', 60 * 60 * 24)

/* === COOKIES ÜBERSCHREIBEN === */
set_cookie('zahlen', '12345')
set_cookie('zahlen', '54321')

/* === COOKIES LÖSCHEN === */
set_cookie('moin', 'abc')
const delete_cookie = function (name) {
  // max-age auf -1 setzen, um Cookie zu löschen
  document.cookie = encodeURIComponent(name) + '=; max-age=-1'
}
delete_cookie('moin')

/* === COOKIES AUSLESEN === */
const get_cookie = function (name) {
  let cookie_array = document.cookie.split(';')

  let encoded_cookie_name = encodeURIComponent(name)
  let regex = new RegExp(`^\\s?${encoded_cookie_name}=`)

  for (let cookie of cookie_array) {
    if (cookie.match(regex)) {
      let encoded_cookie_value = cookie.replace(regex, '')
      return decodeURIComponent(encoded_cookie_value)
    }
  }
}
console.log(get_cookie('password')) // [}]{/)!/§$%?)=

/* === COOKIES PRÜFEN === */
const has_cookie = function (name) {
  return Boolean(get_cookie(name))
}
console.log(has_cookie('zahlen')) // true
console.log(has_cookie('password')) // true
console.log(has_cookie('jabfuahf')) // false

console.log(document.cookie)
