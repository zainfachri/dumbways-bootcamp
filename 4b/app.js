const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dw-gc'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

  app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM game JOIN genre ON game.genre_id = genre.id JOIN transaction ON game.id = transaction.game_id',
      (error, results) => {
        console.log(results);
        res.render('index.ejs', {game: results});
      }
    );
  });
  
  app.listen(3000);