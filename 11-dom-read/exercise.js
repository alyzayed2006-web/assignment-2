// 11-dom-read — your work goes in this file.

export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map((h3) =>
    h3.textContent.trim()
  );
}

export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find(
    (c) => c.querySelector("h3")?.textContent.trim() === name
  );
  if (!card) return null;
  const price = card.querySelector(".price");
  return price ? price.textContent.trim() : null;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map((h3) =>
    h3.textContent.trim()
  );
}