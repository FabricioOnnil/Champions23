const express = require("express");
const app = express();

app.get("/", function(req, res){
res.sendFile(__dirname + "/html/index.html");
});

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/html/home.html");
});

app.get("/individual", function(req, res){
    res.sendFile(__dirname + "/html/individual.html");
});

app.get("/info", function(req, res){
    res.sendFile(__dirname + "/html/info");
});

app.get("/login", function(req, res){
    res.sendFile(__dirname + "/html/login.html");
});

app.get("/oitavas", function(req, res){
    res.sendFile(__dirname + "/html/Oitavas.html");
});

app.get("/quartas", (req, res)=>{
    res.sendFile(__dirname + "/html/Quartas.html");
});

app.get("/semi", (req, res)=>{
    res.sendFile(__dirname + "/html/semi.html");
});

app.get("/final", (req, res)=>{
   res.sendFile(__dirname + "/html/Final.html"); 
});

app.get("/resultadoGeral", (req, res) =>{
    res.sendFile(__dirname + "/html/resultadoGeral.html");
});





app.listen(8081, function(){
    console.log("Servidor aberto na url http://localhost:8081");
});