const express = require("express");
const authorizeToken = require('./middleware/authorizeToken');

const app = express();
const port = process.env.PORT || 3001;

app.get("/api/resources", authorizeToken(), (req, res) => {
  res.send("If you're seeing this, your call was successfully authorized!");
});

app.listen(port, () => {
  console.log(`Server listening on port  ${port}`);
});
