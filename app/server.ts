
import * as express from "express";
import {WelcomeController} from "./controllers/welcomeController";
import {Calculater} from "./controllers/calculator";
const app:express.Application = express();

const port:number = process.env.PORT || 3000;

app.use('/hai',WelcomeController)
app.use('/calc',Calculater)

app.listen(port,()=>{
    console.log(`Listening at port : ${port}`)
})