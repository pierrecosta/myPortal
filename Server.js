var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

const { Gitlab } = require('gitlab');
const api = new Gitlab({
  url: 'http://137.74.197.63:8084',
  token: 'abcdefghij123456',
  rejectUnauthorized: false
})

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

// Or using Promise-Then notation
api.Projects.all().then(projects => {
  console.log(projects);
});
