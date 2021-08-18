// importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const auth0 = require('./auth0');

// configuring Express
const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(auth0);
// defining contacts array
const contacts = [
  { name: 'Azeem jsoseph', phone: '+123' },
  { name: 'Sehrish Mir', phone: '+123' },
];

// creating endpoints 
app.get('/contacts', auth0, (req, res) => res.send(contacts));
app.post('/contacts', auth0, (req, res) => {
  contacts.push(req.body);
  res.send();
});

// starting Express
app.listen(3000, () => console.log('Express server is listening on port 3000!'));