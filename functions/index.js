const functions = require('firebase-functions');

const express = require('express');
const app = express();

const { helloWorld } = require('./handlers/helloworld');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/hello', helloWorld);

exports.api = functions.region('asia-east2').https.onRequest(app);