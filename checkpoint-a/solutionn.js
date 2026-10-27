import { findOrder, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "paid"
  );
}

export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrder(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({ item: order.item, quantity: order.quantity }))
  );
}