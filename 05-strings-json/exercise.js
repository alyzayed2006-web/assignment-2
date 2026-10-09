// 05-strings-json — your work goes in this file.
//
// The lesson is in example.js:  node 05-strings-json/example.js
// Check your work with:         npm test 05

/**
 * Cleans up a label and shouts it.
 * shout("  notebook  ") -> "NOTEBOOK"
 *
 * @param {string} text
 * @returns {string} trimmed and upper-cased
 */
export function shout(text) {
  return text.trim().toUpperCase();
}

/**
 * The initials of a full name.
 * initials("Nour Gaser") -> "NG"
 * initials("salma ahmed") -> "SA"
 *
 * @param {string} fullName two names with a space between them
 * @returns {string}
 */
export function initials(fullName) {
  return fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Turns a product into JSON text, ready to be sent somewhere.
 * toJson({ id: 1, name: "Notebook" }) -> '{"id":1,"name":"Notebook"}'
 *
 * @param {object} product
 * @returns {string} the product as JSON text
 */
export function toJson(product) {
  return JSON.stringify(product);
}

/**
 * A student's name, or a fallback when there isn't one.
 * displayName({ name: "Salma" }) -> "Salma"
 * displayName({ name: "" }) -> "Unknown student"
 * displayName({}) -> "Unknown student"
 *
 * @param {object} student
 * @returns {string}
 */
export function displayName(student) {
  return student.name || "Unknown student";
}

/**
 * summaryFromJson('{ "name": "Notebook", "price": 45 }')
 *   -> "Notebook costs 45 EGP"
 */
export function summaryFromJson(jsonText) {
  const product = JSON.parse(jsonText);
  return `${product.name} costs ${product.price} EGP`;
}