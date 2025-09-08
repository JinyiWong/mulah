const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to use Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Table 1 data
const data = [
  ["A1",41],["A2",18],["A3",21],["A4",63],["A5",2],
  ["A6",53],["A7",5],["A8",57],["A9",60],["A10",93],
  ["A11",28],["A12",3],["A13",90],["A14",39],["A15",80],
  ["A16",88],["A17",49],["A18",60],["A19",26],["A20",28]
];

// Convert to object
const A = Object.fromEntries(data);

// Table 2 computed values
const table2 = [
  ["Alpha", A.A5 + A.A20],
  ["Beta", A.A15 / A.A7],
  ["Charlie", A.A13 * A.A12]
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { data, table2 });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
