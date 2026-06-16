const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/api/prop", (req, res) => {

  const { player, line } = req.body;

  const projection = Math.random() * 30;

  const edge = projection - parseFloat(line);

  res.json({
    player,
    line,
    projection: projection.toFixed(2),
    edge: edge.toFixed(2),
    pick: edge > 0 ? "OVER" : "UNDER"
  });
});

// IMPORTANTE para Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Chapita running 🚀 en puerto", PORT);
});
