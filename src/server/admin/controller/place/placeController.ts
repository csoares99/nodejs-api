import {Response, Request, NextFunction} from "express";

export async function save(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send({
        message: "cadastrado com sucesso"
    });
}

export async function edit(req: Request, resp: Response, next: NextFunction) {
    resp.status(200).send({
        message: "editado com sucesso"
    });
}