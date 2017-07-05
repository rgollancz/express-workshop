var fs = require('fs');
var express = require('express');
var app = express();
var formidable = require('express-formidable');

// serve assets from /public dir
app.use(express.static('public'));
app.use(formidable());

app.listen(3000, function() {});

app.get('/get-posts', function (req, res) {
  fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    res.send(file);
  });
});

app.post('/create-post', function (req, res){
    var newPost = req.fields;

    fs.readFile(__dirname + '/data/posts.json', function (error, oldFile) {
        var posts = JSON.parse(oldFile);
        var timeStamp = Date.now();
        timeStamp = parseInt(timeStamp);
        posts[timeStamp] = newPost.blogpost;
        posts = JSON.stringify(posts);

        fs.writeFile(__dirname + '/data/posts.json', posts);
    });
});
