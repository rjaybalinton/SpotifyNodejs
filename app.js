const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const routes = require('./routes/route');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(express.static('public'));


// In your server file (e.g., app.js)
app.get('/song/:id', (req, res) => {
  const songId = req.params.id;
  // Fetch the song from the database using the songId
  // Assuming you have a function `getSongById`
  const song = getSongById(songId); // Replace this with actual database logic
  res.render('songDetails', { song });
});

app.listen(7000, () => {
    console.log('server running pn http://localhost:7000');
  });
  