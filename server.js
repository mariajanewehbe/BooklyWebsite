let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let ejs= require('ejs');
const multer= require('multer');


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

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Home.html");
});


let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 8081");
 });