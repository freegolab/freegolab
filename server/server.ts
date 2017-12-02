
import * as express from "express"
import {WelcomeController} from "./controllers/welcomeController"
import {Calculater} from "./controllers/calculator"
import {RegistrationController} from "./controllers/registration/RegistrationController"
import * as path from "path"
//import * as cors from "cors"
import {UploadController} from "./controllers/upload/UploadController";
//import * as cookieParser from "cookie-parser"
import {UserController} from "./controllers/user/UserController";
import {ProductController} from "./controllers/product/ProductController";


const app:express.Application = express()
const port:number = process.env.PORT || 3000


//app.use(cookieParser())
app.use('/',express.static(path.join(__dirname, '../../quickstart/src')))

app.use('/rest/hai',WelcomeController)
app.use('/rest/calc',Calculater)
app.use('/rest/registration',RegistrationController)
app.use('/rest/upload', UploadController)
app.use('/rest/user', UserController)
app.use('/rest/products', ProductController)

app.listen(port,()=>{
    console.log(`Listening at port : ${port}`)
})
