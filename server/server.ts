
import * as express from "express"
import {WelcomeController} from "./controllers/welcomeController"
import {Calculater} from "./controllers/calculator"
import {RegistrationController} from "./controllers/registration/RegistrationController"
import * as path from "path"
import {UploadController} from "./controllers/upload/UploadController";
import * as cookieParser from "cookie-parser"
import {UserController} from "./controllers/user/UserController";


const app:express.Application = express()
const port:number = process.env.PORT || 3000

app.use(cookieParser())
app.use('/static',express.static(path.join(__dirname, '../client')))

app.use('/hai',WelcomeController)
app.use('/calc',Calculater)
app.use('/registration',RegistrationController)
app.use('/upload', UploadController)
app.use('/user', UserController)

app.listen(port,()=>{
    console.log(`Listening at port : ${port}`)
})