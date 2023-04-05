"use strict";

/**
 * globally scoped or function scoped
 * can be updated and re-declared within its scope
 * initialized with undefined
 * can be declared without being initialized
 */
var x;
x = 10; // initialized
x = "abc"; // updated
var x = false; // re-declared

/**
 * block scoped
 * can be updated but not re-declared
 * not initialized
 * can be declared without being initialized
 */
let y;
y = "Hello"; // initialized
y = true; // updated

/**
 * block scoped
 * can be updated but not re-declared
 * not initialized
 * must be initialized during declaration
 */
const z = "abcdef"; // initialized
