var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  multer = require('multer'),
  fs = require('fs'),
  upload = multer({dest:'./uploads/'});

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Json To MongoDB',
  });
});

var file;

function fileread(file) {
 if(file !== null){
   return true;
 }else{
   return false;
 }
}

router.post('/upload',upload.single('file'),function(req,res,next){
  if(fileread(req.file)){
    res.render('upload',{
      title:'Uploaded file',
      filename:'name'
    });
  }else{
    res.send("sorry, error in file uploading.");
  };
});
