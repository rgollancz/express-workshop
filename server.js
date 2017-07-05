var express = require('express');
var app = express();
var formidable = require('express-formidable');

// serve assets from /public dir
app.use(express.static('public'));
app.use(formidable());

app.listen(3000, function() {

});


app.post('/create-post', function (req, res){
  res.send('i\'m here');
  console.log(req.fields);
  // console.log(req.body);
});



