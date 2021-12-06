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

let name = "";

// ************************MAIN PAGES***********************************//
//fetch the page when the user is not logged in
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Home.html");
});
//fetch the dynamic page when the user is logged in or when home is looked for
app.get("/Home",function(req,res){
    name = req.query.name;
    let title = "Bookly: Read With Us";
    ejs.renderFile(__dirname+"/views/Home.ejs",{name: name , title: title},function(error,data){
        res.send(data);
    });
});
app.get("/Genres",function(req,res){
    let title = "Genres";
    ejs.renderFile(__dirname+"/views/Genres.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});
app.get("/Recommendations",function(req,res){
    let title = "Recommendations";
    ejs.renderFile(__dirname+"/views/Recommendations.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});

//fetch the page with the logged in user personal books.
app.get("/personalbooks",function(req,res){
    let title = "Personal Books";
    ejs.renderFile(__dirname+"/views/personalbooks.ejs",{name: name, title: title},function(error,data){
        res.send(data);
    });
});
// ************************MAIN PAGES***********************************//



// ************************SUB PAGES***********************************//
app.get("/Fantasy",function(req,res){
    let title = "Fantasy";
    ejs.renderFile(__dirname+"/views/Fantasy.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});

app.get("/Graphic",function(req,res){
    let title = "Graphic Novels";
    ejs.renderFile(__dirname+"/views/Graphic.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});
app.get("/Romance",function(req,res){
    let title = "Romance";
    ejs.renderFile(__dirname+"/views/Romance.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});
app.get("/Scifi",function(req,res){
    let title = "SCi-fi";
    ejs.renderFile(__dirname+"/views/Scifi.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});
app.get("/Thriller",function(req,res){
    let title = "Thriller";
    ejs.renderFile(__dirname+"/views/Thriller.ejs",{name: name,title: title},function(error,data){
        res.send(data);
    });
});

// ************************SUB PAGES***********************************//






let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 8081");
 });