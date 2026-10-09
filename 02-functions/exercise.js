// 02-functions — your work goes in this file.
//
// The lesson is in example.js:  node 02-functions/example.js
// Check your work with:         npm test 02

/**
 * Greets someone by name.
 * greet("Ahmed") -> "Hello, Ahmed!"
 *
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Doubles a number.
 * double(21) -> 42
 *
 * @param {number} n
 * @returns {number}
 */
export const double = (n) => n * 2;

/**
 * Takes a percentage off a price.
 * applyDiscount(320, 25) -> 240
 * applyDiscount(200, 10) -> 180
 *
 * @param {number} amount in EGP
 * @param {number} percent for example 25 for 25% off
 * @returns {number} the price after the discount
 */
export const applyDiscount = (amount, percent) => amount - (amount * percent) / 100;

/**
 * formatPrice(45)          -> "45 EGP"
 * formatPrice(45, "USD")   -> "45 USD"
 */
export const formatPrice = (amount, currency = "EGP") => `${amount} ${currency}`;

/**
 * applyTwice(double, 5)          -> 20
 * applyTwice((n) => n + 10, 5)   -> 25
 * applyTwice((text) => `${text}!`, "Hi")   -> "Hi!!"
 */
export function applyTwice(fn, value) {
  return fn(fn(value));
}