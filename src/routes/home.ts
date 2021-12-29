import { Request, Response, Router } from "express";
const homeRouter = Router();

homeRouter.get("/home", (req: Request , res: Response)=> {
    console.log(req.headers);
    res.send("Amazingly done!");
});


export default homeRouter;