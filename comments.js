// create a web server that listens for incoming requests
// and responds with a list of comments from the database

// import the express library
const express = require('express');
// import the sqlite3 library
const sqlite3 = require('sqlite3');

// create a new express application
const app = express();
// create a new database connection
const db = new sqlite3.Database('example.sqlite');

// create a new table in the database
db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, message TEXT)');

// create a new route that listens for GET requests
app.get('/comments', (req, res) => {
  // select all comments from the database
  db.all('SELECT * FROM comments', (err, rows) => {
    // send the list of comments as a JSON response
    res.json(rows);
  });
});

// start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

