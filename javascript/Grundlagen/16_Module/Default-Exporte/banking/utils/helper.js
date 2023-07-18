import { einrueckung } from './settings.js'
import elem_typ from './settings.js'

// default-Export
export default function (obj) {
  let pre = document.createElement(elem_typ)
  pre.textContent = JSON.stringify(obj, null, einrueckung)
  document.querySelector('body').appendChild(pre)
}
