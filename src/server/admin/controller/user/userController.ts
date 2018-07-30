
import { Request, Response, NextFunction } from "express";
import * as userService from '../../services/user';

export async function save(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.save(req.body);
        res.status(200).send(user);
    } catch (ex) {
        next();
    }
}