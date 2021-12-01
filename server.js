const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const ejs= require('ejs');
const multer= require('multer');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
        extended: true
      })); 
      

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.use(express.static(__dirname));

//fetch the page when the user is not logged in
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Home.html");
});

//fetch the dynamic page when the user is logged im
app.get("/user",function(req,res){
    let name = req.query.name;
    ejs.renderFile(__dirname+"/views/Home.ejs",{name: name},function(error,data){
        res.send(data);
    });
});

//fetch the page with the logged in user personal books.
app.get("/personalbooks",function(req,res){
    ejs.renderFile(__dirname+"/views/personalbooks.ejs",function(error,data){
        res.send(data);
    });
});
let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 8081");
 });