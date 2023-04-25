"use strict";

/**
 * Aktuelles Datum und aktuelle Zeit
 */
console.log(new Date()); // Sun Apr 23 2023 20:21:40 GMT+0200 (Mitteleuropäische Sommerzeit)

/**
 * Aktuelle Unixzeit
 */
console.log(Date.now()); // 1682274241152

/**
 * Datum mit String/Unixzeit/Date als Parameter
 */
console.log(new Date("2020-01-30")); // Thu Jan 30 2020 01:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
console.log(new Date(1682274241152)); // Sun Apr 23 2023 20:24:01 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(new Date("Apr 23 2023 20:24:01")); // Sun Apr 23 2023 20:24:01 GMT+0200 (Mitteleuropäische Sommerzeit)

/**
 * Datum mit folgender Syntax:
 * new Date(jahr, monatsindex[, tag[, stunde[, minute,[ sekunde, [millisekunde]]]]])
 */
console.log(new Date(2020, 8, 16, 8)); // Wed Sep 16 2020 08:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)
