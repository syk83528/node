/**
 * Created by syk on 17/6/20.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var app = express();

app.use('/',(req,res)=>{
    console.log(req.query);
    res.send();
});

app.listen(3000);
