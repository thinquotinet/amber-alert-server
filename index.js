const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Amber Alert Server is running");
});

app.post("/location", (req, res) => {
  console.log("📍 LOCATION RECEIVED");
  console.log(req.body);

  res.status(200).json({
    status: "ok",
    receivedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
