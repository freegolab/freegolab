

import {Request, Response, Router} from "express";
const router:Router = Router();


router.get('/',(req:Request, res:Response) => {
    res.send("<h1>Welcome to Mean Stack programming at Expertzlab</h1>")
})

export const WelcomeController:Router = router


