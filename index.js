const express = require('express');
const path = require('path');
const axios = require('axios');
const session = require('express-session');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
	secret: process.env.SESSION_SECRET,
	cookie: { maxAge: 60000 },
	resave: true,
	saveUninitialized: false
}));

app.use(bodyParser.json())

app.get('/', function (req, res) {
	if(req.session.authenticated) {
		res.redirect('/home');
		return;
	}
  res.sendFile(path.join(__dirname, 'public', 'signupOrLogin.html'));
});

app.get('/home', function (req, res) {
	if(!req.session.authenticated) {
		res.redirect('/');
		return;
	}

  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.post('/users', function (req, res) {
	var stytchUserId = req.body.userId;
	// TODO: Save stytchUserId with your user record in your app's storage
	res.send(`Created user with stytchUserId: ${stytchUserId}`);
});

app.get('/authenticate', function (req, res) {
	var token = req.query.token;
	axios.post(`https://test.stytch.com/v1/magic_links/${token}/authenticate`, {}, {
		headers: {
			Authorization: 'Basic ' + Buffer.from(`${process.env.STYTCH_PROJECT_ID}:${process.env.STYTCH_SECRET}`).toString('base64')
    },
	})
	.then(response => {
		req.session.authenticated = true;
		req.session.save(function(err) {
			if(err) console.log(err);
		});
		res.redirect('/home')
	})
	.catch(error => {
		console.log(error);
		res.send('There was an error authenticating the user.');
	});
});

app.listen(9000);