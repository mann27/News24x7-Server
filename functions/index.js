const functions = require('firebase-functions');

const express = require('express');
const app = express();

const { helloWorld } = require('./handlers/helloworld');
const { getUsers, login, signup } = require('./handlers/users');

const FBAuth = require('./utils/FBAuth'); // Firebase Auth Middleware

app.get('/hello', FBAuth, helloWorld); // use it like this.. Add [Bearer token] in Authorization req header
//so that this can only be accessed by authenticated(logged in) users

app.get('/users', getUsers);
app.post('/login', login);
app.post('/signup', signup);

exports.api = functions.region('asia-east2').https.onRequest(app);