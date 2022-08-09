const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const stytch = require("stytch");
var db = require("./database.js");

require("dotenv").config({ path: __dirname + "/../../.env" });

const app = express();

app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(express.static("public"));

app.use(bodyParser.json());

app.post("/users", async function (req, res) {
  const stytchUserId = req.body.userId;
  const email = req.body.email;

  // Query the user by stytch_id and email
  const query = "SELECT id, email FROM user WHERE stytch_id = ? AND email = ?";
  const params = [stytchUserId, email];

  db.all(query, [], (err, rows) => {
    if (err) return res.status(400).send(err);

    // If user is not found, create a new user with stytch_id and email
    if (rows.length === 0) {
      const insertQuery = "INSERT INTO user (stytch_id, email) VALUES (?, ?)";
      const params = [stytchUserId, email];
      db.run(insertQuery, params, (result, err) => {
        if (err) {
          return res.status(400).send(err);
        } else {
          console.log("User created");
          return res.status(201).send(result);
        }
      });
    } else {
      // User was already saved in database.
      console.log("User retrieved");
      res.status(200).send(rows[0]);
    }
  });
});

app.get("/stytch", function (req, res) {
  var token = req.query.token;
  const stytchClient = new stytch.Client({
    project_id: process.env.STYTCH_PROJECT_ID,
    secret: process.env.STYTCH_SECRET,
    env: stytch.envs.test,
  });
  stytchClient
    .magicLinks.authenticate(token)
    .then((resp) => {
      if (resp.ok) {
        res.send(`Authenticated user with stytchUserId: ${resp}`);
      } else {
        res.status(resp.status_code).send("Could not authenticate the user.");
      }
    })
    .catch((err) => res.status(500).send(`Error authenticating user ${err}`));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

app.listen(3000, () => {
  console.log(`server started on port 3000`);
});
