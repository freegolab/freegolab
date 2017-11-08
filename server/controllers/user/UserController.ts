import {Router, Request, Response} from "express";
import * as fs from "fs";
import {json, ParsedAsJson} from "body-parser";
import {User} from "./User";
/**
 * Created by gireeshbabu on 08/11/17.
 */


const router:Router = Router();

router.get('/',(req:Request, res:Response) => {
    fs.readFile(__dirname+'/../../../server/models/user.json','utf-8',
        function (err,data) {
            console.log(data)
            res.end(data)
        })
    console.log(__dirname)
    //res.send(__dirname)
})

router.get('/:id',(req:Request, res:Response) => {

    var id = req.params.id;
    console.log('id='+id)
    fs.readFile(__dirname+'/../../../server/models/user.json','utf-8',
        function (err,data) {
            console.log(data)
            var jdata = JSON.parse(data)
            res.end(JSON.stringify(jdata['user'+id]))
        })
    console.log(__dirname)
    //res.send(__dirname)
})

router.post('/',json(),(req:Request & ParsedAsJson, res:Response)=>{

    var user:User = new User(<User>req.body);
    console.log("posted data:"+ JSON.stringify(user))
    fs.readFile(__dirname+'/../../../server/models/user.json','utf-8',
        function (err,data) {
            console.log(data)
            var jdata = JSON.parse(data)
            console.log("Jdata:"+jdata)
            jdata.user4 = user;
            res.end(JSON.stringify( jdata))
        })

    console.log("Success, added user:"+user)
})

router.delete('/',json(),(req:Request & ParsedAsJson, res:Response) => {
    var user:User = new User(<User>req.body);

    console.log("posted data:"+ JSON.stringify(user))
    fs.readFile(__dirname+'/../../../server/models/user.json','utf-8',
        function (err,data) {
            console.log(data)
            var jdata = JSON.parse(data)
            console.log("Jdata:"+jdata)
            //jdata.user4 = user;
            delete jdata['user'+user.id]
            res.end(JSON.stringify( jdata))
        })

})

export const UserController:Router =  router