/**
 * Created by gireeshbabu on 04/11/17.
 */

import * as express from "express"
const app:express.Application = express()
import {Request, Response, Router} from "express";

app.get('/',function (req:Request,res:Response) {
    var ua = req.header("User-Agent")

    res.send("Hello world from Typescript");
})

var server = app.listen(8081,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web app listening at:'+host+":"+port);
})