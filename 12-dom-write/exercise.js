// 12-dom-write — your work goes in this file.

// Finds the card whose h3 says this name. Returns undefined if there is none.
function findCard(name) {
  return Array.from(document.querySelectorAll(".card")).find(
    (card) => card.querySelector("h3")?.textContent.trim() === name
  );
}

export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(title, priceTag);
  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const card = findCard(name);
  if (card) card.remove();
}

export function markSoldOut(name) {
  const card = findCard(name);
  if (card) card.classList.add("sold-out");
}

export function clearProducts() {
  for (const card of document.querySelectorAll(".card")) {
    card.remove();
  }
}

export function wireButtons() {
    document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}