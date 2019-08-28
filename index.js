const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require('express');
const app = express();

const dummyJson = require('./some.json');

app.get('/news', (req, res) => res.send('/news route'))
app.get('/news/:keyword', (req, res) => {
  res.json(dummyJson);
})

exports.api = functions.https.onRequest(app)