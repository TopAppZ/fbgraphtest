/*var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: 'AKIAJ4EGQBLLG6IWYDSQ', secretAccessKey: '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' });

// Read in the file, convert it to base64, store to S3
fs.readFile('del.txt', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'banners-adxs',
    Key: 'del2.txt',
    Body: base64data,
    ACL: 'perfectbrains'
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});*/


var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/uploads', express.static('uploads/'))
app.get('/', function(req, res) {
    res.render("index");
});

app.post('/upload', upload.single('photo'), function (req, res, next){
  //res.render("upload", {file:req.file.filename});
  res.redirect('/photo/' + req.file.filename);
});
app.get('/photo/:file', function(req,res){
  res.render("photo",{file:req.params.file});
})


app.listen(8080);