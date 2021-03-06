var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
  'artcile-one':{
    title:'Article One | Akhil IMAD',
    heading:'Article One',
    date:'Aug 8,2017',
    content:`<p> This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.</p>
    <p>This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.This is the content of my First Article.</p>
    <p>This is the content of my First Article.
    </p>`},
  'article-two':{
    title:'Article Two | Akhil IMAD',
    heading:'Article Two',
    date:'Aug 18,2017',
    content:`<p> This is the content of my Second Article.
    </p>`
  },
  'article-three':{
    title:'Article Three | Akhil IMAD',
    heading:'Article Three',
    date:'Aug 28,2017',
    content:`<p> This is the content of my Third Article.
    </p>`
  }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
           <div class='container'>
                <a href='/'>Home</a>
                <hr/>
                <h1>${heading}</h1>
                <div>${date}</div>
                <div>
                ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/:articleName', function (req, res){
 articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
