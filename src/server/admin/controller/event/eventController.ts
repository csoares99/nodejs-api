import {Request, Response, NextFunction} from "express";

export async function getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
        res.send({
            message: "primeira rota"
        });
    } catch (ex) {
        throw ex;  
    }
}