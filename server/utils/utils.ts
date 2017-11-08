/**
 * Created by gireeshbabu on 04/11/17.
 */

import {Request} from 'express'
import Multer = require("multer");

const csvFilter = function(req: Request, file:any, cb:Function){

     if(!file.originalname.match(/\.(csv)$/)){
            return cb(new Error('Only csv.files are allowed!'),false);
     }
     cb(null, true);
}

export {csvFilter}