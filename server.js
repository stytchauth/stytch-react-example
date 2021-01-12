const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use(bodyParser.json())

app.post('/users', function (req, res) {
	var stytchUserId = req.body.userId;
	console.log('users post');
	// TODO: Save stytchUserId with your user record in your app's storage
	res.send(`Created user with stytchUserId: ${stytchUserId}`);
});

app.get('/authenticate/:token', function (req, res) {
	var token = req.params.token;
	axios.post(`https://test.stytch.com/v1/magic_links/${token}/authenticate`, {}, {
		headers: {
			Authorization: 'Basic ' + Buffer.from(`${process.env.STYTCH_PROJECT_ID}:${process.env.STYTCH_SECRET}`).toString('base64')
    },
	})
	.then(response => {
		res.send(`Created user with stytchUserId: ${response}`);
	})
	.catch(error => {
		console.log(error);
		res.status(400).send('There was an error authenticating the user.');
	});
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000, () => {
  console.log("server started on port 9000");
});