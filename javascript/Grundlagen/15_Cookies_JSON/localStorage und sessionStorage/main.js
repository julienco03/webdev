'use strict'

/**
 * localStorage and sessionStorage are almost identical and have the same API.
 *
 * The difference is that with sessionStorage, the data is persisted only until
 * the window or tab is closed. With localStorage, the data is persisted until the
 * user manually clears the browser cache or until your web app clears the data.
 */

// localStorage
let key = 'name'

localStorage.setItem(key, 'Max')
localStorage.setItem(key, 'Moritz')
localStorage.getItem(key) // Moritz

localStorage.removeItem(key)
localStorage.clear()

console.log(localStorage) // Storage {length: 0}

// sessionStorage
sessionStorage.setItem('password', '&($12834$$=0')

console.log(sessionStorage)
