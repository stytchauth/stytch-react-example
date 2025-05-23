const express = require("express");
const authorizeToken = require('./middleware/authorizeToken');

/** @type {import('express').Express} */
const app = express();
/** @type {number} */
const port = Number(process.env.PORT) || 3001;

/** @type {import('express').RequestHandler} */
app.get("/api/resources", authorizeToken(), (req, res) => {
  res.send("If you're seeing this, your call was successfully authorized!");
});

app.listen(port, () => {
  console.log(`Server listening on port  ${port}`);
});
