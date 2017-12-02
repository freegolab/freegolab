import {json, ParsedAsJson} from "body-parser";
import {Router} from "express";
import {Request, Response} from "express-serve-static-core";
import mongoose = require("mongoose");
import {Schema} from "mongoose";


/**
 * Created by gireeshbabu on 02/12/17.
 */

const router:Router = Router()

router.get('/',json(),(req:Request & ParsedAsJson, res:Response)=>{

    var ProductSchema = new Schema({
        ProductID:{type: String},
        ProductName:{type: String}
    });

    mongoose.connect('mongodb://localhost:27017/cartdb');

    var ProductModel = mongoose.model('Products',ProductSchema);

    mongoose.connection.on('open', function() {
        console.log('Mongoose connected.');
    });

    ProductModel.find({},function (err, products) {
        res.end(JSON.stringify(products));
    });

});

export const ProductController:Router = router