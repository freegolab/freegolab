"use strict";
/**
 * Created by gireeshbabu on 04/11/17.
 */
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    var ua = req.header("User-Agent");
    console.log("Req:" + req);
    res.send("Hello world from Typescript");
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web app listening at:' + host + ":" + port);
});
