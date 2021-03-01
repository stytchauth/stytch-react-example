const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

var db = require("./src/Database.js");

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use(bodyParser.json());

app.post("/users", async function (req, res) {
  const stytchUserId = req.body.userId;
  const email = req.body.email;

  // Query the user by stytch id and email
  const query = `SELECT id, email FROM user WHERE stytch_id = "${stytchUserId}" AND email = "${email}"`;

  db.all(query, [], (err, rows) => {
    if (err) return res.status(400).send(err);
    let respData;

    // If user is not found, create a new user with stytch_id and email
    if (rows.length === 0) {
      const insertQuery = `INSERT into user (email, stytch_id) VALUES ("${email}", "${stytchUserId}")`;
      db.run(insertQuery, (result, err) => {
        if (err) return res.status(400).send(err);
        respData = result;
      });
      console.log("User created");
    }

    // User was already saved in database.
    console.log("User retrieved");
    res.status(200).send(respData || rows[0]);
  });
});

app.get("/authenticate/:token", function (req, res) {
  var token = req.params.token;
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
      res.send(`Created user with stytchUserId: ${response}`);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("There was an error authenticating the user.");
    });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000, () => {
  console.log("server started on port 9000");
});
