/**
 * Created by pc on 8/23/2017.
 */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var multer     = require('multer');
var con        = require('./connected');

app.set('view engine', 'pug');
app.set('views', './view');

app.get('/', function(req, res){
   var sql = "SELECT * FROM t_movie";
   con.query(sql, function(err, rows){
      if(err) err;
      res.render('read', {
          data: rows
      });
   });
});
app.listen(3000);

