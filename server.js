const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Static files (if needed later, e.g. CSS/JS)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
