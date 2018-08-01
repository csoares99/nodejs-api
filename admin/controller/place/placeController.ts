import { Response, Request, NextFunction } from "express";
import { getAllPlaces } from "../../services/place";

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

export async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const places = await getAllPlaces();

        res.status(200)
            .send(places);
    } catch (err) {
        next(err);
    }
}