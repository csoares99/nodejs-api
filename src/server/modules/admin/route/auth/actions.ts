import { Request, Response, NextFunction } from "express";
import * as loginService from '../../services/auth'

export async function login(req: Request, res: Response, next: NextFunction){
    try {
        const token = await loginService.login(req.body.email, req.body.password);
        res.setHeader('X-Token', token);
        res.json(token);
    } catch (err) {
        switch(err){
            case 'user-not-found':
            res.status(400).send();
            break
            default:
            next();
        }
    }
}