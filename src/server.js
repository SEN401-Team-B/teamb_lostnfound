// Minimal HTTP API, no dependencies (TB-10)
const http = require("http");
const { addItem, listItems, searchItems, claimItem } = require("./items");

function send(res, code, body) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (req.method === "GET" && url.pathname === "/items") return send(res, 200, listItems(url.searchParams.get("type")));
  if (req.method === "GET" && url.pathname === "/search") return send(res, 200, searchItems(url.searchParams.get("q")));
  const claim = url.pathname.match(/^\/items\/(\d+)\/claim$/);
  if (req.method === "POST" && claim) {
    const item = claimItem(claim[1]);
    return item ? send(res, 200, item) : send(res, 404, { error: "Not found" });
  }
  if (req.method === "POST" && url.pathname === "/items") {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => {
      try { send(res, 201, addItem(JSON.parse(data || "{}"))); }
      catch (e) { send(res, 400, { error: e.message }); }
    });
    return;
  }
  send(res, 404, { error: "Not found" });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`Lost & Found API on http://localhost:${port}`));
}

module.exports = server;
