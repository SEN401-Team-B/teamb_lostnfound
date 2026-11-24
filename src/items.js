// In-memory store for lost/found items (TB-10)
const items = [];
let nextId = 1;

function addItem({ title, type, location, description = "" }) {
  if (!title || !["lost", "found"].includes(type) || !location) {
    throw new Error("title, type (lost|found) and location are required");
  }
  const item = { id: nextId++, title, type, location, description, claimed: false, createdAt: new Date().toISOString() };
  items.push(item);
  return item;
}

function listItems(type) {
  return type ? items.filter((i) => i.type === type) : [...items];
}

function searchItems(q) {
  const s = String(q || "").toLowerCase();
  return items.filter((i) => (i.title + " " + i.description + " " + i.location).toLowerCase().includes(s));
}

function claimItem(id) {
  const item = items.find((i) => i.id === Number(id));
  if (!item) return null;
  item.claimed = true;
  return item;
}

function reset() { items.length = 0; nextId = 1; }

module.exports = { addItem, listItems, searchItems, claimItem, reset };
