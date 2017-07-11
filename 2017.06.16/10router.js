/**
 * Created by syk on 17/6/19.
 */
var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    express = require('express');

var app = express();

app.get('/travel/:username/:id',(req,res)=>{
    var username = req.params["username"];
    var id = req.params["id"];
    console.log(`username:${username},id:${id}`);
    res.write(`username:${username},id:${id}`);
    res.end();
});

app.listen(3000);