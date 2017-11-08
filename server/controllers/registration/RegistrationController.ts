
import {Request, Response, Router} from "express";
import {json, ParsedAsJson, ParsedAsUrlencoded, urlencoded} from "body-parser";
import {Registration} from './Registration'
/**
 * Created by gireeshbabu on 20/10/17.
 */

  const router:Router = Router()

      router.post('/',json(),(req:Request & ParsedAsJson, res:Response)=>{

          var registration = new Registration(<Registration> req.body)
          console.log("FirstName:"+registration.firstName)
          console.log("LastName:" + registration.lastName)
          console.log("Age:"+registration.age)


          res.send("Hello "+registration.firstName)

      })

    router.post('/form',urlencoded(),(req:Request & ParsedAsUrlencoded, res:Response)=>{

        var registration = new Registration(<Registration> req.body)
        console.log("FirstName:"+registration.firstName)
        console.log("LastName:" + registration.lastName)
        console.log("Age:"+registration.age)

        res.send("Hello in Form "+registration.firstName)

    })

  export const RegistrationController:Router = router