var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var app = express();
var config={
    user:'u15eumt036',
    database:'u15eumt036',
    host:'db.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter', function (req, res) {
  counter=counter + 1;  
  res.send(counter.toString());
});
var pool = new pool(config);
app.get('/text-db', function (req, res){
    pool.query('SELECT * FROM text',function (req, res){
    if(err){
        res.status(500).send(err.toString());
    }else{
        res.send(JSON.stringfy(result));
    }
    });
});

app.get('/article-one', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function(req,res) {
    res.send('Article two requested and will be served here');
});

app.get('/article-three', function(req, res) {
    res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
