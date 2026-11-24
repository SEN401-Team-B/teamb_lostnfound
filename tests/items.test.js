const { test, beforeEach } = require("node:test");
const assert = require("node:assert");
const { addItem, listItems, searchItems, claimItem, reset } = require("../src/items");

beforeEach(() => reset());

// addItem
test("addItem creates an item with the right fields", () => {
  const item = addItem({ title: "Black wallet", type: "lost", location: "Library", description: "Leather" });
  assert.strictEqual(item.id, 1);
  assert.strictEqual(item.title, "Black wallet");
  assert.strictEqual(item.type, "lost");
  assert.strictEqual(item.location, "Library");
  assert.strictEqual(item.description, "Leather");
  assert.strictEqual(item.claimed, false);
  assert.ok(item.createdAt);
});

test("addItem defaults description to an empty string", () => {
  const item = addItem({ title: "Keys", type: "found", location: "Cafeteria" });
  assert.strictEqual(item.description, "");
});

test("addItem increments ids", () => {
  const a = addItem({ title: "A", type: "lost", location: "X" });
  const b = addItem({ title: "B", type: "found", location: "Y" });
  assert.strictEqual(b.id, a.id + 1);
});

test("addItem throws when title is missing", () => {
  assert.throws(() => addItem({ type: "lost", location: "X" }), /required/);
});

test("addItem throws when type is invalid", () => {
  assert.throws(() => addItem({ title: "A", type: "stolen", location: "X" }), /required/);
});

test("addItem throws when location is missing", () => {
  assert.throws(() => addItem({ title: "A", type: "lost" }), /required/);
});

// listItems
test("listItems returns all items", () => {
  addItem({ title: "A", type: "lost", location: "X" });
  addItem({ title: "B", type: "found", location: "Y" });
  assert.strictEqual(listItems().length, 2);
});

test("listItems filters by type", () => {
  addItem({ title: "A", type: "lost", location: "X" });
  addItem({ title: "B", type: "found", location: "Y" });
  const lost = listItems("lost");
  assert.strictEqual(lost.length, 1);
  assert.strictEqual(lost[0].type, "lost");
});

test("listItems returns an empty array when nothing is stored", () => {
  assert.deepStrictEqual(listItems(), []);
});

test("listItems returns a copy, not the internal array", () => {
  addItem({ title: "A", type: "lost", location: "X" });
  const list = listItems();
  list.pop();
  assert.strictEqual(listItems().length, 1);
});

// searchItems
test("searchItems matches on title", () => {
  addItem({ title: "Blue umbrella", type: "lost", location: "Gate" });
  assert.strictEqual(searchItems("umbrella").length, 1);
});

test("searchItems matches on description and location", () => {
  addItem({ title: "Bag", type: "found", location: "Hostel", description: "Red zipper" });
  assert.strictEqual(searchItems("zipper").length, 1);
  assert.strictEqual(searchItems("hostel").length, 1);
});

test("searchItems is case-insensitive", () => {
  addItem({ title: "Laptop", type: "lost", location: "Lab" });
  assert.strictEqual(searchItems("LAPTOP").length, 1);
});

test("searchItems returns nothing when there is no match", () => {
  addItem({ title: "Laptop", type: "lost", location: "Lab" });
  assert.strictEqual(searchItems("zzz").length, 0);
});

test("searchItems with an empty query returns all items", () => {
  addItem({ title: "A", type: "lost", location: "X" });
  addItem({ title: "B", type: "found", location: "Y" });
  assert.strictEqual(searchItems("").length, 2);
  assert.strictEqual(searchItems(undefined).length, 2);
});

// claimItem
test("claimItem marks the item as claimed", () => {
  const item = addItem({ title: "A", type: "found", location: "X" });
  const claimed = claimItem(item.id);
  assert.strictEqual(claimed.claimed, true);
});

test("claimItem accepts the id as a string", () => {
  const item = addItem({ title: "A", type: "found", location: "X" });
  assert.strictEqual(claimItem(String(item.id)).claimed, true);
});

test("claimItem returns null for an unknown id", () => {
  assert.strictEqual(claimItem(999), null);
});

// reset
test("reset clears items and restarts ids", () => {
  addItem({ title: "A", type: "lost", location: "X" });
  reset();
  assert.strictEqual(listItems().length, 0);
  assert.strictEqual(addItem({ title: "B", type: "lost", location: "Y" }).id, 1);
});
