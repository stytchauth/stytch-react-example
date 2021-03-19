const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

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
  const query = `SELECT id, email FROM user WHERE stytch_id = "${stytchUserId}" AND email = "${email}"`;

  db.all(query, [], (err, rows) => {
    if (err) return res.status(400).send(err);

    // If user is not found, create a new user with stytch_id and email
    if (rows.length === 0) {
      const insertQuery = `INSERT into user (email, stytch_id) VALUES ("${email}", "${stytchUserId}")`;
      db.run(insertQuery, (result, err) => {
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
  axios
    .post(
      `https://test.stytch.com/v1/magic_links/${token}/authenticate`,
      {},
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.STYTCH_PROJECT_ID}:${process.env.STYTCH_SECRET}`
            ).toString("base64"),
        },
      }
    )
    .then((response) => {
      res.send(`Authenticated user with stytchUserId: ${response}`);
    })
    .catch((error) => {
      res.status(400).send("There was an error authenticating the user.");
    });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

app.listen(9000, () => {
  console.log(`server started on port 9000`);
});
