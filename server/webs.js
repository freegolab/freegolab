/**
 * Created by gireeshbabu on 04/11/17.
 */

var express = require('express');

var app = express();

app.get('/',function (req,res) {
    res.send("Hello world");
})

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web app listening at:'+host+":"+port);
})