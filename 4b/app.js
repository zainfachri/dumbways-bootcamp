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
  
  app.get('/stock',(req, res)=> {
    connection.query(
        'SELECT * FROM game',
        (error, results) => {
            console.log(results);
            res.render('stock.ejs', {game: results});
        }
    );
});

  app.get('/genre', (req, res) => {
    res.render('genre.ejs');
  });

  app.get('/game', (req, res) => {
    connection.query(
        'SELECT * FROM genre',
        (error, results) => {
            console.log(results);
            res.render('game.ejs', {genre: results});
        }
    );
});
app.post('/create', (req, res) => {
    connection.query(
      'INSERT INTO game (title, image, genre_id) VALUES (?, ?, ?)',
      [req.body.gameTitle, req.body.gameImg, req.body.gameGenre],
      (error, results) => {
        res.redirect('/');
      }
    );
  });
app.post('/createStock', (req, res) => {
    connection.query(
      'INSERT INTO transaction (price, game_id, stock) VALUES (?, ?, ?)',
      [req.body.gamePrice, req.body.gameId, req.body.gameStock],
      (error, results) => {
        res.redirect('/');
      }
    );
});
app.post('/createGenre', (req, res) => {
    connection.query(
      'INSERT INTO genre (name) VALUES (?)',
      [req.body.gameGenreAdd],
      (error, results) => {
        res.redirect('/');
      }
    );
});
app.post('/update/:id', (req, res) => {
    connection.query(
    'UPDATE transaction SET stock = ?  WHERE id = ?',[req.body.buy, req.params.id],
    (error, results)=>{
      res.redirect('/');
    })
  });

  app.listen(3000);