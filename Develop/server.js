const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const uniqid=require('uniqid');
const idGenerator = uniqid();

//GET /notes should return the notes.html file.
//GET * should return the index.html file.
// const noteHTML = require('./public/notes.html');
// const indexHTML= require('./public/index.html');
const db = require('./db/db.json');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);  