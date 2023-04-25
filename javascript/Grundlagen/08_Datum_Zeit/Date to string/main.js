"use strict";

/* === Normale Zeit === */
let d = new Date();

d.setFullYear(1993);
d.setMonth(11);
d.setDate(3);
d.setHours(18);
// usw.

console.log(d); // Fri Dec 03 1993 18:00:00 GMT+0100 (Mitteleuropäische Normalzeit)

console.log(d.getFullYear()); // 1993
console.log(d.getMonth()); // 11
console.log(d.getDate()); // 3
console.log(d.getHours()); // 18
console.log(d.getDay()); // 5

/* === UTC-Zeit === */
let d_utc = new Date();

d_utc.setUTCFullYear(1993);
d_utc.setUTCMonth(11);
d_utc.setUTCDate(3);
d_utc.setUTCHours(18);
// usw.

console.log(d_utc); // Fri Dec 03 1993 19:00:00 GMT+0100 (Mitteleuropäische Normalzeit)

console.log(d_utc.getHours()); // 19 (!)
console.log(d_utc.getUTCHours()); // 18

/* === UNIX-Zeit === */
let d_unix = new Date();

d_unix.setTime(1568557000000);
console.log(d_unix); // Sun Sep 15 2019 16:16:40 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(d_unix.getTime()); // 1568557000000
