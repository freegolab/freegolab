import * as multer from "multer";
import {Request, Response, Router} from "express";
import * as csvParse from 'csv-parse'
import * as fs from "fs";
import {csvFilter} from "../../utils/utils";

/**
 * Created by gireeshbabu on 04/11/17.
 */

const upload = multer({dest:'uploads',fileFilter:csvFilter})

const router:Router = Router();

var csvParser:csvParse.Parser = csvParse({delimiter:','},function (err,data) {
    console.log(data)
    //write to db
})


router.post('/',upload.single('file'),(req:Request, res:Response)=>{

    var fileName:string = req.file.originalname;
    try {
        console.log("FN:" + fileName)
        fs.createReadStream('uploads/'+req.file.filename).pipe(csvParser)
    } catch (err){
        console.error(err)
    }
    res.send("You have upload the file:"+fileName)
})

router.post('/multiple',upload.array('csvFile',3),(req:Request, res:Response)=>{
    res.send(req.files)

})

router.get('/cookie',(req:Request, res:Response)=>{
    console.log(req.cookies)
    res.cookie('alpha','one',{ maxAge: 600*10, httpOnly: true })
    res.cookie('beta','two',{ maxAge: 600*10, httpOnly: true })
    res.send("Cookie: a "+req.cookies.a+"b ="+ req.cookies.b);


})

export const UploadController:Router =  router